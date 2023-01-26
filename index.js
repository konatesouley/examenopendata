
 // importer le module
const express = require('express');
const app = express();
const fetch =require('node-fetch');
const swaggerUi = require('swagger-ui-express');
const PORT = process.env.PORT || 3000;
 
let saisans = require('./saisans.json')
 
 
 app.get('/', (req,res) => {
     res.json({test : "Bienvenue a l'application des Logements Sociaux"});
 })

 //le code permettant de recuperrer les données via un root http
 app.get('/saisans', function(request, response){
  
  response.send(saisans);
})

const bodyParser = require('body-parser');



// Route to add saisans
app.post('/addSaisans', (req, res) => {
  const saisans = req.body;
  console.log(saisans);
  res.json({
    status: 'success',
    message: 'Saisans added successfully'
  });
});


 
 
 
 app.listen(PORT,()=>{
     console.log('serveur en marche ');
 })
 
 
 