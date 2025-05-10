import DaisyNav from "./component/daisyNav/DaisyNav"
import LineChart from "./component/LineChart/LineChart"
import Navbar from "./component/navbar/Navbar"
import Phones from "./component/phones/Phones"
import PriceOptions from "./component/priceOptions/PriceOptions"


function App() {

  return (
    <div>
      {/* <DaisyNav></DaisyNav> */}
      <Navbar></Navbar>
      <PriceOptions></PriceOptions>
      <LineChart></LineChart>
      <Phones></Phones>
    </div>
  )
}

export default App
