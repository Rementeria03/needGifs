import { useEffect, useRef } from "react";

export default function useSEO({ description, title }) {
  const prevTitle = useRef(document.title);
  const prevDescription = useRef(
    document.querySelector('meta[name="description"]')
  );

  useEffect(
    function () {
      const previousTitle = prevTitle.current;
      document.title = `${title} | Need Gifs`;

      return () => (document.title = previousTitle);
    },
    [title]
  );

  useEffect(
    function () {
      const previousDescription = prevDescription.current;
      const metaDescription = document.querySelector(
        "meta[name='description']"
      );

      if (description) {
        metaDescription.setAttribute("content", description);
      }

      return () => metaDescription.setAttribute("content", previousDescription);
    },
    [description]
  );
}
