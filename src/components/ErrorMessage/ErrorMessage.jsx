const ErrorMessage = ({ error }) => {
  return (
    <div className="h-dvh flex items-center justify-center">
      <p className="text-center p-10 text-lg">
        Error was encountered: {error}. Please reload the page or contact
        support.
      </p>
    </div>
  );
};

export default ErrorMessage;
