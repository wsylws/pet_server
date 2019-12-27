const nodemailer = require("nodemailer");

let obj = {
  transporter: nodemailer.createTransport({
    service: "qq", // 运营商  qq邮箱 网易//
    port: 465,
    secure: true,
    auth: {
      user: "847805109@qq.com", //发送方的邮箱
      pass: "fcgirlbwpamvbfce" // pop3 授权码
    }
  }),
  send: function(mail, content,callback) {
    mailOptions = {
      from: '"宠物领养网站" <847805109@qq.com>',
      to: mail,
      subject: content,
      text: content,
      html: "<h1>" + "验证码为:" + content + "</h1>"
    };
    this.transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return console.log(error);
      }
      console.log("Message sent: %s", info.messageId);
      callback();
    });
  }
};
module.exports = obj;