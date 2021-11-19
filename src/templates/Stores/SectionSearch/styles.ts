import styled from 'styled-components'

type Content = {
  isVisible: boolean
}

export const contentHeight = '538px'

export const Section = styled.section`
  padding: 40px 40px;
  width: 100%;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 40px 0 32px;
  }
`

export const Content = styled.div<Content>`
  align-items: center;
  display: flex;
  height: ${(props) => (props.isVisible ? contentHeight : '0')};
  justify-content: center;
  gap: 24px;
  opacity: ${(props) => (props.isVisible ? '1' : '0')};
  overflow: hidden;
  transition: height 200ms ease-in, opacity 200ms 250ms ease-in;
  width: 100%;

  > * {
    flex: 1;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    height: ${(props) => (props.isVisible ? 'auto' : '0')};
  }
`
export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.dark};
  font-size: 3.2rem;
  font-weight: 500;
  line-height: 38.4px;
  margin: 0 auto 40px;
  text-align: center;
`
