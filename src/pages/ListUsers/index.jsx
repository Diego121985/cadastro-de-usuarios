import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../services/api';
import Button from '../../components/Button';
import TopBackground from '../../components/TopBackground';
import Trash from '../../assets/trash (1).svg';
import { Container, Title, CardUsers, TrashIcon, ContainerUsers, AvatarUser } from './styles';

function ListerUsers() {
    const [users, setUsers] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        async function getUsers() {
            const { data } = await api.get('/usuarios');
            setUsers(data);
        }
        getUsers();
    }, []);

    async function deleteUsers(id) {

        await api.delete(`/usuarios/${id}`);

        const upadatedUsers =users.filter(user => user.id !== id)

        setUsers(upadatedUsers)

       }
       

            return (
                <Container>
                    <TopBackground />
                    <Title>Lista de Usuários</Title>

                    <ContainerUsers>
                        {users.map((user) => (
                            <CardUsers key={user.id}>
                                <AvatarUser src={`https://avatar.iran.liara.run/public?username=${user.id}`} />
                                <div>
                                    <h3>{user.name}</h3>
                                    <p>{user.age}</p>
                                    <p>{user.email}</p>
                                </div>
                                <TrashIcon src={Trash} alt="lata de lixo" onClick={() => deleteUsers(user.id)} />
                            </CardUsers>
                        ))}
                    </ContainerUsers>

                    <Button type="button" onClick={() => navigate('/')}>Voltar</Button>
                </Container>
            );
        }

        export default ListerUsers;
