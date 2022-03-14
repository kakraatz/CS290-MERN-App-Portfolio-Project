import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

export const EditExercisePage = ({exerciseToEdit, setExerciseToEdit}) => {

    const [name, setName] = useState(`${exerciseToEdit.name}`);
    const [reps, setReps] = useState(`${exerciseToEdit.reps}`);
    const [weight, setWeight] = useState(`${exerciseToEdit.weight}`);
    const [unit, setUnit] = useState(`${exerciseToEdit.unit}`);
    const [date, setDate] = useState(`${exerciseToEdit.date}`);

    const history = useHistory();

    const editExercise = async () => {
        const editedExercise = {name, reps, weight, unit, date};
        const response = await fetch(`/exercises/${exerciseToEdit._id}`, {
            method: 'PUT',
            body: JSON.stringify(editedExercise),
            headers: {
                'Content-Type': 'application/json',
            }
        });
        if(response.status === 200){
            alert('Exercise edit successfully!');
        } else{
            alert(`Failed to edit exercise, status code = ${response.status}`);
        }
        history.push("/");
    };

    return (
        <div>
            <h2>Edit Exercise</h2>
            <table id="edit-exercise">
            <caption>Edit your stats</caption>
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
                        value={name}
                        onChange={e => setName(e.target.value)} />
                </td>
                <td>
                    <input
                        type="number"
                        min="0"
                        value={reps}
                        onChange={e => setReps(e.target.value)} />
                </td>
                <td>
                    <input
                        type="number"
                        min="0"
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
                onClick={editExercise}
            >Edit</button>
            </tr>
            </table>
        </div>
    );
}

export default EditExercisePage;