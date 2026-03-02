import { createContext, useReducer } from "react";



export const PostList = createContext(
    {
        postList: [],
        addPost: () => { },
        deletePost: () => { },
    }
);

const postListReducer = (currPostList, action) => {
    return currPostList;
}

const PostListProvider = ({ children }) => {
    const [postList, dispatchPostList] = useReducer(
        postListReducer,
        DEFAULT_POST_LIST)

    const addPost = () => {

    }

    const deletePost = () => {

    }



    return <PostList.Provider value={
        {
            postList: postList,
            addPost: addPost,
            deletePost: deletePost
        }
    }>{children} </PostList.Provider>
};

const DEFAULT_POST_LIST = [
    {
        id: '1',
        title: 'Going to mumbai',
        body: 'Hi Friends iam going to Mumbai for my Vacations ',
        reactions: 2,
        userId: 'user-9',
        tags: ['vacation', 'mumbai', 'Enjoying']
    },
    {
        id: '2',
        title: 'Pass ho bhai',
        body: '4 saal baad b tech complete ',
        reactions: 15,
        userId: 'user-12',
        tags: ['graduting', 'unbelivable']
    }
]

export default PostListProvider;