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
        <Card title="Card 1" description="Card 1 des" />
        <Card title="Card 1" description="Card 1 des" />
        <Card title="Card 1" description="Card 1 des" main="vkkkkk" />
      </div>
      <Footer />
    </>
  );
}

export default App;
