import axios from "axios"

const fetchBlog = async (id) =>{
    try{
      const response = await axios.get(`${process.env.STRAPI_BASE_URL}/api/blogs/${id}?populate=author,image`)
      return response.data.data
    } catch (error){
      console.error()
      return []
    }
  
}

export default async function Page({ params }){
    const blogId = params.id
    const blog = await fetchBlog(blogId)
    return(
        <div className="container mx-auto">
            <div>{blog.attributes.title}</div>
            {/* <img width="500px" src={`${process.env.STRAPI_BASE_URL}${blog.attributes.image.data.attributes.url}`} /> */}
            <div>author by: {blog.attributes.author.data.attributes.publisher}</div>
        </div>
    )
}