import NavBar from "./components/NavBar";
import BigBanner from "./components/BigBanner";
import AlbaItem from "./components/AlbaItem";
import SmallBanner from "./components/SmallBanner";

function App() {
  return (
    <>
      <NavBar />
      <BigBanner />
      <section>
        <h2>인기 당근알바</h2>
        <AlbaItem />
        {/* <AlbaItem />
        <AlbaItem />
        <AlbaItem />
        <AlbaItem />
        <AlbaItem />
        <AlbaItem />
        <AlbaItem />
        <AlbaItem />
        <AlbaItem /> */}
      </section>
      <SmallBanner />
    </>
  );
}
export default App;
