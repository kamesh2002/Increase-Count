import Header from "./Components/Header";
import Counter from "./Components/Counter";
import Posts from "./Components/Posts";
import {Route,Routes} from "react-router-dom";


const App =()=>{

  return(
    <div>
     <Header name="Skcet"/>
     <Routes>
     
      <Route path="/counter" element={<Counter/>} />
      <Route path="/posts" element={<Posts/>} />
     </Routes>
    
    </div>
    
  )
}
export default App;