const axios = require("axios");

axios.get("/api/appointments")
    .then((err, data) => {
        console.log(data);
        if (err) {console.log(err)};
    });