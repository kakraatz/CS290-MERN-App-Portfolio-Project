import React from 'react';

import { Link } from 'react-router-dom';

export default function Navigation() {
    return (
        <nav>
            <Link className="App-link" to="/">Home Page</Link>
            <Link className="App-link" to="/add-exercise">Create an exercise</Link>
        </nav>
    )
}