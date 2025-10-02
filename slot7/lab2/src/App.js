import Navigation from "./components/Navigation";
import Banner from "./components/Banner";
import SectionTitle from "./components/SectionTitle";
import ProductList from "./components/ProductList";
import BookingForm from "./components/BookingForm";
import Footer from "./components/Footer";

export default function App(){
  return (
    <>
      <Navigation />
      <Banner />
      <SectionTitle>Our Menu</SectionTitle>
      <ProductList />
      <BookingForm />
      <Footer />
    </>
  );
}
