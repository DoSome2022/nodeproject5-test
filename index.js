import express from "express";
import path from "path";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import session from "express-session";
import expressValidator from "express-validator";
import flash from "connect-flash";
import messages from "express-messages";
import { fileURLToPath } from "url";
import DB from "./config/database.js";
import fileUpload from "express-fileupload";
import passport from "passport";
import dotenv from 'dotenv';
dotenv.config();

//setup path
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


//connect db
mongoose.connect(process.env.MONGO_DB);
const db = mongoose.connection;
db.on('error',(err)=>{console.error(err)});
db.once('open',()=>{
    console.log('db is connect');
});

// init app
const app = express()

// view engine setup
app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');

//Set public folder
app.use(express.static(path.join(__dirname,'public')));

//set global errors variable
app.locals.errors = null;

//Get Page Model
import Page from './models/Page.js';

//Get all pages to pass to header.ejs
Page.find({}).sort({sorting:1}).exec(function(err, pages){
    if(err){
        console.log(err)
    } else {
        app.locals.pages = pages;
    }
})

//Get Category Model 
import Category from './models/Category.js';

//Get all category to pass to header.ejs

Category.find({}).sort({sorting:1}).exec(function(err, categories){
    if(err){
        console.log(err)
    } else {
        app.locals.categories = categories;
    }
})

//Express fileUpload middleware
app.use(fileUpload());

//console.log('global :'+ errors)
//body parser middieware
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

// express session middieware
app.use(session({
    secret:'keyboard cat',
    resave: true,
    saveUninitialized: true,
   // cookie: {secure: true}
}))

//express validator middieware
app.use(expressValidator({
    errorFormatter: function (param, msg, value) {
        var namespace = param.split('.')
                , root = namespace.shift()
                , formParam = root;

        while (namespace.length) {
            formParam += '[' + namespace.shift() + ']';
        }
        return {
            param: formParam,
            msg: msg,
            value: value
        };
    },
    customValidators: {
        isImage: function (value, filename) {
            var extension = (path.extname(filename)).toLowerCase();
            switch (extension) {
                case '.jpg':
                    return '.jpg';
                case '.jpeg':
                    return '.jpeg';
                case '.png':
                    return '.png';
                case '':
                    return '.jpg';
                default:
                    return false;
            }
        }
    }

}));
//flash middieware
// express messages middieware
app.use(flash());
app.use(function(req,res,next){
    res.locals.messages = messages(req,res);
    next();
})

// Passport Config
import passportConfig  from './config/passport.js';
passportConfig(passport);

//passpord Middleware
app.use(passport.initialize());
app.use(passport.session());

app.get('*',function(req,res,next){
    res.locals.cart = req.session.cart;
    res.locals.user = req.user || null;
    next();
})


//set routes
import pages from './routes/pages.js';
import cart from './routes/cart.js';
import user from './routes/users.js';
import product from './routes/products.js';
import adminPages from './routes/admin_pages.js';
import adminCategory from './routes/admin_category.js';
import adminProducts from './routes/admin_product.js';


app.use('/products',product);
app.use('/cart',cart);
app.use('/user',user);
app.use('/admin/pages',adminPages);
app.use('/admin/category',adminCategory);
app.use('/admin/product',adminProducts);
app.use('/',pages);


// Start the server
const port = 3005;
app.listen(port,function(){
    console.log('Server started on port ' + port);
})
