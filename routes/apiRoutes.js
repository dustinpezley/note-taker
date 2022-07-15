const router = require('express').Router();

const fs = require('fs');
const path = require('path');
const { notes } = require('../db/db.json');
const Note = require('../lib/Note');

router.get('/notes', (req, res) => {
  if(req.body) {
    res.sendFile(path.join(__dirname,notes));
  } else {
    res.json('Unable to retrieve data.');
  }
});

router.post('/notes', (req,res) => {
  let noteArray = fs.readFile(notes, 'utf-8', (data,err) => {
    if(err) {
      res.json(`There was an error with your request: ${err}.`);
    }
    return JSON.parse(data);
  })

  let newNote = new Note(req.body.title, req.body.text);

  noteArray = [...noteArray, newNote];

  fs.writeFile(notes, JSON.stringify(noteArray));
})

module.exports = router;