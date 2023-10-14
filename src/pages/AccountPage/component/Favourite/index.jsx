import ListFavourite from "./component/listFavourite";
import TableFavourite from "./component/tableFavourite";

const Favourite = () => {
  return (
    <div className="flex flex-col gap-y-[20px]">
      <ListFavourite />
      <TableFavourite />
    </div>
  );
};

export default Favourite;
