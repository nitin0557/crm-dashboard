import styled from "@emotion/styled";

export const DropdownWrapper = styled.div`
  display: none;
  position: absolute;
  top: 100%;
  left: -450px;
  width: 1400px;
  background: #fff;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
  border-radius: 12px;
  padding: 2rem;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 2rem;
  font-family: "Inter", sans-serif;
  z-index: 200;

  .nav-item:hover & {
    display: grid;
  }

  @media (max-width: 900px) {
    position: static;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    padding: 1.5rem;
    border-radius: 0;
    box-shadow: none;
  }
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (max-width: 900px) {
    gap: 0.8rem;
  }
`;

export const Title = styled.h3`
  font-size: 1.3rem;
  font-weight: 600;
  color: #0a2540;
  margin-bottom: 0.5rem;

  @media (max-width: 900px) {
    font-size: 1.1rem;
  }
`;

export const Text = styled.p`
  font-size: 0.95rem;
  line-height: 1.5;
  color: #444;

  @media (max-width: 900px) {
    font-size: 0.9rem;
  }
`;

export const FeatureItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  font-size: 0.95rem;
  color: #0a2540;

  svg {
    color: #0073e6;
  }

  @media (max-width: 900px) {
    font-size: 0.9rem;
  }
`;

export const BrowserItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  font-size: 0.95rem;
  color: #0a2540;

  svg {
    color: #0073e6;
  }

  @media (max-width: 900px) {
    font-size: 0.9rem;
  }
`;

export const Badge = styled.span`
  font-size: 0.7rem;
  font-weight: 600;
  padding: 2px 6px;
  border-radius: 8px;
  background: #d1fae5;
  color: #047857;
`;