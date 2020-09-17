import React from "react";
import s from './Post.module.css';

const Post = (props) => {
    return (
            <div className={s.item}>
                <img src= 'https://files.adme.ru/files/news/part_165/1658265/8882015-41015410-1-0-1514194714-1514194724-1500-1-1514194724-650-4561b7ccf5-1514279441.jpg'/>
                {props.message}

                <div>
                    <span>like {props.likesCount}</span>
                </div>
            </div>

    )
}

export default Post;