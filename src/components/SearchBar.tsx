import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { useRef } from 'react';
import { BsSearch } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import { AppDispatch } from './redux/store';
import { setSearch } from './redux/Entity/EntityAction';

const SearchBar = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch<AppDispatch>();
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  //Debouncing function, dispatches only when key stroke is not detected
  const handleChange = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      if (inputRef.current) {
        dispatch(setSearch(inputRef.current.value)); // Dispatch action after delay
      }
    }, 500);
  };
  return (
    <InputGroup>
      <InputLeftElement children={<BsSearch />} />
      <Input
        title='SearchBar'
        ref={inputRef}
        placeholder="Search games..."
        borderRadius={20}
        variant="filled"
        onChange={handleChange}
      />
    </InputGroup>
  );
};

export default SearchBar;
