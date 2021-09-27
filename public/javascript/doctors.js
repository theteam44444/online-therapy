const { application } = require('express');
const { doctors } = require('./seeds/doctor-seeds');

app.get("/api/doctor-seeds", (req, res) => {
    let results = doctorData
    if (req.query) {
        results = filterByQuery(req.query, results)
    }
    res.json(results);
});