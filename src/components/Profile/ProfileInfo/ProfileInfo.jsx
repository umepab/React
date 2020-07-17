import React from "react";
import s from './Profile.Info.css';

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src='https://fullhdwall.com/wp-content/uploads/2018/06/Free-Summer-Image.jpeg'/>
            </div>
            <div className={s.descriptionBlock}>
                ava+descr
            </div>

        </div>
    )
}

export default ProfileInfo;