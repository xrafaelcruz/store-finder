import styled from 'styled-components'

export const Item = styled.li`
  margin-top: 32px;

  &:first-of-type {
    margin-top: 21px;
  }
`

export const Title = styled.h2`
  color: ${({ theme }) => theme.colors.dark};
  display: flex;
  justify-content: space-between;
`

export const Text = styled.span`
  font-size: 2.4rem;
  font-weight: 500;
  line-height: 2.88rem;

  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`

export const Distance = styled.span`
  font-size: 1.8rem;
  font-weight: 500;
  line-height: 2.16rem;
`

export const Info = styled.article`
  background: ${({ theme }) => theme.colors.white};
  border-radius: 8px;
  color: ${({ theme }) => theme.colors.darkGray};
  margin-top: 16px;
  padding: 24px;
`

export const Address = styled.p`
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 2.1rem;
  margin-bottom: 8px;
`

export const Attendance = styled.p`
  font-size: 1.2rem;
  font-weight: 400;
  line-height: 1.8rem;
  margin-bottom: 8px;
`

export const Available = styled.p`
  color: ${({ theme }) => theme.colors.green};
  font-size: 1.2rem;
  font-weight: 700;
  line-height: 1.8rem;
`

export const MapButton = styled.button`
  align-items: center;
  background: transparent;
  color: ${({ theme }) => theme.colors.dark};
  border: 0;
  display: flex;
  font-size: 1.6rem;
  font-weight: 400;
  gap: 8px;
  line-height: 2.4rem;
  margin-top: 8px;
  text-decoration: underline;

  @media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: none;
  }
`
