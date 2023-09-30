import { database } from "../firebase.js";
import { getDatabase, ref, set, child, get } from "firebase/database";
import expressAsyncHandler from "express-async-handler";
import bcrypt from "bcryptjs";
import { uuid } from "uuidv4";


const registerUser = expressAsyncHandler(async (req, res, next) => {
    const { email, name, password } = req.body;

    try {
        const dbRef = ref(getDatabase());
        const snapshot = await get(child(dbRef, `users/${name}`));
    
        if (snapshot.exists()) {
            console.log("User with the same name already exists");
            res.status(400).json({ error: 'User with the same name already exists' });
        } else {
            const salt = await bcrypt.genSalt(5);
            const hashedPassword = await bcrypt.hash(password, salt);
    
            await set(child(dbRef, `users/${name}`), {
                email: email,
                password: hashedPassword // Store the hashed password, not the plain password
            });
    
            res.status(200).json("User inserted successfully");
        }
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
        const snapshot = await get(userRef);
    
        if (snapshot.exists()) {
            const data = snapshot.val();
            const passwordMatch = await bcrypt.compare(password, data.password);
    
            if (passwordMatch) {
                // Password matches, send success response with user data
                res.status(200).json(data);
            } else {
                // Password does not match, send unauthorized error response
                res.status(401).json({ error: 'Invalid Password' });
            }
        } else {
            // User does not exist, send not found error response
            res.status(404).json({ error: 'User Not Found' });
        }
    } catch (error) {
        console.error('Error Signing user:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }    
});


export { registerUser, authUser }