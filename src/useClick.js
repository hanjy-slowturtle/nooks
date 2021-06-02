export const useClick = (onClick) => {
    const ref = useRef();
    useEffect(() => {
      if (typeof onClick !== "function") {
        return;
      }
  
      const { current } = ref;
      if (current) {
        current.addEventListener("click", onClick);
      }
  
      return () => {
        if (current) {
          current.removeEventListener("click", onClick);
        }
      };
    }, [onClick]);
  
    return ref;
};