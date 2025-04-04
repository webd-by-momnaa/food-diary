const Auth = require("../models/auth")
const bcrypt = require("bcrypt")

const saveData = async (req,res) =>{
    const {name,email,password} = req.body;
    try {
        const check  = await Auth.findOne({email})
        if(check){
            res.status(200).send(check.email + "already existed")
        }        
        const data = await bcrypt.hash(password,10)
        const user = new Auth({
            name,email,password:data
        })
        await user.save();
        res.status(200).send(user)
        
    } catch (error) {
        res.status(400).send(error.message)
    }
}

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await Auth.findOne({ email });

        if (!user) {
            return res.status(404).send("User does not exist"); // Use `return` to avoid further code execution
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (isPasswordValid) {
            return res.status(200).send({message:"User logged in successfully",user:user});
        }

        return res.status(401).send("Invalid credentials");
    } catch (error) {
        return res.status(500).send(error.message); // Return proper server error code
    }
};


module.exports = {saveData, login}