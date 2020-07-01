import React from "react";
import s from './Profile.module.css';
import MyPosts from "./My Posts/MyPosts";

const Profile = () => {
    return <div className={s.content}>
        <div>
            <img src='https://fullhdwall.com/wp-content/uploads/2018/06/Free-Summer-Image.jpeg'/>
        </div>
        <div>
            ava+descr
        </div>

        <MyPosts/>
    </div>
}

export default Profile;