import styled from "@emotion/styled";

export const Wrapper = styled.div<{ visible: boolean }>`
  position: fixed;
  bottom: ${({ visible }) => (visible ? "20px" : "-200px")};
  left: 50%;
  transform: translateX(-50%);
  width: 90%;
  max-width: 800px;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
  padding: 20px;
  transition: bottom 0.4s ease-in-out;
  z-index: 1000;

  @media (max-width: 1024px) {
    width: 95%;
    padding: 18px;
  }

  @media (max-width: 600px) {
    width: 95%;
    padding: 15px;
  }
`;

export const TopRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #ffeefe;
  padding: 15px 20px;
  border-radius: 10px;

  @media (max-width: 1024px) {
    flex-direction: column;
    gap: 12px;
    align-items: flex-start;
  }

  @media (max-width: 600px) {
    padding: 12px 15px;
  }
`;

export const LeftContent = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  span {
    font-size: 1.1rem;
    font-weight: 600;
    color: #222;

    @media (max-width: 1024px) {
      font-size: 1rem;
    }

    @media (max-width: 600px) {
      font-size: 0.95rem;
    }
  }

  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const Avatars = styled.div`
  display: flex;

  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 2px solid white;
    margin-left: -10px;

    &:first-child {
      margin-left: 0;
    }

    @media (max-width: 1024px) {
      width: 35px;
      height: 35px;
    }

    @media (max-width: 600px) {
      width: 30px;
      height: 30px;
    }
  }
`;

export const CTAButton = styled.button`
  padding: 12px 20px;
  font-size: 15px;
  font-weight: 600;
  background: #7cff3a;
  color: #111;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background: #66d630;
  }

  @media (max-width: 1024px) {
    width: 100%;
    text-align: center;
    padding: 12px 18px;
    font-size: 14px;
  }

  @media (max-width: 600px) {
    padding: 10px 15px;
    font-size: 13px;
  }
`;

export const BottomRow = styled.div`
  display: flex;
  justify-content: center;
  gap: 40px;
  margin-top: 15px;

  div {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 0.95rem;
    color: #444;

    span {
      font-weight: 600;
      color: #000;
    }

    img,
    svg {
      width: 20px;
      height: 20px;
    }

    @media (max-width: 1024px) {
      font-size: 0.9rem;
      gap: 6px;
    }

    @media (max-width: 600px) {
      flex-direction: column;
      gap: 4px;
      font-size: 0.85rem;

      span {
        text-align: center;
      }
    }
  }

  @media (max-width: 600px) {
    flex-direction: column;
    gap: 10px;
  }
`;