const Image = ({ image }) => {
  return (
    <>
      <img
        className="object-cover h-64 w-64"
        src={image.src.medium}
        alt={image.alt}
      />
    </>
  );
};

export default Image;
