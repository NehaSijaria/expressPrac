const express = require('express');
const router = express.Router();
const uuid = require('uuid')
const members = require('../../Members');
//all routes here start with "/api/members"
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

//create member - post (sending data) its in req obj's body==> req.body
router.post('/', (req, res) => {
  //res.send(req.body);//req.body==>{"name":"joe", "email":"hello"}
//under header-content-Type:val(application/json)==> body:raw {"name":"joe", "email":"hello"} ==> we need body-parser to parse data(app.use(express.json()))
 const newMember = {
  id: uuid.v4(),
  name:req.body.name,
  email: req.body.email,
  status:'active'
 };
  //we always wanted to send name,msg so chl the condition
 if(!newMember.name || !newMember.email) {
    res.status(400).json({ msg:"please include name and email"});
 }

 members.push(newMember);
 res.json(members);
})

//update Member
router.put('/:id', (req,res) => {
  //return boolean
  const found = members.some(member => member.id === parseInt(req.params.id))

  if(found){
  const updateMember = req.body;
  members.forEach(member => {
    if(member.id === parseInt(req.params.id)){
      member.name = updateMember.name ? updateMember.name : member.name;
      member.email = updateMember.email ? updateMember.email : member.email;

      res.json({msg: "updated", member });
    };
  });
} else {
  res.status(400).json({msg:`No member with id:${req.params.id}`});
}
});

//Delete member

router.delete('/:id', (req,res) => {
  //return boolean
  const found = members.some(member => member.id === parseInt(req.params.id))
  
  if(found){
  res.json({msg: "deleted member", members: members.filter(member => member.id !== parseInt(req.params.id))})
} else {
  res.status(400).json({msg:`member with id:${req.params.id} not found`})
}
})


module.exports = router;