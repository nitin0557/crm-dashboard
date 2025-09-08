import styled from "@emotion/styled";

export const Section = styled.section`
  padding: 4rem 2rem;
  background: #EAEFFA;
  text-align: center;
  position: relative;

  ::after {
    position: absolute;
    right: 0;
    bottom: -36px;
    content: url(/Ball.png);
    width: auto;
    height: auto;
    z-index: 10;

    @media (max-width: 1024px) {
      bottom: -20px;
      right: -10px;
      transform: scale(0.8);
    }

    @media (max-width: 600px) {
      display: none; /* hide on small mobile screens */
    }
  }

  @media (max-width: 768px) {
    padding: 3rem 1.5rem;
  }

  @media (max-width: 480px) {
    padding: 2rem 1rem;
  }
`;

export const Title = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  color: #0d1b4c;
  margin-bottom: 0.5rem;
  text-align: left;

  @media (max-width: 768px) {
    font-size: 1.7rem;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

export const SubText = styled.p`
  font-size: 1rem;
  color: #666;
  margin-bottom: 3rem;
  text-align: left;

  @media (max-width: 768px) {
    font-size: 0.95rem;
    margin-bottom: 2.5rem;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
    margin-bottom: 2rem;
  }
`;

export const StepsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

export const StepCard = styled.div<{ highlight?: boolean }>`
  background: #fff;
  border-radius: 16px;
  box-shadow: ${({ highlight }) =>
    highlight
      ? "0 0 0 3px #6c63ff, 0 4px 12px rgba(0,0,0,0.1)"
      : "0 4px 12px rgba(0,0,0,0.08)"};
  border: ${({ highlight }) =>
    highlight ? "2px solid #6c63ff" : "1px solid #eee"};
  transition: 0.3s ease;
  text-align: left;

  &:hover {
    transform: translateY(-4px);
  }

  @media (max-width: 768px) {
    border-radius: 12px;
  }

  @media (max-width: 480px) {
    border-radius: 10px;
  }
`;

export const StepNumber = styled.div`
  font-size: 2.5rem;
  font-weight: 800;
  color: #1a2c6e;
  opacity: 0.8;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 2.2rem;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const StepTitle = styled.h3`
  font-size: 1.1rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  color: #0d1b4c;

  @media (max-width: 768px) {
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    font-size: 0.95rem;
  }
`;

export const StepDesc = styled.p`
  font-size: 0.95rem;
  color: #444;
  line-height: 1.4;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }

  @media (max-width: 480px) {
    font-size: 0.85rem;
  }
`;

export const CTA = styled.div`
  margin-top: 3rem;

  @media (max-width: 768px) {
    margin-top: 2.5rem;
  }

  @media (max-width: 480px) {
    margin-top: 2rem;
  }
`;

export const Button = styled.a`
  background: #7fff00;
  color: #000;
  padding: 1rem 2rem;
  border-radius: 8px;
  font-weight: 600;
  text-decoration: none;
  font-size: 1rem;
  cursor: pointer;
  display: inline-block;

  &:hover {
    opacity: 0.9;
  }

  @media (max-width: 768px) {
    padding: 0.85rem 1.5rem;
    font-size: 0.95rem;
  }

  @media (max-width: 480px) {
    padding: 0.7rem 1.2rem;
    font-size: 0.9rem;
  }
`;