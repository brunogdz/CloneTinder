import express from 'express';
import mongoose from 'mongoose';
import Cards from './dbCards.js';
import Cors from 'cors'; 

// Configuracao do App
const app = express();
const port = process.env.PORT || 8001
const connection_url = `mongodb+srv://admin:SSxTLQBLwWM6QquR@cluster0.5ch8d.mongodb.net/tinderdb?retryWrites=true&w=majority`

// Caminho
app.use(express.json());
app.use(Cors());

// Conf. Banco
mongoose.connect(connection_url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
})

// Endpoint Api
app.get('/', (req, res) => res.status(200).send('Hello World!'));

app.post('/tinder/cards', (req,res) => {
    const dbCard = req.body;
    Cards.create(dbCard, (err, data) => {
        if(err){
            res.status(500).send(err);
        }else {
            res.status(201).send(data);
        }
    });
});

app.get('/tinder/cards', (req, res) => {
    Cards.find(dbCard, (err, data) => {
        if(err){
            res.status(500).send(err);
        }else {
            res.status(200).send(data);
        }
    });
});

// Comunicacao do Banco de Dados
app.listen(port, () => console.log(`Comunicando com o localhost: ${port}`));