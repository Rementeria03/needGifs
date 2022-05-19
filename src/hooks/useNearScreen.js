import { useState, useRef, useEffect } from "react";

export function useNearScreen({ distance = "100px", externalRef, once = true } = {}) {
  const [isNearScreen, setIsNear] = useState(false);
  const fromRef = useRef();

  useEffect(
    function () {
      let observer;
      const element = externalRef ? externalRef.current : fromRef.current;

      // mostrar los trend con el observer
      const onChange = (entries, observer) => {
        // obtenemos el elemento a escuchar
        const el = entries[0];
        if (el.isIntersecting) {
          // mostramos el componente
          setIsNear(true);
          // desconectamos el observer
          once && observer.disconnect();
        }else{
          !once && setIsNear(false)
        }
      };

      Promise.resolve(
        typeof IntersectionObserver !== "undefined"
          ? IntersectionObserver
          : import("intersection-observer")
      ).then(() => {
        // creacion del observer
        observer = new IntersectionObserver(onChange, {
          rootMargin: distance,
        });
        // escucha del elemento actual
        if (element) observer.observe(element);
      });

      //dejar la escucha cuando el elemento es off
      return () => observer && observer.disconnect();
    },
    [distance, once, externalRef]
  );

  return { isNearScreen, fromRef };
}
