import { useEffect, useState } from "react";
import "./App.css";
import customAxios from "./api/customAxios";
import Posts from "./components/posts";
import {  UserContextProvider } from "./context/userContext";
function App() {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    try {
      const api = await customAxios();
      const response = await api.get("/posts")
      if (response.status >= 200 && response.status < 300) {
        setPosts(response.data);
      }
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);
  return (
    <>
    <UserContextProvider >
     <Posts posts={posts} />
    </UserContextProvider>
   
    </>
  );
}

export default App;
