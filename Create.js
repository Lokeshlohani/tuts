import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () =>
{

    const [title, setTitle]= useState('');
    const [body, setBody]= useState('');
    const [author, setAuthor]= useState('ben');
    const [isPending, setisPending]= useState(false);
    const history= useHistory();


    const handleSubmit=(e)=>{

        e.preventDefault();//prevent default refresh
        const blog ={title, body, author} // blog object to store values

       // console.log(blog);

       setisPending(true);

       fetch(' http://localhost:8000/blogs',{
        method:'POST',
        headers:{"Content-Type": "application/json"},
        body: JSON.stringify(blog) // covert blog object into Json format
       }).then(()=>{
        console.log("Added");
        setisPending(false);
        history.push('/');
      })   
    }



    return (
        <div  className="create">

            <h2>Add New Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog Title</label>
                <input
                    type="text"
                    required   
                    value ={title}  
                    onChange={(e)=> setTitle(e.target.value)}          
                />
                <label>Blog Body:</label>
                <textarea 
                     required
                     value={body}
                     onChange={(e)=> setBody(e.target.value)}
                ></textarea>
                <label>Blog author:</label>
                <select value = {author} onChange={(e)=>setAuthor(e.target.value)}>
                    <option value="mario">mario</option>
                    <option value="ben">ben</option>
                </select>

                {!isPending && <button>Add Blog</button>}
                { isPending && <button disabled>Adding Blog......</button>}

            
            </form>

        </div>
    );
}

export default Create;