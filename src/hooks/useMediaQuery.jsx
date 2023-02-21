import { useEffect, useState } from "react";

export default function useMediaQuery (mediaQueryString) {

  const [matches, setMatches] = useState(false);

  useEffect(() => {

    const mql = window.matchMedia(mediaQueryString);

    const documentChangeHandler = (e) => {
      setMatches(e.matches);
    }

    mql.addEventListener('change', documentChangeHandler);

    return () => {
      mql.removeEventListener('change', documentChangeHandler);
    }

  }, [mediaQueryString]);

  return matches;

}
