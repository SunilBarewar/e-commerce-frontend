import CartProvider from "./context/CartProvider";
import Router from "./routes";
function App() {
  return (
    <>
      <div className="px-[10px] lg:px-[80px] font-Inter flex flex-col min-h-[100vh]">
        <CartProvider>
          <Router />
        </CartProvider>
      </div>
    </>
  );
}

export default App;
