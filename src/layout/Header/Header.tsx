import Logo from '@/components/ui-kit/Logo/Logo';
import Navigation from '@/components/ui-kit/Navigation/Navigation';

const Header: React.FC = () => {
  return (
    <header className="absolute">
      <Logo />
      <Navigation />
    </header>
  );
};

export default Header;
