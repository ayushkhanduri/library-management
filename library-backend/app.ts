import * as express from 'express';

const PORT: number = +(process.env.PORT || 3000);

const app = express();

app.get('/health', (req, res) => {
    res.json( {
        health: 'true'
    });
});

app.listen( PORT, () => {
    console.log(`Listening to port ${PORT}` );
});

