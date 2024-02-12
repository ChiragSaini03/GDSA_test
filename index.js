const express = require("express");
const app = express();
const port = 8000;
app.use(express.json())

let authid = "khushal";
let authpass = "kiyomaru";
app.get("/", (req, res) => {
    res.send("Get Req on /");
});

app.post("/getdata", (req,res) => {
    let id = req.body.id ? req.body.id : "NIL";
    let pass = req.body.pass ? req.body.pass : "NIL";
    console.log(id);
    console.log(pass);
    if (id==authid && pass==authpass) {
        let key = req.body.key ? req.body.key : "NIL";

        res.send("Access Granted");
    } else {
        res.send("Server Access Denied | Invalid id or pass!")
    }
})
 
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
