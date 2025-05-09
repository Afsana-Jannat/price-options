import DaisyNav from "./component/daisyNav/DaisyNav"
import LineChart from "./component/LineChart/LineChart"
import Navbar from "./component/navbar/Navbar"
import PriceOptions from "./component/priceOptions/PriceOptions"


function App() {

  return (
    <div>
      {/* <DaisyNav></DaisyNav> */}
      <Navbar></Navbar>
      <PriceOptions></PriceOptions>
      <LineChart></LineChart>
    </div>
  )
}

export default App
