const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const testAPIRouter = require('./routes/testAPI');
const menuRouter = require('./routes/menuRouter');
const updateMenuRouter = require('./routes/updateMenuRouter');


module.exports = (app) => {
    app.use('/', indexRouter);
    app.use('/users', usersRouter);
    app.use('/menu', menuRouter);
    app.use('/testAPI', testAPIRouter);
    app.use('/updateMenu', updateMenuRouter);
}