import React from 'react'
import { FaStar } from 'react-icons/fa';

const CommentCard = ({comment, profilePhoto, userName, accupation}) => {
  return (
    <div>
        <div className='text-shadow-amber-400'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></div>
        <div>{comment}</div>
        <div>
            <img src={profilePhoto} alt='comment profile' />
            <div>
                <div>{userName}</div>
                <div>{accupation}</div>
            </div>
        </div>
    </div>
  )
}

export default CommentCard;