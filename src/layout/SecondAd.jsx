import React from 'react'
import Container from '../components/Container'
import { Link } from 'react-router-dom'
import Image from '../components/Image'
import SecondAD from '../assets/SecondAd.png'

const SecondAd = () => {
  return (
    <>
    <Container className={"py-32.5"}>
        <Link to={"/shop"}>
        <Image imgSrc={SecondAD}/>
        </Link>
    </Container>
    </>
  )
}

export default SecondAd