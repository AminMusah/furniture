import Header from "../components/Header";
import Footer from "../components/Footer";
import Arrivals from "../components/Arrivals";

function NewArrivals() {
  return (
    <div>
      <Header />
      <div class="arrival-content">
        <Arrivals image="/src/assets/images/serenti20.jpg" name='Couch'/>
        <Arrivals image="/src/assets/images/serenti25.jpg" name='Sink'/>
        <Arrivals image="/src/assets/images/serenti26.jpg" name='Baththub'/>
        <Arrivals image="/src/assets/images/serenti29.jpg" name='Table'/>
        <Arrivals image="/src/assets/images/serinti2.jpg" name='Mirror'/>
        <Arrivals image="/src/assets/images/serinti13.jpg" name='Bed'/>
        <Arrivals image="/src/assets/images/serinti11.jpg" name='Wardrobe'/>
        <Arrivals image="/src/assets/images/serinti2.jpg" name='Mirror'/>
      </div>

      <Footer />
    </div>
  );
}

export default NewArrivals;
