require('dotenv').config();
const express = require('express')
const usersRoute = require('./src/routes/userRoute');
const commonMiddle = require('./src/middleware/middle')
const morgan = require('morgan');
const cors = require('cors');
const PORT = process.env.PORT || 4000;

const app = express();

app.use(cors());
app.use(express.json());
app.use(commonMiddle.myConsole);

app.use(morgan('dev'));

app.use('/users', usersRoute);

app.use('/file', express.static('./uploads'));

app.use((err, req, res, next) => {
    const codeStatus = err.status || 500;
    const message = err.message || 'Internal Server Error';
    res.status(codeStatus);
    res.json({
      message: message
    });
  });


app.listen(PORT, () => {
    console.log(`server starting on port ${PORT}`);
});