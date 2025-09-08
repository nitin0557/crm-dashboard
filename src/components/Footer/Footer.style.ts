import styled from "@emotion/styled";

export const FooterWrapper = styled.footer`
  background: linear-gradient(
    277.75deg,
    hsla(191, 99%, 43%, 0.22) 0%,
    rgba(1, 178, 216, 0.07) 77%
  );
  padding: 40px 20px 20px;
`;

export const FooterContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 40px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 25px;
  }
`;

export const BrandSection = styled.div`
  width: 25%;

  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
  }
`;

export const Logo = styled.div`
  width: 180px;
  margin-bottom: 15px;

  @media (max-width: 768px) {
    margin: 0 auto 15px;
  }
`;

export const Description = styled.p`
  color: #111;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const SocialIcons = styled.div`
  display: flex;
  gap: 15px;

  .social-icons {
    border-radius: 21px;
    background: #01b2d8;
    display: flex;
    padding: 12px;
  }

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

export const LinksSection = styled.div`
  display: flex;
  justify-content: space-around;
  width: 70%;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    gap: 20px;
  }
`;

export const Column = styled.div`
  display: flex;
  row-gap: 12px;
  flex-direction: column;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

export const Heading = styled.h4`
  font-size: 1.1rem;
  font-weight: 700;
  margin-bottom: 15px;
  color: #06184a;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const LinkItem = styled.p`
  margin: 8px 0;
  cursor: pointer;
  color: #111;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const ComingSoonRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

export const Tag = styled.span`
  background: #d9f7dc;
  color: #2e7d32;
  font-size: 0.8rem;
  padding: 2px 10px;
  border-radius: 12px;
  font-weight: 600;

  @media (max-width: 768px) {
    font-size: 0.7rem;
  }
`;

export const ContactRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 10px 0;
  color: #111;

  @media (max-width: 768px) {
    justify-content: center;
    font-size: 14px;
  }
`;

export const ChromeBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #111;
  color: #fff;
  padding: 10px 15px;
  border-radius: 12px;
  margin-top: 15px;
  margin-left: 35px;
  cursor: pointer;
  width: 82%;

  img {
    width: 28px;
    margin-left: 10px;
  }
  .chrome {
    border-radius: 50%;
    background: #fff;
    padding: 5px;
  }

  @media (max-width: 768px) {
    margin: 15px auto 0;
    width: 90%;
    justify-content: center;
    gap: 10px;
  }
`;

export const Divider = styled.hr`
  margin: 30px 0 15px;
  border: 0.5px solid #ccc;
`;

export const Disclaimer = styled.p`
  font-size: 0.8rem;
  color: #777;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 0.75rem;
    text-align: center;
  }
`;

export const CopyRight = styled.p`
  font-size: 0.9rem;
  color: #555;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;