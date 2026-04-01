const express = require("express");
const path = require("path");
const PORT = 3000; 
const HOST = 'localhost'; 
const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/weather", async (req, res) => {
    try {
        const url = new URL("https://api.open-meteo.com/v1/forecast");
        url.searchParams.set("latitude", "54.35");
        url.searchParams.set("longitude", "18.65");
        url.searchParams.set("current_weather", "true");
        const response = await fetch(url);
        const data = await response.json();

        res.render("weather", {
            weather: data.current_weather,
            latitude: data.latitude,
            longitude: data.longitude
        });
    } catch (error) {
        res.render("weather", {
            weather: null,
            error: "Nie udało się pobrać danych pogodowych."
        });
    }
});


app.listen(PORT, HOST,  (req, res) => { 
    console.log(`Server ${HOST} nasłuchuje na Porcie: ${PORT}`) 
})