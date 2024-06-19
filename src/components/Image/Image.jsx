const Image = ({ image }) => {
  return (
    <>
      <img
        className="object-cover h-64 w-64"
        src={image.urls.small}
        alt={image.description}
      />
    </>
  );
};

export default Image;
