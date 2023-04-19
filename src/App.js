import { Header, Footer } from "./components";
import {Routes, Route} from "react-router-dom"
import { ListingPage } from "./pages";
export default function App() {
  return(
    <div>
      <Header />
      <Routes>
        <Route path="/" element = {<ListingPage/>} />
      </Routes>
      <Footer />
    </div>
  )
}
