import { memo } from 'react';
import Logo from '../logo';

const Footer = memo(() => (
  <footer className="footer container">
    <Logo place='Footer' />
  </footer>
));

Footer.displayName = 'Footer';

export default Footer;
