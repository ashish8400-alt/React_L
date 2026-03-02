import Header from './Component/Header';
import './App.css';
import Footer from './Component/Footer';
import Sidebar from './Component/Sidebar';
import CreatePost from './Component/CreatePost';
import PostListProvider from "./Store/PostListProvider";
import PostList from './Component/PostList';
import { useState } from 'react';

function App() {
  
  const [selectedTab, setSelectedTab] = useState("Home");


  return (
<PostListProvider>
   
    
    <div className="app-container">
    <Sidebar selectedTab = {selectedTab} setSelectedTab={setSelectedTab}></Sidebar>
    <div className="content">
      <Header></Header>

      {selectedTab === "Home" ? <PostList></PostList> : 
      (<CreatePost></CreatePost>) }


      {/* <PostList></PostList> */}
      <Footer></Footer>
      </div>
      </div>
    </PostListProvider>
  )
}

export default App
