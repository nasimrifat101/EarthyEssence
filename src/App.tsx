import Banner from "./components/Home/Banner";
import Navbar from "./components/Home/Navbar";
import Showcase from "./components/Home/Showcase";

const App = () => {
  return (
    <div className="relative">
      <Navbar />
      <Banner />
      <Showcase />
    </div>
  );
};

export default App;
