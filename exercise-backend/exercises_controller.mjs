import * as exercises from './exercises_model.mjs';
import express from 'express';
const app = express();

const PORT = 3000;

app.use(express.json());

/**
 * Create a new exercise submission with the exercise name, reps performed, weight used, unit type, and date
 */
app.post('/exercises', (req, res) => {
    exercises.createExercise(req.body.name, req.body.reps, req.body.weight, req.body.unit, req.body.date)
        .then(exercise => {
            res.status(201).json(exercise);
        })
        .catch(error => {
            res.status(500).json({ Error: 'Request failed' });
        });
});

/**
 * Retrieve all exercises in the collection.
 */
app.get('/exercises', (req, res) => {
    exercises.findExercises(req.query)
        .then(exercises => {
            res.send(exercises);
        })
        .catch(error => {
            res.status(500).json({ Error: 'Request failed' });
        });

});

/**
 * Update the exercise submission
 */
 app.put('/exercises/:_id', (req, res) => {
    exercises.replaceExercise(req.params._id, req.body.name, req.body.reps, req.body.weight, req.body.unit, req.body.date)
        .then(numUpdated => {
            if (numUpdated === 1) {
                res.json({ _id: req.params._id, name: req.body.name, reps: req.body.reps, weight: req.body.weight, unit: req.body.unit, date: req.body.date })
            } else {
                res.status(500).json({ Error: 'Resource not found' });
            }
        })
        .catch(error => {
            res.status(500).json({ Error: 'Request failed' });
        });
});

/**
 * Delete the exercise with matching parameter id
 */
app.delete('/exercises/:_id', (req, res) => {
    exercises.deleteById(req.params._id)
    .then(deletedCount => {
        if (deletedCount === 1) {
            res.status(204).send();
        } else {
            res.status(500).json({ Error: 'Resource not found' });
        }
    })
    .catch(error => {
        res.status(500).json({ Error: 'Request failed' });
    });
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});