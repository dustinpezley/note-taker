const fs = require('fs');
const path = require('path');

function createNewNote(body, noteArray) {
  const note = body;
  noteArray.push(note);
  fs.writeFileSync(path.join(__dirname, '../db/db.json'), JSON.stringify(noteArray, null, 2));
  return note;
}

function getNotes() {
  return fs.readFile('db/db.json', 'utf-8', (err, data) => {
    let noteArray;

    if(!err) {
      noteArray = [].concat(JSON.parse(data));
    } else {
      noteArray = [];
    }
    console.log(noteArray);
    return noteArray;

  //   try {
  //     noteArray = [].concat(JSON.parse(data));
  //   } catch (err) {
  //     noteArray = [];
  //   }
  //   console.log(noteArray);
  //   return noteArray;
  // })
  })
}

module.exports = { createNewNote };