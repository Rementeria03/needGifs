import { ListOfGifs } from "components/ListoOfGifs/ListOfGifs";
import { useGifs } from "hooks/useGifs";
import "./SearchResults.css";

export const SearchResults = ({ params }) => {
  const { keyword } = params;
  const gifs = useGifs({ keyword });

  return (
    <div className="main">
      <h3>{decodeURI(keyword)}</h3>
      <ListOfGifs gifs={gifs} />
    </div>
  );
};
