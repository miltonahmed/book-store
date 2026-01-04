import React from 'react';
import { CiStar } from 'react-icons/ci';
import { useLoaderData, useParams } from 'react-router';
import { addToStoredDB } from '../util/addToDB';

const BookDetails = () => {
  const { id } = useParams();
  const bookId = parseInt(id);
  const bookData = useLoaderData();
  const singleBookData = bookData.find(book => book.bookId === bookId);

  // Destructure all available properties for the detailed view
  const {
    bookName,
    author,
    image,
    rating,
    category,
    tags,
    review,
    totalPages,
    publisher,
    yearOfPublishing,
  } = singleBookData;


  const handleMarkAsRead = id => {
    addToStoredDB(id)
    
  }
  return (
    <div className="container mx-auto my-12 grid grid-cols-1 lg:grid-cols-2 gap-12 px-4">
      {/* Left: Large Image Container */}
      <div className="bg-[#F3F3F3] rounded-3xl p-12 flex items-center justify-center">
        <img
          src={image}
          alt={bookName}
          className="max-h-[500px] shadow-2xl object-contain"
        />
      </div>

      {/* Right: Detailed Content */}
      <div className="flex flex-col">
        <h1 className="text-4xl font-bold font-playFair text-primary mb-3">
          {bookName}
        </h1>
        <p className="text-xl font-medium text-primary/80 mb-4">
          By : {author}
        </p>

        <hr className="border-primary/10 mb-4" />
        <span className="text-xl font-medium text-primary/80 mb-4">
          {category}
        </span>
        <hr className="border-primary/10 mb-6" />

        <p className="text-primary/70 leading-relaxed mb-6">
          <span className="font-bold text-primary">Review: </span> {review}
        </p>

        {/* Tags Section */}
        <div className="flex items-center gap-4 mb-6">
          <span className="font-bold text-primary">Tag</span>
          {tags?.map((tag, index) => (
            <span
              key={index}
              className="text-[#23BE0A] bg-[#23BE0A]/5 px-4 py-2 rounded-full font-medium"
            >
              #{tag}
            </span>
          ))}
        </div>

        <hr className="border-primary/10 mb-6" />

        {/* Book Specs Table-style layout */}
        <div className="space-y-3 mb-8">
          <div className="flex gap-12">
            <span className="text-primary/60 w-32">Number of Pages:</span>
            <span className="font-bold text-primary">{totalPages}</span>
          </div>
          <div className="flex gap-12">
            <span className="text-primary/60 w-32">Publisher:</span>
            <span className="font-bold text-primary">{publisher}</span>
          </div>
          <div className="flex gap-12">
            <span className="text-primary/60 w-32">Year of Publishing:</span>
            <span className="font-bold text-primary">{yearOfPublishing}</span>
          </div>
          <div className="flex gap-12">
            <span className="text-primary/60 w-32">Rating:</span>
            <span className="font-bold text-primary">{rating}</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4">
          <button
            onClick={() => handleMarkAsRead(id)}
            className="px-8 py-4 border border-primary/20 rounded-xl font-bold hover:bg-primary hover:text-white transition-colors"
          >
            Mark as Read
          </button>
          <button className="px-8 py-4 bg-[#50B1C9] text-white rounded-xl font-bold hover:bg-[#3e8ea2] transition-colors">
            Wishlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
