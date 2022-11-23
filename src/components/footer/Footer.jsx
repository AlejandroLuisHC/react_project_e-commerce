import { memo } from 'react'
import { FooterContainer } from '../style/footerStyle'

const Footer = () => {

  return (
    <FooterContainer className="bg-dark">
        <small>Alejandro L. Herrero © - alejandrolhc@gmail.com</small>
    </FooterContainer>
  )
}

export default memo(Footer)