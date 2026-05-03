import Header from "./header";

const Container = ({ children, hasBg, trip }) => {
  return (
    <div>
      {/* ---- */}
      {hasBg && (
        <div
          className="fixed top-0 left-0 w-full h-full z-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/5.png')" }}
        ></div>
      )}

      <div className="relative z-10">
        <Header />
      </div>

      <div className={`relative z-10 ${hasBg ? "pt-[100vh]" : "pt-24"}`}>
        <main className="bg-white min-h-screen">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Container;
