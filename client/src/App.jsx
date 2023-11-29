
import './App.css'

function App() {
 
  return (
    <div> 
      <header className="p-4 flex justify-between">
      <a href = "" className= "flex items-center gap-1">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 -rotate-90">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
        </svg>
        <span className="font-bold text-xl"> airbnb </span>
      </a>
      <div classname = "flex border border-gray-300 rounded-full py-2 px-4">
      <div>Anywhere</div>
      <div className="border-l border-gray-300"></div>
      <div>Any Week</div>
      <div className="border-l border-gray-300"></div>
      <div>Add guests</div>
      <button> 
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 15.75l-2.489-2.489m0 0a3.375 3.375 0 10-4.773-4.773 3.375 3.375 0 004.774 4.774zM21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </button>
      </div>
      </header>
    </div>

  )
}

export default App
