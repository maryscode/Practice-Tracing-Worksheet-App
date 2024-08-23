import { useRef, useEffect, useCallback } from 'react';

function useDebounceCallback(callback, delay) {
  
  const timeoutRef = useRef(null);


  // start the debounce callback function!
  const debouncedCallback = useCallback((...args) => {

    // Clear timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    // set up timeoutRef
    timeoutRef.current = setTimeout(() => {
      
        //callback(...args); 
      callback(...args);
    }, delay);
  }, [callback, delay]);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [debouncedCallback]);

  return debouncedCallback;
}

export default useDebounceCallback;
