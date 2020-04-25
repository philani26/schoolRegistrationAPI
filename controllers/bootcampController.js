
const Bootcamp = require('../models/BootcampModel');
const errorResponse = require('../utils/errorResponse')
const asyncHandler = require('../middleware/asynchandler')

//@desc     Get all bootcamps
//@router   GET /api/v1/bootcamps
//@access   PUBLIC

exports.getBootcamps = asyncHandler(async (req, res, next) =>{

        const bootcamp = await Bootcamp.find();
        res.status(200).json({success:true, data: bootcamp})
});

//@desc     Get all bootcamp
//@router   GET /api/v1/bootcamp
//@access   PUBLIC

exports.getBootcamp = asyncHandler(async (req, res, next) =>{
        const bootcamp = await Bootcamp.findById(req.params.id);
        if(!bootcamp){
            return res.status(400).json({success: false})
        }
    res.status(200).json({success: true, data: bootcamp}) 
   
   
});

//@desc     Post  bootcamp
//@router   POST /api/v1/bootcamp
//@access   private

exports.createBootcamp = asyncHandler(async (req, res, next) =>{
        const bootcamp = await Bootcamp.create(req.body);
        res.status(201).json({
            success:true,
            data: bootcamp
        });
})


//@desc     update bootcamp
//@router   PUT /api/v1/bootcamp/:id
//@access   PUBLIC
exports.updateBootcamp = asyncHandler(async (req, res, next) => {
        const bootcamp = await Bootcamp.findByIdAndUpdate(req.params.id, req.body, {
            new: true, runValidators: true
        })
        if(!bootcamp){
        return next(new errorResponse(`Bootcamp notfound withid of ${req.params.id}`, 404))
        }
        res.status(200).json({success: true, data: bootcamp})
});

//@desc     delete  bootcamp
//@router   GET /api/v1/bootcamp/:id
//@access   Private
 
exports.deleteBootcamp = asyncHandler(async (req, res, next) =>{
    const bootcamp = await Bootcamp.findByIdAndDelete(req.params.id);
    if(!bootcamp){
        return res.status(400).json({success: false});
    }
    res.status(200).json({success:true, data: {}})    
});