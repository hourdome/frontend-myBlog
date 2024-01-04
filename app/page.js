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
    <div className="container mx-auto">
      Blog Review
      <div className="grid grid-cols-4 grid-rows-2">
      {
        blogs.map((blog, index) => (
          <div className="flex flex-col" key={index}>
            <div className="text-2xl">{blog.attributes.title}</div>
            <div className="text-2xl">{blog.attributes.type}</div>
            <Link href={`blog/${blog.id}`}className="bg-blue-100 p-4" >see more</Link>
          </div>
        ))
      }
      </div>
    </div>
  )
}