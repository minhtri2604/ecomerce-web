import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";

import Container from "../../../components/Container";
import { ItemFooter } from "./component/itemFooter";
import LazyBackgroundImage from "../../../components/LazyBackgroundImage";

import { dataInfo, dataSupport, dataSocial } from "../../../data/dataFooter";

import qr from "../../../assets/images/footer/down-app/qr.svg";
import gg from "../../../assets/images/footer/down-app/gg.svg";
import appstore from "../../../assets/images/footer/down-app/appstore.svg";
import background from "../../../assets/images/footer/bg.svg";

const MainFooter = () => {
  return (
    <div className="h-[358px]">
      <LazyBackgroundImage
        imageUrl={background}
        className="w-full mt-[105px] flex flex-col justify-between"
      >
        <Container>
          <div className="pt-[26px] flex mt-[80px]">
            <div className="grid grid-cols-2 xl:grid-cols-5 gap-[15px]">
              <ItemFooter data={dataInfo} title="THÔNG TIN" />

              <ItemFooter data={dataSupport} title="HỖ TRỢ" />

              <div className="text-[--white-color]">
                <div className="text-[16px] font-[500] mb-[10px]">
                  TẢI ỨNG DỤNG
                </div>
                <div className="flex gap-[16px]">
                  <div className="w-[56px] h-[56px]">
                    <LazyLoadImage
                      effect="blur"
                      className="w-full h-full"
                      src={qr}
                      alt="qr code"
                    />
                  </div>
                  <div className="flex flex-col gap-y-[10px]">
                    <div className="w-[80px] h-[23px]">
                      <LazyLoadImage
                        effect="blur"
                        className="w-full h-full"
                        src={gg}
                        alt="google play"
                      />
                    </div>
                    <div className="w-[80px] h-[23px]">
                      <LazyLoadImage
                        effect="blur"
                        className="w-full h-full"
                        src={appstore}
                        alt="app store"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-[--white-color] mb-[31px]">
                <div className="text-[16px] font-[500]">LIÊN KẾT</div>
                <div className="flex items-center gap-x-[10px]">
                  {dataSocial.map((item) => (
                    <Link
                      key={item.id}
                      to={item.url}
                      className="w-[37px] h-[37px] block"
                    >
                      <LazyLoadImage
                        effect="blur"
                        className="w-full h-full"
                        src={item.img}
                        alt={item.alt}
                      />
                    </Link>
                  ))}
                </div>
              </div>

              <div>
                <div className="text-[14px] font-[500] tracking-[-0.42px] text-[--white-color] mb-[6px] uppercase">
                  Đăng ký nhận thông tin tại đây:
                </div>
                <div className="flex-between w-fit h-fit rounded-[23px] bg-[--white-color]">
                  <input
                    className="py-[5px] pl-[5px] xl:pl-[10px] text-[12px] text-[#A7A9AC]"
                    placeholder="Nhập email tại đây..."
                  />
                  <span className="text-[--white-color] bg-[--primary-color] rounded-[23px] text-[12px] lg:text-[14px] font-[700] px-[12px] py-[4px] my-[2px] mr-[2px]">
                    Gửi
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Container>
        <div className="text-[12px] text-[--white-color] text-center py-[9px] mx-[35px] border-t-[1px] border-solid border-[--border-color]">
          Copyright © 2022 HTGSOFT.All Rights Reserved
        </div>
      </LazyBackgroundImage>
    </div>
  );
};

export default MainFooter;
