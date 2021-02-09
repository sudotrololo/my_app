import css from "./posts.module.css"
import posts_data from "../../data/posts_data";
import Post from "./post";

const Posts = () => {
    let all_posts = posts_data.map(post => <Post title={post.title} text={post.title}/>);

    return (
        <div className={`${css.posts} content`}>
            {all_posts}
        </div>
    )
}

export default Posts