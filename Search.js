// components/Search.js
import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import "./Search.css";

function Search({ user, onLogout }) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(false);

  // Memoize fetchHistory to prevent unnecessary re-renders
  const fetchHistory = useCallback(async () => {
    try {
      const res = await axios.get("http://localhost:5000/history", {
        params: { email: user.email }
      });
      setHistory(res.data);
    } catch (err) {
      console.error("Error fetching history:", err);
    }
  }, [user.email]); // Depend on user.email to fetch history when it changes

  // Handle search submission
  const handleSearch = async (e) => {
    e.preventDefault();
    if (!query.trim()) return; // Prevent search with empty query

    setLoading(true);
    try {
      const res = await axios.post("http://localhost:5000/search", {
        query,
        username: user.username,
        email: user.email
      });
      setResults(res.data.data); // Set the search results
      setQuery(""); // Clear the input field
      fetchHistory(); // Refresh the history
    } catch (err) {
      console.error("Search failed:", err);
    }
    setLoading(false);
  };

  // Fetch history when the component mounts or when user.email changes
  useEffect(() => {
    fetchHistory();
  }, [fetchHistory]); // Add fetchHistory to the dependencies

  return (
    <div className="search-container">
      <div className="search-header">
        <h1>🔍 Google Custom Search</h1>
        <button className="logout-button" onClick={onLogout}>Logout</button>
      </div>

      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Enter your search query..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit" disabled={loading}>
          {loading ? "Searching..." : "Search"}
        </button>
      </form>

      <div className="results-section">
        <h2>Search Results</h2>
        {results.length > 0 ? (
          <ul>
            {results.map((item, index) => (
              <li key={index}>
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  <h3>{item.title}</h3>
                  <p>{item.snippet}</p>
                </a>
              </li>
            ))}
          </ul>
        ) : (
          <p>No results yet.</p>
        )}
      </div>

      <div className="history-section">
        <h2>Recent Searches</h2>
        <ul>
          {history.length > 0 ? (
            history.map((item, index) => (
              <li key={index}>
                {item.query}{" "}
                <span className="timestamp">
                  ({new Date(item.timestamp).toLocaleString()})
                </span>
              </li>
            ))
          ) : (
            <p>No recent searches.</p>
          )}
        </ul>
      </div>
    </div>
  );
}

export default Search;
