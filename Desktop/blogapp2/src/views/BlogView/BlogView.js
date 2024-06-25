import React from 'react'
import "./BlogView.css"
import { useParams } from 'react-router-dom'
import blogs from "./../../data"

function BlogView() {
    const {id}= useParams()

    const selectedBlog=blogs.find((blogData)=>{
        if(blogData.id==id){
            return true
        }
        else{
            return false
        }
    })
    console.log(selectedBlog)
  return (
    <div>
      <h1>Blog View:{id}</h1>
    </div>
  )
}

export default BlogView
