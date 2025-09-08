import React, { useEffect, useState } from "react";
import { ReactComponent as CreditCardIcon } from "../../assets/creditcard.svg";
import { ReactComponent as ClockIcon } from "../../assets/clock.svg";
import {
  Avatars,
  BottomRow,
  CTAButton,
  LeftContent,
  TopRow,
  Wrapper,
} from "./Floating.style";

const FloatingCTA: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    if (window.scrollY < lastScrollY) {
      // scrolling up
      setVisible(true);
    } else {
      // scrolling down
      setVisible(false);
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <Wrapper visible={visible}>
      <TopRow>
        <LeftContent>
          <Avatars>
            <img src="/image1.png" alt="User 1" />
            <img src="/image2.png" alt="User 2" />
            <img src="/image3.png" alt="User 3" />
          </Avatars>
          <span>Join with our Thousands of professionals Now!</span>
        </LeftContent>
        <CTAButton>Get a Free Trial Now!</CTAButton>
      </TopRow>

      <BottomRow>
        <div>
          <CreditCardIcon />
          <span>No Credit Card</span> Required
        </div>
        <div>
          <ClockIcon />
          <span>14 Days Free</span> Trial
        </div>
      </BottomRow>
    </Wrapper>
  );
};

export default FloatingCTA;
