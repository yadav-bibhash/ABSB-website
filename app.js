const express = require('express');
const bodyParser = require('body-parser');
const app = express()
const port = 3000
var path = require('path');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/hello', (req, res)=>{
    var options = {
        root: path.join(__dirname, './public')
    };
    var fileName= 'index.html'
    res.sendFile(fileName, options, function(err){
        
            if (err) {
                next(err);
            } else {
                console.log('Sent:', fileName);
            }
    });
})

let requestObj;
app.post('/world', (req, res)=>{
    requestObj= req.body;
    delete requestObj.submit;
    res.json(requestObj);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});