const User = require('../models/user');

module.exports.userReg = (req, res) => {
  const { body: { mobile, pwd, name } } = req;


  User.findOne({ mobile }, (err, content) => {
    if (err) {
      res.status(400);
      return res.send({ status: 400, msg: 'error' });
    } else {
      if (content && content.mobile) {
        res.status(400);
        return res.send({ status: 400, msg: '该手机号已注册' });
      } else {

        new User({
          mobile,
          pwd,
          name,
        }).save((err) => {
          if (err) {
            return res.send({ status: 400, msg: err || '注册失败' });
          } else {
            return res.send({ status: 200, msg: '注册成功' });
          }
        });
      }
    }
  });
};

module.exports.userLogin = (req, res, next) => {
  const { body: { mobile, pwd: userPwd } } = req;
  User.findOne({ mobile }, (err, content) => {
    if (err) {
      return res.send({ status: 400, msg: err || '登录失败' });
    } else {
      if (content && content.pwd) {
        const { pwd } = content;
        if (pwd === userPwd) {
          const userData = {
            "user_id": content._id,
            name: content.name,
            mobile: content.mobile,
          };

          return res.send({ status: 200, msg: '登录成功', data: userData });
        } else {
          res.status(400);
          return res.send({ status: 400, msg: err || '账号密码错误' });
        };
      } else {
        res.status(400);
        return res.send({ status: 400, msg: '请先注册' });
      }
    };
  })
}