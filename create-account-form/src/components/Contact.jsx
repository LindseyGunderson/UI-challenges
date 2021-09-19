import styled from "styled-components";

import { mobile } from '../responsive';

import { largermobile } from '../responsive';

import { tablet } from '../responsive';

const Container = styled.div`

    width: 100vw;
    height: 100vh;

    background-color: #FFA69E;
   
    display: flex;
    justify-content: center;
    align-items: center;

`;

const Wrapper = styled.div`

    background-color: #fff;
    width: 70%;

    display: flex;
    flex-direction: row;
    justify-content: center;

    ${tablet({ width: "90%" })}

    ${largermobile({ flexDirection: "column", width: "80%", })}

    ${mobile({ flexDirection: "column", width: "100%" })}

`;

const ImgDiv = styled.div`

    flex: 1;


`;

const Image = styled.img`

    width: 100%;
    height: 100%;
    object-fit: fill;

    ${largermobile({ height: "75%" })}

    ${mobile({ height: "80%" })}
`;

const Title = styled.h1`

    font-size: 30px;
    color: #5E6472;
    font-weight: 300;

    ${largermobile({ fontSize: "22px" })}

    ${mobile({ fontSize: "20px", fontWeight: "700" })}

`;

const FormDiv = styled.div`

    flex: 1;

    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 2.5rem;
    text-align: center;

    ${largermobile({ padding: "1.5rem" })}

    ${mobile({ padding: "1rem"})}



`;

const Form = styled.form`
    
    padding-top: 1.5rem;
    display: flex;
    flex-direction: column;

    ${largermobile({ paddingTop: "1rem" })}

    ${mobile({ paddingTop: "0" })}

`;

const Description = styled.p`

    font-size: 16px;
    margin-top: 0.5rem;

    ${largermobile({ fontSize: "14px" })}

    ${mobile({ fontSize: "13px" })}
    
`;

const Input = styled.input`

    min-width: 40%;
    margin: 20px 10px 0 0;
    padding: 8px;

    ${largermobile({ margin: "12px 8px 0 0", width: "100%" })}

    ${mobile({ margin: "10px 5px 0 0" })}

`;

const Button = styled.button`

    margin: 1rem auto;
    padding: 10px 10px;
    width: 60%;

    border: none;
    background-color: #05B2DC;
    color: #fff;
    font-size: 16px;
    font-weight: 600;

    ${tablet({ width: "70%" })}

    ${largermobile({ width: "100%" })}


`;

const Links = styled.a`

    color: #d87c73;
    text-decoration: underline;

    ${mobile({ fontSize: "13px" })}


`;



const Contact = () => {
    return (
        <Container>
            <Wrapper>
                

                <ImgDiv>
                    <Image src="https://images.unsplash.com/photo-1563589173312-476d8c36b242?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1558&q=80"/>
                </ImgDiv>

                <FormDiv>

                    <Title> Create An Account</Title>
                    <Description> Creating an account will only take a few minutes! </Description>
                    <Form>
                        
                        <Input  placeholder="Full Name"/>
                        <Input  placeholder="Email Address"/>
                        <Input  placeholder="Password"/>
                        <Input  placeholder="Confirm Password"/>

                        <Button> Sign Up</Button>
                    </Form>
                    <Description>Already have an Account?</Description>
                    <Links>Sign In</Links>
                </FormDiv>


            </Wrapper>
        </Container>
    )
}

export default Contact
