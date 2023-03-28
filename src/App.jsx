// import './App.css'

function App() {
  return (
    <div id="background" className="bg-lightGrey w-screen h-screen flex justify-center items-center">
      <div id="container" className="bg-white w-64 h-[390px] rounded-2xl flex flex-col items-center text-center drop-shadow-md">
        <img src="./images/image-qr-code.png" alt="qr-code" id="image" className="max-w-xs w-56 rounded-xl my-4" />
        <h1 id="heading" className="text-lg text-DarkBlue font-bold mx-2 leading-6 mb-1">
          Improve your front-end skills by building projects
        </h1>
        <p id="paragraph" className="text-xs px-4 text-GrayishBlue font-normal mx-2 pt-2 pb-0">
          Scan the QR code to visit Frontend Mentor and take your coding skills to the next level
        </p>
      </div>
    </div>
  )
}

export default App
