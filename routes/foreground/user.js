/*
 * @Descripttion: 登陆注册模块
 * @Author: WSY
 * @Date: 2019-09-14 16:53:11
 * @LastEditTime: 2019-09-16 00:42:25
 */

const express = require('express')
const router = express.Router()
const userController = require('../../controllers/foreground/user')

router.post('/register', (req, res) => {
  try {
    userController.creactRegister(req.body).then(result => {
      res.json(result)
    })
  } catch (err) {
    throw new Error(err)
  }
})

router.post('/login', (req, res) => {
  try {
    userController.userLogin(req.body).then(result => {
      res.json(result)
    })
  } catch (err) {
    throw new Error(err)
  }
})

router.get('/email',async (ctx)=>{
 
    var email = ctx.query.email;//刚刚从前台传过来的邮箱
    var user_name = ctx.query.user_name;//刚刚从前台传过来用户名
    var code = await tools.createSixNum();//这里是我写的生成的随机六位数，等等下面给代码
    var date = new Date();//获取当前时间
    var isLive = "no";
    //去数据库中找有没有同名的用户名，这里就要自己写了，不同的数据库查询方法不同
    var result = await DB.find('user',{user_name:user_name});
 
    //console.log(result);
 
    if(result.length>0){
        ctx.body ={success:false,message:"账号已经存在"}
    }else{
        ctx.body ={success:true,message:"账号可行"};//数据传回前台
        var mail = {
            // 发件人
            from: '<847805109@qq.com>',
            // 主题
            subject: '接受凭证',//邮箱主题
            // 收件人
            to:email,//前台传过来的邮箱
            // 邮件内容，HTML格式
            text: '用'+code+'作为你的验证码'//发送验证码
        };
 
        var json = {user_name,email,code,date,isLive};
        await DB.insert('user',json);//将获取到的验证码存进数据库，待会提交时要检查是不是一致
        await nodemail(mail);//发送邮件
    }
})

module.exports = router