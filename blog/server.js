import express, { json } from 'express'; 
import { router } from './api/router.js'; 
const PORT = 3000; 
const HOST = 'localhost' ; 
const app = express(); 
 

//Content-type: application/json 
app.use(json()); 
 
//routes 
app.use('/', router); 
 
app.listen(PORT, HOST,  (req, res) => { 
    console.log(`Server ${HOST} nasłuchuje na Porcie: ${PORT}`) 
})