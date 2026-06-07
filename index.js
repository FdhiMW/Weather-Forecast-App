const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send(`
  <!DOCTYPE html>
  <html>
  <head>
    <title>Weather Forecast</title>
    <style>
      *{
        margin:0;
        padding:0;
        box-sizing:border-box;
        font-family:Arial,sans-serif;
      }

      body{
        background:linear-gradient(135deg,#4facfe,#00f2fe);
        min-height:100vh;
        display:flex;
        justify-content:center;
        align-items:center;
      }

      .container{
        background:white;
        padding:30px;
        border-radius:20px;
        width:900px;
        text-align:center;
        box-shadow:0 10px 30px rgba(0,0,0,.2);
      }

      h1{
        margin-bottom:10px;
      }

      .forecast{
        display:flex;
        justify-content:space-between;
        margin-top:30px;
      }

      .card{
        width:150px;
        padding:20px;
        border-radius:15px;
        background:#f5f5f5;
        transition:.3s;
      }

      .card:hover{
        transform:translateY(-5px);
      }

      .icon{
        font-size:40px;
        margin:10px 0;
      }

      .temp{
        font-size:22px;
        font-weight:bold;
      }
    </style>
  </head>
  <body>

    <div class="container">
      <h1>🌤 Weather Forecast</h1>
      <h3>Banjar, Indonesia</h3>

      <div class="forecast">

        <div class="card">
          <h3>Monday</h3>
          <div class="icon">☀️</div>
          <div class="temp">31°C</div>
        </div>

        <div class="card">
          <h3>Tuesday</h3>
          <div class="icon">⛅</div>
          <div class="temp">29°C</div>
        </div>

        <div class="card">
          <h3>Wednesday</h3>
          <div class="icon">🌧️</div>
          <div class="temp">25°C</div>
        </div>

        <div class="card">
          <h3>Thursday</h3>
          <div class="icon">🌦️</div>
          <div class="temp">27°C</div>
        </div>

        <div class="card">
          <h3>Friday</h3>
          <div class="icon">☀️</div>
          <div class="temp">32°C</div>
        </div>

      </div>

      <p style="margin-top:25px;">
        Static weather forecast application deployed using Vercel.
      </p>

    </div>

  </body>
  </html>
  `);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT);
