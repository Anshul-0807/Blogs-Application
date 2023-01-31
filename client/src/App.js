import logo from './logo.svg';
import './App.css';
import Login from './components/account/Login';
import DataProvider from './context/DataProvider';


function App() {
  return (
   <div style={{ marginTop: 64 }} >
   <DataProvider>
   <Login/>
   </DataProvider>
   </div>
  );
}

export default App;
