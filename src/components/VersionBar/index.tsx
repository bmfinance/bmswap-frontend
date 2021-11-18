import React from 'react'
import styled from 'styled-components'
import { Text, ButtonMenu, ButtonMenuItem, Button, HelpIcon, Link } from '@pancakeswap-libs/uikit'

const Wrapper = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  background-color: ${({ theme }) => theme.colors.tertiary};
  padding: 16px;
  ${({ theme }) => theme.mediaQueries.lg} {
    padding-left: 240px;
  }
`

const VersionBar = () => {
  return (
    <Wrapper>
      <Text bold mr="16px">
        Version:
      </Text>
      <ButtonMenu variant="primary" scale="sm" activeIndex={0}>
        <ButtonMenuItem as="a" href="#">
          V1.0.0
        </ButtonMenuItem>
        <ButtonMenuItem as="a" href="#">
          &nbsp;
        </ButtonMenuItem>
      </ButtonMenu>
      <Button variant="subtle"
        as={Link}
        href="#"
        endIcon={<HelpIcon color="white" />}
        scale="sm"
        ml="16px"
      >
        Help
      </Button>
    </Wrapper>
  )
}

export default VersionBar
