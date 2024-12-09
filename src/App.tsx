import React from "react";
import { Link } from "react-router-dom";
import CardList from "./components/CardList";

const App: React.FC = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h1>List of cards</h1>

      <CardList />
      <div>
        <Link to="/create-product">
          <button>Create a new product</button>
        </Link>
      </div>
    </div>
  );
};

export default App;
