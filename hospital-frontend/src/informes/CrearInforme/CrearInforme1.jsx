import {useState} from 'react';
// import CrearInforme2 from './CrearInforme2';

export default function CrearInforme1() {

    const [credentials, setCredentials] = useState({
        user: '',
        password: '',
    });

    // const [botonAcceder, setBotonAcceder] = useState(false);

    const handleChangeUser = (e) => {
        setCredentials(
            {...credentials, 
                user: e.target.value
            }
        );
    }

    const handleChangePassword = (e) => {
        setCredentials(
            {...credentials, 
                password: e.target.value
            }
        );
    }



  return (
    <>
    <h1>Identificación del Personal</h1>
    <div style={{display: 'flex', flexDirection: 'column'}}>
        
        <label htmlFor="user">Identificación</label>
        <input 
            id='user'
            value={credentials.user} 
            onChange={handleChangeUser}/>

        <label htmlFor="password">Constraseña</label>
        <input
            type='password'
            id='password'
            value={credentials.password} 
            onChange={handleChangePassword}/>    
    </div>

    {/* <button onClick={() => {setBotonAcceder(true)}}>Acceder</button> */}

    </>
  )
}
// 