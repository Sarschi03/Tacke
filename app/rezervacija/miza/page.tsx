import Navbar from "../../../components/Navbar/Navbar";
import Footer from "../../../components/Footer/Footer";

export default function IzberiMizoPage() {
  return (
    <>
      <Navbar />
      <main style={{ minHeight: "60vh", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", background: "#fdfbf7" }}>
        <h1 style={{ fontFamily: "var(--font-bodoni-moda, serif)", fontSize: "3rem", color: "#4A4036" }}>
          Izberite mizo
        </h1>
        <p style={{ fontFamily: "var(--font-pt-serif, serif)", marginTop: "1rem" }}>
          This page is intentionally left blank for now.
        </p>
      </main>
      <Footer />
    </>
  );
}
