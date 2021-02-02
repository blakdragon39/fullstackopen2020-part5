import React from 'react'

const Blogs = ({ blogs }) => (
    <div>
        <h2>Blogs</h2>
        {blogs.map(blog =>
            <Blog key={blog.id} blog={blog}/>
        )}
    </div>
)

const Blog = ({ blog }) => (
    <div>
        {blog.title} {blog.author}
    </div>
)

export default Blogs