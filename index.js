require('dotenv').config();

const express = require('express');
const http = require('http');

const userRoutes = require('./src/api/routes/userRoutes');

require('./src/config/db');

const app = express();
const server = http.createServer(app);

app.use(express.json());

app.use('/api/user', userRoutes);

const port = process.env.PORT || 3000;

server.listen(port, () => {
	console.log(`Server running on port ${port}`);
})