import { Logo } from './styled';

const logoVariants = {
  initial: {
    color: 'black',
    scale: 1,
  },
  active: {
    color: 'pink',
    scale: [1, 1.5, 1.5, 1],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      ease: 'linear',
    },
  },
};

export const LogoComp = () => {
  return (
    <Logo variants={logoVariants} initial="initial" whileHover="active">
      films collection
    </Logo>
  );
};
