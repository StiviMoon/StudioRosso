import { useEffect, useRef, useState } from "react";

/**
 * useInView — detecta cuando un elemento entra al viewport.
 * Anima solo una vez (disconnect tras primer trigger).
 *
 * @param {object} options - opciones de IntersectionObserver
 * @param {number} options.threshold - fracción visible para trigger (default 0.12)
 * @param {string} options.rootMargin - margen extra (default "-40px 0px")
 * @returns {[React.RefObject, boolean]} [ref, inView]
 *
 * Uso:
 *   const [ref, inView] = useInView();
 *   <div ref={ref} className={inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}>
 */
export function useInView({ threshold = 0.12, rootMargin = "-40px 0px" } = {}) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return [ref, inView];
}

/**
 * useInViewList — para listas de cards con animación escalonada (stagger).
 * Cada elemento recibe su propio delay según su índice.
 *
 * @param {number} count - número de elementos
 * @param {object} options - mismas opciones que useInView
 * @returns {{ ref, inView, getDelay }} objeto con ref para el contenedor, inView, y getDelay(index)
 *
 * Uso:
 *   const { ref, inView, getDelay } = useInViewList(items.length);
 *   <ul ref={ref}>
 *     {items.map((item, i) => (
 *       <li style={{ transitionDelay: getDelay(i) }} className={inView ? 'opacity-100' : 'opacity-0'}>
 *     ))}
 *   </ul>
 */
export function useInViewList(count, options = {}) {
  const [ref, inView] = useInView(options);

  const getDelay = (index) => `${index * 80}ms`;

  return { ref, inView, getDelay };
}
