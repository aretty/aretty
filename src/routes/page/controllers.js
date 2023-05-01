"use strict"

const output = {
    main : (req, res) => {
        res.render('index')
    },
    login : (req, res) => {
        res.render('login')
    },
};

const user = {
    id : ["test1","test2","test3"],
    password : ["1234","12345","123456"],
}

const process = {
    login : (req,res) => {
        const id = req.body.id,
        password = req.body.password;

        if(user.id.includes(id)) {
            const idx = user.id.indexOf(id);
            
            if(user.password[idx] === password){
                return res.json({
                    success : true,
                });
            }
        }

        return res.json({
            success : false,
            msg : "로그인 실패",
        });
    }
}

module.exports = {
   output,
   process,
};