import axios from "axios"
import Link from "next/link"

const fetchBlogs = async() =>{
  try{
    const response = await axios.get(`${process.env.STRAPI_BASE_URL}/api/blogs`)
    return response.data.data
  } catch (error){
    console.error()
    return []
  }

}


export default async function Page() {
  const blogs = await fetchBlogs()

  return(
    <div className="container mx-auto py-4">
      <div>
        <p className="font-3xl bg-slate-500	text-white px-2 py-4">Blog Review</p>
      </div>
      <div>
        <br></br>
      </div>
      <div className="grid grid-cols-4 grid-rows-2 gap-2">
      {
        blogs.map((blog, index) => (
          <div className="flex flex-col border-2 border-slate-400" key={index}>
            <div className="text-base px-2 py-4 font-bold">{blog.attributes.title}</div>
            <Link href={`blog/${blog.id}`}className="border-4 border-slate-300 bg-slate-200 p-5 " >see more</Link>
          </div>
        ))
      }
      </div>
    </div>
  )
}