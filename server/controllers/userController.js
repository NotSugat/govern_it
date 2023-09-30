import { database } from "../firebase.js";
import { getDatabase, ref, set, child, get } from "firebase/database";
import expressAsyncHandler from "express-async-handler";
import bcrypt from "bcryptjs";
import { uuid } from "uuidv4";


const registerUser = expressAsyncHandler(async (req, res, next) => {
    let { email, name, password } = req.body;
    try {
        const dbRef = ref(getDatabase());
        get(child(dbRef, `users/${name}`)).then((snapshot) => {
            if (snapshot.exists()) {
                console.log(snapshot.val());
            } else {
                console.log("No data available");
            }
        }).catch((error) => {
            console.error(error);
        });
        res.json("Hello")

    } catch (error) {
        console.error('Error registering user:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});


//public route
const authUser = expressAsyncHandler(async (req, res) => {
    const { name, password } = req.body;

    try {
        const userRef = ref(database, 'users/' + name);
        onValue(userRef, async (snapshot) => {
            const data = await snapshot.val();
            //   console.log(data.password)
            if (snapshot.exists()) {
                if (await bcrypt.compare(password, data.password)) {
                    // generateToken(res,checkUser.rows[0].id)
                    res.status(201)
                    res.json(data)
                    return;
                } else {
                    res.status(401)
                    res.send("Error")
                    return;
                    // throw new Error("Invalid Email or Password")
                }
            } else {
                res.status(400).json("Invalid Email or Password");
                return;
            }
        });
    } catch (error) {
        console.error('Error Signing user:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});


// const logOutUser = expressAsyncHandler(async(req,res) =>{
//     res.cookie('jwt','',{
//         httpOnly: true,
//         expires: new Date(0)
//     })

//     res.status(200).json({message: "Logged Out Successfully"})
// });

// const getUserProfile = expressAsyncHandler(async(req,res) =>{
//     console.log(req.user)
//     res.status(200).json({mesage:"getUserProfile"})

// });

// const updateProfile = expressAsyncHandler(async(req,res) =>{
//     const {name} = req.body;
//     const id = req.user.rows[0].id;
//     const checkUser = await pool.query("SELECT * FROM users WHERE id = $1",[id])
//     if (checkUser.rowCount !== 0) {
//         const updateDetails = await pool.query("UPDATE users SET name=$1 WHERE id=$2",[name,id])            
//         res.status(200)
//         res.json(updateDetails)
//     }else{
//         res.status(404)
//         throw new Error('User Not Found')
//     }
// });
// export  {authUser,registerUser,logOutUser,getUserProfile,updateProfile};
export { registerUser, authUser }