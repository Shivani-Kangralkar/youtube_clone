import React from 'react'
import { Link } from 'react-router-dom'

const SearchResultCard = ({title,imgUrl,channelTitle,id,description}) => {
  return (
    <Link to={`/watch?v=${id}`}>
      <div className="p-2 m-2 w-80 shadow-lg rounded-b-md ">
        <img alt="Not found" src={imgUrl} className="border rounded-t-md" />
        <p className="px-2 font-semibold line-clamp-2 overflow-hidden">
          {title}
        </p>
        <p className="px-2 text-sm mt-1 ">{channelTitle}</p>
        <p className="px-2 text-xs truncate"> {description}</p>
      </div>
    </Link>
  )
}

export default SearchResultCard
