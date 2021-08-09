import { MenuLinks } from '../../../utils/blogs';
import styled from 'styled-components';

const MenuWrapper = styled.div`
  width: 82%;
  margin-top: 35px;
`;

function Menu() {
  return (
    <MenuWrapper>
      {MenuLinks.map((linkItem, index) => {
        return (
          <span key={linkItem?.label}>
            {index > 0 && ' | '}
            {linkItem?.label && (<a href={linkItem?.url}>{linkItem?.label}</a>)}
          </span>
        )
      })}
    </MenuWrapper>
  );
}

export default Menu;
