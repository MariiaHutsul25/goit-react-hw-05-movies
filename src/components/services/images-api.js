// const BASE_URL = "https://pixabay.com/api";
const API_KEY = "24483038-cb7cc094485ab1051031cc5e6";

export const fetchImages = (search = "", pageNumber = 1) => {
  return (
    fetch(
      `https://pixabay.com/api/?q=${search}&page=${pageNumber}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
    )
      .then((x) => new Promise((resolve) => setTimeout(() => resolve(x), 1000)))
      // Задержка добавлена для тестирования Loader
      .then((res) => res.json())
      .then((data) => data.hits)
  );
};
