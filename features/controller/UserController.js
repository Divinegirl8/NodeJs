const { response } = require("express");
const {createUser,login,findUser,deleteUser} = require("../service/userService");



const register = async (request,response) =>{
    try {
        const res = await createUser(request.body);
        response.status(200).json({res})
    } catch (error) {
        response.status(404).json(error.message)
    }
}

const loginUser = async (req,res) =>{
      return await login(req.body)
      .then((response) => res.json(response))
      .catch((error) => res.json(error.message))
};

const userFinder = async (request,response) => {
    try{
        const res = await findUser(request.body);
        response.status(200).json({res})
    }catch(error) {
        response.status(404).json(error.message);
    }
};

const userDeleting = async (req,res) =>{
    return await deleteUser(req.body)
    .then((response) => res.json(response)).catch((error) => res.json(error.message))
};

module.exports = {register,loginUser,userFinder,userDeleting};