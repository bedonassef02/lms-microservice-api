const userService = require('./user.service')
const passwordService = require('./password.service')

exports.register = (req, res) => {
    const {email, password} = req.body;
    const hashedPassword = passwordService.hashedPassword(password);
    const user = userService.create({email, password: hashedPassword});
};

exports.login = (req, res) => {
    const {email, password} = req.body;
};
