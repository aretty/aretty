"use strict"

const { response } = require("express")
const UserStorage = require("./UserStorage")

class User {
    constructor(body) {
        this.body = body;
    }

    async login(serverType) {
        if(serverType == "local"){
            var srcPath = "./src/databases/users.json";
        } else {
            var srcPath = "/home/hosting_users/aretty/apps/aretty_aretty/src/databases/users.json";
        }

        const client = this.body;
        const { id, password } = await UserStorage.getUserInfo(srcPath,client.id) 

        if(id){
            if(id === client.id && password === client.password){
                return { success : true };
            }
            return { success : false, msg : "비밀번호가 틀렸습니다." };
        }
        return { success : false, msg : "존재하지 않는 아이디입니다." };
    }

    async register(serverType) {
        if(serverType == "local"){
            var srcPath = "./src/databases/users.json";
        } else {
            var srcPath = "/home/hosting_users/aretty/apps/aretty_aretty/src/databases/users.json";
        }

        const client = this.body;
        try{
            const response = await UserStorage.save(srcPath, client)
            return response;
        } catch (err){
            return { success : false, msg : err };
        }
    }
}

module.exports = User;