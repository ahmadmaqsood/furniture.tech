import 'App.scss';
//bootstrap
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import Routes from 'routes/Routes';
import AuthContextProvider from 'Context/AuthContext';
//toastify
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
//ant design
import 'antd/dist/reset.css'
import CartContextProvider  from 'Context/CartContext';

import 'aos/dist/aos.css'

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <CartContextProvider>
          <Routes />
          <ToastContainer
            position="bottom-left"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
        </CartContextProvider>
      </AuthContextProvider>
    </div>
  );
}

export default App;
