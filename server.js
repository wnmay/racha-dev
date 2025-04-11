import express from 'express'
import auth from './routes/auth'

const app = express();

app.use('/auth', auth);

const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Server has started on port: ${PORT}`)
});