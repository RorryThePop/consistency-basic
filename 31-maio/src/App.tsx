import './App.css'

interface InfoAboutUser {
  myName: string;
  lastName: string;
  age: number
}

function App() {


  const obj: InfoAboutUser = {
    myName: 'Yury',
    lastName: 'Arakelove',
    age: 26
  }
  console.log(obj)

  return (
    <>

    </>
  )
}

export default App
