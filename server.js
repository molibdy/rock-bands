const express = require('express');
const app = express();

app.use(express.static(__dirname + '/dist/rockBands'));
app.get('/*',function(req,res){
    res.sendFile("index.html", {root:__dirname + '/dist/rockBands/'});
    
    // res.sendFile(path.join(__dirname + '/dist/index.html'));
    // res.sendFile(path.join(__dirname + '/dist/rockBands/index.html'));
});

app.listen(process.env.PORT  || 8080);