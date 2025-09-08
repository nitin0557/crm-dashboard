import styled from "@emotion/styled";
import { ReactComponent as LogoIcon } from "../../assets/leadcrmlogo.svg";
import { ReactComponent as FrameIcon } from "../../assets/frame.svg";
import { ReactComponent as ArrowDownIcon } from "../../assets/arrowdown.svg";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useEffect, useState, useMemo, useCallback } from "react";
import { Link } from "react-router-dom";
import {
  AccountLoginWrapper,
  Button,
  Dropdown,
  Hamburger,
  HeaderWrapper,
  MobileNav,
  Nav,
} from "./Header.style";
import MegaDropdown from "../../lib/components/MegaDropdown/MegaDropdown";
import { HeaderProps } from "./types";

const Header: React.FC<HeaderProps> = ({
  isMobileNavOpen,
  toggleMobileNav,
  isDesKtopNavOpen,
  toggleDesktopNav,
}) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [openSection, setOpenSection] = useState<string | null>(null);

  // ✅ useCallback to avoid re-creating functions
  const toggleSection = useCallback(
    (section: string) => {
      setOpenSection((prev) => (prev === section ? null : section));
    },
    []
  );

  const handleMobileLinkClick = useCallback(() => {
    toggleMobileNav();
    setOpenSection(null);
  }, [toggleMobileNav]);

  // ✅ useMemo for dropdown items (static list)
  const resourcesLinks = useMemo(
    () => [
      { to: "/blogs", label: "Blogs" },
      { to: "/docs", label: "API Documentation" },
      { to: "/alternatives", label: "LeadCRM Alternatives" },
      { to: "/linkedin-guide", label: "LinkedIn CRM Integration Guide" },
      { to: "/lead-export", label: "Lead Export Guide" },
      { to: "/faqs", label: "FAQs" },
    ],
    []
  );

  const companyLinks = useMemo(
    () => [
      { to: "/about", label: "About Us" },
      { to: "/contact", label: "Contact Us" },
    ],
    []
  );

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <HeaderWrapper>
      <div className="header-inner">
        <div className="logo">
          <LogoIcon width={208} height={64} />
        </div>

        {/* ✅ DESKTOP NAV */}
        <div className="nav">
          <Nav isMobileNavOpen={isMobileNavOpen} isDeskOpen={isDesKtopNavOpen}>
            <div className="nav-item">
              <div>Product</div>
              <ArrowDownIcon width={14} height={10} />
              <MegaDropdown />
            </div>

            <Link to="/pricing" className="nav-item">
              Pricing
            </Link>

            <div className="nav-item">
              <div>Resources</div>
              <ArrowDownIcon width={14} height={10} />
              <Dropdown className="dropdown">
                {resourcesLinks.map((item) => (
                  <Link key={item.to} to={item.to} className="dropdown-item">
                    {item.label}
                  </Link>
                ))}
              </Dropdown>
            </div>

            <div className="nav-item">
              <div>Company</div>
              <ArrowDownIcon width={14} height={10} />
              <Dropdown className="dropdown">
                {companyLinks.map((item) => (
                  <Link key={item.to} to={item.to} className="dropdown-item">
                    {item.label}
                  </Link>
                ))}
              </Dropdown>
            </div>
          </Nav>
        </div>

        {/* ✅ LOGIN + CTA */}
        <AccountLoginWrapper>
          {windowWidth >= 768 && <Button>Get Free Account</Button>}
          <div className="login">
            <FrameIcon />
            <div className="text">Login</div>
          </div>

          <Hamburger onClick={toggleMobileNav}>
            {isMobileNavOpen ? <CloseIcon /> : <MenuIcon />}
          </Hamburger>
        </AccountLoginWrapper>
      </div>

      {/* ✅ MOBILE NAV */}
      <MobileNav open={isMobileNavOpen}>
        {/* Product Dropdown */}
        <div className="mobile-link" onClick={() => toggleSection("product")}>
          Product <ArrowDownIcon width={14} height={10} />
        </div>
        {openSection === "product" && (
          <div className="mobile-dropdown">
            <Link to="/lead-finder" className="mobile-dropdown-item" onClick={handleMobileLinkClick}>Lead Finder</Link>
            <Link to="/teammate" className="mobile-dropdown-item" onClick={handleMobileLinkClick}>Teammate</Link>
            <Link to="/deal-management" className="mobile-dropdown-item" onClick={handleMobileLinkClick}>Deal Management</Link>
            <Link to="/crm-sync" className="mobile-dropdown-item" onClick={handleMobileLinkClick}>CRM Data Sync</Link>
            <Link to="/ai-commenting" className="mobile-dropdown-item" onClick={handleMobileLinkClick}>AI-Assisted Commenting</Link>
            <Link to="/templates" className="mobile-dropdown-item" onClick={handleMobileLinkClick}>Templates & Shortcuts</Link>
          </div>
        )}

        {/* Pricing */}
        <Link to="/pricing" className="mobile-link" onClick={handleMobileLinkClick}>
          Pricing
        </Link>

        {/* Resources Dropdown */}
        <div className="mobile-link" onClick={() => toggleSection("resources")}>
          Resources <ArrowDownIcon width={14} height={10} />
        </div>
        {openSection === "resources" && (
          <div className="mobile-dropdown">
            {resourcesLinks.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="mobile-dropdown-item"
                onClick={handleMobileLinkClick}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}

        {/* Company Dropdown */}
        <div className="mobile-link" onClick={() => toggleSection("company")}>
          Company <ArrowDownIcon width={14} height={10} />
        </div>
        {openSection === "company" && (
          <div className="mobile-dropdown">
            {companyLinks.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="mobile-dropdown-item"
                onClick={handleMobileLinkClick}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </MobileNav>
    </HeaderWrapper>
  );
};

export default Header;
