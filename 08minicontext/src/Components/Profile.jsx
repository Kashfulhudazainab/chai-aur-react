import React,{useState, useContext} from "react";
import UserContext from "../Context/UserContext";

function Profile(){

const { user } = useContext(UserContext); // ✅ Correct!

if(!user) return <div>plz login</div>
return <div>welcome {user.username}</div>
}

   
export default Profile;