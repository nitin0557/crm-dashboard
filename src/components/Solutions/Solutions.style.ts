import styled from "@emotion/styled";

export const Section = styled.section`
  padding: 4rem 2rem;
  text-align: center;

  @media (max-width: 768px) {
    padding: 3rem 1rem;
  }

  @media (max-width: 480px) {
    padding: 2rem 0.5rem;
  }
`;

export const Title = styled.h2`
  font-weight: 600;
  font-size: 36px;
  line-height: 100%;
  text-align: center;
  margin-bottom: 24px;

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
  margin-bottom: 40px;
  color: rgba(77, 77, 77, 1);

  @media (max-width: 768px) {
    font-size: 16px;
    margin-bottom: 30px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
    margin-bottom: 20px;
  }
`;

export const Tabs = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 1rem;
    align-items: flex-start;
  }
`;

export const Tab = styled.button<{ active?: boolean }>`
  background: none;
  border: none;
  font-size: 1rem;
  font-weight: 500;
  color: ${({ active }) => (active ? "#0d1b4c" : "#6f7a99")};
  border-bottom: ${({ active }) => (active ? "3px solid #0d1b4c" : "none")};
  padding-bottom: 0.5rem;
  cursor: pointer;
  transition: color 0.3s ease;

  display: flex;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    color: #0d1b4c;
  }

  svg {
    width: 18px;
    height: 18px;

    @media (max-width: 480px) {
      width: 16px;
      height: 16px;
    }
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

export const Description = styled.p`
  font-size: 1rem;
  margin-bottom: 2rem;
  color: #333;
  text-align: left;

  span {
    background: #ffeaea;
    color: #d33;
    padding: 0.2rem 0.6rem;
    border-radius: 6px;
    font-size: 0.9rem;
    margin-left: 0.4rem;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
    span {
      font-size: 0.8rem;
      padding: 0.15rem 0.5rem;
    }
  }
`;

export const Cards = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  text-align: left;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }

  @media (max-width: 480px) {
    gap: 1rem;
  }
`;

export const Card = styled.div`
  width: 669px;
  height: 527px;

  svg {
    max-width: 100%;
    height: auto;
  }

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
  }

  @media (max-width: 480px) {
    width: 100%;
    height: auto;
  }
`;

export const CardTitle = styled.h3`
  font-size: 1rem;
  font-weight: 700;
  margin-bottom: 0.8rem;
  color: #0d1b4c;

  span {
    color: #05a34a;
    margin-left: 0.3rem;
    cursor: pointer;
  }

  @media (max-width: 480px) {
    font-size: 0.95rem;
  }
`;

export const LeadBox = styled.div`
  display: flex;
  align-items: center;
  background: #fff;
  padding: 1rem;
  border-radius: 12px;
  margin-bottom: 1rem;
  gap: 1rem;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.05);

  img {
    border-radius: 50%;
    width: 50px;
    height: 50px;

    @media (max-width: 480px) {
      width: 40px;
      height: 40px;
    }
  }

  div {
    display: flex;
    flex-direction: column;
  }

  strong {
    font-size: 1rem;
    color: #0d1b4c;

    @media (max-width: 480px) {
      font-size: 0.95rem;
    }
  }

  small {
    font-size: 0.85rem;
    color: #666;

    @media (max-width: 480px) {
      font-size: 0.8rem;
    }
  }
`;

export const VendorFlow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  .vendor {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #fff;
    padding: 0.8rem 1rem;
    border-radius: 12px;
    box-shadow: 0 3px 8px rgba(0, 0, 0, 0.05);
    font-size: 0.95rem;

    span {
      color: #d33;
      font-size: 0.8rem;
    }

    @media (max-width: 480px) {
      font-size: 0.85rem;
      padding: 0.6rem 0.8rem;
    }
  }
`;