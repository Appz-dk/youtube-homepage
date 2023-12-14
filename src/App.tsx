import './App.css'
import { Header } from './components/header/Header'
import { MainContent } from './components/mainContent/MainContent'
import { Sidebar } from './components/sidebar/Sidebar'
import { SidebarProvider } from './context/SidebarContext'

function App() {

  return (
    <SidebarProvider>
      <div className='max-h-screen flex flex-col'>
        <Header />
        <div className='grid grid-cols-[auto,1fr] flex-grow overflow-auto'>
          <Sidebar />
          <div className='overflow-x-hidden px-8 pb-4'>
            <MainContent />
          </div>
        </div>
      </div>
    </SidebarProvider>
  )
}

export default App
