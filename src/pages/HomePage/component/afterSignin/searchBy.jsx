import name from "../../../../assets/images/header-signin/search-by/name.svg";
import active from "../../../../assets/images/header-signin/search-by/active.svg";
import producer from "../../../../assets/images/header-signin/search-by/producer.svg";
import treatment from "../../../../assets/images/header-signin/search-by/treatment.svg";
import ItemProduct from "./itemProduct";

const SearchBy = () => {
  const dataSearchBy = [
    {
      id: 1,
      img: name,
      title: "Tên thương mại",
    },
    {
      id: 2,
      img: active,
      title: "Hoạt chất",
    },
    {
      id: 3,
      img: treatment,
      title: "Nhóm điều trị",
    },
    {
      id: 4,
      img: producer,
      title: "Nhà sản xuất",
    },
  ];
  return (
    <div>
      <div className="flex items-center w-full gap-x-[10px] my-[27px]">
        <div className="text-[--sub-color] text-[20px] font-[700]">
          Tìm kiếm theo
        </div>
        <div className="h-[2px] bg-[--border-color] flex-1"></div>
      </div>
      <div className="grid grid-cols-4 gap-[20px]">
        {dataSearchBy.map((item) => (
          <div key={item.id}>
            <ItemProduct
              img={item.img}
              title={item.title}
              classImg="w-[90px] h-[90px] mb-[10px]"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchBy;
