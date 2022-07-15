const { v4: uuidv4 } = require('uuid');

class Note {
  constructor (title, text) {
    this = {
      title: title,
      text: text,
      id: uuidv4()
    }
  }
}

module.exports = Note;