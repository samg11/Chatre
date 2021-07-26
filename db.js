const mongoose = require('mongoose');

require('dotenv').config();

console.log(process.env.db_user, process.env.db_password);

mongoose.connect(`mongodb+srv://${process.env.db_user}:${process.env.db_password}@cluster0.pmmuq.mongodb.net/users`, {
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true 
})
    .then(() => {
        console.log('Database Connected');
    })

    .catch(console.error);

const User = mongoose.model('User', {
    username: String,
    password: String,
    dateSignedUp: Date
});

function createUser(username, password) {
    const user = new User({ username: username, password: password, dateSignedUp: Date.now() });
    user.save().then(() => console.log('user saved to database'));
}

exports.createUser = createUser;