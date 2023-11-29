import PropTypes from 'prop-types';
import { IoBookmarksOutline } from "react-icons/io5";

const Blog = ({ blog, handleBookmarks, handleMarkAsRead }) => {
    // console.log(blog)
    const { title, cover, reading_time, author_img, author, posted_date, hashtags } = blog
    return (
        <div className='mb-20 space-y-4'>
            <img className='w-full mb-8' src={cover} alt="" />
            <div className="flex justify-between items-center mb-4">
                <div className="flex items-center">
                    <img className='w-14' src={author_img} alt="" />
                    <div className="ml-6">
                        <h3 className="text-2xl">{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div className="">
                    <span>{reading_time} min read</span>
                    <button onClick={()=>handleBookmarks(blog)} className='ml-2 text-xl'><IoBookmarksOutline></IoBookmarksOutline></button>
                </div>
            </div>
            <h2 className="text-4xl">{title}</h2>
            <p>
                {
                    hashtags.map((hash, idx)=> <span key={idx}><a href='#'>#{hash}</a></span>)
                }
            </p>
            <button onClick={()=>handleMarkAsRead(reading_time)} className='text-purple-600 font-bold underline'>Mark As Read</button>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleBookmarks: PropTypes.func.isRequired,
    handleMarkAsRead: PropTypes.func.isRequired,

}

export default Blog;