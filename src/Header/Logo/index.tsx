import colors from "../../colors"

const Logo = () =>
{
    return (
        <div style={{
            top: '30px',
            position: 'absolute',
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            flexDirection: 'row',
        }}>
            <div style={{ 
                fontFamily: 'Goldplay',
                fontStyle: 'normal',
                fontWeight: 500,
                fontSize: '1.8vw',
                lineHeight: '94%',
                display: 'flex',
                alignItems: 'flex-end',
                color: colors.textDark,
                flexDirection: 'column',
                
            }}>
                <p style={{fontWeight:'bolder',fontFamily:'Goldplay Bold'}}>Rosiery</p>
                Maia
            </div>
            <div style={{
                width: '4px',
                marginLeft: '6px',
                marginRight: '6px',
                borderRadius: 1000,
                backgroundColor: colors.textDark,
            }}/>
            <img 
            style={{
                width: '3.8vw',
                height: '3.8vw',
            }}
            src={require('../../assets/pi-icon.png')} />
        </div>
    )
}

export default Logo