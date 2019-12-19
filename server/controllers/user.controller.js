const User = require('../models/user');

const getUser = (req, res, next) => {
    res.json('get user');
}

const createUser = (req, res, next) => {
    const body = req.body;

    const user = new User({
        name: body.name,
        email: body.email,
        password: body.password,
        img: body.img,
    });

    user.save((err, userDB) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err
            });
        }

        res.json({
            ok: true,
            user: userDB
        });
    });
};

const updateUser = (req, res, next) => {
    const id = req.params.id
    res.json({ id });
}

const deleteUser = (req, res, next) => {
    const id = req.params.id
    res.json({ id });
}

module.exports = {
    getUser,
    createUser,
    updateUser,
    deleteUser
}
