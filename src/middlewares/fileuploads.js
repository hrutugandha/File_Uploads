const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname, "../my_Uploads"))
    },
    filename: function (req, file, cb) {
        console.log({file})
      const uniquePrefix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, uniquePrefix + '-' +  file.fieldname)
    }
  });

  const fileFilter = (req, file, cb) => {

    // The function should call `cb` with a boolean
    // to indicate if the file should be accepted
  
    // To reject this file pass `false`, like so:

    if(file.mimetype === "image/png" || file.mimetype === "image/jpeg"){

        cb(null, true)
    }else{
        cb(null, false)
    }
    
  
    // To accept the file pass `true`, like so:

  
    // You can always pass an error if something goes wrong:
    cb(new Error('I don\'t have a clue!'))
  
  }

const uploadOptions = multer({
    storage:storage,
    fileFilter:fileFilter,
    limits:{
        fileSize: 1024 * 1024 * 5
    }
});

const uploads = multer(uploadOptions);

module.exports = uploads;