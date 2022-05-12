import { useState, useRef, useEffect } from "react";

export function useNearScreen({ distance = "100px" } = {}) {
  const [isNearScreen, setShow] = useState(false);
  const fromRef = useRef();

  useEffect(function () {
    let observer;

    // mostrar los trend con el observer
    const onChange = (entries, observer) => {
      // obtenemos el elemento a escuchar
      const el = entries[0];
      if (el.isIntersecting) {
        // mostramos el componente
        setShow(true);
        // desconectamos el observer
        observer.disconnect();
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
      observer.observe(fromRef.current);
    });

    //dejar la escucha cuando el elemento es off
    return () => observer && observer.disconnect();
  }, []);

  return { isNearScreen, fromRef };
}
