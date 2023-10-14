import { useRef, useState } from "react";
import Rating from "./rating";
import TitleGetReward from "./titleGetReward";
import AreaComment from "./areaComment";
import AddImgVideo from "./addImgVideo";

import { AiOutlineVideoCameraAdd } from "react-icons/ai";
import { BsImage } from "react-icons/bs";
import { IoCloseOutline } from "react-icons/io5";

const RatingProduct = () => {
  const [value, setValue] = useState(0);
  const [idProduct, setIdProduct] = useState(null);
  const fileInputRef = useRef({
    video: null,
    image: null,
  });
  const [selectedMedia, setSelectedMedia] = useState([]);
  const [error, setError] = useState("");

  const handleImageClick = () => {
    setError("");
    fileInputRef.current.image.click();
  };

  const handleVideoClick = () => {
    setError("");
    fileInputRef.current.video.click();
  };

  const handleMediaChange = (event, id) => {
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
    setIdProduct(id);
    event.target.value = null;
  };

  const handleMediaRemove = (indexToRemove) => {
    const updatedMedia = selectedMedia.filter(
      (_, index) => index !== indexToRemove
    );
    setSelectedMedia(updatedMedia);
  };

  return (
    <div className="mt-[30px]">
      <div className="text-[16px] font-[500] text-[--sub-color] mb-[5px]">
        Đánh giá từng sản phẩm
      </div>
      {[...Array(2)].map((_, id) => (
        <div
          key={id}
          className="border-y-[1px] border-solid border-[--border-color] py-[25px]"
        >
          <TitleGetReward className="mb-[25px]" point={1} />
          <div className="flex flex-col">
            <span className="text-[16px] font-[500] text-[--sub-color]">
              Thực phẩm bổ sung SLIM U.S PHA
            </span>
            <span className="text-[12px] text-[--sub-color]">
              Hộp 50 gói x 2,5g
            </span>
            <span className="text-[12px] text-[--sub-color] one-line">
              Sorbitol 2.4g, Sweetener (Aspartam) 40 mg, đường ngô (XOS
              Xyloogligosaccharide) 20 mg, Hương ngô vđ 2.5g ...
            </span>
          </div>
          <Rating
            title="Mức độ hài lòng về sản phẩm : "
            value={value}
            setValue={setValue}
            className="my-[25px]"
          />
          <AreaComment placeholder="Hãy chia sẻ những điều bạn thích về sản phẩm này với chúng tôi nhé !" />
          {idProduct === id + 1 && (
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
                    <video autoPlay loop width="full">
                      <source
                        src={URL.createObjectURL(media)}
                        type={media.type}
                      />
                    </video>
                  )}
                  <IoCloseOutline
                    onClick={() => handleMediaRemove(index)}
                    className="text-[--white-color] bg-[--primary-color] rounded-[50%] text-[18px] absolute top-[3%] right-[3%] cursor-pointer"
                  />
                </div>
              ))}
            </div>
          )}

          <div className="flex items-center gap-x-[15px]">
            <AddImgVideo
              Tag={
                <AiOutlineVideoCameraAdd className="text-[35px] text-[--primary-color]" />
              }
              title="Thêm video"
              accept="video/mp4,video/x-m4v,video/*"
              refs={(el) => (fileInputRef.current.video = el)}
              onClick={() => handleVideoClick()}
              onChange={(event) => handleMediaChange(event, id)}
            />
            <AddImgVideo
              Tag={<BsImage className="text-[35px] text-[--primary-color]" />}
              title="Thêm hình"
              accept=".png, .jpg, .jpeg"
              refs={(el) => (fileInputRef.current.image = el)}
              onClick={() => handleImageClick()}
              onChange={(event) => handleMediaChange(event, id)}
            />
          </div>
          {error && (
            <div className="text-[14px] text-[--primary-color]">{error}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default RatingProduct;
