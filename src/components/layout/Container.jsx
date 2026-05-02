import Header from "./header";
const Container = ({ children }) => {
  return (
    <div className="w-full h-screen flex overflow-hidden bg-gray-50">
      <div className="flex flex-col flex-1 overflow-hidden">
        <Header />
        <main className="flex-1 overflow-y-auto p-3 sm:p-4 md:p-5 lg:p-6">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Container;
