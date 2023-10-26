import "./App.css";
import Card from "./components/Card";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import SingleHostelPage from "./pages/SingleHostelPage";

function App() {
  return (
    <main>
      {/* <Login /> */}
      {/* <Card name="Boys Hostel" location="Kathmandu" price="15,000" /> */}
      {/* <Footer /> */}
      <SingleHostelPage />
    </main>
  );
}

export default App;
