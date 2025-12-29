import React from 'react'
import bannerImage from '../../assets/banner.png'
import Button from '../common/Button';

const Banner = () => {
  return (
    <section className="py-20 px-6 md:px-20 bg-primary/5 mt-10 rounded-3xl">
      <div className="flex flex-col md:flex-row justify-between items-center gap-10">
        <div className="w-full md:w-1/3 text-center md:text-left">
          <h1 className="text-3xl md:text-5xl leading-tight md:leading-[1.2] text-primary mb-8 md:mb-12">
            Books to freshen up your bookshelf
          </h1>
          <Button text="View The List" />
        </div>

        <img
          src={bannerImage}
          className="w-full md:w-1/2 max-w-md object-contain"
          alt="Books banner"
        />
      </div>
    </section>
  );
}

export default Banner