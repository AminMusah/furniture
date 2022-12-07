import Header from "../components/Header";
import Footer from "../components/Footer";
import Arrivals from "../components/Arrivals";

function NewArrivals() {
  return (
    <div>
      <Header />
      <div className="arrival-content">
        <Arrivals image="/assets/images/serenti20.jpg" name='Couch'/>
        <Arrivals image="/assets/images/serenti25.jpg" name='Sink'/>
        <Arrivals image="/assets/images/serenti26.jpg" name='Baththub'/>
        <Arrivals image="/assets/images/serenti29.jpg" name='Table'/>
        <Arrivals image="/assets/images/serinti2.jpg" name='Mirror'/>
        <Arrivals image="/assets/images/serinti13.jpg" name='Bed'/>
        <Arrivals image="/assets/images/serinti11.jpg" name='Wardrobe'/>
        <Arrivals image="/assets/images/serinti2.jpg" name='Mirror'/>
      </div>

      <Footer />
    </div>
  );
}

export default NewArrivals;
