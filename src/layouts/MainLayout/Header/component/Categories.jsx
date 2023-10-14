import { useEffect, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

import { getMenu } from "../../../../services/api";
import { Link } from "react-router-dom";

const Categories = () => {
  const [isActive, setIsActive] = useState("1");
  const [dataCatagories, setDataCatagories] = useState([]);
  const [open, setOpen] = useState(false);

  const handleMouseEnter = (id) => {
    setIsActive(id);
  };

  const handleMouseLeave = () => {
    setIsActive("1");
  };

  const activeItem = dataCatagories.find((item) => item.ID === isActive);

  const getCatagories = async () => {
    try {
      const data = await getMenu();

      setDataCatagories(data.data.data);
      if (data.data.data) {
        setOpen(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCatagories();
  }, []);

  return (
    <>
      {open && (
        <div className="absolute left-0 top-[100%] border-[2px] border-solid border-[--primary-color] w-[1110px] border-right-bottom bg-[--white-color] z-10">
          <div className="flex">
            <div className="">
              {dataCatagories.map((item) => {
                return (
                  <div
                    key={item.ID}
                    className={`w-[180px] h-[185px] flex flex-col items-center justify-center gap-y-[9px] class-hover transition radius-lastchild ${
                      isActive === item.ID
                        ? "bg-[--white-color]"
                        : "bg-[--primary-color]"
                    }`}
                    onMouseEnter={() => handleMouseEnter(item.ID)}
                  >
                    <div
                      className={`max-w-[42px] ${
                        isActive === item.ID ? "" : "active-hover"
                      }`}
                    >
                      <LazyLoadImage
                        effect="blur"
                        className="w-full h-full"
                        src={item.media}
                        alt={item.name}
                      />
                    </div>
                    <div
                      className={`text-[16px] font-[500] hover-text one-line ${
                        isActive === item.ID
                          ? "text-[--sub-primary]"
                          : "text-[--white-color]"
                      }`}
                    >
                      {item.name}
                    </div>
                  </div>
                );
              })}
            </div>
            <div
              className="flex flex-1 justify-center"
              onMouseLeave={handleMouseLeave}
            >
              {isActive && (
                <div className="mt-[21px] h-fit grid grid-cols-3 gap-[20px]">
                  {activeItem?.child?.map((item) => (
                    <Link
                      to={"/product"}
                      key={item.ID}
                      className="flex items-center gap-x-[20px] w-[280px] h-[70px] border-[2px] border-solid border-[--white-color] hover:border-[2px] hover:border-solid hover:border-[--primary-color] rounded-[10px] pl-[20px] pr-[10px] transition class-active"
                    >
                      <div className="w-[42px] h-[42px]">
                        <LazyLoadImage
                          effect="blur"
                          className={`w-full h-full object-contain active-filter`}
                          src={item.media}
                          alt={item.name}
                        />
                      </div>
                      <div className="text-[14px] font-[500] text-[--sub-color] active-text two-line">
                        {item.name}
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Categories;
