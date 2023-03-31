import Line from '../../Components/Line';
import MainTXT from './MainTXT';
import Section from './Section';
import './style.css'

const Curriculum = () => 
{
    const rows = 3;

    function separateElement () 
    { 
        var separateElements = [];
        var multiElements = [
        {
            name: 'Rosiery Maia',
            title: 'Computer Science',
            email: 'rosi@mail.com',
            location: 'Natal, RN - Brazil',
            MainTXt: true
        },
        {
            title: 'SUMMARY',
            text:`Possui graduação em Ciência da Computação pela Universidade Federal do Rio Grande do Norte (2001), mestrado em Sistemas e Computação pela Universidade Federal do Rio Grande do Norte (2004) e doutorado em Engenharia Elétrica e de Computação pela Universidade Federal do Rio Grande do Norte (2012). Atualmente é professora Associada da Universidade do Estado do Rio Grande do Norte, lotada no Departamento de Informática do Campus de Natal RN`,
            
        },
        {
            title: 'SKILLS',
            text:undefined
        },
        {
            title: 'EDUCATION',
            InSections:[
                {
                    subTitle:'Computer Science',
                    subSubTitle:'UFRN',
                    period:'2018 - 2020',
                    locale:'Natal, RN - Brazil',
                    text:undefined
                },
                {
                    subTitle:'Computer Science',
                    subSubTitle:'UFRN',
                    period:undefined,
                    locale:undefined,
                    text:undefined
                },
            ],
            text:undefined,
        },
       
    ];
        
        for(var i = 0; i < multiElements.length; i+=rows) 
        {
            var oneRow = [];
            oneRow.push(multiElements.slice(i, i+rows).map(item => {

            if(item.MainTXt)
            {
                return (
                    <MainTXT
                    name={item.name}
                    title={item.title}
                    email={item.email}
                    location={item.location}
                    />
                )
            }
            else return (
                <Section
                InSections={item.InSections}
                row={i}
                text={item.text}
                title={item.title}

                />
            )
            }))

            separateElements.push(oneRow.map(itm => {return <div>{itm}</div>}))
        }
        
        return separateElements;
    }

    return (
        <div style={{
           
            width: '100vw',
            height: '84vh',
            overflow: 'auto',
           
        }}>
            
            <div style={{
                display: 'flex',
                padding:'40px 80px',
                //border: '1px solid #000',
                marginBottom: '60px',
            }}>
                {separateElement()}
               
            </div>
           
        </div>
    );
}

export default Curriculum;