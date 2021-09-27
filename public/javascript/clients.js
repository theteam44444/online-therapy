const axios = require("axios");

axios.get("/api/clients")
    .then((err, data) => {
        console.log(data);
        if (err) {console.log(err)};
    });