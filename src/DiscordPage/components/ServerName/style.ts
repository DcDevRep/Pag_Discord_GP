import styled from 'styled-components';
import { ExpandMore } from 'styled-icons/material'

export const ContainerSN = styled.div`
  grid-area: SN;
  background-color: var(--secondary);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 11px 0 16px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 0px 0px;
  z-index: 2;
`;

export const TitleSN = styled.h1`
  font-size: 16px;
  font-weight: bold;
  color: var(--white);
  `;

export const ExpandIconSN = styled(ExpandMore)`
  width: 28px;
  height: 28px;
  color: var(--white);
  cursor: pointer;
  transition: color 0.2s;
  &:hover {
    color: var(--symbol);
  }

`;