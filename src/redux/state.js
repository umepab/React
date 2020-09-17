
let state ={
    profilePage: {
        posts: [
            {id: 1, message: 'Hi, how are you?' , likesCount: 12},
            {id: 2, message: 'Its my first post', likesCount: 15}
        ],
    },

    dialogsPage: {
        messages:[
            {id: 1, message: 'Hi'},
            {id: 2, message: 'Hove are You?'},
            {id: 3, message: 'Nice to meet you'},
        ],

        dialogs: [
            {id: 1, name: 'Dimych'},
            {id: 2, name: 'Andrey'},
            {id: 3, name: 'Sveta'},
            {id: 4, name: 'Sasha'},
            {id: 5, name: 'Viktor'},
            {id: 6, name: 'Valera'}
        ]

    }

}

export let addPost = (postMessage) => {
    let newPost = {
        id: 5 ,
        message: postMessage,
        likesCount: 0
    }
    state.profilePage.posts.push(newPost)
};

export default state