import NavBar from "@/components/NavBar";
import MainPart from "@/components/MainPart";
// import EvaluatePage from "./EvaluatePage";

export default function Home() {
  return (
    <div className="bg-white font-raleway">
      <NavBar />
      <MainPart />
      {/* <NavBar /> */}
      {/* <h1 className="text-3xl font-bold underline font-raleway">
      Hello world!
    </h1> */}
      {/* <Link href="/utilities/EvaluatePage">
      Evaluate
    </Link> */}
    </div>
  )
}
