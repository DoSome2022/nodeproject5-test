import Category from "../models/Category.js"

export const GetPageIndex = (req,res)=>{
        Category.find(function(err , categories){
        if(err) return console.log(err);
        res.render('admin/categories',{
            categories:categories
        })
    })
}

export const GetAddCategory = (req,res)=>{
        var title = "";
        res.render('admin/add_category',{
            title:title,
        })
}

export const PostAddCategory = (req,res)=>{
     req.checkBody('title','Title must have a value').notEmpty();

    let title = req.body.title;
    let slug = title.replace(/\s+/g,'-').toLowerCase();
   
     const errors = req.validationErrors();
        if(errors){
            console.log('errors')
            res.render('admin/add_category',{
                errors:errors,
                title: title,
            })
        }else{
            console.log('success'); //--- 1
            Category.findOne({slug: slug},function(err, category){
                if(category){
                    req.flash('danger','category有了 請寫其他');
                    res.render('admin/add_category',{
                        title:title
                })
            }else{
                let category = new Category({
                    title:title,
                    slug:slug
                });
                category.save(function(err){
                    if(err) return console.log(err);

                    Category.find({}).sort({sorting:1}).exec(function(err, categories){
                        if(err){
                            console.log(err)
                        } else {
                            req.app.locals.categories = categories;
                        }
                    })
                    
                    req.flash('success','Category 增加了');
                    res.redirect('/admin/category');
                })
            }
        })
    }
}

export const GetEditCategory = (req,res)=>{
    Category.findById(req.params.id, function (err, cate){
        if(err) return console.log(err);
        res.render('admin/edit_category',{
            title: cate.title,
            id: cate._id
        })
    })
}

export const PostEditPage = (req,res)=>{
    req.checkBody('title', 'Title must have a value.').notEmpty();
 
    var title = req.body.title;
    var slug = title.replace(/\s+/g, '-').toLowerCase();
    var id = req.params.id;
        
    var errors = req.validationErrors();
console.log( req.body)
    if (errors) {
        res.render('admin/edit_category', {
            errors: errors,
            title: title,
            id: id
        });
    } else {
        Category.findOne({slug: slug, _id: {'$ne': id}}, function (err, cate) {
            if (cate) {
                req.flash('danger', 'Category title exists, choose another.');
                res.render('admin/edit_category', {
                    title: title,
                    id: id
                });
            } else {

                Category.findById(id, function (err, cate) {
                    if (err)
                        return console.log(err);

                    cate.title = title;
                    cate.slug = slug;

                    
                    cate.save(function (err) {
                        
                        if (err)
                            return console.log(err);

                            Category.find({}).sort({sorting:1}).exec(function(err, categories){
                                if(err){
                                    console.log(err)
                                } else {
                                   req.app.locals.categories = categories;
                                }
                            })

                        req.flash('success', 'Categroy edited!');
                        res.redirect('/admin/category/edit-category/' + id);
                    });

                });


            }
        });
    }
}

export const GetDeleteCategory = (req,res)=>{
    Category.findByIdAndRemove(req.params.id,function(err){
        if(err) return console.log(err)

        Category.find({}).sort({sorting:1}).exec(function(err, categories){
            if(err){
                console.log(err)
            } else {
               req.app.locals.categories = categories;
            }
        })
        req.flash('success', 'Category deleted');
        res.redirect('/admin/category/');
    });
}