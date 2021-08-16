import { Fragment } from 'react';
import { MenuLinks } from '../../../utils/blogs';
import styled from 'styled-components';

const MenuWrapper = styled.div`
  width: 82%;
  margin-top: 35px;
`;

function Menu({ noStyle = true }) {
  const Wrapper = noStyle ? MenuWrapper : Fragment
  return (
    <Wrapper>
      {MenuLinks.map((linkItem, index) => {
        return (
          <span key={linkItem?.label}>
            {index > 0 && ' | '}
            {linkItem?.label && (<a href={linkItem?.url}>{linkItem?.label}</a>)}
          </span>
        )
      })}
    </Wrapper>
  );
}

export default Menu;
