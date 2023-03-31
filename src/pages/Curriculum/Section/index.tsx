import { BsFillCalendarDateFill } from "react-icons/bs"
import Line from "../../../Components/Line"
import Text from "../../../Components/Text"
import { MdLocationOn } from "react-icons/md"

const lorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquet nisl,
nec lacinia nisl nunc vel nisl. Sed euismod, nisl vel ultricies lacinia,
nisl nisl aliquet nisl, nec lacinia nisl nunc vel nisl. Sed euismod, nisl vel ultricies lacinia,`


export interface InSectionsTypes
{
    subTitle?:string
    subSubTitle?:string
    period?:string
    locale?:string
    text?:string
}

export interface SummaryProps
{
    InSections?:InSectionsTypes[]
    title?:string
    text?:string
    row:number
}

const Section = (props:SummaryProps) => 
{

    return (
        <div style={{
            width: '440px',
            marginBottom: '30px',
           // marginTop: '30px',
            marginLeft: props.row >= 1? '80px' : '40px',
        }}>
            <Text text={props.title?props.title:'TITLE'} color="mainTextColor" weigth="Black"/>
            <Line width="440px" height="4px" color="mainTextColor"/>
            
            {props.InSections?.map((item, index) => {
                return(
                    <div>
                        {item.subTitle && <Text style={{marginTop:'10px',lineHeight:'20px'}} fontSize={'24px'} text={item.subTitle} color="mainTextColor" weigth="Regular"/>}
                        {item.subSubTitle && <Text fontSize={'24px'} text={item.subSubTitle} color="secondaryTextColor" weigth="Bold"/>}
                        
                        <div style={{
                            display: 'flex',
                            //border: '1px solid #000',
                            width: '50%',
                            justifyContent: 'space-between',
                        }}>
                            <div style={{
                                display: 'flex',
                            }}>
                                <BsFillCalendarDateFill/>
                                <Text text={item.period?item.period:'PERIOD'} color="mainTextColor" weigth="Regular" fontSize={'12px'}/>
                            
                            </div>
                            <div style={{
                                display: 'flex',
                            }}>
                                <MdLocationOn/>
                                <Text text={item.locale?item.locale:'LOCALE'} color="mainTextColor" weigth="Regular" fontSize={'12px'}/>
                            
                            </div>
                            
                        </div>

                        <Text style={{marginTop:'16px'}} 
                        weigth={props.InSections ? 'Regular' :"SemiBold"} 
                        text={props.text?props.text:lorem} 
                        color="mainTextColor" 
                        fontSize={props.InSections ? '14px' :'18px'}/>

                        <Line color="mainTextColor" style={{
                            display:'flex',
                            marginTop: '20px',
                            marginBottom: '20px',
                            }} height="1px"/>
                    </div>
                    
                )
                

            })}
            {!props.InSections && 
                <Text style={{marginTop:'16px'}} 
                weigth={props.InSections ? 'Regular' :"SemiBold"} 
                text={props.text?props.text:lorem} 
                color="mainTextColor" 
                fontSize={props.InSections ? '14px' :'18px'}/>
            }
            

        </div>
    )
}

export default Section

