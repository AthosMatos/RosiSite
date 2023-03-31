import Logo from "./Logo";
import PagesSwitcher from "./PagesSwitcher";
import LanguageSwitch from "./languageSwitch";
import LightModeSwitch from "./lightModeSwitch";
import style from './style.module.css'

const Header = () =>
{   
    return (
        <div 
        style={{
           
            display: 'flex',
            alignItems: 'center',
            marginTop: '36px',
            marginBottom: '36px',
            paddingLeft: '4vw',
            justifyContent: 'space-between',
        }}>
            

            <PagesSwitcher  />
           
            <Logo/>

            <div
            className={style.swichers}
            style={{
                display: 'flex',
                flexDirection: 'row',
                paddingRight: '8vw',
            }}>
                {/* <LanguageSwitch/> */}

                <LightModeSwitch/>
            </div>
        </div>
    );
}

export default Header;