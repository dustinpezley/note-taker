const router = require('express').Router();

const fs = require('fs');
const path = require('path');
const { notes } = require('../db/db.json');
const Note = require('../lib/Note');
const { createNewNote } = require('../lib/noteHandler');

router.get('/notes', (req, res) => {
  if(req.body) {
    res.sendFile(path.join(__dirname,'../db/db.json'));
  } else {
    res.json('Unable to retrieve data.');
  }
});

router.post('/notes', (req,res) => {
  let noteArray = JSON.parse(fs.readFileSync('db/db.json','utf-8'));
  if(!req.body) {
    res.status(400).send('Improper request.')
  } else {
    let newNote = new Note(req.body.title, req.body.text);
    const note = createNewNote(newNote, noteArray);
    return note;
  }
})

router.delete('/notes/:id', (req,res) => {
  let noteArray = JSON.parse(fs.readFileSync('db/db.json','utf-8'));
  const noteRemoved = noteArray.filter(note => note.id !== req.params.id);
  fs.writeFileSync(path.join(__dirname, '../db/db.json'),JSON.stringify(noteRemoved, null, 2))
})

module.exports = router;