import ImageCard from "../ImageCard/ImageCard";

const ImageGallery = ({ images, handleImageClick }) => {
  return (
    <ul className="flex flex-wrap gap-10 p-10 mx-auto max-w-7xl items-center justify-center drop-shadow-lg">
      {images.map((image) => {
        return (
          <li
            className="block overflow-hidden transition-transform hover:scale-110"
            key={image.id}
          >
            <ImageCard image={image} handleImageClick={handleImageClick} />
          </li>
        );
      })}
    </ul>
  );
};

export default ImageGallery;
