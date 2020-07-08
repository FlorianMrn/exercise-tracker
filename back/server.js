// Import
const express = require('express');
const cors = require('cors');
require('dotenv').config();

// Server
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.listen(port, () => {
    console.log(`Server running on ${port}`);
});
