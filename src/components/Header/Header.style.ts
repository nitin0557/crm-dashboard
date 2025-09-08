import styled from "@emotion/styled";

export const HeaderWrapper = styled.header`
  width: 100%;
  position: fixed;
  top: 0;
  background: #fff;
  margin: 0;
  z-index: 100;

  .logo {
    width: 25%;
  }

  .nav {
    width: 55%;
    display: flex;
    justify-content: space-around;
  }

  .header-inner {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 24px;
    border-bottom: 1px solid #959da51a;
  }

  @media (max-width: 768px) {
    .logo {
      width: 50%;
    }
    .nav {
      display: none;
    }
    .header-inner {
      padding: 10px 16px;
      max-width: 100%;
    }
  }
`;

export const Nav = styled.nav<{ isDeskOpen: boolean; isMobileNavOpen: boolean }>`
  gap: 1.5rem;
  display: ${({ isDeskOpen }) => (isDeskOpen ? "none" : "flex")};

  .nav-item {
    font-weight: 500;
    font-size: 18px;
    line-height: 28px;
    color: #222;
    display: flex;
    align-items: center;
    gap: 8px;
    position: relative;
    cursor: pointer;

    &:hover .dropdown {
      display: block;
    }
  }

  @media (max-width: 768px) {
    display: ${({ isMobileNavOpen }) =>
      isMobileNavOpen ? "flex" : "none"};
    flex-direction: column;
    position: fixed;
    inset: 0;
    background: #fff;
    padding: 40px 20px;
    z-index: 999;
  }
`;

export const Dropdown = styled.div`
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  width: 280px;
  background: #fff;
  border: 1px solid #e0e0e0;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.08);
  border-radius: 12px;
  padding: 12px 0;
  z-index: 200;

  .dropdown-item {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 12px 16px;
    font-size: 16px;
    font-weight: 500;
    color: #0a1535;
    cursor: pointer;

    &:hover {
      background: #f0f4ff;
      color: #2d96bc;
      border-radius: 8px;
    }
  }
`;

export const Hamburger = styled.div`
  display: none;
  cursor: pointer;
  z-index: 1000;

  @media (max-width: 768px) {
    display: block;
    font-size: 24px;
  }
`;

export const Button = styled.button`
  width: 100%;
  border-radius: 10px;
  padding: 12px;
  background: #2d96bc;
  color: #fff;
  border: 1px solid #2d96bc;
  font-size: 16px;
  line-height: 28px;
`;

// Mobile Nav
export const MobileNav = styled.div<{ open: boolean }>`
  position: fixed;
  inset: 0;
  width: 100%;
  background: #fff;
  z-index: 999;
  display: flex;
  flex-direction: column;
  padding: 40px 20px;
  max-width: 80%;

  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
  opacity: ${({ open }) => (open ? 1 : 0)};
  visibility: ${({ open }) => (open ? "visible" : "hidden")};
  transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out,
    visibility 0.3s ease-in-out;

  .mobile-link {
    font-size: 18px;
    font-weight: 500;
    margin: 12px 0;
    cursor: pointer;
    color: #222;
    display: flex;
    justify-content: space-between;
    align-items: center;

    &:hover {
      color: #2d96bc;
    }
  }

  .mobile-dropdown {
    padding-left: 16px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin: 6px 0 12px;
  }

  .mobile-dropdown-item {
    font-size: 16px;
    font-weight: 400;
    color: #444;
    cursor: pointer;

    &:hover {
      color: #2d96bc;
    }
  }

  @media (min-width: 769px) {
    display: none;
  }
`;

export const AccountLoginWrapper = styled.div`
  display: flex;
  align-items: center;
  column-gap: 12px;
  width: 30%;

  .login {
    display: flex;
    justify-content: center;
    border: 1px solid #2d96bc;
    padding: 10px;
    width: 40%;
    align-items: center;
    gap: 10px;
    border-radius: 10px;
    font-size: 16px;
    line-height: 28px;
  }

  .text {
    font-family: Exo 2;
    font-weight: 500;
    font-size: 16px;
    line-height: 28px;
    color: #2d96bc;
  }

  @media (max-width: 768px) {
    width: auto;

    .login {
      width: auto;
      padding: 8px 10px;
      font-size: 14px;
      gap: 6px;
    }

    .text {
      font-size: 14px;
    }
  }
`;