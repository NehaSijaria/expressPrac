const express = require('express');
const router = express.Router();
const members = require('../../Members');

//Get all members
router.get('/', (req,res) => res.json(members)
)

//Get single member
router.get('/:id', (req,res) => {
  //return boolean
  const found = members.some(member => member.id === parseInt(req.params.id))
  //res.send(req.params.id) return id;
  //filter indiv member based on id
  //anything returned as "/:id" is string while member.id is a number
  if(found){
  res.json(members.filter(member => member.id === parseInt(req.params.id)))
} else {
  res.status(400).json({msg:`member with id:${req.params.id} not found`})
}
})

//create member
router.post('/', (req, res) => {
  res.send(req.body)
})


module.exports = router;