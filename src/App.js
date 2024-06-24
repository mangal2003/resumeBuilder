import Navbar from "./components/Navbar/navbar";
import Login from "./components/Login/login";
import Description from "./components/Description/description";
import Information from "./components/Information/information";
function App() {
  return (
    <div className="App">
      <Login />
      <Navbar />
      <Description />
      <Information />
    </div>
  );
}

export default App;
