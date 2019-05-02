const express = require('express')
const path = require('path')
const router = express.Router();
const PORT = process.env.PORT || 5000


var app = express();

app.use(express.static(__dirname+'/public'));

router.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/index.html'));
  //__dirname : It will resolve to your project folder.
})

app.use('/', router);
app.listen(PORT,() => console.log(`Listening on ${ PORT }`));
 

