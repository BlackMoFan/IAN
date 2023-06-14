import { TfiReload } from 'react-icons/tfi';
import { BiError } from 'react-icons/bi';
import Link from "next/link";

const EvaluatePart= () => {

    return (
        <div className="z-10 grid justify-center lg:h-full h-vh w-[90vw] mx-auto rounded-3xl grid-cols-12 gap-6 px-5 drop-shadow-3xl-md bg-new-bg-color lg:px-48 flex-center place-items-center">
            <div className="grid h-full col-span-12 p-4 mb-1 text-center w-fit lg:h-full place-items-center text-input-area-text lg:col-span-7 rounded-2xl">
                <div className="h-64 bg-white rounded-2xl w-80 place-items-center">
                    <BiError className="w-32 h-32 mx-auto text-yellow"/>
                    <h3 className="font-bold">Check Input Image</h3>
                    <span>Mandibular third molar and mandibular canal was not detected.</span>
                </div>
                {/* <img 
                    className="w-full max-w-xl transition rounded-md max-h-fit hover:border-gray-400 focus:outline-none"
                    src="/classified2.png" 
                    alt=""
                /> */}
            </div>
            <div className="h-full col-span-12 p-3 text-black lg:h-[100vh] lg:col-span-5 sm:col-span-6 rounded-2xl place-content-center">
                <div className="flex flex-row gap-6 my-3 lg:mt-24 place-items-center">
                    <img
                        className="w-10 h-10 max-w-xl transition rounded-md lg:w-20 lg:h-20 max-h-fit hover:border-gray-400 focus:outline-none"
                        src="m3.svg"
                        alt=""
                    />
                    <h2 className="text-2xl">Mandibular Third Molar</h2>
                </div>
                <div className="flex flex-row gap-6 my-6 place-items-center">
                    <img
                        className="w-10 h-10 max-w-xl transition rounded-md lg:w-20 lg:h-20 max-h-fit hover:border-gray-400 focus:outline-none"
                        src="mc.svg"
                        alt=""
                    />
                    <h2 className="text-2xl">Mandibular Canal</h2>
                </div>
                <h1 className="text-4xl font-bold my-9">Results</h1>
                <div className="grid grid-cols-6 text-sm lg:text-base">
                    <div className="grid col-span-4 ">
                        <p className="my-2 lg:my-3">M3-MC relation:</p>
                        <p className="my-2 lg:my-3">Position:</p>
                        <p className="my-2 lg:my-3">Distance of IAN to M3:</p>
                        <p className="my-2 lg:my-3">Interruption of Corticalization:</p>
                        <p className="my-2 lg:my-3">Risk of nerve injury:</p>
                    </div>
                    <div className="grid col-span-2 font-bold ">
                        {/* <p className="my-3 lg:my-5">Class 1A</p>
                        <p className="my-3 lg:my-5">Buccal</p>
                        <p className="my-3 lg:my-5">1.8 mm</p>
                        <p className="my-3 lg:my-5">False</p>
                        <p className="my-3 lg:my-5">N.1 Low</p> */}
                    </div>
                </div>
                <Link href="/">
                    <button
                        className="z-30 flex gap-6 p-3 mx-auto font-bold text-center text-white border-2 rounded-2xl mt-9 w-60 bg-new-special-font hover:bg-white hover:border-new-special-font hover:text-new-special-font"
                    >
                        {/* {uploading ? "Uploading.." : "Upload"} */}
                        {/* {uploading ? "Uploading.." : "Upload"} */}
                        <TfiReload />Evaluate another case
                    </button>
                </Link>
                {/* <h2 className="mb-10 text-2xl font-bold text-heading-color">Mandibular Third Molar (M3) Nerve Injury Risk Evaluator</h2>
                <p className="text-sm">You can try these sample cases:</p>
                <Link href="/EvaluatePage">
                    <img 
                        className="w-full max-w-xl transition rounded-md max-h-fit hover:border-gray-400 focus:outline-none"
                        src="/sample.png" 
                        alt="" 
                    />
                </Link> */}
            </div>
        </div>
    );
};

export default EvaluatePart;