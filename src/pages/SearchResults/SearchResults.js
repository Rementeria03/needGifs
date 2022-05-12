import { ListOfGifs } from "components/ListoOfGifs/ListOfGifs";
import { useGifs } from "hooks/useGifs";
import "./SearchResults.css";

export const SearchResults = ({ params }) => {
  const { keyword } = params;
  const { gifs, setPage } = useGifs({ keyword });

  const handleNextPage = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <div className="main">
      <h3>{decodeURI(keyword)}</h3>
      <ListOfGifs gifs={gifs} />
      <button style={{ marginTop: "20px" }} onClick={handleNextPage}>
        get next page
      </button>
    </div>
  );
};
