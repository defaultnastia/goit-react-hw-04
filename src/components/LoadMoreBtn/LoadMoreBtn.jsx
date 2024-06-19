const LoadMoreBtn = ({ handleLoadMore }) => {
  return (
    <button
      onClick={handleLoadMore}
      className="block rounded-full bg-fuchsia-900 px-4 py-2 text-slate-50 text-lg mx-auto"
    >
      Load More
    </button>
  );
};

export default LoadMoreBtn;
