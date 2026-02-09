import SideBar from "./components/sidebar/SideBar"
import '../src/styles/global.css'
import Dashboard from "./components/dashboard/Dashboard"
import './styles/main.css'
function App() {


  return (
    <>

    <div className="all-grid">
      <SideBar />
      <main id="main-content">
        <Dashboard />
      </main>
    </div>
    </>
  )
}

export default App
