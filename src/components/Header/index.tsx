import React from 'react'
import styled from 'styled-components'
import { Container } from './styles'
import Image from 'next/image'

import logoImg from '../../assets/Logo.svg'

export function Header() {
  return (
    <Container>
      <div>
        <nav>
          <a href="/">
            <Image src={logoImg}></Image>
          </a>
          <a href="/">Home</a>
          <a href="/">Posts</a>
        </nav>
      </div>
    </Container>
  )
}

const Title = styled.h1`
  color: red;
`
