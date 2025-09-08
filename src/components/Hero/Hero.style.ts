import styled from "@emotion/styled";

// 🌟 Container
export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem 1.5rem;
  background: #f1f1f1;
  text-align: center;
  margin-top: 90px;

  .capture-text-wrapper {
    display: flex;
  }

  .both-text-wrapper {
    display: flex;
    flex-direction: column;

    .icon {
      margin-top: -34px;
      margin-left: 24px;
    }
  }

  .icon-text {
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 10px;
    border: 0.85px solid #9accff;
    border-radius: 20px;
    padding: 8.51px;

    .text {
      font-weight: 400;
      font-size: 13.62px;
      line-height: 23.83px;
      color: #63657e;
    }
  }

  /* 📱 Mobile */
  @media (max-width: 768px) {
    padding: 2rem 1rem;
    margin-top: 90px;

    .capture-text-wrapper {
      flex-direction: column;
      align-items: center;
    }

    .both-text-wrapper .icon {
      margin-left: 0;
      margin-top: -10px;
    }

    .icon-text {
      flex-direction: column;
      row-gap: 6px;
      font-size: 12px;
    }
  }
`;

export const Badge = styled.div`
  background: #ffe7e7;
  color: #ff4d4d;
  padding: 0.4rem 1rem;
  border-radius: 999px;
  font-size: 0.9rem;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 0.8rem;
    padding: 0.3rem 0.8rem;
  }
`;

export const Title = styled.h1`
  font-weight: 600;
  font-size: 58px;
  line-height: 69px;
  text-align: center;

  span {
    color: #2d96bc;
  }

  @media (max-width: 768px) {
    font-size: 32px;
    line-height: 40px;
  }

  @media (max-width: 480px) {
    font-size: 26px;
    line-height: 32px;
  }
`;

export const SubText = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  margin-top: 10px;

  .sub-text {
    color: #363636;
  }

  @media (max-width: 768px) {
    font-size: 14px;
    line-height: 20px;
  }
`;

export const CRMBox = styled.div`
  display: flex;
  align-items: center;
  column-gap: 10px;
  margin-top: 2rem;
  border-radius: 20px;
  padding: 8px 22px;
  background: linear-gradient(#5ed3ff, #6ec6fe, #eb65f4, #fd58f2);

  .group-icons {
    display: flex;
    column-gap: 10px;
  }

  .circle,
  .p,
  .salesforce {
    padding: 10px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #fff;
  }

  .circle {
    background: #ff7a59;
  }
  .p {
    background: #21844a;
  }
  .salesforce {
    background: #fff;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    row-gap: 10px;
    padding: 10px 16px;
    font-size: 14px;
  }
`;

export const ChromeStarWrapper = styled.div`
  display: flex;
  column-gap: 10px;
  margin-top: 10px;

  .chrome-half,
  .triangle-icon {
    background: #fff;
    padding: 10px;
    border-radius: 6.67px;
  }

  .chrome,
  .triangle {
    display: flex;
    align-items: center;
    column-gap: 10px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    row-gap: 12px;
    align-items: center;
  }
`;

export const Actions = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0.8rem;
    width: 100%;
  }
`;

