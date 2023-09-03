import React from 'react'
import { Link } from 'react-router-dom'

function ReadMore() {
    return (
        <div className="readmore">
            <div className="container">
                <div className="readmore-inner">
                    <div className="readmore-text">
                        <h2>Evalo helps you to grow fast</h2>
                        <p>Bolor sit amet cons ectetur adipisic</p>
                    </div>
                    <div className="readmore-btn">
                        <Link to="/" className='btn'>Read More</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ReadMore