import express from "express";
// import Product from "../models/Product.js";
// import Category from "../models/Category.js";
// import  fs  from "fs-extra";
import { 
    GetAllProduct ,
    GetAPage ,
    GetProductDetails ,
} from "../controllers/products.js"; 

const router = express.Router();

//get all product

router.get('/',GetAllProduct
    // Product.find(function(err , products){
    //     if(err) console.log(err);

    //         res.render('all_products',{
    //             title: 'All products',
    //             products: products
    //         })
        
    // })
)

//get a page 

router.get('/:category',GetAPage
    // let categorySlug = req.params.category;

    // Category.findOne({slug:categorySlug},function(err , c){
    //     Product.find({category:categorySlug},function(err , products){
    //         if(err) console.log(err)

    //         res.render('cat_products',{
    //             title: c.title,
    //             products:products
    //         })
    //     })
    // })

)

//get product details

router.get('/:category/:product',GetProductDetails
    // let galleryImages = null;
    
    // Product.findOne({slug:req.params.product},function(err , product){
    //     if(err){
    //         console.log(err)
    //     }else{
    //         let galleryDir = 'public/product_images/'+ product._id+ '/gallery';

    //         fs.readdir(galleryDir,function(err,files){
    //             if(err){
    //                 console.log(err)
    //             }else{
    //                 galleryImages = files;

    //                 res.render('product',{
    //                     title:product.title,
    //                     p: product,
    //                     galleryImages: galleryImages,

    //                 })

    //             }
    //         })
    //     }
    // })

)

export default  router