import express from "express";
// import {authUser,registerUser,logOutUser,getUserProfile,updateProfile} from "../controllers/userController.js";
import { authUser, registerUser } from "../controllers/userController.js";

const router = express.Router();

router.post('/',registerUser);
 
router.post('/auth',authUser);

// router.post('/logout',logOutUser);

// router.route('/profile').get(protect,getUserProfile).put(protect,updateProfile);

export default router;