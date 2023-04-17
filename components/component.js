import React from 'react';
import styled from '@emotion/styled';

const Navbar = styled.nav\`
 display: flex;
 justify-content: space-between;
 align-items: center;
 padding: 1rem 2rem;
 background-color: #f7f7f7;
 box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
\`;

const NavbarTitle = styled.h1\`
 font-family: 'Roboto', sans-serif;
 font-weight: bold;
 font-size: 1.5rem;
\`;

const NavbarLink = styled.a\`
 text-decoration: none;
 color: #333;
 font-size: 1.1rem;
\`;

const Content = styled.main\`
 padding: 2rem;
\`;

const Description = styled.p\`
 font-size: 1.2rem;
 line-height: 1.6;
 color: #333;
\`;

const FeaturesSection = styled.section\`
 display: grid;
 grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
 gap: 1rem;
\`;

const FeatureCard = styled.div\`
 background-color: #f7f7f7;
 padding: 1.5rem;
 border-radius: 5px;
 box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
\`;

const CardTitle = styled.h2\`
 font-size: 1.3rem;
 font-weight: bold;
 color: #333;
\`;

const CardDescription = styled.p\`
 font-size: 1rem;
 line-height: 1.5;
 color: #666;
\`;

const Footer = styled.footer\`
 text-align: center;
 padding: 1rem;
 font-size: 0.9rem;
 color: #999;
\`;

const Component = () => {
 return (
  <>
   <Navbar>
    <NavbarTitle>AirGPT</NavbarTitle>
    <NavbarLink href='https://airtable.com' target='\_blank' rel='noopener noreferrer'>
     Visit Airtable
    </NavbarLink>
   </Navbar>
   <Content>
    <Description>
     AirGPT is a revolutionary service that allows you to deploy websites and apps directly from Airtable to a finished
     product in a matter of seconds.
    </Description>
    <FeaturesSection>
     {/\* Add your feature cards here \*/}
     <FeatureCard>
      <CardTitle>Feature 1</CardTitle>
      <CardDescription>Description of feature 1</CardDescription>
     </FeatureCard>
     {/\* Add more feature cards as needed \*/}
    </FeaturesSection>
   </Content>
   <Footer>&copy; {new Date().getFullYear()} AirGPT. All rights reserved.</Footer>
  </>
 );
};

export default Component;

