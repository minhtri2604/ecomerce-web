import { TitleAccount } from "../../../../../components/Title";
import FilterList from "./filterList";
import SearchList from "./searchList";

const ListFavourite = () => {
  return (
    <div className="bg-[--white-color] rounded-[10px] py-[20px] px-[30px]">
      <TitleAccount>Danh sách yêu thích</TitleAccount>
      <div className="mt-[20px] flex items-center justify-between">
        <SearchList />
        <FilterList />
      </div>
    </div>
  );
};

export default ListFavourite;
