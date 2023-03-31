import { useSelector } from "react-redux"
import { lightModeReducerTypes } from "../../../redux/lightModeReducer"

const mainTxt = `Possui graduação em Ciência da Computação pela Universidade Federal do Rio Grande do Norte (2001), mestrado em Sistemas e Computação pela Universidade Federal do Rio Grande do Norte (2004) e doutorado em Engenharia Elétrica e de Computação pela Universidade Federal do Rio Grande do Norte (2012). Atualmente é professora Associada da Universidade do Estado do Rio Grande do Norte, lotada no Departamento de Informática do Campus de Natal RN. Atuou em estágio pós-doutoral do Departamento de Engenharia Elétrica e de Computação da Universidade Federal do Rio Grande do Norte (2017). Suas pesquisas envolvem temas com Robótica, aplicações de teorias sociais na aprendizagem robótica e otimização. Atualmente está investigando inteligência computacional aplicada a negócios.`

const MainInfo = () =>
{
    const theme = useSelector((state:lightModeReducerTypes) => state.lightMode)
    
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
        }}>
            <div style={{
                display: 'flex',
                width:'10vw',
                height:'10vw',
                border:'1px solid #CECECE',
                borderRadius:'0.8rem',
                overflow:'hidden',
                alignItems:'center',
                justifyContent:'center',
            }}>
                <img style={{
                    width:'15vw',
                    height:'15vw',
                    objectFit:'cover',
                }} src={require('./rosiProfile.png')} alt="profile"/>
            </div>
            <p style={{
                color: theme.textColor,
                fontWeight:'800',
                fontSize:'1.5vw',
                margin:'0.8vw 0',
            }}>
                Home
            </p>
            <p style={{
                color: theme.textColor,
                fontWeight:'400',
                fontSize:'1vw',
                textAlign:'center',
                maxWidth:'30vw',
            }}>
            {mainTxt}
            </p>
        </div>
    )
}

export default MainInfo