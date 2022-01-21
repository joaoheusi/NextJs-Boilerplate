import React from 'react'
import { Container } from './styles'
import Image from 'next/image'

import logoImg from '../../assets/Logo.svg'

export function Header() {
  return (
    <Container>
      <div>
        <nav>
          <Image src={logoImg}></Image>

          <a href="/">Home</a>
          <a href="/">Posts</a>
        </nav>
      </div>
    </Container>
  )
}
