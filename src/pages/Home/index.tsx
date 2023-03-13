import LittleDataShow from "./LittleDataShow";
import {AiOutlineMail, AiOutlineTwitter} from 'react-icons/ai';
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
            icons={[
                {text:'Instagram',icon:BsInstagram},
                {text:'Email',icon:AiOutlineMail},
                {text:'Twitter',icon:AiOutlineTwitter},
                {text:'linkedin',icon:AiOutlineLinkedin}
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