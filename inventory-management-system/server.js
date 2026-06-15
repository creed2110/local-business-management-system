import express from 'express';
import path from 'path';
import cors from 'cors';
import fs from 'fs';

const app = express();
app.use(cors());
app.use(express.static('views'));
app.use(express.static(path.join(__dirname, 'views', 'login.html')))

app.get('/login', (req,res) =>{
    res.sendFile(path.join(_dirname, 'views', 'Login.html'));
});

const PORT = 3000;
app.listen(PORT, () =>{
    console.log(`running on http://localhost:${PORT}/`);
});