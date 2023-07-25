import express from "express";
const router = express.Router();
import { GetPagesIndex , GetAddPage ,PostAddPage , PostReorderPage , GetEditPage , PostEditPage , GetDeletePage } from "../controllers/admin_pages.js"; 

//get page models
import Page from '../models/Page.js';


//get pages index

router.get('/',GetPagesIndex
    // Page.find({}).sort('sorting').exec((err,pages)=>{
    //     res.render('admin/pages',{
    //         pages:pages,
    //     })
    // })
)

// get add page

router.get('/add-page',GetAddPage
    // var title = "";
    // var slug = "";
    // var content = "";

    // res.render('admin/add_page',{
    //     title:title,
    //     slug:slug,
    //     content:content,
    //     sorting: 100
    // })
)

// post add page

router.post('/add-page',PostAddPage

    // req.checkBody('title','Title must have a value').notEmpty();
    // req.checkBody('content','Content must have a value').notEmpty();

    // let {title , content} = req.body;
    // let slug = req.body.slug.replace(/\s+/g,'-').toLowerCase();
    // if(slug == "") slug = title.replace(/\s+/g,'-').toLowerCase();

    //  const errors = req.validationErrors();
    //     if(errors){
    //         console.log('errors')
    //         res.render('admin/add_page',{
    //             errors:errors,
    //             title: title,
    //             slug:slug,
    //             content:content,
    //         })
    //     }else{
    //         console.log('success'); //--- 1
    //         Page.findOne({slug: slug},function(err, page){
    //             if(page){
    //                 req.flash('danger','slug有了 請寫其他');
    //                 res.render('admin/add_page',{
    //                     title:title,
    //                     slug:slug,
    //                     content:content
    //             })
    //         }else{
    //             let page = new Page({
    //                 title:title,
    //                 slug:slug,
    //                 content:content,
    //                 sorting: 100
    //             });
    //             page.save(function(err){
    //                 if(err) return console.log(err);

    //                 Page.find({}).sort({sorting:1}).exec(function (err , pages){
    //                     if(err) {
    //                         console.log(err)
    //                     }else{
    //                         req.app.locals.pages = pages;
    //                     }
    //                  })
                    
    //                 req.flash('success','Pade 增加了');
    //                 res.redirect('/admin/pages');
    //             })
    //         }
    //     })
    // }
    

    )
// Sort pages function

// function sortPages(ids ,callback) {

//     let count = 0;

//     for(let i =0; i < ids.length; i++){
//        //console.log(ids[i])
//         let id = ids[i];
//         count++ ;

//        ( function(count){

//            Page.findById(id ,(err,pages)=>{
//                console.log(pages)
//                pages.sorting = count;
//                pages.save(function(err){
//                 if(err)
//                 return console.log(err)
//                 ++count;
//                 if(count >= ids.length) {
//                     callback();
//                 }
//                })
//            });
//        })(count);
//     }

// }



//POST reorder page 

router.post('/reorder-pages',PostReorderPage
     //console.log(req.body)
   // const ids = req.body['id[]'];
    //console.log("ids :="+ids)
    //  let count = 0;

    //  for(let i =0; i < ids.length; i++){
    //     //console.log(ids[i])
    //      let id = ids[i];
    //      count++ ;

    //     ( function(count){

    //         Page.findById(id ,(err,pages)=>{
    //             console.log(pages)
    //             pages.sorting = count;
    //             pages.save()
    //         });
    //     })(count);
    //  }
     
    //  sortPages(ids,function(){  // -----------<
    //  Page.find({}).sort({sorting:1}).exec(function (err , pages){
    //     if(err) {
    //         console.log(err)
    //     }else{
    //         req.app.locals.pages = pages;
    //     }
    //  })


    //  }) // ----------<



)

// get edit page
router.get('/edit-page/:id',GetEditPage
    // Page.findById(req.params.id, function (err, page){
    //     if(err) return console.log(err);
    //     res.render('admin/edit_page',{
    //         title: page.title,
    //         slug: page.slug,
    //         content: page.content,
    //         id: page._id
    //     })
    // })
)

//post edit page

router.post('/edit-page/:id', PostEditPage

//     req.checkBody('title', 'Title must have a value.').notEmpty();
//     req.checkBody('content', 'Content must have a value.').notEmpty();

//     var title = req.body.title;
//     var slug = req.body.slug.replace(/\s+/g, '-').toLowerCase();
//     if (slug == "")
//         slug = title.replace(/\s+/g, '-').toLowerCase();
//     var content = req.body.content;
//     var id = req.params.id;


        
//     var errors = req.validationErrors();
// //console.log( req.body)
//     if (errors) {
//         res.render('admin/edit_page', {
//             errors: errors,
//             title: title,
//             slug: slug,
//             content: content,
//             id: id
//         });
//     } else {
//         Page.findOne({slug: slug, _id: {'$ne': id}}, function (err, page) {
//             if (page) {
//                 req.flash('danger', 'Page slug exists, choose another.');
//                 res.render('admin/edit_page', {
//                     title: title,
//                     slug: slug,
//                     content: content,
//                     id: id
//                 });
//             } else {

//                 Page.findById(id, function (err, page) {
//                     if (err)
//                         return console.log(err);

//                     page.title = title;
//                     page.slug = slug;
//                     page.content = content;


//                    //console.log('2:'+page)
//                     page.save(function (err) {
//                        // console.log('3:'+page)
//                         if (err)
//                             return console.log(err);

//                         Page.find({}).sort({sorting: 1}).exec(function (err, pages) {
//                             if (err) {
//                                 console.log(err);
//                             } else {
//                                 req.app.locals.pages = pages;
//                             }
//                         });


//                         req.flash('success', 'Page edited!');
//                         res.redirect('/admin/pages/edit-page/' + id);
//                     });

//                 });


//             }
//         });
//     }

);

// get delete page

router.get('/delete-page/:id',GetDeletePage
    // Page.findByIdAndRemove(req.params.id,function(err){
    //     if(err) return console.log(err)

    //     Page.find({}).sort({sorting:1}).exec(function (err , pages){
    //         if(err) {
    //             console.log(err)
    //         }else{
    //             req.app.locals.pages = pages;
    //         }
    //      })
    //     req.flash('success', 'Page deleted');
    //     res.redirect('/admin/pages/');
    // });
);
    

export default  router