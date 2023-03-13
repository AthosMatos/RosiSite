import PagesSwitcherClicable from "./PagesSwitcherClicable";
import Slider from "./Slider";
const PagesSwitcher = () => 
{
    return (
    <div>
        <div 
        style={{
            display: 'flex',
            justifyContent: 'space-between',
        }}>
            <PagesSwitcherClicable pageIndex={0} pageName="Home" />
            <PagesSwitcherClicable pageIndex={1} pageName="Career"  />
            <PagesSwitcherClicable pageIndex={2} pageName="Curriculum"  />
            <PagesSwitcherClicable pageIndex={3} pageName="Projects" />
        </div>

        <Slider />
    </div>

    );
}

export default PagesSwitcher;
