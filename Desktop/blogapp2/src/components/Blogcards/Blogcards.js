import React from 'react'
import "./Blogcards.css"

function Blogcards({title,content,author, data,categories}) {
  return (
    <div className="blog-cards">
      <h1 className="blog-title">{title}</h1>
      <p className="blog-content">{content.substring(0,120)}...</p>
      <div className="author"> 
        <img src={author.avatar} alt="author-img" className="author-avatar"/>
        <span className='author-name'>{author.name}</span>
        
      </div>
    </div>
  )
}

export default Blogcards
