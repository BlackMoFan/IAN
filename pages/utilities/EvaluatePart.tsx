import { TfiReload } from 'react-icons/tfi';
import Link from "next/link";

const EvaluatePart= () => {

    return (
        <div className="grid justify-center h-screen grid-cols-12 gap-6 p-4 px-5 bg-white lg:px-48 flex-center place-items-center">
            <div className="grid w-full h-full col-span-12 p-4 text-center lg:h-5/6 bg-input-area place-items-center text-input-area-text lg:col-span-8 rounded-2xl">
                <img 
                    className="w-full max-w-xl transition rounded-md max-h-fit hover:border-gray-400 focus:outline-none"
                    src="/classified2.png" 
                    alt=""
                />
            </div>
            <div className="h-full col-span-12 p-3 text-black lg:h-5/6 lg:col-span-4 rounded-2xl place-content-center">
                <div className="flex flex-row gap-6 my-6 place-items-center">
                    <svg fill="#9F8FB4" className="w-20 h-20" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 94 94">
                    <g>
                        <path d="M94,88c0,3.312-2.688,6-6,6H6c-3.314,0-6-2.688-6-6V6c0-3.313,2.686-6,6-6h82c3.312,0,6,2.687,6,6V88z"/>
                    </g>
                    </svg>
                    <h2 className="text-2xl">Mandibular Third Molar</h2>
                </div>
                <div className="flex flex-row gap-6 my-6 place-items-center">
                    <svg fill="#894A68" className="w-20 h-20" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 94 94">
                    <g>
                        <path d="M94,88c0,3.312-2.688,6-6,6H6c-3.314,0-6-2.688-6-6V6c0-3.313,2.686-6,6-6h82c3.312,0,6,2.687,6,6V88z"/>
                    </g>
                    </svg>
                    <h2 className="text-2xl">Mandibular Canal</h2>
                </div>
                <h1 className="text-4xl font-bold my-9">Results</h1>
                <div className="grid grid-cols-6 text-sm lg:text-base">
                    <div className="grid col-span-4 ">
                        <p className="my-3 lg:my-5">M3-MC relation:</p>
                        <p className="my-3 lg:my-5">Position:</p>
                        <p className="my-3 lg:my-5">Distance of IAN to M3:</p>
                        <p className="my-3 lg:my-5">Interruption of Corticalization:</p>
                        <p className="my-3 lg:my-5">Risk of nerve injury:</p>
                    </div>
                    <div className="grid col-span-2 font-bold ">
                        <p className="my-3 lg:my-5">Class 1A</p>
                        <p className="my-3 lg:my-5">Buccal</p>
                        <p className="my-3 lg:my-5">1.8 mm</p>
                        <p className="my-3 lg:my-5">False</p>
                        <p className="my-3 lg:my-5">N.1 Low</p>
                    </div>
                </div>
                <Link href="/">
                    <button
                        className="z-30 flex gap-6 p-3 mx-auto font-bold text-center text-black rounded mt-9 w-60 bg-button-color"
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