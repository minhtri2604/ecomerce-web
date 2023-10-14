import { Pagination } from "antd";
import { useState } from "react";
import moment from "moment";
import "moment/dist/locale/vi";
import { useSelector } from "react-redux";
import { LazyLoadImage } from "react-lazy-load-image-component";

import { TitleCart } from "../../../components/Title";
import RatingStar from "../../../components/RatingStar";

const Comment = () => {
  const dataComment = useSelector((state) => state.comment.dataComment);
  const pageSize = 5;

  const [currentPage, setCurrentPage] = useState(1);
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const displayedComments = dataComment.slice(startIndex, endIndex);
  const shouldDisplayPagination = dataComment.length > pageSize;

  return (
    <div>
      <TitleCart>Đánh giá sản phẩm</TitleCart>
      <div className="mt-[20px]">
        <div className="flex flex-col gap-y-[10px]">
          {dataComment.length === 0 ? (
            <div className="text-[16px] text-[--sub-color] text-center">
              Chưa có đánh giá nào về sản phẩm này
            </div>
          ) : (
            <>
              {displayedComments.map((item, id) => (
                <div
                  key={id}
                  className="flex gap-x-[10px] border-b-[1px] border-solid border-[ --border-color] pb-[10px]"
                >
                  <div className="w-[48px] h-[48px]">
                    <LazyLoadImage
                      effect="blur"
                      className="w-full h-full object-cover rounded-[10px]"
                      src="https://nhadepso.com/wp-content/uploads/2023/03/cap-nhat-50-hinh-anh-dai-dien-facebook-mac-dinh-dep-doc-la_17.jpg"
                      alt="img"
                    />
                  </div>
                  <div>
                    <div className="text-[15px] leading-[16px] text-[--sub-color] font-[500]">
                      {item.name}
                    </div>
                    <RatingStar
                      value={item.rating}
                      className="text-[16px]  leading-[18px]"
                    />

                    <div className="text-[12px] leading-[14px] text-[--sub-color]">
                      {moment(item.time).fromNow()}
                    </div>
                    <div className="text-[16px] text-[--sub-color] mt-[10px]">
                      {item.comment}
                    </div>
                  </div>
                </div>
              ))}
            </>
          )}

          {shouldDisplayPagination && (
            <Pagination
              className="flex items-center ml-auto"
              current={currentPage}
              total={dataComment.length}
              pageSize={pageSize}
              onChange={handlePageChange}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Comment;
