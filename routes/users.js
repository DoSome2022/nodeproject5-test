import express from "express";
import { 
    GetRegister , 
    PostRegister , 
    GetLogin ,
    PostLogin ,
    GetLogout
} from "../controllers/users.js";
// import Users from "../models/User.js";
// import passport from "passport";
// import bcrypt from "bcryptjs";
// import User from "../models/User.js";
const router = express.Router();


//get register
router.get('/register',GetRegister
    // res.render('register',{
    //     title: 'Register'
    // })
)

//post register
router.post('/register',PostRegister
    // const {name, email , username , password , password2 }= req.body;
    // req.checkBody('name', 'Name is required!').notEmpty();
    // req.checkBody('email', 'Email is required!').isEmail();
    // req.checkBody('username', 'Username is required!').notEmpty();
    // req.checkBody('password', 'Password is required!').notEmpty();
    // req.checkBody('password2', 'Passwords do not match!').equals(password);

    // let  errors  =  req.validationErrors();

    // if(errors){
    //     res.render('register',{
    //         errors:errors,
    //         user:null,
    //         title:'Register'
    //     })
    // }else{
    //     Users.findOne({username: username},(req,res)=>{
    //         if(err)
    //             console.log(err);
    //         if(user) {
    //             req.flash('danger', 'Username exists, choose another!');
    //             res.redirect('/users/register');
    //         }else{
    //             const user = new User({
    //                 name:name,
    //                 email:email,
    //                 username:username,
    //                 password:password,
    //                 admin:0
    //             })
    //             bcrypt.genSalt(10,function(err,salt){
    //                 bcrypt.hash(user.passport,salt,(err,hash)=>{
    //                     if(err)
    //                         console.log(err)
    //                     user.password = hash

    //                     user.save((err)=>{
    //                         if(err){
    //                             console.log(err);
    //                         }else{
    //                             req.flash('success','You are now registered!');
    //                             res.redirect('/user/login');
    //                         }
    //                     })

    //                 })
    //             })
    //         }
            
    //     })
    // }

)


//get login 

router.get('/login',GetLogin
// if(res.locals.user) res.redirect('/');
// res.render('login',{
//     title:'Log in'
// })
)

//post login

router.post('/login',PostLogin  
    // passport.authenticate('local',{
    //     successRedirect: '/',
    //     failureRedirect: '/users/login',
    //     failureFlash:true

    // })(req,res,next)
    
)

//get logout
router.get('/logout',GetLogout
    // req.logOut();

    // req.flash('success','You are logged out');
    // res.redirect('/users/login');
)

export default  router