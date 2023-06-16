import NavBar from "@/components/NavBar";
import AboutPart from "./utilities/AboutPart";

export default function AboutPage()  {
  return (
    <div className="bg-white h-[100vh]">
      <NavBar />
      <AboutPart />
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
