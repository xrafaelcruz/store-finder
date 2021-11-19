import styled from 'styled-components'

export const Main = styled.main``

export const Container = styled.div`
  padding: 0 40px;
  width: 100%;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 0 16px;
  }
`
