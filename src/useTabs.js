export const useTabs = (initialIndex, content) => {
    const [index, setIndex] = useState(initialIndex);
    if (!content || !Array.isArray(content)) {
      return;
    }
  
    return {
      currentItem: content[index],
      changeItem: setIndex
    };
};