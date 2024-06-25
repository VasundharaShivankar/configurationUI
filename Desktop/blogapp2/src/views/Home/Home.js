import React from 'react'
import "./Home.css"
import blogs from "./../../data"
import Blogcards from '../../components/Blogcards/Blogcards'

function Home() {
  return (
    <div className="blogs-container">
    {
        blogs.map((blogData,i)=>{
        const {
            title,
            content,
            author,
            date,
            categories
        }= blogData

        return(<Blogcards
        key={i}
        title={title}
        content={content}
        author={author}
        date={date}
        categories={categories}
        />)
        })
    }
    </div>
  )
}

export default Home
