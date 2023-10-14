/* eslint-disable react/prop-types */
import { useRef, useState } from "react";
import { PiImagesSquareDuotone } from "react-icons/pi";
import { IoCloseOutline } from "react-icons/io5";

const SelectImage = ({ ...props }) => {
  const fileInputRef = useRef(null);
  const [selectedImages, setSelectedImages] = useState([]);
  const [error, setError] = useState("");

  const handleImageClick = () => {
    fileInputRef.current.click();
  };

  const handleImageChange = (event) => {
    const selectedFiles = event.target.files;
    const maxSize = 5 * 1024 * 1024;
    if (selectedFiles.size > maxSize) {
      setError("File quá lớn. Vui lòng chọn File có dung lượng nhỏ hơn.");
      return;
    }
    if (selectedFiles.length + selectedImages.length > 3) {
      setError("Vui lòng chọn tối đa 3 tệp.");
      return;
    }

    const selectedImagesArray = Array.from(selectedFiles)
      .filter((imageFile) => imageFile.size <= maxSize)
      .map((imageFile) => imageFile.name);

    setSelectedImages([...selectedImages, ...selectedImagesArray]);
    setError("");
  };

  const handleImageRemove = (imageName, event) => {
    event.stopPropagation();
    const updatedImages = selectedImages.filter((image) => image !== imageName);
    setSelectedImages(updatedImages);
    setError("");
  };

  return (
    <div className={`${props.className}`}>
      <div className="text-[--sub-color] text-[16px]">{props.title}</div>

      <div
        onClick={handleImageClick}
        className="flex items-center gap-x-[20px] px-[20px] py-[18px] rounded-[10px] border-[1px] border-dashed border-[--sub-color] cursor-pointer"
      >
        <PiImagesSquareDuotone className="text-[26px] text-[--primary-color]" />
        <div className="text-[16px] text-[--sub-color] flex items-center">
          {selectedImages.length > 0
            ? selectedImages.slice(0, 3).map((imageName, index) => (
                <div key={index} className="flex items-center gap-x-[5px]">
                  {index > 0 && <span className="pr-[10px]">, </span>}
                  <span>{imageName}</span>
                  <IoCloseOutline
                    onClick={(event) => handleImageRemove(imageName, event)}
                    className="text-[--primary-color] text-[20px]"
                  />
                </div>
              ))
            : "File: PDF, PNG, JPEG, DOC hoặc DOCX - Tối đa 3 files"}
        </div>
        <input
          ref={fileInputRef}
          onChange={handleImageChange}
          className="hidden"
          type="file"
          multiple
          accept=".png, .jpg, .jpeg, application/pdf, .doc, .docx"
        />
      </div>
      {error && (
        <div className="text-[14px] text-[--primary-color]">{error}</div>
      )}
    </div>
  );
};

export default SelectImage;
