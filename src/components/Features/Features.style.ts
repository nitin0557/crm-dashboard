import styled from "@emotion/styled";

export const FeaturesRow = styled.div`
  display: flex;
  justify-content: center;
  gap: 2.5rem;
  margin-bottom: 4rem;
  padding-bottom: 1.5rem;
  flex-wrap: wrap;
  border-bottom: 1px solid #F1F1F1;

  @media (max-width: 900px) {
    gap: 1.5rem;
    margin-bottom: 3rem;
  }

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }
`;

export const Feature = styled.div`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  font-size: 0.95rem;
  color: #444;

  span {
    font-weight: 700;
    color: #000;
  }

  @media (max-width: 900px) {
    font-size: 0.9rem;
  }

  @media (max-width: 600px) {
    font-size: 0.85rem;
    justify-content: center;
    text-align: center;
  }
`;

export const Section = styled.section`
  padding: 4rem 2rem;
  text-align: center;
  background: #fff;
  position: relative;

  @media (max-width: 768px) {
    padding: 3rem 1.5rem;
  }

  @media (max-width: 480px) {
    padding: 2rem 1rem;
  }
`;

export const Title = styled.h2`
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 2.5rem;
  color: #0d1b4c;

  @media (max-width: 768px) {
    font-size: 1.6rem;
    margin-bottom: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.4rem;
    margin-bottom: 1.5rem;
  }
`;
export const ComparisonGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 40px 1fr; /* desktop: image | VS | image */
  align-items: center;
  justify-items: center;
  gap: 1.5rem;
  margin: 2rem auto;
  max-width: 100%;

  img {
    max-width: 100%;
    height: auto;
    border-radius: 8px;
  }

  @media (max-width: 900px) {
    grid-template-columns: 1fr; /* stack in one column */
    gap: 2rem;
  }
`;


export const Card = styled.div<{ variant?: "bad" | "good" }>`
  background: ${({ variant }) =>
    variant === "bad" ? "#fff5f5" : "#f9fbff"};
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  text-align: left;

  @media (max-width: 900px) {
    padding: 1.5rem;
    width: 100%;
  }

  @media (max-width: 480px) {
    padding: 1rem;
  }
`;

export const CardHeader = styled.h3<{ variant?: "bad" | "good" }>`
  font-size: 1.2rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: ${({ variant }) =>
    variant === "bad" ? "#d62828" : "#28a745"};

  @media (max-width: 768px) {
    font-size: 1.1rem;
    margin-bottom: 1.2rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
    margin-bottom: 1rem;
  }
`;

export const ListItem = styled.li<{ variant?: "bad" | "good" }>`
  display: flex;
  align-items: flex-start;
  gap: 0.7rem;
  margin-bottom: 1rem;
  font-size: 0.95rem;
  color: #444;

  span {
    font-weight: 600;
    font-size: 0.85rem;
    background: ${({ variant }) =>
      variant === "bad" ? "#ffe2e2" : "#e2f7e8"};
    color: ${({ variant }) =>
      variant === "bad" ? "#d62828" : "#28a745"};
    border-radius: 6px;
    padding: 0.15rem 0.5rem;
    margin-left: auto;
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;

    span {
      font-size: 0.8rem;
    }
  }

  @media (max-width: 480px) {
    font-size: 0.85rem;

    span {
      font-size: 0.75rem;
    }
  }
`;

export const Divider = styled.div`
  font-weight: 700;
  color: #444;
  font-size: 1rem;
  text-align: center;
  margin: 1rem 0;
  
  @media (min-width: 901px) {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;

    &::before,
    &::after {
      content: "";
      position: absolute;
      height: 1px;
      background: rgba(188, 188, 188, 1);
      width: 120px;
    }

    &::before {
      left: -130px;
    }

    &::after {
      right: -130px;
    }
  }
`;

export const CTA = styled.div`
  margin-top: -1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  .cta {
    display: flex;
    column-gap: 10px;
    align-items: center;
    justify-content: center;
    margin-left: 0;

    @media (max-width: 900px) {
      flex-direction: column;
      row-gap: 10px;
    }
  }
`;

export const Button = styled.a`
  background: #7fff00;
  color: #000;
  padding: 0.9rem 1.8rem;
  border-radius: 8px;
  font-weight: 600;
  text-decoration: none;
  font-size: 1rem;
  cursor: pointer;
  display: flex;

  &:hover {
    opacity: 0.9;
  }

  @media (max-width: 768px) {
    padding: 0.8rem 1.5rem;
    font-size: 0.95rem;
  }

  @media (max-width: 480px) {
    padding: 0.7rem 1.2rem;
    font-size: 0.9rem;
  }
`;

export const Note = styled.p`
  font-size: 0.95rem;
  color: #2e7d32;
  font-weight: 600;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }

  @media (max-width: 480px) {
    font-size: 0.85rem;
  }
`;