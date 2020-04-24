const Bootcamp = require('../models/BootcampModel');
//@desc     Get all bootcamps
//@router   GET /api/v1/bootcamps
//@access   PUBLIC

exports.getBootcamps = async (req, res, next) =>{
    try {
        const bootcamp = await Bootcamp.find();
        res.status(200).json({success:true, data: bootcamp})
    } catch (err) {
        res.status({success: false})
    }
};

//@desc     Get all bootcamp
//@router   GET /api/v1/bootcamp
//@access   PUBLIC

exports.getBootcamp = async (req, res, next) =>{
    try {
        const bootcamp = await Bootcamp.findById(req.params.id);
        if(!bootcamp){
            return res.status(400).json({success: false})
        }
    res.status(200).json({success: true, data: bootcamp}) 
    } catch (error) {
        res.status(400).json({success: false})   
    }
   
};

//@desc     Post  bootcamp
//@router   POST /api/v1/bootcamp
//@access   private

exports.createBootcamp = async (req, res, next) =>{
    try {
        const bootcamp = await Bootcamp.create(req.body);
        res.status(201).json({
            success:true,
            data: bootcamp
        });
    } catch (err) {
        res.status(401).json({
            success: false,
        })
    }

}


//@desc     update bootcamp
//@router   PUT /api/v1/bootcamp/:id
//@access   PUBLIC
exports.updateBootcamp = async (req, res, next) => {
    try {
        const bootcamp = await Bootcamp.findByIdAndUpdate(req.params.id, req.body, {
            new: true, runValidators: true
        })

        if(!bootcamp){
            return res.status(400).json({success: false})
        }
        res.status(200).json({success: true, data: bootcamp})
    } catch (error) {
        res.status(400).json({success:false})
        
    }
};

//@desc     delete  bootcamp
//@router   GET /api/v1/bootcamp/:id
//@access   Private

exports.deleteBootcamp = async (req, res, next) =>{
try {
    const bootcamp = await Bootcamp.findByIdAndDelete(req.params.id);
    if(!bootcamp){
        return res.status(400).json({success: false});
    }
    res.status(200).json({success:true, data: {}})
} catch (error) {
    res.status(400).json({success: false});
}    
}

