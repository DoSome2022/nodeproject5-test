import Page from '../models/Page.js';

export const GetPagesIndex = (req,res)=>{
    Page.find({}).sort('sorting').exec((err,pages)=>{
        res.render('admin/pages',{
            pages:pages,
        })
    })
}

export const GetAddPage = (req,res)=>{
    var title = "";
    var slug = "";
    var content = "";

    res.render('admin/add_page',{
        title:title,
        slug:slug,
        content:content,
        sorting: 100
    })
}

export const PostAddPage = (req,res)=>{
    req.checkBody('title','Title must have a value').notEmpty();
    req.checkBody('content','Content must have a value').notEmpty();

    let {title , content} = req.body;
    let slug = req.body.slug.replace(/\s+/g,'-').toLowerCase();
    if(slug == "") slug = title.replace(/\s+/g,'-').toLowerCase();

     const errors = req.validationErrors();
        if(errors){
            console.log('errors')
            res.render('admin/add_page',{
                errors:errors,
                title: title,
                slug:slug,
                content:content,
            })
        }else{
            console.log('success'); //--- 1
            Page.findOne({slug: slug},function(err, page){
                if(page){
                    req.flash('danger','slug有了 請寫其他');
                    res.render('admin/add_page',{
                        title:title,
                        slug:slug,
                        content:content
                })
            }else{
                let page = new Page({
                    title:title,
                    slug:slug,
                    content:content,
                    sorting: 100
                });
                page.save(function(err){
                    if(err) return console.log(err);

                    Page.find({}).sort({sorting:1}).exec(function (err , pages){
                        if(err) {
                            console.log(err)
                        }else{
                            req.app.locals.pages = pages;
                        }
                     })
                    
                    req.flash('success','Pade 增加了');
                    res.redirect('/admin/pages');
                })
            }
        })
    }
}

function sortPages(ids ,callback) {

    let count = 0;

    for(let i =0; i < ids.length; i++){
       //console.log(ids[i])
        let id = ids[i];
        count++ ;

       ( function(count){

           Page.findById(id ,(err,pages)=>{
               console.log(pages)
               pages.sorting = count;
               pages.save(function(err){
                if(err)
                return console.log(err)
                ++count;
                if(count >= ids.length) {
                    callback();
                }
               })
           });
       })(count);
    }

}

export const PostReorderPage = (req,res)=>{
    const ids = req.body['id[]'];
    sortPages(ids,function(){  // -----------<
        Page.find({}).sort({sorting:1}).exec(function (err , pages){
           if(err) {
               console.log(err)
           }else{
               req.app.locals.pages = pages;
           }
        })
   
   
        })
}

export const GetEditPage = (req,res)=>{
    Page.findById(req.params.id, function (err, page){
        if(err) return console.log(err);
        res.render('admin/edit_page',{
            title: page.title,
            slug: page.slug,
            content: page.content,
            id: page._id
        })
    })
}

export const PostEditPage = (req,res)=>{
    req.checkBody('title', 'Title must have a value.').notEmpty();
    req.checkBody('content', 'Content must have a value.').notEmpty();

    var title = req.body.title;
    var slug = req.body.slug.replace(/\s+/g, '-').toLowerCase();
    if (slug == "")
        slug = title.replace(/\s+/g, '-').toLowerCase();
    var content = req.body.content;
    var id = req.params.id;


        
    var errors = req.validationErrors();
//console.log( req.body)
    if (errors) {
        res.render('admin/edit_page', {
            errors: errors,
            title: title,
            slug: slug,
            content: content,
            id: id
        });
    } else {
        Page.findOne({slug: slug, _id: {'$ne': id}}, function (err, page) {
            if (page) {
                req.flash('danger', 'Page slug exists, choose another.');
                res.render('admin/edit_page', {
                    title: title,
                    slug: slug,
                    content: content,
                    id: id
                });
            } else {

                Page.findById(id, function (err, page) {
                    if (err)
                        return console.log(err);

                    page.title = title;
                    page.slug = slug;
                    page.content = content;


                   //console.log('2:'+page)
                    page.save(function (err) {
                       // console.log('3:'+page)
                        if (err)
                            return console.log(err);

                        Page.find({}).sort({sorting: 1}).exec(function (err, pages) {
                            if (err) {
                                console.log(err);
                            } else {
                                req.app.locals.pages = pages;
                            }
                        });


                        req.flash('success', 'Page edited!');
                        res.redirect('/admin/pages/edit-page/' + id);
                    });

                });


            }
        });
    }
}

export const GetDeletePage = (req,res)=>{
            Page.findByIdAndRemove(req.params.id,function(err){
        if(err) return console.log(err)

        Page.find({}).sort({sorting:1}).exec(function (err , pages){
            if(err) {
                console.log(err)
            }else{
                req.app.locals.pages = pages;
            }
         })
        req.flash('success', 'Page deleted');
        res.redirect('/admin/pages/');
    });
}