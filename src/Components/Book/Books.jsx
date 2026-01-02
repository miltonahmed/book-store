import React, { Suspense } from 'react'
import BookList from './BookList';

const Books = ({ data }) => {
  console.log(data);
  return (
    <div className='mt-6'>
      <h1 className="text-center text-primary font-playFair text-5xl font-bold ">
        Books
      </h1>

      <Suspense fallback={<span>loading....</span>}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6 gap-4">
          {data.map(singleBook => (
            <BookList key={singleBook.bookId} singleBook={singleBook} />
          ))}
        </div>
      </Suspense>
    </div>
  );
}

export default Books