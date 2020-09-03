const express=require("express");
const bodyParser=require("body-parser");
const ejs=require("ejs");
const mongoose=require("mongoose");
const md5=require("md5");


const app=express();
app.use(express.static("public"));
app.set('view engine','ejs');
app.use(bodyParser.urlencoded({extended:true}));

mongoose.connect("mongodb+srv://admin-Gt:goransh@cluster0-kellj.mongodb.net/ShoppingDB",{useNewUrlParser: true});

const userSchema={
  email: String,
  password: String,
  name:String,


};

const User=mongoose.model("User",userSchema);


app.get("/",function(req,res){
  res.render("register");
});

app.get("/home",function(req,res){
  res.render("home");
});

app.get("/login",function(req,res){
  res.render("login");
});

// app.get("/register",function(req,res){
//   res.render("register");
// });

app.get("/contact",function(req,res){
  res.render("contact");
});

app.get("/rajasthani1",function(req,res){
  res.render("rajasthani1");
});
app.get("/rajasthani2",function(req,res){
  res.render("rajasthani2");
});
app.get("/rajasthani3",function(req,res){
  res.render("rajasthani3");
});

app.get("/gujrati1",function(req,res){
  res.render("gujrati1");
});
app.get("/gujrati2",function(req,res){
  res.render("gujrati2");
});
app.get("/gujrati3",function(req,res){
  res.render("gujrati3");
});

app.get("/bengali1",function(req,res){
  res.render("bengali1");
});
app.get("/bengali2",function(req,res){
  res.render("bengali2");
});
app.get("/bengali3",function(req,res){
  res.render("bengali3");
});

app.get("/marathi1",function(req,res){
  res.render("marathi1");
});
app.get("/marathi2",function(req,res){
  res.render("marathi2");
});
app.get("/marathi3",function(req,res){
  res.render("marathi3");
});

app.post("/register",function(req,res){
  const newUser=new User({
    name:req.body.name,
    email:req.body.username,
    password:md5(req.body.password)
  });
  newUser.save(function(err){
    if(err){
      console.log(err);
    }
    else{
      res.render("login");
    }
  });
});

app.post("/login",function(req,res){
  const username=req.body.username;
  const password=md5(req.body.password);

  User.findOne({email:username},function(err,foundUser){
    if(err){
      console.log(err);
    }else{
      if(foundUser){
        if(foundUser.password===password){
          res.render("home");
        }
      }
    }
  });
});
let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}
app.listen(port,function(){
  console.log("port 300 is start");
});
