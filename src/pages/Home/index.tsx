import LittleDataShow from "./LittleDataShow";
import {AiFillCodeSandboxSquare, AiOutlineMail, AiOutlineTwitter} from 'react-icons/ai';
import {AiOutlineLinkedin , AiOutlineUser} from 'react-icons/ai';
import { BsInstagram } from 'react-icons/bs';
import MainInfo from "./MainInfo";

const Home = () => 
{
   
    return (
        <div style={{
            display: 'flex',
            width: '100vw',
            height: '84vh',
            alignItems: 'center',
            justifyContent: 'space-evenly',
           
        }}>
            
            <LittleDataShow
            onClick={[
                ()=>
                {
                    window.open('http://lattes.cnpq.br/7042008440404612');
                },

            ]}
            icons={[
                {text:'Lattes',icon:AiFillCodeSandboxSquare},
                {text:'rosi@mail.com',icon:AiOutlineMail},
               // {text:'Twitter',icon:AiOutlineTwitter},
                //{text:'linkedin',icon:AiOutlineLinkedin}
            ]}
            dataName="Socials"/>
            
            <MainInfo/>

            <LittleDataShow
            icons={[
                {text:'Skill 1',icon:AiOutlineUser},
                {text:'Skill 2',icon:AiOutlineUser},
                {text:'Personality 1',icon:AiOutlineUser},
                {text:'Personality 2',icon:AiOutlineUser}
            ]}
            dataName="Key Points"/>
            
        </div>
    );
}

export default Home;