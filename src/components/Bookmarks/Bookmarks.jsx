import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({bookmarks, readingTime}) => {
    // console.log(bookmarks)
    return (
        <div className="md:w-1/3 bg-gray-300 ml-4 mt-2 pt-4 rounded-xl">
            <h2 className="text-3xl text-center">Bookmarked Blogs: {bookmarks.length} </h2>
            <h2 className="text-3xl text-center">Reading Times: {readingTime} </h2>
            {
                bookmarks.map((bookmark, idx)=><Bookmark key={idx} bookmark={bookmark}></Bookmark>)
            }
        </div>
    );
};

Bookmarks.propTypes ={
    bookmarks: PropTypes.array,
    readingTime: PropTypes.number,
}

export default Bookmarks;