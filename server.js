/* General Reset */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background: linear-gradient(to right, #eef2f3, #8e9eab);
  color: #333;
  min-height: 100vh;
  padding: 20px;
}

/* App Container */
.app-container {
  max-width: 900px;
  margin: auto;
  background: #fff;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
}

/* Header */
h1 {
  text-align: center;
  margin-bottom: 25px;
  font-size: 2rem;
  color: #2c3e50;
}

/* Search Form */
.search-form {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-bottom: 30px;
}

.search-input {
  flex: 1;
  padding: 10px 15px;
  border: 2px solid #ccc;
  border-radius: 8px;
  font-size: 16px;
  transition: border-color 0.3s;
}

.search-input:focus {
  border-color: #3498db;
  outline: none;
}

.search-button {
  background-color: #3498db;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.search-button:hover {
  background-color: #2980b9;
}

/* Sections */
.results-section,
.history-section {
  margin-top: 40px;
}

h2 {
  margin-bottom: 15px;
  color: #34495e;
}

/* Results & History Lists */
.results-list,
.history-list {
  list-style: none;
  padding-left: 0;
}

.result-item,
.history-item {
  background: #f9f9f9;
  margin-bottom: 12px;
  padding: 15px;
  border-radius: 10px;
  transition: transform 0.2s;
}

.result-item:hover,
.history-item:hover {
  transform: scale(1.01);
  background-color: #f0f8ff;
}

/* Result Links */
.result-item a {
  text-decoration: none;
  color: inherit;
}

.result-item h3 {
  margin-bottom: 5px;
  color: #2c3e50;
}

.result-item p {
  font-size: 14px;
  color: #555;
}

/* Timestamp */
.timestamp {
  font-size: 12px;
  color: #888;
}

/* Responsive Design */
@media (max-width: 600px) {
  .search-form {
    flex-direction: column;
    align-items: stretch;
  }

  .search-button {
    width: 100%;
  }
}
