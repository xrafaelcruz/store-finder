import styled from 'styled-components'
import { scrollbarStyle } from 'styles/global'

export const Wrapper = styled.div`
  background: ${({ theme }) => theme.colors.gray};
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: hidden;
  padding: 16px 0;
  width: 100%;
`
export const List = styled.ul`
  flex: 1;
  height: 100%;
  list-style: none;
  padding: 0;
  overflow: auto;
  padding: 0 24px;
  ${scrollbarStyle}
`
