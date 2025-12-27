import useSearch from "@/hooks/useSearch";
import { ChevronLeft, ChevronRight, } from "lucide-react";
const Pagination = ({ total }) => {
  const { skip, limit, setSkip } = useSearch();
  const mealsPerPage = 9;
  const totalPages = Math.ceil(total / mealsPerPage);
  const currentPage = Math.floor(skip / limit) + 1;

  const handlePageChange = (page) => {
    setSkip((page - 1) * limit);
  };

  return (
    <div className=" mt-12 flex justify-center">
      <div className="join">
        <button
          className="join-item btn"
          disabled={currentPage === 1}
          onClick={() => handlePageChange(currentPage - 1)}
        >
          <ChevronLeft className="w-4 h-4" />
        </button>

        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            onClick={() => handlePageChange(page)}
            className={`join-item btn ${
              currentPage === page ? "btn-primary" : ""
            }`}
          >
            {page}
          </button>
        ))}

        <button
          className="join-item btn"
          disabled={currentPage === totalPages}
          onClick={() => handlePageChange(currentPage + 1)}
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
