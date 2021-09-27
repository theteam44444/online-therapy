const { application } = require('express');
const { appointments } = require('./seeds/appointment-seeds');

app.get("/api/appointment-seeds", (req, res) => {
    let results = appointmentData
    if (req.query) {
        results = filterByQuery(req.query, results)
    }
    res.json(results);
});