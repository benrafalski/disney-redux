import styled from 'styled-components';
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';

const LoginPage = () => {
    const history = useHistory()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const login = () => {
        
    }

    return (
       <Container>
           <Content>
               <Login>
                <img 
                    style={{ cursor:'pointer' }} 
                    onClick={e => history.push('/')}
                    src='https://cannonball-cdn.bamgrid.com/assets/originals/bundle-logo-01.svg'
                />
                <LoginForm>
                    <FormText>Log in with your email</FormText>
                    <FormInput 
                        type='text' 
                        placeholder='Email' 
                        onChange={e => setEmail(e.target.value)}
                    />
                    <FormInput 
                        style={{ marginTop:'24px' }} 
                        type='password' 
                        placeholder='Password' 
                        onChange={e => setPassword(e.target.value)}
                    />
                    <FormButton
                        type='submit'
                        onClick={login}    
                    >Continue</FormButton>
                </LoginForm>
                <Margin>
                    <NewMember>New to Disney+?</NewMember>
                    <SignUp href='/'>Sign up</SignUp>
                </Margin>
               </Login>
           </Content>
       </Container>
    )
}

const Container = styled.section`
    overflow: hidden;
    display: flex;
    flex-direction: column;
    text-align: center;
    height: 100vh;    
`;

const Content = styled.div`
    margin-bottom: 10vw;
    width: 100%;
    position: relative;
    min-height: 100vh;
    box-sizing: border-box;
    display: flex;
    /* justify-content: center; */
    align-items: center;
    flex-direction: column;
    padding: 80px 40px;
    height: 100%;
    /* -webkit-font-smoothing: antialiased;
    align-items: stretch;
    display: flex;
    flex-direction: column;
    min-height: 100vh; */
    background-color: rgb(26, 29, 41);
`;

const Login = styled.div`
    margin-bottom: 2vw;
    max-width: 400px;
    flex-wrap: wrap;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 0;
    align-items: center;
    text-align: center;
    margin-right: auto;
    margin-left: auto;
    transition-timing-function: ease-out;
    transition: opacity 0.2s;
    width: 100%;
`;

const LoginForm = styled.form`
    width: 100%;
`;

const FormText = styled.h3`
    text-align: left;
    display: block;
    font-weight: bold;
    margin: 0;
    padding: 0;
    color: #f9f9f9;
    font-size: 24px;
    padding-bottom: 1.5rem;
    padding-top: 1.5rem;
    font-family: Avenir-Heavy, sans-serif;

`;

const FormInput = styled.input`
    backdrop-filter: blur(50px);
    background-color: rgb(49, 52, 62);
    border: 1px solid transparent;
    border-radius: 4px;
    caret-color: rgb(2, 231, 245);
    color: rgb(249, 249, 249);
    font-size: 15px;
    font-stretch: normal;
    font-style: normal;
    font-weight: normal;
    height: 48px;
    letter-spacing: normal;
    line-height: 1.53;
    margin: 0px;
    outline: none;
    padding: 7px 12px;
    transition: all 0.1s ease 0s;
    width: 100%;
`;

const FormButton = styled.button`
    background: rgb(0, 114, 210);
    font-weight: bold;
    border: none;
    border-radius: 4px;
    color: rgb(249, 249, 249);
    font-size: 15px;
    padding: 0px 24px;
    text-transform: uppercase;
    -webkit-box-align: center;
    align-items: center;
    cursor: pointer;
    display: flex;
    font-family: Avenir-Heavy, sans-serif;
    font-stretch: normal;
    font-style: normal;
    height: 48px;
    -webkit-box-pack: center;
    justify-content: center;
    letter-spacing: 1.5px;
    line-height: 1.5;
    margin: 0px;
    margin-top: 35px;
    overflow: hidden;
    text-align: center;
    transition: all 0.2s ease-in-out 0s;
    width: 100%;
    -webkit-font-smoothing: antialiased;
    opacity: 1;
    visibility: visible;
`;

const Margin = styled.div`
    margin-top: 24px;
    display: flex;
    text-align: left;
    justify-content: left;
    align-items: left;
    width: 100%;
`;

const NewMember = styled.div`
    color: rgb(202, 202, 202);
    text-align: left;
    display: inline-block;
    font-size: 15px;
    line-height: 1.53;
    padding-right: 4px;
    padding-left: 2px;
`;

const SignUp = styled.a`
    color: rgb(249, 249, 249);
    opacity: 1;
    cursor: pointer;
    display: inline-block;
    font-size: 15px;
    font-stretch: normal;
    font-style: normal;
    font-weight: 500;
    letter-spacing: normal;
    line-height: 1.53;
    margin: 0px;
    text-align: left;
    text-decoration: none;
    width: auto;

    &:hover{
        color: lightblue;
        text-decoration: underline;
    }
`;

export default LoginPage
