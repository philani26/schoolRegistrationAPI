
//@desc     Get all bootcamps
//@router   GET /api/v1/bootcamps
//@access   PUBLIC

exports.getBootcamps = (req, res, next) =>{
    res.status(200).json({success: true, smg: 'show all bootcamps'});
};

//@desc     Get all bootcamp
//@router   GET /api/v1/bootcamp
//@access   PUBLIC

exports.getBootcamp = (req, res, next) =>{
    res.status(200).json({success: true, msg: `Show only one bootcamp ${req.params.id}` });

};

//@desc     Post  bootcamp
//@router   POST /api/v1/bootcamp
//@access   private

exports.createBootcamp = (req, res, next) =>{
    res.status(200).json({success: true, msg: 'creat bootcamps'})

}


//@desc     update bootcamp
//@router   PUT /api/v1/bootcamp/:id
//@access   PUBLIC
exports.updateBootcamp = (req, res, next) => {
    res.status(200).json({success: true, msg: `Update bootcamp ${req.params.id}`})

};

//@desc     delete  bootcamp
//@router   GET /api/v1/bootcamp/:id
//@access   Private

exports.deleteBootcamp = (req, res, next) =>{
    res.status(200).json({success: true, msg: `Delete bootcamp ${req.params.id}`})

}

