import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {

    let posts = [
        {id: 1, message: 'Hi, how are you?' , likesCount: 12},
        {id: 2, message: 'Its my first post', likesCount: 15}
    ]

    let postsElements = posts
        .map(p =><Post message={p.message} likesCount={p.likesCount} />);

    return (
        <div className={s.postsBlock}>
            <h3>My Posts</h3>
            <div>
               <div>
                <textarea></textarea>
               </div>
               <div>
                <button>Add Post</button>
               </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;