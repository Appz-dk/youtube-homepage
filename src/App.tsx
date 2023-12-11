import './App.css'

import { Header } from './components/header/Header'
import { MainContent } from './components/mainContent/MainContent'

function App() {

  return (
    <div className='max-h-screen flex flex-col'>
      <Header />
      <div className='grid grid-cols-[auto,1fr] flex-grow overflow-auto'>
        <div className='p-2'>Sidebar</div>
        <div className='overflow-x-hidden px-8 pb-4'>
          <MainContent />
        </div>
      </div>
    </div>
  )
}

export default App
