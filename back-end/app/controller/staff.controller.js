var jwt = require('jsonwebtoken');

const Staff = require('../model/staff');

exports.get_list_employee = function(req,res){
    if(req.headers && req.headers.authorization && String(req.headers.authorization.split(' ')[0]).toLocaleLowerCase() === 'bearer'){
        var token = req.headers.authorization.split(' ')[1];
        jwt.verify(token,'team7project@uef.edu.vn', function(err,data){
            if(err){
                return res.status(403).send({message:'Unauthorized'})
            }
            else {
                Staff.list(function(response){
                    res.send({result:response})
                })
            }
        })
    }
    else{
        return res.status(403).send({message:'Unauthorized'});
    }

}

exports.get_list_employee_name_image = function(req,res){
    if (req.headers && req.headers.authorization && String(req.headers.authorization.split(' ')[0]).toLocaleLowerCase() === 'bearer'){
        var token = req.headers.authorization.split(' ')[1];
        jwt.verify(token,'team7project@uef.edu.vn',function(err,data){
            if (err){
                return res.status(403).send({message:'Unauthorized'})
            }
            else{
                Staff.list_name_image(function(response){
                    res.send({result:response})
                })
            }
        })
    }
    else{
        return res.status(403).send({message:'Unauthorized'});
    }
}

exports.details_employee = function(req,res){
    if (req.headers && req.headers.authorization && String(req.headers.authorization.split(' ')[0]).toLocaleLowerCase() === 'bearer'){
        var token = req.headers.authorization.split(' ')[1];
        jwt.verify(token,'team7project@uef.edu.vn',function(err,data){
            if (err){
                return res.status(403).send({message:'Unauthorized'})
            }
            else{
                let employee_id = req.params.employee_id;
                Staff.detail(employee_id,function(response){
                    res.send({result:response})
                }) 
            }
        })
    }
    else{
        return res.status(403).send({message:'Unauthorized'});
    }
}

exports.insert_employee = function(req,res){
    if (req.headers && req.headers.authorization && String(req.headers.authorization.split(' ')[0]).toLocaleLowerCase() === 'bearer'){
        var token = req.headers.authorization.split(' ')[1];
        jwt.verify(token,'team7project@uef.edu.vn',function(err,data){
            if (err){
                return res.status(403).send({message:'Unauthorized'})
            }
            else{
                let data = req.body;
                let file = req.file;
                console.log("file",req.file);
                console.log("staff", data)
                Staff.create(data,file,function(response){
                    res.send({result:response});
                }) 
            }
        })
    }
    else{
        return res.status(403).send({message:'Unauthorized'});
    }
}

exports.update_employee = function(req,res){
    if (req.headers && req.headers.authorization && String(req.headers.authorization.split(' ')[0]).toLocaleLowerCase() === 'bearer'){
        var token = req.headers.authorization.split(' ')[1];
        jwt.verify(token,'team7project@uef.edu.vn',function(err,data){
            if (err){
                return res.status(403).send({message:'Unauthorized'})
            }
            else{
                let data = req.body;
                let file = req.file;
                console.log("file",req.file);
                Staff.update(data,file,function(response){
                    res.send({result:response});
                })  
            }
        })
    }
    else{
        return res.status(403).send({message:'Unauthorized'});
    }
}

exports.delete_employee = function(req,res){
    if (req.headers && req.headers.authorization && String(req.headers.authorization.split(' ')[0]).toLocaleLowerCase() === 'bearer'){
        var token = req.headers.authorization.split(' ')[1];
        jwt.verify(token,'team7project@uef.edu.vn',function(err,data){
            if (err){
                return res.status(403).send({message:'Unauthorized'})
            }
            else{
                let employee_id = req.params.employee_id;
                Staff.delete(employee_id,function(response){
                    res.send({result:response});
                }); 
            }
        })
    }
    else{
        return res.status(403).send({message:'Unauthorized'});
    }
}

exports.delete_employee_flg = function(req,res){
    if (req.headers && req.headers.authorization && String(req.headers.authorization.split(' ')[0]).toLocaleLowerCase() === 'bearer'){
        var token = req.headers.authorization.split(' ')[1];
        jwt.verify(token,'team7project@uef.edu.vn',function(err,data){
            if (err){
                return res.status(403).send({message:'Unauthorized'})
            }
            else{
                let data = req.body;
                Staff.delete_flg(data,function(response){
                    res.send({result:response});
                }) 
            }
        })
    }
    else{
        return res.status(403).send({message:'Unauthorized'});
    }
}

exports.login_employee = function(req,res){
    let data = req.body;
    console.log("user", data)
    Staff.login(data,function(response){
        
        if(response !== "Đăng nhập thất bại"){
            res.send(response);
        }
        else{
            res.status(403).send({message:'Đăng nhập thất bại'});
        }
    })
    
}

