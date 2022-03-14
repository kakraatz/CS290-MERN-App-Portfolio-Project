import React, { useState } from 'react';
import { useHistory } from "react-router-dom";

export const CreateExercisePage = () => {

    const [name, setName] = useState('');
    const [reps, setReps] = useState('');
    const [weight, setWeight] = useState('');
    const [unit, setUnit] = useState('lbs');
    const [date, setDate] = useState('');

    const history = useHistory();

    const createExercise = async () => {
        const newExercise = {name, reps, weight, unit, date};
        const response = await fetch('/exercises', {
            method: 'POST',
            body: JSON.stringify(newExercise),
            headers: {
                'Content-Type': 'application/json',
            }
        });
        if(response.status === 201){
            alert('Exercise created successfully!');
        } else{
            alert(`Failed to create exercise, status code = ${response.status}`);
        }
        history.push("/");
    };

    return (
        <div>
            <h2>Create Exercise</h2>
            <table id="create-exercises">
            <caption>Enter your stats</caption>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Reps</th>
                    <th>Weight</th>
                    <th>Unit</th>
                    <th>Date</th>
                </tr>
            </thead>
            <tr>
                <td>
                    <input
                        type="text"
                        placeholder="Enter exercise here"
                        value={name}
                        onChange={e => setName(e.target.value)} />
                </td>
                <td>
                    <input
                        type="number"
                        min="0"
                        value={reps}
                        placeholder="Reps completed"
                        onChange={e => setReps(e.target.value)} />
                </td>
                <td>
                    <input
                        type="number"
                        min="0"
                        placeholder="Weight used"
                        value={weight}
                        onChange={e => setWeight(e.target.value)} />
                </td>
                <td>
                    <select value={unit} onChange={e => setUnit(e.target.value)}>
                        <option>lbs</option>
                        <option>kgs</option>
                    </select>
                </td>
                <td>
                    <input
                        type="date"
                        value={date}
                        onChange={e => setDate(e.target.value)}
                        required />
                </td>
            <button
                onClick={createExercise}
            >Submit</button>
            </tr>
            </table>
        </div>
    );
}

export default CreateExercisePage;