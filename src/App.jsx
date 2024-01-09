import AuthProvider from "./context/AuthProvider";
import CartProvider from "./context/CartProvider";
import Router from "./routes";
function App() {
  return (
    <>
      <AuthProvider>
        <CartProvider>
          <Router />
        </CartProvider>
      </AuthProvider>
    </>
  );
}

export default App;
