import BlogListt from "./BlogListt";
import useFetch from "./useFetch";


const Home = () => {


    //let name = "kcdk";

    const {data : blogs, ispending, error}= useFetch(' http://localhost:8000/blogs');
        return (
            <div className="home">            
            { error &&  <div>{error}</div>}
            {ispending && <div>Loading..</div>}
            {blogs && <BlogListt blogs={blogs} title="All Blogs"/>}
             
            </div>
          );
}
 
export default Home;