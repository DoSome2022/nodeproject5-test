import Users from "../models/User.js";
import passport from "passport";
import bcrypt from "bcryptjs";
import User from "../models/User.js";

export const GetRegister = (req,res) =>{
    res.render('register',{
        title: 'Register'
    })
}

export const PostRegister = (req,res) => {
    const {name, email , username , password , password2 }= req.body;
    req.checkBody('name', 'Name is required!').notEmpty();
    req.checkBody('email', 'Email is required!').isEmail();
    req.checkBody('username', 'Username is required!').notEmpty();
    req.checkBody('password', 'Password is required!').notEmpty();
    req.checkBody('password2', 'Passwords do not match!').equals(password);

    let  errors  =  req.validationErrors();

    if(errors){
        res.render('register',{
            errors:errors,
            user:null,
            title:'Register'
        })
    }else{
        Users.findOne({username: username},(err,user)=>{
            if(err)
                console.log(err);
            if(user) {
                req.flash('danger', 'Username exists, choose another!');
                res.redirect('/user/register');
            }else{
                bcrypt.genSalt(10,function(err,salt){
                    bcrypt.hash(password,salt,(err,hash)=>{
                        if(err) return console.log(err)

                const user = new User({
                    name:name,
                    email:email,
                    username:username,
                    password:hash,
                    admin:1
                })
                        user.save((err)=>{
                            if(err){
                                console.log(err);
                            }else{
                                req.flash('success','You are now registered!');
                                res.redirect('/user/login');
                            }
                        })

                        })


                    
                })
            }
            
        })
    }
}

export const GetLogin = (req,res)=>{
    if(res.locals.user) res.redirect('/');
    res.render('login',{
    title:'Log in'
})
}

export const PostLogin = (req,res,next)=>{
    passport.authenticate('local',{
        successRedirect: '/',
        failureRedirect: '/user/login',
        failureFlash:true
    })(req,res,next)
}

export const GetLogout = (req,res)=>{
    req.logOut();
    req.flash('success','You are logged out');
    res.redirect('/users/login'); 
}