import React from 'react';
import { CiStar } from 'react-icons/ci';
import { Link } from 'react-router';

const BookList = ({ singleBook }) => {
  // Destructuring properties from the singleBook object
  const { bookName, author, image, rating, category, tags, bookId } =
    singleBook;

  return (
    <Link to={`bookDetails/${bookId}`}>
      <div className="p-6 border border-primary/15 rounded-2xl bg-white shadow-sm hover:shadow-md transition-shadow flex flex-col h-full">
        {/* Image Container */}
        <div className="bg-[#F3F3F3] py-8 px-6 rounded-2xl flex justify-center items-center h-[230px]">
          <img
            src={image}
            alt={bookName} // Added alt text for accessibility
            className="h-full object-contain hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Tags */}
        <div className="flex flex-wrap items-center gap-2 mt-6">
          {tags &&
            tags.map((tag, index) => (
              <span
                key={index} // Use index if tags aren't unique IDs
                className="bg-[#23BE0A]/5 py-1.5 px-4 rounded-full text-[#23BE0A] text-sm font-medium"
              >
                {tag}
              </span>
            ))}
        </div>

        {/* Content */}
        <div className="flex-grow">
          <h2 className="text-2xl font-bold font-playFair text-primary mt-4 mb-2 line-clamp-1">
            {bookName} {/* Fixed: Added the variable here */}
          </h2>
          <p className="text-base font-medium text-primary/80 mb-5">
            By: {author}
          </p>
        </div>

        <hr className="border-dashed border-primary/20" />

        {/* Footer */}
        <div className="flex items-center justify-between mt-5">
          <span className="text-base font-medium font-workSans text-primary/80">
            {category}
          </span>
          <div className="flex items-center gap-1.5 text-primary/80">
            <span className="font-semibold">{rating}</span>
            <CiStar className="text-xl text-yellow-500" />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BookList;
