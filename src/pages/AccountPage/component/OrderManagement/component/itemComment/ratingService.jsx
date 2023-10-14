import { useRef, useState } from "react";
import AddImgVideo from "./addImgVideo";
import AreaComment from "./areaComment";
import Rating from "./rating";
import TitleGetReward from "./titleGetReward";

import { AiOutlineVideoCameraAdd } from "react-icons/ai";
import { BsImage } from "react-icons/bs";
import { IoCloseOutline } from "react-icons/io5";

const RatingService = () => {
  const [value, setValue] = useState(0);
  const fileInputRef = useRef({
    video: null,
    image: null,
  });
  const [selectedMedia, setSelectedMedia] = useState([]);
  const [error, setError] = useState("");

  console.log("selectedMedia", selectedMedia);

  const handleImageClick = () => {
    setError("");
    fileInputRef.current.image.click();
  };

  const handleVideoClick = () => {
    setError("");
    fileInputRef.current.video.click();
  };

  const handleMediaChange = (event) => {
    const selectedFiles = event.target.files;

    const maxSize = 5 * 1024 * 1024;
    const updatedMedia = [...selectedMedia];

    for (const selectedFile of selectedFiles) {
      if (selectedFile.size <= maxSize) {
        if (updatedMedia.length < 6) {
          updatedMedia.push(selectedFile);
        } else {
          setError("Chỉ được chọn tối đa 6 tập tin.");
          break;
        }
      } else {
        setError(
          selectedFile.type.startsWith("video/")
            ? "File video quá lớn. Vui lòng chọn File có dung lượng nhỏ hơn 5Mb."
            : "File image quá lớn. Vui lòng chọn File có dung lượng nhỏ hơn 5Mb."
        );
        break;
      }
    }

    setSelectedMedia(updatedMedia);
    event.target.value = null;
  };

  const handleMediaRemove = (indexToRemove) => {
    const updatedMedia = selectedMedia.filter(
      (_, index) => index !== indexToRemove
    );
    setSelectedMedia(updatedMedia);
  };

  //   const desc = ["😡", "☹", "😁", "😂", "🤣"];

  return (
    <>
      <TitleGetReward className="my-[25px]" point={2} />
      <div className="flex flex-col gap-y-[18px]">
        <Rating
          title="Mức độ hài lòng về sản phẩm : "
          value={value}
          setValue={setValue}
        />
        <Rating
          title="Đánh giá về dịch vụ bán hàng : "
          value={value}
          setValue={setValue}
        />
        <Rating
          title="Đánh giá về dịch vụ vận chuyển : "
          value={value}
          setValue={setValue}
        />
      </div>
      <AreaComment placeholder="Hãy chia sẻ những điều bạn thích về sản phẩm này với chúng tôi nhé !" />
      <div className="flex items-center gap-[15px]">
        {selectedMedia.map((media, index) => (
          <div
            className="w-[103px] h-[103px] flex items-center justify-center border-[1px] border-solib border-[--border-color] rounded-[10px] relative mb-[10px]"
            key={index}
          >
            {media.type.startsWith("image/") ? (
              <img
                className="object-contain w-full h-full"
                src={URL.createObjectURL(media)}
                alt={`Image ${index + 1}`}
              />
            ) : (
              <video autoPlay width="full">
                <source src={URL.createObjectURL(media)} type={media.type} />
              </video>
            )}
            <IoCloseOutline
              onClick={() => handleMediaRemove(index)}
              className="text-[--white-color] bg-[--primary-color] rounded-[50%] text-[18px] absolute top-[3%] right-[3%] cursor-pointer"
            />
          </div>
        ))}
      </div>
      <div className="flex items-center gap-x-[15px]">
        <AddImgVideo
          Tag={
            <AiOutlineVideoCameraAdd className="text-[35px] text-[--primary-color]" />
          }
          title="Thêm video"
          accept="video/mp4,video/x-m4v,video/*"
          refs={(el) => (fileInputRef.current.video = el)}
          onClick={handleVideoClick}
          onChange={handleMediaChange}
        />
        <AddImgVideo
          Tag={<BsImage className="text-[35px] text-[--primary-color]" />}
          title="Thêm hình"
          accept=".png, .jpg, .jpeg"
          refs={(el) => (fileInputRef.current.image = el)}
          onClick={handleImageClick}
          onChange={handleMediaChange}
        />
      </div>
      {error && (
        <div className="text-[14px] text-[--primary-color]">{error}</div>
      )}
    </>
  );
};

export default RatingService;
