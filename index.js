require('dotenv').config();

const express = require('express');
const http = require('http');

const userRoutes = require('./src/api/routes/userRoutes');
const foodRoutes = require('./src/api/routes/foodRoutes');
const commentRoutes = require('./src/api/routes/commentRoutes');

require('./src/config/db');

const app = express();
const server = http.createServer(app);

app.use(express.json());

app.use('/api/user', userRoutes);
app.use('/api/food', foodRoutes);
app.use('/api/comment', commentRoutes);

const port = process.env.PORT || 3000;

server.listen(port, () => {
	console.log(`Server running on port ${port}`);
})