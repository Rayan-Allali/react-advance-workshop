/* eslint-disable react/prop-types */
import PostCard from "./postcard"
import UseFetchUser from "../hooks/useFetchUser";

function Posts({ posts }) {
    const { user } = UseFetchUser();
    console.log(user);
    console.log(posts);
    return (
        <div>
            <h1 className="text-3xl font-bold mb-4">Posts</h1>
            <ul>
                {posts.map((post, index) => (
                    <PostCard key={index} post={post} />
                ))}
            </ul>
        </div>
    );
}

export default Posts;
