
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ModesProvder from './component/context/ThemeProvide.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ModesProvder>
    <App />
  </ModesProvder>,
)
