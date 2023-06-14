import { TfiReload } from 'react-icons/tfi';
import Link from "next/link";

const EvaluatePart= () => {

    return (
        // <div className="bg-new-bg-color w-[80vw]">
            <div className="z-10 grid justify-center lg:h-full h-vh w-[90vw] mx-auto rounded-3xl grid-cols-12 gap-6 px-5 drop-shadow-3xl-md bg-new-bg-color lg:px-48 flex-center place-items-center">
                <div className="grid w-full h-full col-span-12 p-4 text-center bg-white lg:mt-0 mt-14 mb-9 lg:h-fit drop-shadow-3xl-md place-items-center text-input-area-text sm:col-span-6 lg:col-span-7 rounded-2xl">
                    <img 
                        className="w-full max-w-xl transition rounded-2xl max-h-fit hover:border-gray-400 focus:outline-none"
                        src="/classified2.png" 
                        alt=""
                    />
                </div>
                <div className="col-span-12 p-3 text-black h-fit lg:h-full lg:col-span-5 sm:col-span-6 rounded-2xl place-content-center">
                    <div className="flex flex-row gap-6 my-1 lg:my-6 lg:mt-24 place-items-center">
                        <img
                            className="w-5 h-5 transition rounded-md lg:w-10 lg:h-10 hover:border-gray-400 focus:outline-none"
                            src="m3.svg"
                            alt=""
                        />
                        <h2 className="lg:text-lg text-md">Mandibular Third Molar</h2>
                    </div>
                    <div className="flex flex-row gap-6 my-1 lg:my-6 place-items-center">
                        <img
                            className="w-5 h-5 transition rounded-md lg:w-10 lg:h-10 hover:border-gray-400 focus:outline-none"
                            src="mc.svg"
                            alt=""
                        />
                        <h2 className="lg:text-lg text-md">Mandibular Canal</h2>
                    </div>
                    <h1 className="my-6 font-bold md:my-3 lg:text-4xl md:text-2xl lg:my-9">Results</h1>
                    <div className="grid grid-cols-6 text-sm">
                        <div className="grid col-span-4 ">
                            <p className="m-0 my-1 lg:my-2">M3-MC relation:</p>
                            <p className="m-0 my-1 lg:my-2">Position:</p>
                            <p className="m-0 my-1 lg:my-2">Distance of IAN to M3:</p>
                            <p className="m-0 my-1 lg:my-2">Interruption of Corticalization:</p>
                            <p className="m-0 my-1 lg:my-2">Risk of nerve injury:</p>
                        </div>
                        <div className="grid col-span-2 font-bold ">
                            <p className="m-0 my-1 lg:my-2">Class 1A</p>
                            <p className="m-0 my-1 lg:my-2">Buccal</p>
                            <p className="m-0 my-1 lg:my-2">1.8 mm</p>
                            <p className="m-0 my-1 lg:my-2">False</p>
                            <p className="m-0 my-1 lg:my-2">N.1 Low</p>
                        </div>
                    </div>
                    <Link href="/">
                        <button
                            className="z-30 flex gap-6 p-3 mx-auto font-bold text-center text-white border-2 rounded-2xl border-new-special-font mt-9 w-60 bg-new-special-font hover:bg-white hover:border-new-special-font hover:text-new-special-font"
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
        // </div>
    );
};

export default EvaluatePart;