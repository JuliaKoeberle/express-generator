var express = require('express');
var router = express.Router();
const Validator = require('validator');
const isEmpty = require('lodash/isEmpty');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.post('/', function(req, res, next) {
  let errors = {};

  //verify all fields
  if(Validator.isEmpty(req.body.email)){
    errors.email = 'Email is required';
  }
  if(Validator.isEmpty(req.body.password)){
    errors.password = 'Password is required';
  }

  function validateInput(data){
    return {
      errors, 
      isValid: isEmpty(errors)
    }
  }
  const {err, isValid} = validateInput(req.body);

  if(!isValid){
    res.status(400).send({errors: errors});
  }

});

module.exports = router;
