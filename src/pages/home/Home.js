import React from 'react';

import Search from './search';
import Filter from './filter';
import Songs from './songs';
import LoadMore from './loadMore';

const Home = () => 
( 
    <>
        <Search />
        <Filter />
        <Songs />
        <LoadMore />
    </>
);

export default Home
