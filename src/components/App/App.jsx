import React, { useState, useEffect } from "react";
import Searchbar from "../Searchbar/Searchbar";
import ImageGallery from "../ImageGallery/ImageGallery";
import { fetchImages } from "../services/images-api";
import Button from "../Button/Button";
import Loader from "../Loader/Loader";
import Modal from "../Modal/Modal";
import styles from "../App/App.module.css";

const App = () => {
  const [images, setImages] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [largeImageURL, setLargeImageURL] = useState("");

  useEffect(() => {
    if (search === "") return;
    setIsLoading((prev) => !prev);
    fetchImages(search, pageNumber)
      .then((hits) => {
        console.log(`hits`, hits);
        setImages((prev) => (pageNumber === 1 ? hits : [...prev, ...hits]));
      })
      .catch((error) => alert("Off"))
      .finally(() => {
        setIsLoading(false);
      });
  }, [pageNumber, search]);
  const onSearch = (search) => {
    setSearch(search);
    setImages([]);
    setPageNumber(1);
  };

  const openModal = (largeImageURL) => {
    setIsModalOpen(true);
    setLargeImageURL(largeImageURL);
  };
  const closeModal = () => setIsModalOpen(false);

  const changePage = () => {
    setPageNumber((prev) => prev + 1);
  };
  return (
    <div className={styles.App}>
      <Searchbar onSubmit={onSearch} />
      <ImageGallery openModal={openModal} images={images} />
      {isLoading && <Loader />}
      {images.length > 0 && <Button changePage={changePage} />}
      {isModalOpen && (
        <Modal onClose={closeModal}>
          <img src={largeImageURL} alt="" />
        </Modal>
      )}
    </div>
  );
};
export default App;
