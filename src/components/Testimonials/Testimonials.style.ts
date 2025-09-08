import styled from "@emotion/styled";

export const Section = styled.section`
  padding: 4rem 2rem;
  background: #fff;
  position: relative;

  .title {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap; /* Allow wrapping on smaller screens */
  }

  .inner {
    display: flex;
    column-gap: 12px;
    margin-top: 10px;

    @media (max-width: 768px) {
      justify-content: center;
      width: 100%;
    }
  }

  ::after {
    position: absolute;
    left: 0;
    bottom: -95px;
    content: url(/robot.png);
    width: auto;
    height: auto;

    @media (max-width: 768px) {
      bottom: -60px;
      width: 100px;
      height: auto;
    }

    @media (max-width: 480px) {
      display: none; /* Hide on very small screens */
    }
  }
`;

export const Title = styled.h2`
  font-size: 1.8rem;
  font-weight: 700;
  color: #0d1b4c;
  margin-bottom: 2.5rem;

  @media (max-width: 768px) {
    font-size: 1.5rem;
    text-align: center;
    width: 100%;
  }

  @media (max-width: 480px) {
    font-size: 1.25rem;
  }
`;

export const Carousel = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  justify-content: center;
  width: 100%;
`;

export const CardWrapper = styled.div`
  display: flex;
  overflow-x: auto;
  gap: 1.5rem;
  scroll-behavior: smooth;
  padding-bottom: 1rem;

  @media (max-width: 1024px) {
    flex-wrap: nowrap;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 2rem;
  }
`;

export const Card = styled.div`
  background: rgba(249, 240, 248, 1);
  padding: 2rem;
  flex: 0 0 437px;
  text-align: left;
  transition: transform 0.3s ease;
  border-radius: 20px;
  border: 1px solid rgba(238, 239, 255, 0.99);

  .triangle-icon {
    background: #fff;
    padding: 10px;
    border-radius: 6.67px;

    @media (max-width: 768px) {
      padding: 8px;
    }
  }

  .triangle-star-wrapper {
    display: flex;
    column-gap: 12px;
    margin-bottom: 40px;

    @media (max-width: 768px) {
      flex-direction: column;
      row-gap: 8px;
      margin-bottom: 20px;
      align-items: flex-start;
    }
  }

  @media (max-width: 768px) {
    flex: 0 0 90%;
    padding: 1.5rem;
  }

  @media (max-width: 480px) {
    flex: 0 0 100%;
    padding: 1rem;
  }
`;

export const Quote = styled.p`
  font-size: 0.95rem;
  color: #333;
  line-height: 1.5;
  margin-bottom: 1.2rem;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }

  @media (max-width: 480px) {
    font-size: 0.85rem;
  }
`;

export const Stars = styled.div`
  display: flex;
  align-items: center;
  gap: 0.3rem;
  color: #ffb400;
`;

export const Divider = styled.div`
  border-top: 1px solid #ddd;
  margin: 1.5rem 0;
`;

export const Author = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;

  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;

    @media (max-width: 480px) {
      width: 35px;
      height: 35px;
    }
  }

  div {
    display: flex;
    flex-direction: column;
  }

  strong {
    font-size: 1rem;
    color: #0d1b4c;

    @media (max-width: 768px) {
      font-size: 0.95rem;
    }

    @media (max-width: 480px) {
      font-size: 0.9rem;
    }
  }

  span {
    font-size: 0.85rem;
    color: #666;

    @media (max-width: 768px) {
      font-size: 0.8rem;
    }

    @media (max-width: 480px) {
      font-size: 0.75rem;
    }
  }
`;

export const ArrowButton = styled.button`
  display: flex;
  column-gap: 12px;
  margin-bottom: 24px;

  &.prev-btn {
    border-radius: 50%;
    cursor: pointer;
    border-width: 1px;
    padding: 16px;
    border: 1px solid rgba(9, 15, 78, 1);
    transition: 0.3s ease;
    background: #fff;

    &:hover {
      background: #f0f0f0;
    }

    @media (max-width: 768px) {
      padding: 12px;
    }
  }

  &.next-btn {
    border-radius: 50%;
    cursor: pointer;
    padding: 17px 16px;
    transition: 0.3s ease;
    background: rgba(9, 15, 78, 1);
    color: #fff;

    &:hover {
      background: rgba(7, 12, 60, 0.9);
    }

    @media (max-width: 768px) {
      padding: 12px;
    }
  }
`;
