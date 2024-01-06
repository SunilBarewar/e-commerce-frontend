import CartProvider from "./context/CartProvider";
import Router from "./routes";
function App() {
  return (
    <>
      <CartProvider>
        <Router />
      </CartProvider>
    </>
  );
}

export default App;
