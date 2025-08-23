import React from "react";
import { Link } from "react-router";

const GetStartedButton = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '150px' }}>
      <Link to="/home">
        <button
          style={{
            backgroundColor: '#0A5C4B',
            color: 'white',
            padding: '10px 20px',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            fontSize: '16px',
            transition: 'background-color 0.3s ease',
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = '#08715D')}
          onMouseOut={(e) => (e.target.style.backgroundColor = '#0A5C4B')}
        >
          Get Started
        </button>
      </Link>
    </div>
  );
};

export default GetStartedButton;

