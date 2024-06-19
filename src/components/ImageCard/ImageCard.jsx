const ImageCard = ({ image, handleImageClick }) => {
  return (
    <>
      <img
        className="object-cover h-64 w-64 hover:cursor-pointer"
        src={image.urls.small}
        alt={image.description}
        onClick={() => handleImageClick(image)}
      />
    </>
  );
};

export default ImageCard;
