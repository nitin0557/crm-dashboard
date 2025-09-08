import styled from "@emotion/styled";

export const Section = styled.section`
  padding: 80px 20px;
  background: #EAEFFA;
  position: relative;
  text-align: center;

  ::after {
    position: absolute;
    top: -140px;
    right: 0;
    content: url(/collaboration.png);
    width: auto;
    height: auto;
  }

  @media (max-width: 1024px) {
    padding: 60px 15px;

    ::after {
      top: -100px;
      right: -20px;
      transform: scale(0.8);
    }
  }

  @media (max-width: 600px) {
    padding: 40px 10px;

    ::after {
      top: -80px;
      right: -10px;
      transform: scale(0.6);
    }
  }
`;

export const Title = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  color: #1a1a40;
  margin-bottom: 20px;
  margin-left: 10px;
  text-align: left;

  @media (max-width: 1024px) {
    font-size: 1.8rem;
  }

  @media (max-width: 600px) {
    font-size: 1.5rem;
    margin-left: 0;
    text-align: center;
  }
`;

export const Banner = styled.div`
  background: linear-gradient(204.61deg, #0995C8 4.1%, #065D7D 77.57%);
  color: white;
  padding: 50px 20px;
  border-radius: 12px;
  margin-top: 30px;

  @media (max-width: 1024px) {
    padding: 40px 15px;
  }

  @media (max-width: 600px) {
    padding: 30px 10px;
  }
`;

export const BannerTitle = styled.h3`
  font-size: 1.8rem;
  font-weight: 600;
  margin-bottom: 20px;

  @media (max-width: 1024px) {
    font-size: 1.6rem;
  }

  @media (max-width: 600px) {
    font-size: 1.3rem;
    text-align: center;
  }
`;

export const Logos = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 40px;

  img {
    height: 30px;

    @media (max-width: 600px) {
      height: 25px;
    }
  }

  @media (max-width: 600px) {
    flex-wrap: wrap;
    gap: 15px;
  }
`;

export const Screenshots = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  flex-wrap: wrap;

  img {
    width: 220px;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);

    @media (max-width: 1024px) {
      width: 180px;
    }

    @media (max-width: 600px) {
      width: 140px;
    }
  }
`;

export const CTAButton = styled.button`
  margin-top: 40px;
  padding: 14px 28px;
  font-size: 16px;
  font-weight: 600;
  background: #7cff3a;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: 0.3s;

  .cta-btn {
    display: flex;
    align-items: center;
    column-gap: 10px;
  }

  &:hover {
    background: #66d630;
  }

  @media (max-width: 1024px) {
    padding: 12px 24px;
    font-size: 15px;
  }

  @media (max-width: 600px) {
    padding: 10px 20px;
    font-size: 14px;

    .cta-btn {
      flex-direction: column;
      row-gap: 5px;
    }
  }
`;

export const BannerImageWrapper = styled.div`
  width: 100%;
  max-width: 1000px;
  margin: 30px auto 0;

  svg {
    width: 100%;
    height: auto;
  }

  @media (max-width: 1024px) {
    margin-top: 20px;
  }

  @media (max-width: 600px) {
    margin-top: 15px;
  }
`;
