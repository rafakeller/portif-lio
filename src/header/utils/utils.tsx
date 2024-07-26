import { MenuItensScrollProps } from '../types/ToggleMenuProps';

export const handleScrollToSection = ({
  section,
  toggle,
}: MenuItensScrollProps) => {
  const sectionItem = document.getElementById(section);
  if (sectionItem) {
    sectionItem.scrollIntoView({ behavior: 'smooth' });
    setTimeout(() => {
      toggle();
    }, 1000);
  }
};
