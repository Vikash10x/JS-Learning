import "./App.css";
import { Card } from "./components/Card";
import Footer from "./components/Footer";
import { Nevbar } from "./components/Nevbar";

function App() {
  return (
    <>
      <Nevbar />
      <div className="cards">
        <Card title="Card 1" description="Card 1 des" />
        <Card title="Card 2" description="Card 2 des" />
        <Card title="Card 3" description="Card 3 des" />
        <Card title="Card 4" description="Card 4 des" main="vkkkkk" />
      </div>
      <Footer />
    </>
  );
}

export default App;
