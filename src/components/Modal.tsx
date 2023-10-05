import { motion } from 'framer-motion';
import styled from 'styled-components';

interface ModalProps {
  layoutId: string;
}
const ModalCard = styled(motion.section)`
  position: fixed;
  width: 40vw;
  height: 80vh;
  background-color: red;
  top: 50px; /* specify units for numerical values */
  left: 0;
  right: 0;
  margin: 0 auto;

  p {
    font-size: 5rem;
  }
`;

export const Modal = ({ layoutId }: ModalProps) => {
  return (
    <ModalCard layoutId={layoutId}>
      <p>HI</p>
    </ModalCard>
  );
};
