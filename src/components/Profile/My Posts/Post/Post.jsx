import React from "react";
import s from './Post.module.css';

const Post = (props) => {
    return (
            <div className={s.item}>
                <img src= 'https://interactive-examples.mdn.mozilla.net/media/examples/grapefruit-slice-332-332.jpg'/>
                {props.message}

                <div>
                    <span>like {props.like}</span>
                </div>
            </div>

    )
}

export default Post;