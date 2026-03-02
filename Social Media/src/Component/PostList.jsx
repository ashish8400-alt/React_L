import { useContext } from "react";
import Post from "./Post";

import {PostList as PostListData} from "../Store/PostListProvider"

const PostList = ()=>{
const {PostList} = useContext(PostList)

    return <>
    {PostList.map((post)=><Post/>)}
   
    </>
}

export default PostList;