import express from "express";
//import Page from "../models/Page.js";
import { 
    GetHome ,
    GetAPage 
} from "../controllers/pages.js";
const router = express.Router();

router.get('/',GetHome
    // Page.findOne({slug:'home'},function(err , page){
    //     if(err) console.log(err);

    //         res.render('index',{
    //             title: page.title,
    //             content: page.content
    //         })
        
    // })
)

//get a page 

router.get('/:slug',GetAPage
    // let slug = req.params.slug;

    // Page.findOne({slug:slug},function(err , page){
    //     if(err) console.log(err);
    //     if(!page) { 
    //         res.redirect('/');
    //     }else{
    //         res.render('index',{
    //             title: page.title,
    //             content: page.content
    //         })
    //     }
    // })

)

export default  router