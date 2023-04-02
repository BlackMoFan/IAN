import NavBar from "@/components/NavBar";
import ErrorPart from "./utilities/ErrorPart";
// import EvaluatePage from "./EvaluatePage";

export default function ErrorPage() {
  return (
    <div className="bg-white">
      <NavBar />
      <ErrorPart />
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