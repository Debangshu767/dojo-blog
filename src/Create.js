import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Create = () => {

    const[title , setTitle] = useState('')
    const[body , setBody] = useState('')
    const[author , setAuthor] = useState('')
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault() ;
        const blog = {title , body , author};

        fetch('http://localhost:8000/blogs', {
            method : 'POST' ,
            headers : { "Content-Type": "application/json" },
            body : JSON.stringify(blog)

        }).then(() => {
            console.log("New added");
            history.push('/')
        })
    }



    return ( 
        <div className="create">
            <h2>Add Blog</h2>
            <form onSubmit={handleSubmit}>
                <label> Blog Title</label>
                <input
                type="text" 
                required
                value={title}
                onChange = {(e) => setTitle(e.target.value)  } />

                <label> Blog Title</label>
                <textarea 
                required
                value={body}
                onChange = {(e) => setBody(e.target.value)  }
                ></textarea>

                <label>Blog Author</label>
                <input type="text" 
                required
                value={author}
                onChange = {(e) => setAuthor(e.target.value)  } />       
                <button>Add Blog</button>     
                </form>
        </div>
     );
}
 
export default Create;