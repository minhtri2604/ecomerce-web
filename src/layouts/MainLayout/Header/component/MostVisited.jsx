import { Link } from "react-router-dom";

import Container from "../../../../components/Container";

import { dataAccess } from "../../../../data/dataAccess";

const MostVisited = () => {
  return (
    <Container>
      <div className="hidden lg:flex items-center gap-x-[70px] mt-[10px]">
        <div className="text-[12px] leading-[19px] text-[--gray-color]">
          Truy cập nhiều nhất
        </div>
        <div className="flex items-center gap-x-[10px]">
          {dataAccess.map((item) => (
            <Link
              to={"/"}
              key={item.id}
              className="bg-[#e6e7e8] text-[--gray-color] px-[8px] py-[5px] text-[12px] leading-[14px] rounded-[24px] hover:bg-[--primary-color] hover:text-[--white-color] transition"
            >
              {item.title}
            </Link>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default MostVisited;
