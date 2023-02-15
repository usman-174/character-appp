const PaginationX = ({ itemsPerPage, totalItems, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="flex justify-center">
      {pageNumbers.map((number) => (
        <button className="mx-1" key={number} onClick={() => paginate(number)}>
          {number}
        </button>
      ))}
    </div>
  );
};

export default PaginationX;
