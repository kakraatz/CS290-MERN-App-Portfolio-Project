import React from 'react';
import { MdOutlineRemoveCircle, MdEditNote } from 'react-icons/md';

function Exercise({ exercise, onDelete, onEdit }) {
    return (
        <tr>
            <td>{exercise.name}</td>
            <td>{exercise.reps}</td>
            <td>{exercise.weight}</td>
            <td>{exercise.unit}</td>
            <td>{exercise.date.substring(0,10)}</td>
            <td><MdEditNote onClick={() => onEdit(exercise)}/></td>
            <td><MdOutlineRemoveCircle onClick={() => onDelete(exercise._id)}/></td>
        </tr>
    );
}

export default Exercise;