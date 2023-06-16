import Head from "next/head";
import Image from "next/image";

const AboutPart= () => {

    return (
        <div className="grid justify-center grid-cols-12 gap-6 px-5 py-6 bg-white h-fit lg:px-48 flex-center place-items-center">

        <Head>
            <title>About Page | Molar Sense</title>
        </Head>
        
            <div className="col-span-12 text-center text-black bg-white h-fit p-9 lg:mt-3 drop-shadow-3xl-md lg:h-full lg:col-span-6 rounded-2xl place-content-center">
                <div className="p-3">
                    <span className="font-bold">About </span>
                    <span className="font-medium">Mo</span>
                    <span className="font-semibold">lar</span>
                    <span className="font-bold">Sense</span>
                </div>
                <div className="text-left">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mattis augue id euismod facilisis. Quisque purus nunc, tristique quis odio id, consectetur pulvinar purus. Nulla dolor nisi, tincidunt sollicitudin mi nec, fringilla placerat erat. In id dapibus lectus. Phasellus scelerisque sollicitudin nisi, eget iaculis orci. Donec eget imperdiet nunc. Donec vehicula nisl felis, sed tincidunt odio viverra quis. Nulla sit amet massa dictum, tempus ante id, lacinia nulla. Quisque at euismod eros. Proin sodales augue et condimentum convallis.

                    Pellentesque pretium nunc euismod nunc egestas, ornare interdum est tincidunt. Suspendisse posuere tellus non lacus pulvinar rhoncus. In ac scelerisque nisi. Nam sodales lectus quis mauris suscipit sagittis. Cras ornare nunc eu nulla condimentum ornare. Mauris posuere est turpis, sed consequat sem accumsan sit amet. In luctus tortor vel dui lobortis mattis. Nunc euismod eleifend hendrerit. Nam in nisi justo. Curabitur vitae mi leo. Nunc elementum ligula massa, eu elementum sem ultrices at. Vestibulum ultrices molestie est, placerat blandit turpis. Donec mattis mollis velit, eget pulvinar nisl congue et. Donec sagittis augue eu pharetra fringilla. Curabitur elementum finibus enim. Phasellus lectus lorem, porttitor in nisi eget, hendrerit vehicula massa.

                    Maecenas hendrerit lorem eu mollis faucibus. Fusce cursus accumsan pulvinar. Nunc vitae congue erat. Nunc et rhoncus lacus. Mauris est lorem, congue eget augue euismod, egestas venenatis felis. Cras vulputate leo sed enim condimentum condimentum quis id odio. Morbi non posuere ex. Vivamus maximus eros ac erat imperdiet vestibulum. Aliquam elementum, enim tincidunt ullamcorper pharetra, libero purus congue libero, quis auctor nulla elit at risus. Nulla facilisi. Proin congue maximus urna id dignissim. Aliquam erat volutpat. Donec vel pretium sapien. Donec laoreet, dui et tristique aliquam, odio nisi semper dui, eget maximus justo tellus ultricies turpis. Curabitur egestas dui congue velit ullamcorper, in facilisis odio tristique.
                </div>
            </div>
            <div className="grid w-full col-span-12 h-fit lg:mt-3 lg:w-full place-items-center lg:h-full lg:col-span-6 ">
                <div className="text-center text-white p-9 bg-new-special-font drop-shadow-3xl-md h-fit lg:w-full place-items-center lg:h-full rounded-2xl">
                    <div className="p-3">
                        <span className="font-bold">BSCS-3B </span>
                    </div>
                    <div className="text-left">
                        Lorem ipsum dolor sit amet consectetur. Arcu vulputate 
                        sagittis quis vulputate. Cursus tempus purus nisi molestie 
                        diam. In tempor nec nunc sed euismod duis sem condimentum 
                        proin. Ultrices sit nisi at rhoncus.
                    </div>
                </div>
                <Image
                    className="mt-6 w-fit h-fit drop-shadow-3xl-md place-items-center rounded-3xl"
                    src="/groupphoto.jpg"
                    alt="BSCS3B Group 1 Photo"
                    width={800}
                    height={500}
                />
            </div>
        </div>
    );
};

export default AboutPart;