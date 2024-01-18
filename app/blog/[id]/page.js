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
        <div className="container mx-auto ">
            <div className="">
              <img className=" border-2 border-slate-300" width="500px" src={`${process.env.STRAPI_BASE_URL}${blog.attributes.image.data.attributes.url}`} />
            </div>
            <article className="text-wrap">
              <div className="font-bold border-4 border-slate-300 bg-slate-300">{blog.attributes.title}</div>
              <div className="border-2 border-slate-300 px-2 py-2">" {blog.attributes.content} "</div>
              <div className="font-bold italic border-4 border-slate-300 bg-slate-300">author by: {blog.attributes.author.data.attributes.publisher}</div>
            </article>
         </div>
    )
}