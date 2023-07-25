import Page from "../models/Page.js";

export const GetHome = (req,res)=>{
    Page.findOne({slug:'home'},function(err , page){
        if(err) console.log(err);

            res.render('index',{
                title: page.title,
                content: page.content
            })
    })
}

export const GetAPage = (req,res)=>{
    let slug = req.params.slug;

    Page.findOne({slug:slug},function(err , page){
        if(err) console.log(err);
        if(!page) { 
            res.redirect('/');
        }else{
            res.render('index',{
                title: page.title,
                content: page.content
            })
        }
    })
}