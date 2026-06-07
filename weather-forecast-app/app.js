const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send(`
    <!DOCTYPE html>
    <html>
    <head>
        <title>Weather Forecast</title>
        <style>
            body {
                font-family: Arial, sans-serif;
                background: #f0f8ff;
                text-align: center;
                padding: 50px;
            }

            .container {
                max-width: 700px;
                margin: auto;
            }

            .forecast {
                display: flex;
                justify-content: space-between;
                margin-top: 20px;
            }

            .card {
                background: white;
                padding: 20px;
                border-radius: 10px;
                width: 120px;
                box-shadow: 0 2px 5px rgba(0,0,0,0.2);
            }

            h1 {
                color: #0077b6;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <h1>☀️ Weather Forecast</h1>
            <h2>Bandung, Indonesia</h2>

            <div class="forecast">
                <div class="card">
                    <h3>Mon</h3>
                    <p>☀️</p>
                    <p>30°C</p>
                </div>

                <div class="card">
                    <h3>Tue</h3>
                    <p>⛅</p>
                    <p>28°C</p>
                </div>

                <div class="card">
                    <h3>Wed</h3>
                    <p>🌧️</p>
                    <p>25°C</p>
                </div>

                <div class="card">
                    <h3>Thu</h3>
                    <p>🌦️</p>
                    <p>27°C</p>
                </div>

                <div class="card">
                    <h3>Fri</h3>
                    <p>☀️</p>
                    <p>31°C</p>
                </div>
            </div>

            <p style="margin-top:30px;">
                Data cuaca pada aplikasi ini bersifat statis untuk demonstrasi deployment PaaS.
            </p>
        </div>
    </body>
    </html>
    `);
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});