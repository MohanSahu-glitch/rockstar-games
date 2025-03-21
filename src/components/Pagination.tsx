import { useGamesState } from './redux/hooks/Games/useGamesState';
import { Button, ButtonGroup, HStack, IconButton } from '@chakra-ui/react';
import { LuChevronLeft, LuChevronRight } from 'react-icons/lu';
import { useDispatch } from 'react-redux';
import { AppDispatch } from './redux/store';
import { setOnPage } from './redux/Entity/EntityAction';
import { useEffect, useState } from 'react';
import { fixedPageItems } from '../constants';

const Pagination = () => {
  const { onPage, count } = useGamesState();
  const dispatch = useDispatch<AppDispatch>();
  const [totalPages, setTotalPages] = useState(1);

  //Limit the pages to only 10, as without filters count can be very large
  useEffect(() => {
    if (count < 121) setTotalPages(Math.ceil(count / fixedPageItems));
    else setTotalPages(10);
  }, [count]);

  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <HStack spacing={2} mt={4} mb={10} justify="center">
      {/* Previous Button */}
      <IconButton
        icon={<LuChevronLeft />}
        onClick={() => dispatch(setOnPage(onPage - 1))}
        isDisabled={onPage === 1}
        aria-label="Previous Page"
      />

      {/* Page Numbers */}
      <ButtonGroup size="sm" isAttached>
        {pageNumbers.map((page) => (
          <Button
            key={page}
            onClick={() => dispatch(setOnPage(page))}
            variant={onPage === page ? 'solid' : 'outline'}
          >
            {page}
          </Button>
        ))}
      </ButtonGroup>

      {/* Next Button */}
      <IconButton
        icon={<LuChevronRight />}
        onClick={() => dispatch(setOnPage(onPage + 1))}
        isDisabled={onPage >= totalPages}
        aria-label="Next Page"
      />
    </HStack>
  );
};

export default Pagination;
