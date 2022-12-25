import './App.css'
import  Navbar  from './Components/Navbar'
import OutlineTypesExample from './Components/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Sidebar } from './Components/Sidebar';
import { InnerSidebar } from './Components/InnerSidebar';
import { Sales } from './Pages/sales';

function App() {
  // const [count, setCount] = useState(0);

  const styles={
    width:"158px",
    height:"30px",
    borderRadius:"16px",
    display:"flex",
    gap:"7px",
    fontWeight:"500",
    backgroundColor:"white",
    justifyContent:"center",
    border:"1px solid #F7F7F7",
    lineHeight:"1",
    fontSize:"14px"
  }

  const check={
    height:"22px",
    display:"flex",
    justifyContent: "center",
    alignItems: "center"
}

  return (
    <div className="App">
      <Navbar button={<OutlineTypesExample css={styles} check={check}/>}/>
      <Sidebar innersidebar={<InnerSidebar/>}/>
      
    </div>
  )
}
export default App
