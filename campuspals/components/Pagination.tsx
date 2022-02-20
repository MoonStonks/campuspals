import { chakra, Flex, Box } from '@chakra-ui/react';
import React from 'react';
import { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import ClubCard from './ClubCard';

const Items = chakra(function Items({ currentItems, className }) {
  return (
    <div className='items'>
      {currentItems &&
        currentItems.map((item, i) => (
          <ClubCard key={`${item.clubName}-${i}`} data={item} />
        ))}
    </div>
  );
});

export default chakra(function Pagination({ className, itemsPerPage, data }) {
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    setItemOffset(0);
  }, [data]);

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(data.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(data.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, data]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data.length;
    setItemOffset(newOffset);
  };

  return (
    <Flex flexDir='column' alignItems='center' mt='-570px'>
      <Items currentItems={currentItems} />
      <Box h='150px'>
        <ReactPaginate
          nextLabel='next >'
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          marginPagesDisplayed={2}
          pageCount={pageCount}
          previousLabel='< previous'
          pageClassName='page-item'
          containerClassName='pagination'
          pageLinkClassName='page-link'
          previousClassName='page-prev'
          previousLinkClassName='page-link'
          nextClassName='page-next'
          nextLinkClassName='page-link'
          breakLabel='...'
          breakClassName='page-item'
          breakLinkClassName='page-link'
          activeClassName='active'
          renderOnZeroPageCount={null}
        />
      </Box>
    </Flex>
  );
});
