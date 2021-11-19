import styled from 'styled-components'
import IconSearch from './../Icons/icon_lupa.svg'

export const Form = styled.form`
  align-items: center;
  display: flex;
  height: 48px;
  justify-content: center;
  gap: 24px;
  margin-bottom: 40px;
  width: 100%;
`

export const InputWrapper = styled.div`
  height: 100%;
  overflow: hidden;
  position: relative;
  max-width: 464px;
  width: 100%;
`

export const IconButton = styled.button`
  align-items: center;
  background: transparent;
  bottom: 0;
  border: none;
  height: 12px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  left: 18px;
  margin: auto;
  position: absolute;
  top: 0;
  z-index: 2;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    border-radius: 50%;
    height: auto;
    left: 0;
    width: 40px;
  }
`

export const Icon = styled(IconSearch)``

export const Input = styled.input`
  border: 1px solid #d6d6d6;
  border-radius: 200px;
  height: 48px;
  max-width: 464px;
  padding: 16px 40px;
  width: 100%;
`

export const Button = styled.button`
  background: ${({ theme }) => theme.colors.primary};
  border: none;
  border-radius: 50px;
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  font-size: 1.6rem;
  font-weight: 700;
  padding: 16px 24px;
  height: 100%;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: none;
  }
`
