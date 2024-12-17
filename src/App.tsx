import { FaRegStar, FaStarHalfAlt } from "react-icons/fa";
import "./App.css";
import { FaStar } from "react-icons/fa6";
import Indigo from "./assets/Indigo.jpg";

function App() {
    return (
        <>
            <section className="py-10">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 border border-black">
                        <div className="">
                            <div className="swiper product-prev mb-6 ">
                                <div className="swiper-wrapper">
                                    <div className="swiper-slide">
                                        <img
                                            src={Indigo}
                                            alt="Yellow Travel Bag image"
                                            className="mx-auto object-cover"
                                        />
                                    </div>
                                    {/* <div className="swiper-slide">
                                        <img
                                            src="https://pagedone.io/asset/uploads/1711514857.png"
                                            alt="Yellow Travel Bag image"
                                            className="mx-auto object-cover"
                                        />
                                    </div>
                                    <div className="swiper-slide">
                                        <img
                                            src="https://pagedone.io/asset/uploads/1711514875.png"
                                            alt="Yellow Travel Bag image"
                                            className="mx-auto object-cover"
                                        />
                                    </div>
                                    <div className="swiper-slide">
                                        <img
                                            src="https://pagedone.io/asset/uploads/1711514892.png"
                                            alt="Yellow Travel Bag image"
                                            className="mx-auto object-cover"
                                        />
                                    </div> */}
                                </div>
                            </div>
                        </div>
                        <div className=" w-full flex flex-col justify-center order-last lg:order-none max-lg:max-w-[608px] max-lg:mx-auto text-left ">
                            {/* <p className="font-medium text-lg text-indigo-600 mb-4">
                                Travel &nbsp; / &nbsp; Menswear
                            </p> */}
                            <h2 className=" font-[700] text-[44px] leading-[44px] text-[#364A63] tracking-[-1.2px] py-3">
                                Classy Modern Smart Watch
                            </h2>

                            <div className="flex items-center gap-2 p-1">
                                <div className="flex items-center gap-1">
                                    <FaStar color="#FFD200" />
                                    <FaStar color="#FFD200" />
                                    <FaStar color="#FFD200" />
                                    <FaStarHalfAlt color="#FFD200" />
                                    <FaRegStar color="#FFD200" />
                                </div>
                                <span className="pl-2 font-normal leading-7 text-gray-500 text-sm ">
                                    (2 reviews)
                                </span>
                            </div>
                            <div className="flex flex-col sm:flex-row sm:items-center mb-6">
                                <h6 className=" font-semibold text-2xl leading-9 text-gray-900 pr-5 line-through">
                                    $99
                                </h6>
                                <h6 className=" font-semibold text-2xl leading-9 text-gray-900 pr-5 mr-5">
                                    $79
                                </h6>
                            </div>
                            <p className="text-gray-500 text-base font-normal mb-8 ">
                                I must explain to you how all this mistaken idea of denoun cing
                                plepraising pain was born and I will give you a complete account of
                                the system, and expound the actual teaching.
                            </p>
                            <div className="flex gap-[43px] pt-5 pr-1">
                                <div>
                                    <p>Type</p>
                                    <p>watch</p>
                                </div>
                                <div>
                                    <p>Model Number</p>
                                    <p>Forerunner 290XT</p>
                                </div>
                            </div>
                            <div className="block w-full">
                                <p className="font-medium text-lg leading-8 text-gray-900 mb-4">
                                    Brand Color
                                </p>
                                <div className="text">
                                    <div className="flex items-center justify-start gap-5 md:gap-6 relative mb-6">
                                        <button
                                            data-ui="checked active"
                                            className="p-1 border-4 border-gray-200 rounded-full transition-all duration-300 hover:border-[#816BFF] focus:border-[#816BFF] "
                                        >
                                            <span className="block w-4 h-4 bg-[#816BFF] rounded-full"></span>
                                        </button>
                                        <button className="p-1 border-4 border-gray-200 rounded-full transition-all duration-300 hover:border-[#1FCEC9] focus-within:border-[#1FCEC9]">
                                            <span className="block w-4 h-4 bg-[#1FCEC9] rounded-full"></span>
                                        </button>
                                        <button className="p-1 border-4 border-gray-200 rounded-full transition-all duration-300 hover:border-[#4B97D3] focus-within:border-[#4B97D3]">
                                            <span className="block w-4 h-4 bg-[#4B97D3] rounded-full"></span>
                                        </button>
                                        <button className="p-1 border-4 border-gray-200 rounded-full transition-all duration-300 hover:border-[#3B4747] focus-within:border-[#3B4747]">
                                            <span className="block w-4 h-4 bg-[#3B4747] rounded-full"></span>
                                        </button>
                                    </div>

                                    <div className="block w-full mb-6">
                                        <p className="font-medium text-lg leading-8 text-gray-900 mb-4">
                                            Bag size
                                        </p>
                                        <div className="grid grid-cols-2 min-[400px]:grid-cols-3 gap-3">
                                            <button className="border border-gray-200 text-gray-900 text-lg py-2 rounded-full px-1.5 sm:px-6 w-full font-semibold whitespace-nowrap shadow-sm shadow-transparent transition-all duration-300 hover:shadow-gray-300 hover:bg-gray-50 hover:border-gray-300">
                                                56 cm (S)
                                            </button>
                                            <button className="border border-gray-200 text-gray-900 text-lg py-2 rounded-full px-1.5 sm:px-6 w-full font-semibold whitespace-nowrap shadow-sm shadow-transparent transition-all duration-300 hover:shadow-gray-300 hover:bg-gray-50 hover:border-gray-300">
                                                67 cm (M)
                                            </button>
                                            <button className="border border-gray-200 text-gray-900 text-lg py-2 rounded-full px-1.5 sm:px-6 w-full font-semibold whitespace-nowrap shadow-sm shadow-transparent transition-all duration-300 hover:shadow-gray-300 hover:bg-gray-50 hover:border-gray-300">
                                                77 cm (L)
                                            </button>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                                        <div className="flex items-center justify-center w-full">
                                            <button className="group py-4 px-6 border border-gray-400 rounded-l-full shadow-sm shadow-transparent transition-all duration-500 hover:shadow-gray-300 hover:bg-gray-50">
                                                <svg
                                                    className="stroke-gray-700 transition-all duration-500 group-hover:stroke-black"
                                                    width="22"
                                                    height="22"
                                                    viewBox="0 0 22 22"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M16.5 11H5.5"
                                                        stroke=""
                                                        stroke-width="1.6"
                                                        stroke-linecap="round"
                                                    />
                                                    <path
                                                        d="M16.5 11H5.5"
                                                        stroke=""
                                                        stroke-opacity="0.2"
                                                        stroke-width="1.6"
                                                        stroke-linecap="round"
                                                    />
                                                    <path
                                                        d="M16.5 11H5.5"
                                                        stroke=""
                                                        stroke-opacity="0.2"
                                                        stroke-width="1.6"
                                                        stroke-linecap="round"
                                                    />
                                                </svg>
                                            </button>
                                            <input
                                                type="text"
                                                className="font-semibold text-gray-900 text-lg py-[13px] px-6 w-full lg:max-w-[118px] border-y border-gray-400 bg-transparent placeholder:text-gray-900 text-center hover:bg-gray-50 focus-within:bg-gray-50 outline-0"
                                                placeholder="1"
                                            />
                                            <button className="group py-4 px-6 border border-gray-400 rounded-r-full shadow-sm shadow-transparent transition-all duration-500 hover:shadow-gray-300 hover:bg-gray-50">
                                                <svg
                                                    className="stroke-gray-700 transition-all duration-500 group-hover:stroke-black"
                                                    width="22"
                                                    height="22"
                                                    viewBox="0 0 22 22"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M11 5.5V16.5M16.5 11H5.5"
                                                        stroke=""
                                                        stroke-width="1.6"
                                                        stroke-linecap="round"
                                                    />
                                                    <path
                                                        d="M11 5.5V16.5M16.5 11H5.5"
                                                        stroke=""
                                                        stroke-opacity="0.2"
                                                        stroke-width="1.6"
                                                        stroke-linecap="round"
                                                    />
                                                    <path
                                                        d="M11 5.5V16.5M16.5 11H5.5"
                                                        stroke=""
                                                        stroke-opacity="0.2"
                                                        stroke-width="1.6"
                                                        stroke-linecap="round"
                                                    />
                                                </svg>
                                            </button>
                                        </div>
                                        <button className="group py-4 px-5 rounded-full bg-indigo-50 text-indigo-600 font-semibold text-lg w-full flex items-center justify-center gap-2 shadow-sm shadow-transparent transition-all duration-500 hover:bg-indigo-100 hover:shadow-indigo-200">
                                            <svg
                                                className="stroke-indigo-600 transition-all duration-500"
                                                width="22"
                                                height="22"
                                                viewBox="0 0 22 22"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M10.7394 17.875C10.7394 18.6344 10.1062 19.25 9.32511 19.25C8.54402 19.25 7.91083 18.6344 7.91083 17.875M16.3965 17.875C16.3965 18.6344 15.7633 19.25 14.9823 19.25C14.2012 19.25 13.568 18.6344 13.568 17.875M4.1394 5.5L5.46568 12.5908C5.73339 14.0221 5.86724 14.7377 6.37649 15.1605C6.88573 15.5833 7.61377 15.5833 9.06984 15.5833H15.2379C16.6941 15.5833 17.4222 15.5833 17.9314 15.1605C18.4407 14.7376 18.5745 14.0219 18.8421 12.5906L19.3564 9.84059C19.7324 7.82973 19.9203 6.8243 19.3705 6.16215C18.8207 5.5 17.7979 5.5 15.7522 5.5H4.1394ZM4.1394 5.5L3.66797 2.75"
                                                    stroke=""
                                                    stroke-width="1.6"
                                                    stroke-linecap="round"
                                                />
                                            </svg>
                                            Add to cart
                                        </button>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <button className="group transition-all duration-500 p-4 rounded-full bg-indigo-50 hover:bg-indigo-100 hover:shadow-sm hover:shadow-indigo-300">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="26"
                                                height="26"
                                                viewBox="0 0 26 26"
                                                fill="none"
                                            >
                                                <path
                                                    d="M4.47084 14.3196L13.0281 22.7501L21.9599 13.9506M13.0034 5.07888C15.4786 2.64037 19.5008 2.64037 21.976 5.07888C24.4511 7.5254 24.4511 11.4799 21.9841 13.9265M12.9956 5.07888C10.5204 2.64037 6.49824 2.64037 4.02307 5.07888C1.54789 7.51738 1.54789 11.4799 4.02307 13.9184M4.02307 13.9184L4.04407 13.939M4.02307 13.9184L4.46274 14.3115"
                                                    stroke="#4F46E5"
                                                    stroke-width="1.6"
                                                    stroke-miterlimit="10"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                />
                                            </svg>
                                        </button>
                                        <button className="text-center w-full px-5 py-4 rounded-[100px] bg-indigo-600 flex items-center justify-center font-semibold text-lg text-white shadow-sm transition-all duration-500 hover:bg-indigo-700 hover:shadow-indigo-400">
                                            Buy Now
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default App;
