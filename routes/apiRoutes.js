const router = require("express").Router()
const fs = require("fs");
let db = require("../db/db.json")


router.get("/notes", function (req, res) {
    fs.readFile('db/db.json', (err, data) => {
        if (err) throw err;
        db =JSON.parse(data)
        res.json(db)
    })
});
//req.body
//req.param
router.post("/notes", function (req, res) {

    let newData = {
        title: req.body.title,
        text: req.body.text,
        id: Math.floor(Math.random() * 1000289)
    }
    db.push(newData);
    fs.writeFile('db/db.json',JSON.stringify(db), (err, data) => {
        if (err) throw err;
        
    })
    res.json(db)
})
module.exports = router;

