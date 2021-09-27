const axios = require("axios");

axios.get("/api/doctors")
    .then((err, data) => {
        console.log(data);
        if (err) {console.log(err)};
    });