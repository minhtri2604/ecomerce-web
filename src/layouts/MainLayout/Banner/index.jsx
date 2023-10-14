import { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

import Container from "../../../components/Container";
import bgHeader from "../../../assets/images/header/bg-header.svg";
import close from "../../../assets/images/header/Cloes.svg";

const Banner = () => {
  const [closeBackground, setCloseBackground] = useState(true);

  return (
    <>
      {closeBackground && (
        <div className="bg-[#13012F]">
          <Container>
            <div className="h-[79px] w-full relative">
              <LazyLoadImage
                effect="blur"
                className="h-full"
                src={bgHeader}
                alt="background header"
              />
              <div
                className="w-[20px] h-[20px] absolute top-[6%] right-0 cursor-pointer"
                onClick={() => setCloseBackground(!closeBackground)}
              >
                <LazyLoadImage
                  effect="blur"
                  className="w-full h-full"
                  src={close}
                  alt="icon close"
                />
              </div>
            </div>
          </Container>
        </div>
      )}
    </>
  );
};

export default Banner;
