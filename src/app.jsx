// ============================================================
// APP — composes the home page
// ============================================================
function App() {
  return (
    <div className="min-h-screen bg-black">
      <Header activePath="/" />
      <main>
        <Hero />
        <TrustedBy />
        <Impact />
        <Services />
        <CaseStudies />
        <Testimonials />
        <Insights />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
