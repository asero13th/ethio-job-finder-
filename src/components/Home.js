import React from 'react';
import Header from './Header';
import SearchBar from './SearchBar';
import FilterBox from './FilterBox';
import JobListing from './JobListing';
import Adds from './Adds';
import Testimonial from './Testimonial';
function Home() {
  return (
    <div>
      <Header />
      <SearchBar />
      <FilterBox />
      <JobListing/>
      <Adds />
      <Testimonial />
    </div>
  )
}

export default Home