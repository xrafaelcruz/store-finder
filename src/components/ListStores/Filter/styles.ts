import styled from 'styled-components'

export const Filter = styled.div`
  align-items: center;
  display: flex;
  gap: 26.67px;
  padding: 0 24px 16px;
`

export const Label = styled.p`
  color: ${({ theme }) => theme.colors.dark};
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 2.1rem;
`
