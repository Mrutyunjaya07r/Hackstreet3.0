let express=require('express')
let router=express.Router();
let mongoose=require('mongoose');
let USER=mongoose.model("USER");
let POST=mongoose.model("POST");
let ARTICLE=mongoose.model("ARTICLE");
let jwt=require('jsonwebtoken');
let {Jwt_secret}=require('../key');
const requirelogin = require('../middleware/requirelogin');

router.get("/",(req,res)=>{
    res.send("hello from router")
})

router.get("/addpost",requirelogin,(req,res)=>{
    console.log("hello from router")
})

router.post("/signup",(req,res)=>{
    const {fullname,username,password,email}=req.body
    if(!fullname||!username||!password||!email){
        res.status(400).send({message:"Please fill all fields"})
    }
    let user=new USER({
        username,
        fullname,
        password,
        email
    }
    )
    let result=user.save()
    console.log(result)
    res.send(result)
})

router.post("/signin",(req,res)=>{
    const {password,email}=req.body
    if(!password||!email){
        res.status(400).send({message:"Please fill all fields"})
    }
    USER.findOne({email:email}).then((savedUser)=>{
        if(!savedUser){
            res.status(400).send("invalid data")
        }
        console.log(savedUser)
    })
    USER.findOne({password:password}).then((savedUser)=>{
        if(!savedUser){
            res.status(400).send("invalid data")
        }
        console.log(savedUser)
        let token=jwt.sign({_id:savedUser.id},Jwt_secret);
        console.log(token)
        res.json(token)
    })
})

router.post("/posts",requirelogin,(req,res)=>{
    const {textbody}=req.body
    if(!textbody){
        res.status(400).send({message:"Please fill all fields"})
    }
    req.user
    let post=new POST({
        textbody,
        postedBy:req.user,
    })
    let result=post.save()
    console.log(result);
    res.send(result)
})
router.get('/getpost',(req,res)=>{
    POST.find()
    .populate("postedBy").select("-password")
    .then((data)=>{console.log(data);res.send(data)})
    .catch((err)=>{console.log(err)})
})

router.post('/article',(req,res)=>{
    const {articleText,articleTitle}=req.body
    if(!articleText||!articleTitle){
        res.status(400).send({message:"Please fill all fields"})
    }
    let article=new ARTICLE({
        articleText,
        articleTitle
    })
    let result=article.save();
    console.log(result);
    res.send(result)
})
router.get("/getarticle",async(req,res)=>{
    let result=await ARTICLE.find();
    if(!result){
        res.status(400).send({message:"Not get data"})
    }
    res.send(result)
})


router.post('/completions', async (req, res) => {
    let api_key="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"
    try {
        if (!req.body.message) {
            return res.status(400).json({ error: "Message content is required" });
        }

        const response = await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer  `+api_key,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                model: 'gpt-3.5-turbo',
                messages: [{ role: 'user', content: req.body.message }],
                max_tokens: 100,
            })
        });

        const data = await response.json();
        
        if (response.ok) {
            res.json(data);
        } else {
            res.status(response.status).json(data);
        }
    } catch (err) {
        console.error("Error:", err);
        res.status(500).json({ error: "Internal Server Error" });
    }
});


module.exports=router