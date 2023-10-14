import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { Rate } from "antd";
import { FiSend } from "react-icons/fi";

import { TitleCart } from "../../../components/Title";
import Loading from "../../../components/Loading";
import { setComment } from "../../../redux/comment/comment.slice";

const WriteComment = () => {
  // const desc = ["Kinh khủng", "Tệ", "Bình thường", "Tốt", "Tuyệt vời"];
  const user = useSelector((state) => state.auth.infoUser);
  const dispatch = useDispatch();

  const [value, setValue] = useState(0);
  const inputRef = useRef(null);
  const [loading, setLoading] = useState(false);

  const handleSendComment = () => {
    const comment = inputRef.current.value;
    const currentTime = moment().format("YYYY-MM-DD HH:mm:ss");

    try {
      if (value !== 0 && comment.trim() !== "") {
        setLoading(true);
        const existingReviews =
          JSON.parse(localStorage.getItem("comment")) || [];

        const newReview = {
          name: user?.last_name + " " + user?.first_name,
          rating: value,
          comment: comment,
          time: currentTime,
          avt: null,
        };

        const updatedReviews = [newReview, ...existingReviews];

        localStorage.setItem("comment", JSON.stringify(updatedReviews));
        dispatch(setComment({ dataComment: updatedReviews }));

        setValue(0);
        inputRef.current.value = "";
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSendComment();
    }
  };

  return (
    <>
      {loading && <Loading />}
      <TitleCart>Đánh giá của bạn</TitleCart>
      <div className="bg-[--bg-color] p-[20px] flex flex-col gap-[20px] rounded-[10px] mt-[10px]">
        <Rate
          // tooltips={desc}
          value={value}
          onChange={setValue}
          className="text-[30px] leading-[30px]"
        />
        <div className="flex-between">
          <input
            onKeyDown={handleKeyDown}
            ref={inputRef}
            placeholder="Đánh giá về sản phẩm ..."
            className="text-[16px] caret-[--primary-color] focus:border-[--primary-color] focus:text-[--primary-color] w-full"
            autoComplete="off"
          />
          <FiSend
            onClick={handleSendComment}
            className="text-[25px] text-[--primary-color] cursor-pointer"
          />
        </div>
      </div>
    </>
  );
};

export default WriteComment;
