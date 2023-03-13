import Home from './pages/Home';
import style from './App.module.css';
import Header from './Header';
import Pages from './pages';

function App() {

  return (
    <div className={style.background}>
      <div style=
      {{
        width:'100%',
        height:'100%',
        display:'flex',
        flexDirection:'column',
        border:'1px solid #000000',
      }}>
        <Header/>
        <Pages/>
      </div>
    </div>
  );
}
//<Pages/>
export default App;
