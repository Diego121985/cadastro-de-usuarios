import { useRef } from 'react';
import api from '../../services/api';
import { useNavigate } from 'react-router-dom';
import { Container, ContainerInputs, Input, InputLabel, Title, Form, } from './styles';

import Button from '../../components/Button';
import MyImage from '../../components/TopBackground';

function Home() {

    const inputName = useRef()
    const inputAge = useRef()
    const inputEmail = useRef()
    
    const navigate = useNavigate()

    async function registerNewUser() {
       await api.post('/usuarios', {
            email: inputEmail.current.value,
            age: parseInt(inputAge.current.value),
            name: inputName.current.value,

        })
        navigate('/listas-de-usuarios')
    
    }

    return (
        <Container>
            <MyImage />

            <Form>
                <Title>Cadastrar Usuários</Title>
                <ContainerInputs>
                    <div>

                        <InputLabel>
                            Nome<span> *</span>
                            <Input type="text" placeholder="Nome do usuário" ref={inputName} />
                        </InputLabel>
                    </div>

                    <div>
                        <InputLabel>
                            Idade<span> *</span>
                            <Input type="number" placeholder="Idade do usuário" ref={inputAge} />
                        </InputLabel>

                    </div>
                </ContainerInputs>
                <div style={{ width: "100%" }}>
                    <InputLabel>
                        E-mail<span> *</span>
                        <Input type="email" placeholder="E-mail do usuário" ref={inputEmail} />
                    </InputLabel>

                </div>
                <Button type='button' onClick={registerNewUser} theme="primary"> Cadastrar Usuários</Button>
            </Form>

            <Button type='button' onClick={() => navigate('/lista-de-usuarios')}>Ver lista Usuários</Button>

        </Container>
    );
}

export default Home;

