import Modal from "react-modal";

const ImageModal = ({ image, isOpen, closeModal }) => {
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  Modal.setAppElement("#root");

  return (
    <Modal
      isOpen={isOpen}
      style={customStyles}
      contentLabel="Image"
      onRequestClose={closeModal}
    >
      <button onClick={closeModal} className="block ml-auto mr-0 mb-4">
        ❌
      </button>
      {image && (
        <>
          <img
            className="mx-auto max-w-lg"
            src={image.urls.regular}
            alt={image.description}
          />
          <div className="flex justify-between items-center pt-4">
            <p className="text-lg font-semibold text-center min-h-16 content-center border border-zinc-800 px-3 rounded	max-w-80">
              {image.description || "No description"}
            </p>
            <a
              className="min-h-16 border border-zinc-800 px-3 rounded"
              href={image.user.links.html}
              target="_blanc"
            >
              <p className="text-center text-2xl">📸</p>
              <p className="text-center">{image.user.name}</p>
            </a>
          </div>
        </>
      )}
    </Modal>
  );
};

export default ImageModal;
