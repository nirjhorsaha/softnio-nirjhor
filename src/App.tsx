import { FaRegStar, FaStarHalfAlt } from "react-icons/fa";
import "./App.css";
import Indigo from "./assets/Indigo.jpg";
// import Black from "./assets/Black.jpg"
// import Blue from "./assets/Blue.jpg";
// import Cyan from "./assets/Cyan.jpg";
import { FaStar, FaRegHeart } from "react-icons/fa6";
import { FiMinus, FiPlus } from "react-icons/fi";

function App() {
    return (
        <div className="mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-[60px] w-[1320px] h-[720px] justify-center items-center">
                <img
                    src={Indigo}
                    alt="Yellow Travel Bag image"
                    className="h-[720px] w-[630px] mx-auto object-cover"
                />
                <div className=" w-[630px] h-[539px] text-left ">
                    <h2 className="h-[68px]  font-[700] text-[44px] leading-[44px] text-[#364A63] tracking-[-1.2px] py-3">
                        Classy Modern Smart Watch
                    </h2>
                    <div className="flex items-center gap-2 h-[28px]">
                        <div className="flex items-center gap-1">
                            <FaStar color="#FFD200" />
                            <FaStar color="#FFD200" />
                            <FaStar color="#FFD200" />
                            <FaStarHalfAlt color="#FFD200" />
                            <FaRegStar color="#FFD200" />
                        </div>
                        <span className="font-roboto font-[400] text-[14px] leading-[23.1px] text-[#8091A7]">
                            (2 reviews)
                        </span>
                    </div>
                    <div className="flex gap-[5px] pt-5 h-[50px]">
                        <p className="line-through font-roboto font-[400] text-[20px] leading-[30px] text-[#8091A7]">
                            $99.00
                        </p>

                        <p className="font-roboto font-[700] text-[24px] leading-[30px] text-[#6576FF]">
                            $79.00
                        </p>

                    </div>
                    <div className="h-[110px] pt-5 pr-1">
                        <p className="font-[400] text-[18px] leading-[30px] text-[#8091A7]  ">
                            I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born, and I will give you a complete account of the system, and expound the actual teaching.
                        </p>
                    </div>
                    <div className="flex gap-[43px] pt-5 pr-1  h-[67px]">
                        <div>
                            <p className="font-roboto font-[400] text-[14px] leading-[23.1px] text-[#8091A7]">
                                Type
                            </p>

                            <p className="font-roboto font-[700] text-[16px] leading-[23px] text-[#364A63]">
                                Watch
                            </p>
                        </div>
                        <div>
                            <p className="font-roboto font-[400] text-[14px] leading-[23.1px] text-[#8091A7]">
                                Model Number
                            </p>
                            <p className="font-roboto font-[700] text-[16px] leading-[23px] text-[#364A63]">
                                Forerunner 290XT
                            </p>
                        </div>
                    </div>
                    <div className=" h-[74px]">
                        <p className="font-[700] text-[18px] leading-[20px] text-[#364A63] mt-[20px] mb-[10px]">
                            Brand Color
                        </p>
                        <div className="flex items-center justify-start gap-[10px]">
                            <button
                                // data-ui="checked active"
                                className="size-[24px] border-[1px] border-[#816BFF] rounded-full transition-all duration-300 hover:border-[#816BFF] 
                                        focus:border-[#816BFF]">
                                <span className="block w-4 h-4 mx-auto bg-[#816BFF] rounded-full"></span>
                            </button>
                            <button className="size-[24px] border-[1px] border-gray-200 rounded-full transition-all duration-300 hover:border-[#1FCEC9] focus-within:border-[#1FCEC9]">
                                <span className="block w-4 h-4 mx-auto bg-[#1FCEC9] rounded-full"></span>
                            </button>
                            <button className="size-[24px] border-[1px] border-gray-200 rounded-full transition-all duration-300 hover:border-[#4B97D3] focus-within:border-[#4B97D3]">
                                <span className="block w-4 h-4 mx-auto bg-[#4B97D3] rounded-full"></span>
                            </button>
                            <button className="size-[24px] border-[1px] border-gray-200 rounded-full transition-all duration-300 hover:border-[#3B4747] focus-within:border-[#3B4747]">
                                <span className="block w-4 h-4 mx-auto bg-[#3B4747] rounded-full"></span>
                            </button>
                        </div>

                        <div className="h-[86px]">
                            <p className="font-[700] text-[18px] leading-[20px] text-[#364A63] pt-5 pb-[10px]">
                                Wrist Size
                            </p>
                            <div className="flex gap-3 w-[339px] h-[36px]">
                                <button className=" border border-gray-300 rounded-[3px] px-[18px] py-[8px] text-sm">
                                    <p className=" text-[13px] leading-[20px] text-[#8091A7] tracking-[0.26px]"><span className="text-[#6576FF] font-[700]">S</span>  $69</p>
                                </button>
                                <button className=" border border-gray-300 rounded-[3px] px-[18px] py-[8px] text-sm">
                                    <p className="text-[13px] leading-[20px] text-[#8091A7] tracking-[0.26px]"><span className="text-[#364A63] font-[700]">M</span>  $79</p>
                                </button>
                                <button className=" border border-gray-300 rounded-[3px] px-[18px] py-[8px] text-sm">
                                    <p className="text-[13px] leading-[20px] text-[#8091A7] tracking-[0.26px]"><span className="text-[#364A63] font-[700]">L</span>  $89</p>
                                </button>
                                <button className=" border border-gray-300 rounded-[3px] px-[18px] py-[8px] text-sm">
                                    <p className=" text-[13px] leading-[20px] text-[#8091A7] tracking-[0.26px]"><span className="text-[#364A63] font-[700]">XL</span>  $99</p>
                                </button>
                            </div>
                            <div className="flex gap-3 pt-[20px] h-[56px] items-center ">
                                <div className="flex items-center  h-[36px] ">
                                    <button className="w-[35px] h-[36px] border border-gray-300 rounded-l-[4px] px-[8px] py-[3px] flex items-center justify-center">
                                        <FiMinus />
                                    </button>

                                    <p className="w-[60px] h-[36px] border border-gray-300 px-[26px] py-[3px] flex items-center justify-center">
                                        0
                                    </p>

                                    <button className="w-[35px] h-[36px] border border-gray-300 rounded-r-[4px] px-[8px] py-[3px] flex items-center justify-center">
                                        <FiPlus />
                                    </button>
                                </div>
                                <button className="bg-[#6576FF]  px-[18px] py-[8px] rounded-[3px] flex items-center justify-center">
                                    <p className=" font-[700] text-[13px] leading-[20px] tracking-[0.26px] text-[#FFFFFF]">
                                        Add to Cart
                                    </p>
                                </button>
                                <button className="size-[20px] font-[400] text-[18.6px]  leading-[15.6px]">
                                    <FaRegHeart color="#6576FF " />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="pt-[92px]">
                <button className="w-[139px] h-[42px] mx-auto text-center rounded-[20px] bg-[#FFBB5A] px-[24px] py-[8px] text-base shadow-xl ">
                    <p className="flex items-center justify-center gap-[10px] ">
                        <span className="w-[62px] h-[20px] font-[700] text-[14px] leading-[20px] text-[#364A63] tracking-[0.26px]">Checkout</span>
                        <span className="w-[19px] h-[20px] font-[700] text-[12px] leading-[16px] text-[#364A63] tracking-[0.26px] rounded-[5px] bg-[#FFFFFF] py-[2px] px-[6px] ">2</span>
                    </p>
                </button>
            </div>
        </div>
    );
}

export default App;
