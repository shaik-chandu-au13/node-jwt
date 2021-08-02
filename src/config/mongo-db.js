const mongoose = require('mongoose');
// mongo DB atlass URL
const MONGOURI = 'mongodb+srv://admin:admin@cluster0.ko9v1.mongodb.net/nodeJwt?retryWrites=true&w=majority'


// database connection
const InitMongo = async () => {
    try {
        await mongoose.connect(MONGOURI,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Connected to mongodb!!')
    } catch (e) {
        console.log(e);
        throw e;
    }
};

module.exports = InitMongo;
