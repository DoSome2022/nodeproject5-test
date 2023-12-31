import express from "express";
const router = express.Router();
// import mkdirp from 'mkdirp';
// import fs from'fs-extra';
// import resizeImg from 'resize-img'

import { 
    GetPagesIndex ,
    GetAddProduct ,
    PostAddProduct ,
    PostReorderPageIndex ,
    GetEditProduct ,
    PostEditProduct ,
    PostProductGallery , 
    GetDeleteImage , 
    GetDeleteProduct ,
    } from "../controllers/admin_product.js";

//get page models
// import Product from '../models/Product.js';

//get category model
// import Category from '../models/Category.js';

//get pages index

router.get('/',GetPagesIndex
    // let count;
    // Product.count(function(err , c){
    //     count = c;
    // })

    // Product.find(function(err , product){
    //     res.render('admin/products',{
    //         products:product,
    //         count:count
    //     })
    // })
)

// get add product

router.get('/add-product',GetAddProduct
    // var title = "";
    // var desc = "";
    // var price = "";

    // Category.find((err, categories)=>{
    //     res.render('admin/add_product',{
    //     title:title,
    //     desc:desc,
    //     categories:categories,
    //     price:price
    // })
    // })
)

// post add product

router.post('/add-product',PostAddProduct
    // let imageFile = typeof req.files.image !== "undefined" ? req.files.image.name : "";

    // req.checkBody('title','Title must have a value').notEmpty();
    // req.checkBody('desc','Description must have a value').notEmpty();
    // req.checkBody('price','Price must have a value').isDecimal();
    // req.checkBody('image',' you must upload an image').isImage(imageFile);

    // let {title , desc , price , category} = req.body;
    // let slug = title.replace(/\s+/g,'-').toLowerCase();
    // const errors = req.validationErrors();
     
    //  if(errors){
    //         console.log('errors')
    //         Category.find((err, categories)=>{

    //             res.render('admin/add_product',{
    //                 errors:errors,
    //                 title: title,
    //                 desc: desc,
    //                 categories:categories,
    //                 price:price
    //             })
    //         })
    //         }else{
    //         //console.log('success'); //--- 1
    //         Product.findOne({slug: slug},function(err, product){
    //             if(product){
    //                 req.flash('danger','Product有了 請寫其他');
    //                 Category.find((err, categories)=>{

                        
    //                     res.render('admin/add_product',{
    //                         title:title,
    //                         desc:desc,
    //                         categories: categories,
    //                         price:price
    //                     })
    //                 })
    //         }else{

    //             let price2 = parseFloat(price).toFixed(2);

    //             let product = new Product({
    //                 title:title,
    //                 slug:slug,
    //                 desc:desc,
    //                 category: category,
    //                 price:price2,
    //                 image: imageFile
    //             });
    //             product.save(function(err){
    //                 if (err)
    //                     return console.log(err);

    //                 mkdirp('public/product_images/' + product._id, function (err) {
    //                     return console.log(err);
    //                 });

    //                 mkdirp('public/product_images/' + product._id + '/gallery', function (err) {
    //                     return console.log(err);
    //                 });

    //                 mkdirp('public/product_images/' + product._id + '/gallery/thumbs', function (err) {
    //                     return console.log(err);
    //                 });

    //                 if (imageFile != "") {
    //                     var productImage = req.files.image;
    //                     var path = 'public/product_images/' + product._id + '/' + imageFile;

    //                     productImage.mv(path, function (err) {
    //                         return console.log(err);
    //                     });
    //                 }
    //                 req.flash('success','Product 增加了');
    //                 res.redirect('/admin/product');
    //             })
    //         }
    //     })
    // }
    )

//POST reorder page index

router.post('/reorder-pages',PostReorderPageIndex
    //  //console.log(req.body)
    // const ids = req.body['id[]'];
    // //console.log("ids :="+ids)
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
)

// get edit product
router.get('/edit-product/:id',GetEditProduct
    // let errors;

    // Category.find((err , categories)=>{ 
    //     Product.findById(req.params.id, function (err, p){
    //         if(err){ 
    //         console.log(err);
    //         res.redirect('/admin/product');
    //         }else{
    //         let galleryDir = 'public/product_images/'+p._id+'/gallery';
    //         let galleryImages = null;
    //         fs.readdir(galleryDir, function(err , files){
    //             if(err){
    //                 console.log(err)
    //             }else{
    //                 galleryImages = files;
    //         res.render('admin/edit_product',{
    //             title: p.title,
    //             errors: errors,
    //             desc: p.desc,
    //             categories: categories,
    //             category: p.category.replace(/\s+/g, '-').toLowerCase(),
    //             price: parseFloat(p.price).toFixed(2),
    //             image: p.image,
    //             galleryImages: galleryImages,
    //             id: p._id
    //         })}})}})})
        )

//post edit product

router.post('/edit-product/:id', PostEditProduct

    // let imageFile = typeof req.files.image !== "undefined" ? req.files.image.name : "";

    // req.checkBody('title','Title must have a value').notEmpty();
    // req.checkBody('desc','Description must have a value').notEmpty();
    // req.checkBody('price','Price must have a value').isDecimal();
    // req.checkBody('image',' you must upload an image').isImage(imageFile);


    // let id = req.params.id;
    // let price = req.body.price;
    // let title = req.body.title;
    // let desc = req.body.desc;
    // let category = req.body.category;
    // let pimage = req.body.pimage
    // let slug = title.replace(/\s+/g,'-').toLowerCase();
    // const errors = req.validationErrors();
     
    // if(errors){
    //     req.session.errors = errors;
    //     res.redirect('/admin/product/edit-product/'+id);
    // } else {
    //     Product.findOne({slug:slug,_id:{'$ne':id}},function(err,p){
    //         if(err) console.log(err);

    //         if(p){
    //             req.flash('danger','Product title exists, choose another.');
    //             res.redirect('/admin/product/edit-product/'+id )
    //         }else{
    //             Product.findById(id,function(err,p){
    //                 if(err) console.log(err);

    //                 p.title = title;
    //                 p.slug = slug;
    //                 p.desc = desc;
    //                 p.price = parseFloat(price).toFixed(2);
    //                 p.category = category;
    //                 if(imageFile != "") {
    //                     p.image = imageFile;
    //                 }
    //                 p.save(function(err){
    //                     if(err) console.log(err);

    //                     if(imageFile != ""){
    //                         if(pimage != "") {
    //                             fs.remove('public/product_images/'+id+'/'+pimage, function(err){
    //                                 if(err) console.log(err)
    //                             })
    //                         }
    //                         let productImage = req.files.image;
    //                         let path = 'public/product_images/'+ id + '/' + imageFile;

    //                         productImage.mv(path, function(err){
    //                             return console.log(err);
    //                         });
    //                     }

    //                     req.flash('success','Product edited!')
    //                     res.redirect('/admin/product/edit-product/'+ id)

    //                 })
    //             })
    //         }
    //     })
    // }

);

//Post product gallery

router.post('/product-gallery/:id',PostProductGallery
    // let productImage = req.files.file;
    // let id = req.params.id;
    // let path = 'public/product_images/'+id+'/gallery/'+ req.files.file.name;
    // let thumbsPath = 'public/product_images/'+ id + '/gallery/thumbs/'+ req.files.file.name;

    // productImage.mv(path,function(err){
    //     if(err)
    //     console.log(err)

    //     resizeImg(fs.readFileSync(path),{width:100 , height:100}).then(function(buf){
    //         fs.writeFileSync(thumbsPath,buf)
    //     })
    // })
    // res.sendStatus(200);
)

// get delete image

router.get('/delete-image/:image',GetDeleteImage
    // let originalImage = 'public/product_images/'+req.query.id+'/gallery/'+ req.params.image;
    // let thumbsImage = 'public/product_images/'+req.query.id+'/gallery/thumbs/'+ req.params.image;

    // fs.remove(originalImage , function(err){
    //     if(err){
    //         console.log(err);
    //     } else {
    //         fs.remove(thumbsImage ,function(err){
    //             if(err){
    //                 console.log(err);
    //             } else {
    //                 req.flash('success','Image deleted!')
    //                 res.redirect('/admin/product/edit-product/'+ req.query.id)                
    //             }
    //         })
    //     }
    // })
);
    


// get delete product

router.get('/delete-product/:id',GetDeleteProduct
    // let id = req.params.id;
    // let path = 'public/product_images/'+id;

    // fs.remove(path,function(err){
    //     if(err){
    //         console.log(err);
    //     }else{
    //         Product.findByIdAndRemove(id,function(err){
    //             console.log(err);
    //         })
    //         req.flash('success','Product deleted!')
    //         res.redirect('/admin/product')
    //     }
    // })
);
    

export default  router