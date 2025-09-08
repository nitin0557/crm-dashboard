import styled from "@emotion/styled";

export const Section = styled.section`
  padding: 80px 20px;
  text-align: center;
  background: #fff;

  @media (max-width: 768px) {
    padding: 60px 15px;
  }

  @media (max-width: 480px) {
    padding: 40px 10px;
  }
`;

export const Title = styled.h2`
  font-weight: 600;
  font-size: 36px;
  line-height: 100%;
  margin-bottom: 20px;
  position: relative;

  ::after {
    position: absolute;
    top: -89px;
    right: 410px;
    content: url(/thumb.png);
    width: auto;
    height: auto;

    @media (max-width: 1024px) {
      right: 200px;
      top: -60px;
      transform: scale(0.8);
    }

    @media (max-width: 768px) {
      display: none; /* hide thumb for tablets/mobiles */
    }
  }

  @media (max-width: 768px) {
    font-size: 28px;
  }

  @media (max-width: 480px) {
    font-size: 22px;
  }
`;

export const Subtitle = styled.p`
  font-weight: 400;
  font-size: 18px;
  line-height: 29px;
  text-align: center;
  color: rgba(77, 77, 77, 1);

  @media (max-width: 768px) {
    font-size: 16px;
    line-height: 26px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
    line-height: 22px;
  }
`;

export const DiagramWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
  flex-wrap: nowrap;
  margin-top: 40px;
  width: 1400px;
  height: 636px;
  padding: 16px;

  img {
    max-width: 100%;
    height: auto;
  }

  @media (max-width: 1400px) {
    width: 100%;
    height: auto;
  }

  @media (max-width: 1024px) {
    flex-wrap: wrap;
    gap: 20px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    padding: 10px;
    margin-top: 20px;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 10px;
  }
`;

export const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 60px;
  text-align: left;

  @media (max-width: 768px) {
    gap: 30px;
    align-items: center;
    text-align: center;
  }
`;

export const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  span {
    font-weight: 600;
    color: #1a1a40;
    display: flex;
    align-items: center;
    gap: 6px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
    gap: 6px;
  }
`;

export const CenterWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  @media (max-width: 768px) {
    margin: 20px 0;
  }
`;

export const CenterLogo = styled.div`
  width: 130px;
  height: 130px;
  border-radius: 50%;
  background: #e8f0ff;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 480px) {
    width: 100px;
    height: 100px;
  }
`;

export const Connector = styled.div`
  position: absolute;
  top: 50%;
  left: 100%;
  transform: translateY(-50%);

  @media (max-width: 768px) {
    display: none; /* hide lines on mobile */
  }
`;

export const RightColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;

  @media (max-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    gap: 15px;
  }
`;

export const CrmLogo = styled.div<{ color: string }>`
  background: ${({ color }) => color};
  border-radius: 50%;
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 480px) {
    width: 60px;
    height: 60px;
  }
`;

export const CTAButton = styled.button`
  margin-top: 50px;
  padding: 16px 32px;
  font-size: 16px;
  font-weight: 600;
  background: linear-gradient(to right, #7cff3a 0%, #66d630 100%);
  border: none;
  border-radius: 12px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    margin-top: 30px;
    font-size: 14px;
    padding: 12px 24px;
  }

  @media (max-width: 480px) {
    font-size: 13px;
    padding: 10px 20px;
    margin-top: 20px;
  }
`;
