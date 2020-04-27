const fs = require('fs');
const mongoose = require('mongoose');
const colors = require('colors');
const dotenv = require('dotenv');

// load dotenv
dotenv.config({path: './config/config.env'});

// load model 
const Bootcamp = require('./models/BootcampModel');

// connect DB
mongoose.connect('mongodb://localhost/devcamper', {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true 
    });

    const bootcamp = JSON.parse(
        fs.readFileSync(`${__dirname}/_data/bootcamps.json`, 'utf-8'
        ))

        const importData = async ()=>{
            try {
               await Bootcamp.create(bootcamp);
                console.log('Data Imported'.green.inverse);
                process.exit();
            } catch (err) {
                console.error(err)
            }
        }

        const DeleteData = async() =>{
            try {
                await Bootcamp.deleteMany();
                console.log('Data Deleted'.red.inverse)
                process.exit();
            } catch (err) {
                console.error(err)
            }
        }

        if(process.argv[2] === '-i'){
            importData();
        }else if(process.argv[2] === '-d'){
            DeleteData();
        }

        