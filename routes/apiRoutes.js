const router = require('express').Router();

const fs = require('fs');
const path = require('path');
const { notes } = require('../db/db.json');

router.get('/notes', (req, res) => {
  let results = notes;
  res.json(results);
})

module.exports = router;