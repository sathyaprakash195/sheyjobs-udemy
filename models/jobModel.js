const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
    title: {type : String, required: true},
    department: {type : String, required: true},
    salaryFrom : {type : Number, required: true},
    salaryTo : {type : Number, required: true},
    experience : {type : String, required: true},
    smallDescription : {type : String, required: true},
    fullDescription : {type : String, required: true},
    minimumQualification : {type : String, required: true},
    skillsRequired : {type : String, required: true},
    company :{type : String, required: true},
    email : {type : String, required: true},
    phoneNumber : {type : String, required: true},
    companyDescription : {type : String, required: true},
    appliedCandidates : {type : [] , required: true},
    postedBy : {type : String, required: true},
},{
    timestamps : true,
})

const jobModel = new mongoose.model('jobs' , jobSchema)
module.exports = jobModel