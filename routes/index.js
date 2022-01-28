var express = require('express');
var router = express.Router();

var ans_data = require('../answer_room/data');
var qus_room = require('../question_room/data');



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// Answering 
router.get('/answering_bot', ans_data.answer_data);


// Below are the questions router 

router.get('/question1', qus_room.qus1);

router.get('/question2', qus_room.qus2);

module.exports = router;
