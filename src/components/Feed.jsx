import React, { useState } from 'react'
import {posts} from '../mock-backend/sample-posts'
import { Link } from 'react-router-dom'
import {ROUTES} from '../app/routes'
import './Feed.css'

export default function Feed (){
    const [feed, setFeed] = useState(posts)
    const [showComments, setShowComments] = useState(false)

    const handleShowComments = () => {
        setShowComments(true)
    }
    return (
        <div className='feed'>
            {feed.map(post => (
                <div key={post.id} className='post'>
                    <Link to={ROUTES.TO_PROFILE(post.username)}><h2 className='post-username'>{post.username}</h2></Link>
                    <p className='post-content'>{post.content}</p>
                    <section className='post-statistics'>
                        <p>Likes: {post.likes}</p>
                        <p>Comments: {post.comments.length}</p>
                    </section>
                    <section className='post-interactions'>
                        <button>Like</button>
                        <button onClick={showComments}>Comment</button>
                        <button>Share</button>
                    </section>
                    {showComments&& (
                        <section className='comments'>
                            <h3>Comments</h3>
                            <ul>
                                {post.comments.map((comment, index) => (
                                    <li key={index}>
                                        <strong>{comment.user}</strong>: {comment.comment}
                                    </li>
                                ))}
                            </ul>
                        </section>
                    )
                    }
                </div>
            ))}
        </div>
    )
}

