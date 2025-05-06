import { getConfig } from '@edx/frontend-platform';

import { FormattedMessage } from '@edx/frontend-platform/i18n';
import { Col, Container, Row } from 'react-bootstrap';
import logoWhite from '../assets/logo-white.png';
import './Footer.scss';
import './messages';

const MyFooter = () => (
  <div className="d-flex row align-content-center justify-content-center">
    <footer className="footer-container">
      {/* Bottom Footer */}
      <div className="footer-bottom font-red-hat-display">
        <Container fluid>
          <Row className="text-left text-white text-md-left">
            {/* Logo */}
            <Col xs={12} md={12} lg={2} className="pl-0 d-flex justify-content-center">
              <img src={logoWhite} alt="Logo" className="logo" />
            </Col>

            {/* Copyright */}
            <Col xs={12} md={12} lg={3} className="mb-4 mb-md-0 d-flex align-items-center justify-content-center">
              <p className="small m-0">
                <FormattedMessage
                  id="learnerVariantDashboard.allRightsReserved"
                  defaultMessage="© 2025 Credit Bureau Cambodia. All rights reserved."
                  description="The text for the copy rights."
                />
              </p>
            </Col>
            <Col xs={9} md={9} lg={3} className="pb-4 d-flex justify-content-center">
              {/* <ul className="list-inline m-0">
                  <li className="list-inline-item mx-2">
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-white">
                      <i className="fa fa-facebook fa-2x" />
                    </a>
                  </li>
                  <li className="list-inline-item mx-2">
                    <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-white">
                      <i className="fa fa-twitter fa-2x" />
                    </a>
                  </li>
                  <li className="list-inline-item mx-2">
                    <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white">
                      <i className="fa fa-linkedin fa-2x" />
                    </a>
                  </li>
                  <li className="list-inline-item mx-2">
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-white">
                      <i className="fa fa-instagram fa-2x" />
                    </a>
                  </li>
                </ul> */}
            </Col>
            {/* Links */}
            <Col xs={12} md={12} lg={4} className="mb-4 mb-md-0 d-flex align-items-center justify-content-center">
              <ul className="list-inline m-0">
                <li className="list-inline-item mx-2">
                  <a href={getConfig().LMS_BASE_URL} className="text-white small">
                    <FormattedMessage
                      id="learnerVariantDashboard.myCourse"
                      defaultMessage="My Course"
                      description="A button used to end the tour of the website"
                    />
                  </a>
                </li>
                |
                <li className="list-inline-item mx-2">
                  <a href={`${getConfig().LMS_BASE_URL}/library`} className="text-white small">
                    <FormattedMessage
                      id="learnerVariantDashboard.library"
                      defaultMessage="Library"
                      description="The text for the user menu Library navigation link."
                    />
                  </a>
                </li>
                |
                <li className="list-inline-item mx-2">
                  <a href={`${getConfig().LMS_BASE_URL}/contact`} className="text-white small">
                    <FormattedMessage
                      id="learnerVariantDashboard.contactUs"
                      defaultMessage="Contact Us"
                      description="The text for the user menu Contact Us navigation link."
                    />
                  </a>
                </li>
                |
                <li className="list-inline-item mx-2">
                  <a href={getConfig().ACCOUNT_SETTINGS_URL} className="text-white small">
                    <FormattedMessage
                      id="learnerVariantDashboard.account"
                      defaultMessage="Account"
                      description="The text for the user menu Account navigation link."
                    />
                  </a>
                </li>
              </ul>
            </Col>

          </Row>
        </Container>
      </div>
    </footer>
  </div>
);
MyFooter.propTypes = {
  // onLanguageSelected: PropTypes.func,
};

export default MyFooter;
