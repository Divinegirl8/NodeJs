const User = require('../model/user');
const NotFoundException = require("../exceptions/NotFoundException");
const NotFound = require('../middleware/NotFound');

const createUser = async(request) =>{
const{firstName,lastName,email,password} = request;
        const user = await User.findOne({email});
        if(user){
            throw new NotFoundException("Email already in use");
        }

        const newUser = {
            firstName : firstName,
            lastName : lastName,
            email : email,
            password : password,
        };

        const savedUser = await User.create(newUser);

        const response = {
            _id : savedUser._id,
            firstName : savedUser.firstName,
            lastName : savedUser.lastName,
            email : savedUser.email,
            password : savedUser.password,
        };
        return{
            data: response,
            message: "Registration Successful"
        }
}

const login = async (request) =>{
    const {email,password} = request;

    const user = await User.findOne({email})

    if(!user){
        throw new NotFoundException("user does not exist");
    } 

    if(user.password != password){
        throw new NotFoundException("Invalid credentials");
    }

    return{
        message : "Login Successful",
    }
}

const findUser = async (request) =>{
    const {email} = request;

    const user = await User.findOne({email})

    if (!user){
        throw new NotFoundException("user does not exist");
    }

    return{
         user
    }
}

const deleteUser = async (request) => {
    const {email} = request;

    const user = await User.findOne({email})

    if (!user){
        throw new NotFoundException("user does not exist");
    }

    await User.deleteOne(user)

    return {
        message : "user deleted successfully"
    }
}

module.exports = {createUser,login,findUser,deleteUser};