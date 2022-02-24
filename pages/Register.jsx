import styled from 'styled-components'
import background from '../assets/images/Loginbackground.png'

const Container = styled.div`
  height: 100vh;
  display: flex;
  background: url(${background});
  background-repeat:no-repeat;
  background-size:cover;
  background-position:center;
`;

const RegisterWrapper = styled.div`
  display: flex;
  margin: auto;
  min-width: 320px;
  
`

const RegisterBox = styled.div`
  width: 50%;
  box-sizing: border-box;
  padding: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;

`;

const Title = styled.h1`
  font-size: 40px;
  font-weight: 700;
  flex:1;
`;

const Form = styled.form`
  box-sizing: border-box;
  padding: 0 40px 0 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
`;

const Input = styled.input`
  display:flex;
  min-width:350px;
  padding: 16px 16px;
  margin: 16px 0;
  
  border-bottom: solid 1px black;
  border-left:none;
  border-right:none;
  border-top:none;
  font-size: 16px;
 
  background: white;
  transition: background-color 160ms;


  &:focus {
    background: lightgrey;
    outline:none;
  }
`;

const Button = styled.button`
  min-width:380px;
  padding: 16px 16px;
  margin: 30px 0;
  border-radius: 50px;
  border: none;
  font-weight: 500;
  font-size: 16px;
  color: white;
  background-color: #7c3aed;
  -webkit-appearance: none;
  cursor: pointer;
`;

const Link = styled.a`
  order:3;
  margin: 5px 0px;
  font-size: 16px;
  text-decoration: underline;
  color: #7c3aed;
  cursor: pointer;
`;


const Register = () => {
  return (
    <Container>
      <RegisterWrapper>
        <RegisterBox>
            <Title>Create an account</Title>
            <Form>
            <Input placeholder="First Name" type="text"/>
            <Input placeholder="Last Name" type="text"/>
            <Input placeholder="Email" type="email"/>
            <Input placeholder="Password" type="password" />
            <Input placeholder="Confirm Password" type="password" />
            <Button type="submit">Create Account</Button>
            </Form>
            <Link>Already have an account? Login!</Link>
        </RegisterBox>
      </RegisterWrapper>
    </Container>
  )
}

export default Register