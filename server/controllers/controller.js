let mongoose = require('mongoose');
// var User = mongoose.model('exampleModelName');

module.exports = {
  // getUser: (req,res)=>{
  //   User.findOne({name:req.body.username},(err,user)=>{
  //     if(err){
  //       console.log(err)
  //     } else {
  //       if(user==null){
  //       let newUser = new User({name:req.body.username})
  //       newUser.save( (err, savedUser)=>{
  //         if(err){
  //           return res.sendStatus(500);
  //         } else {
  //           req.session.user = savedUser;
  //           req.session.save()
  //           console.log(req.session)
  //           return res.json(savedUser);
  //         }
  //       })
  //       } else {
  //         req.session.user = user;
  //         return res.json(user)
  //       }
  //     }
  //   })
  // },

  // current:(req,res)=>{
  //   console.log("****************************")
  //   console.log(req.session)
  //   if(req.session.user){
  //     res.json(req.session.user)
  //   } else {
  //     res.sendStatus(410)
  //   }
  // },

  // newQuestion:(req,res)=>{
  //   let newQuest = new Question(req.body)
  //   newQuest.save((err,savedQuestion)=>{
  //     if(err){
  //       res.sendStatus(500)
  //     } else {
  //       res.json(savedQuestion)
  //     }
  //   })
  // },

  // getQuestions:(req,res)=>{
  //   Question.find({}).populate('answers').exec((err,questions)=>{
  //     if(err){
  //       res.sendStatus(500)
  //     } else {
  //       res.json(questions)
  //     }
  //   })
  // },

  // questionInfo:(req,res)=>{
  //   Question.find({_id:req.params.id}).populate('answers').exec((err,question)=>{
  //     if(err){
  //       res.sendStatus(500);
  //     } else {
  //       res.json(question)
  //     }
  //   })
  // },

  // newAnswer:(req,res)=>{
  //   let newAnswer = new Answer({answer:req.body.answer,details:req.body.details,_question:req.params.id,likes:0})
  //   newAnswer.save((err,savedAnswer)=>{
  //     if(err){
  //       console.log(err)
  //     } else {
  //       Question.findOne({_id:req.params.id},(err,question)=>{
  //         if(err){
  //           console.log(err)
  //         } else {
  //           question.answers.push(savedAnswer);
  //           question.save((err,data=>{
  //             if(err){
  //               console.log(err)
  //             } else{
  //               res.json(savedAnswer)
  //             }
  //           }))
  //         }
  //       })
  //     }
  //   })
  // },

  // logout:(req,res)=>{
  //   delete req.session.user;
  //   res.redirect('/');
  // },

  // likeAnswer:(req,res)=>{
  //   Answer.findOne({_id:req.params.id}, (err, answer)=>{
  //     if(err){
  //       res.sendStatus(500)
  //     } else {
  //       answer.likes+=1;
  //       answer.save((err,savedAnswer)=>{
  //         if(err){
  //           res.sendStatus(500)
  //         } else {
  //           res.json(savedAnswer)
  //         }
  //       })
  //     }
  //   })
  // },

}