const Message = ({ message }) => {
  return (
    <div className="h-dvh flex items-center justify-center">
      <p className="text-center p-10 text-lg">{message}</p>
    </div>
  );
};

export default Message;
