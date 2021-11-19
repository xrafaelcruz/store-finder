import styled from 'styled-components'
import { MapWrapper } from '.'

type Bar = {
  mapIsVisible: boolean
}

export const Wrapper = styled.div<MapWrapper>`
  background: ${({ theme }) => theme.colors.gray};
  height: ${({ height }) => height};
  width: 100%;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    height: 100vh;
    left: 0;
    opacity: ${({ mapIsVisible }) => (mapIsVisible ? '1' : '0')};
    position: fixed;
    top: 0;
    transition: 0.3s;
    visibility: ${({ mapIsVisible }) => (mapIsVisible ? 'visible' : 'hidden')};
    width: 100vw;
    z-index: 100;
  }
`

export const Map = styled.div`
  height: 100%;
  width: 100%;
`
export const Bar = styled.div<Bar>`
  align-items: center;
  background: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.3);
  display: flex;
  height: 48px;
  justify-content: flex-end;
  left: 0;
  opacity: 0;
  padding: 0 22.28px;
  position: absolute;
  top: 0;
  transition: opacity 250ms ease-in-out;
  visibility: hidden;
  width: 100%;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    opacity: ${({ mapIsVisible }) => (mapIsVisible ? '1' : '0')};
    visibility: ${({ mapIsVisible }) => (mapIsVisible ? 'visible' : 'hidden')};
    z-index: ${({ mapIsVisible }) => (mapIsVisible ? '110' : '-100')};
  }
`
