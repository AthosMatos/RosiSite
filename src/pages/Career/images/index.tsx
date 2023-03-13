import style from '../style.module.css'

const Images = () =>
{

    return (
        <div
        style={{
            display: 'flex',
            flexDirection: 'row',
        }}>
            <img 
            style={{
                borderRadius: '0.8rem',
                marginRight: '1rem',
            }}
            width={300}
            src="https://www.se.com/ph/en/assets/v2/516/media/230667/900/709934422-Buildings-Facts-IC-1920x1080.jpg" alt="img1"/>
           
            <div
            style={{
                display: 'flex',
                flexDirection: 'column',
            }}>
                <img 
                style={{
                    borderRadius: '0.8rem',
                    marginBottom: '1rem',
                }}
                width={200}
                height={200}
                src="https://www.se.com/ph/en/assets/v2/516/media/230667/900/709934422-Buildings-Facts-IC-1920x1080.jpg" alt="img1"/>
                <img 
                style={{
                    borderRadius: '0.8rem',
                }}
                width={200}
                height={300}
                src="https://www.themillsbuilding.com/userfiles/cms/building/images/1/building.jpg" alt="img1"/>
            </div>
        </div>
    )
}  

export default Images