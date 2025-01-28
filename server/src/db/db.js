const mongoose = require('mongoose');
mongoose
  .connect(
    'mongodb+srv://raisalrasheed545:IPxgVBijzxDQi5TY@bloggingapp.xct23.mongodb.net/?retryWrites=true&w=majority&appName=bloggingApp'
  )
  .then(() => {
    console.log('Db connection succesfull');
  })
  .catch(e => {
    console.log(e);
  });
module.exports = mongoose;
