import { useState } from "react";
import axios from "axios";
import { useDropzone } from 'react-dropzone';
import { useCallback } from 'react';
import Link from "next/link";
// import { redirect } from 'next/navigation';
import { useRouter } from 'next/router';
// import Router from 'next/router';

const MainPart = () => {
    const [uploading, setUploading] = useState(false);
    const [selectedImage, setSelectedImage] = useState("");
    const [selectedFile, setSelectedFile] = useState<File>();

    const router = useRouter();
    const onDrop = useCallback(acceptedFiles => {
        acceptedFiles.forEach((file) => {
            const reader = new FileReader()

            reader.onabort = () => console.log('file reading was aborted')
            reader.onerror = () => {
                console.log('file reading has failed');
                // redirect('../pages/ErrorPage');
                // useEffect(() => {
                //     push('/ErrorPage');
                // }, []);
                // router.push('/new-page');
            }
            reader.onload = () => {
                // Do whatever you want with the file contents
                const currentFile = file;
                setSelectedImage(URL.createObjectURL(currentFile));
                setSelectedFile(currentFile);
                const binaryStr = reader.result
                console.log(binaryStr)
            }
            reader.readAsArrayBuffer(file)
        })
    }, [])

    const { getRootProps, getInputProps, isDragActive, isDragReject } = useDropzone({
        accept: {
            'image/*': ['.jpeg', '.jpg', '.png']
        },
        onDrop
    })

    const handleUpload = async () => {
        setUploading(true);
        try {
            if (!selectedFile) return;
            const formData = new FormData();
            formData.append("myImage", selectedFile);
            const { data } = await axios.post("/api/image", formData);
            console.log(data);
        } catch (error: any) {
            console.log(error.response?.data);
        }
        setSelectedImage("");
        setUploading(false);
    }

    // ERROR HANDLING
    if (isDragReject) router.push('/ErrorPage');

    return (
        <div className="grid justify-center h-full grid-cols-12 gap-6 px-5 bg-white lg:px-48 flex-center place-items-center">
            <div className="grid w-full h-full col-span-12 p-4 text-center bg-white lg:w-fit gap-9 lg:gap-12 place-items-center lg:h-2/6 text-input-area-text lg:col-span-8 rounded-2xl">
                <div className="z-10 max-w-xl p-3 border-4 border-gray-300 border-dashed h-fit lg:h-full items-center lg:w-[30vw] rounded-2xl w-80 place-content-center bg-input-area" {...getRootProps()}>
                    {/* {isDragReject && (router.push('/ErrorPage'););
                        // redirect('../pages/ErrorPage')
                        )} */}
                    {/* // (Router.push('/ErrorPage'))
                        // redirect('/ErrorPage')
                         */}


                    {selectedImage ? (
                        // {selectedImage.map((upFile) => {
                        //     return (
                        //         <img 
                        //             className="flex justify-center w-full transition rounded-md appearance-none cursor-pointer hover:border-gray-400 focus:outline-none"
                        //             src={upFile.preview} 
                        //             alt="preview" 
                        //         />
                        //     )
                        // })}

                        <img
                            className="w-full max-w-xl transition rounded-md max-h-fit hover:border-gray-400 focus:outline-none"
                            src={selectedImage}
                            alt=""
                        />
                    ) : !isDragActive ? (
                        <>
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-24 h-24 mx-auto text-gray-600 my-14" fill="#929292" version="1.1" id="Capa_1"
                                viewBox="0 0 490.955 490.955">
                                <path id="XMLID_448_" d="M445.767,308.42l-53.374-76.49v-20.656v-11.366V97.241c0-6.669-2.604-12.94-7.318-17.645L312.787,7.301
                                C308.073,2.588,301.796,0,295.149,0H77.597C54.161,0,35.103,19.066,35.103,42.494V425.68c0,23.427,19.059,42.494,42.494,42.494
                                h159.307h39.714c1.902,2.54,3.915,5,6.232,7.205c10.033,9.593,23.547,15.576,38.501,15.576c26.935,0-1.247,0,34.363,0
                                c14.936,0,28.483-5.982,38.517-15.576c11.693-11.159,17.348-25.825,17.348-40.29v-40.06c16.216-3.418,30.114-13.866,37.91-28.811
                                C459.151,347.704,457.731,325.554,445.767,308.42z M170.095,414.872H87.422V53.302h175.681v46.752
                                c0,16.655,13.547,30.209,30.209,30.209h46.76v66.377h-0.255v0.039c-17.685-0.415-35.529,7.285-46.934,23.46l-61.586,88.28
                                c-11.965,17.134-13.387,39.284-3.722,57.799c7.795,14.945,21.692,25.393,37.91,28.811v19.842h-10.29H170.095z M410.316,345.771
                                c-2.03,3.866-5.99,6.271-10.337,6.271h-0.016h-32.575v83.048c0,6.437-5.239,11.662-11.659,11.662h-0.017H321.35h-0.017
                                c-6.423,0-11.662-5.225-11.662-11.662v-83.048h-32.574h-0.016c-4.346,0-8.308-2.405-10.336-6.271
                                c-2.012-3.866-1.725-8.49,0.783-12.07l61.424-88.064c2.189-3.123,5.769-4.984,9.57-4.984h0.017c3.802,0,7.38,1.861,9.568,4.984
                                l61.427,88.064C412.04,337.28,412.328,341.905,410.316,345.771z"/>
                            </svg>
                            <label
                                className="z-10 flex justify-center h-2 p-4 px-6 mb-4 transition rounded-md appearance-none cursor-pointer w-fit hover:border-gray-400 focus:outline-none">

                                <span className="flex items-center space-x-2">

                                    <span className="font-medium text-gray-600 lg:text-xl">
                                        Drag & drop to upload the CBCT M3 Axial slice image or
                                        <span className="ml-2 cursor-pointer text-blue hover:underline">browse</span>
                                    </span>
                                </span>
                            </label>
                            <input
                                {...getInputProps()}
                                type="file"
                                name="file_upload"
                                className="z-10 hidden"
                                accept=".jpg, .jpeg, .png"
                                onChange={({ target }) => {
                                    if (target.files) {
                                        const file = target.files[0];
                                        setSelectedImage(URL.createObjectURL(file));
                                        setSelectedFile(file);
                                    }
                                }}
                            />
                        </>
                    ) :
                        (
                            <>
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-24 h-24 mx-auto text-gray-600" fill="#929292" version="1.1" id="Capa_1"
                                    viewBox="0 0 490.955 490.955">
                                    <path id="XMLID_448_" d="M445.767,308.42l-53.374-76.49v-20.656v-11.366V97.241c0-6.669-2.604-12.94-7.318-17.645L312.787,7.301
                                C308.073,2.588,301.796,0,295.149,0H77.597C54.161,0,35.103,19.066,35.103,42.494V425.68c0,23.427,19.059,42.494,42.494,42.494
                                h159.307h39.714c1.902,2.54,3.915,5,6.232,7.205c10.033,9.593,23.547,15.576,38.501,15.576c26.935,0-1.247,0,34.363,0
                                c14.936,0,28.483-5.982,38.517-15.576c11.693-11.159,17.348-25.825,17.348-40.29v-40.06c16.216-3.418,30.114-13.866,37.91-28.811
                                C459.151,347.704,457.731,325.554,445.767,308.42z M170.095,414.872H87.422V53.302h175.681v46.752
                                c0,16.655,13.547,30.209,30.209,30.209h46.76v66.377h-0.255v0.039c-17.685-0.415-35.529,7.285-46.934,23.46l-61.586,88.28
                                c-11.965,17.134-13.387,39.284-3.722,57.799c7.795,14.945,21.692,25.393,37.91,28.811v19.842h-10.29H170.095z M410.316,345.771
                                c-2.03,3.866-5.99,6.271-10.337,6.271h-0.016h-32.575v83.048c0,6.437-5.239,11.662-11.659,11.662h-0.017H321.35h-0.017
                                c-6.423,0-11.662-5.225-11.662-11.662v-83.048h-32.574h-0.016c-4.346,0-8.308-2.405-10.336-6.271
                                c-2.012-3.866-1.725-8.49,0.783-12.07l61.424-88.064c2.189-3.123,5.769-4.984,9.57-4.984h0.017c3.802,0,7.38,1.861,9.568,4.984
                                l61.427,88.064C412.04,337.28,412.328,341.905,410.316,345.771z"/>
                                </svg>
                                <label
                                    className="z-10 flex justify-center w-full h-32 px-4 px-6 mb-4 transition rounded-md appearance-none cursor-pointer hover:border-gray-400 focus:outline-none">

                                    <span className="flex items-center space-x-2">

                                        <span className="font-medium text-gray-600 lg:text-xl">
                                            Drag & drop to upload the CBCT M3 Axial slice image here.
                                        </span>
                                    </span>
                                </label>
                                <input
                                    {...getInputProps()}
                                    type="file"
                                    name="file_upload"
                                    className="z-10 hidden"
                                    accept=".jpg, .jpeg, .png"
                                    onChange={({ target }) => {
                                        if (target.files) {
                                            const file = target.files[0];
                                            setSelectedImage(URL.createObjectURL(file));
                                            setSelectedFile(file);
                                        }
                                    }}
                                />
                            </>
                        )}


                </div>
                {selectedImage ? (
                    // <Link href={{ pathname: '../pages/EvaluatePage', query: { keyword: 'source freeze' } }}>
                    <Link href="/EvaluatePage">
                        <button
                            onClick={handleUpload}
                            disabled={uploading}
                            style={{ opacity: uploading ? ".5" : "1" }}
                            className="z-30 w-32 p-3 mt-3 text-xs font-bold text-center text-white border-2 rounded-3xl bg-new-special-font hover:bg-white hover:border-new-special-font hover:text-new-special-font"
                        >
                            {!selectedImage ? "Upload another image" : "Upload"}

                        </button>
                    </Link>

                ) : (
                    <Link href="/EvaluatePage">
                        <button
                            disabled={uploading}
                            style={{ opacity: uploading ? ".5" : "1" }}
                            className="z-30 w-32 p-3 mt-3 font-bold text-center text-white border-2 rounded-3xl bg-new-special-font hover:bg-white hover:border-new-special-font hover:text-new-special-font"
                        >
                            {/* {uploading ? "Uploading.." : "Upload"} */}
                            {uploading ? "Uploading.." : "Upload"}
                        </button>
                    </Link>

                )}
            </div>
            <div className="h-full col-span-12 text-center lg:mt-16 drop-shadow-3xl-md lg:h-fit lg:col-span-4 rounded-2xl place-content-center bg-new-bg-color">
                <div className="h-full p-6">
                    <h2 className="mb-10 text-2xl font-bold text-heading-color">Mandibular Third Molar (M3) Nerve Injury <br /><span className="text-new-special-font">Risk Evaluator</span></h2>
                    <p className="my-5 text-sm">You can try these sample cases:</p>
                    <Link href="/EvaluatePage">
                        <img
                            className="w-full max-w-xl transition rounded-md max-h-fit hover:border-gray-400 focus:outline-none"
                            src="/sample.png"
                            alt=""
                        />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default MainPart;