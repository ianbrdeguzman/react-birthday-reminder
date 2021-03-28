import './App.css';
import React, { useState } from 'react';
import { data } from './data.js';
import List from './components/List.jsx';

function App() {
    const [people, setPeople] = useState(data);
    const handleDelete = (id) => {
        const newPeople = people.filter((person) => {
            return person.id !== id;
        });
        setPeople(newPeople);
    };
    return (
        <main>
            <section className='container'>
                <h3>{people.length} birthday today</h3>
                <List people={people} onDelete={handleDelete} />
                <button onClick={() => setPeople([])}>Clear All</button>
            </section>
        </main>
    );
}

export default App;
