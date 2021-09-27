const axios = require("axios");

axios.get("localhost:3001/api/clients")
    .then((err, data) => {
        console.log(data);
        if (err) {console.log(err)};
    })