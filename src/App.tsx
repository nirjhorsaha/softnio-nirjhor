import { FaRegStar, FaStarHalfAlt } from "react-icons/fa";
import "./App.css";

import Indigo from "./assets/Indigo.jpg";
import Black from "./assets/Black.jpg"
import Blue from "./assets/Blue.jpg";
import Cyan from "./assets/Cyan.jpg";

import { FaStar, FaRegHeart } from "react-icons/fa6";
import { FiMinus, FiPlus } from "react-icons/fi";
import { useState } from "react";

function App() {
    const [selectedColor, setSelectedColor] = useState("Indigo");
    const [selectedSize, setSelectedSize] = useState("S");
    const [quantity, setQuantity] = useState(0);
    const [showModal, setShowModal] = useState(false); // State to control modal visibility

    const handleDecrease = () => {
        if (quantity > 0) setQuantity(quantity - 1);
    };

    const handleIncrease = () => {
        setQuantity(quantity + 1);
    };

    const handleCheckout = () => {
        setShowModal(true); // Show modal when checkout button is clicked
    };

    const handleCloseModal = () => {
        setShowModal(false); // Close modal
    };

    // Function to set image based on the selected color
    const getImage = () => {
        switch (selectedColor) {
            case "Indigo":
                return Indigo;
            case "Black":
                return Black;
            case "Blue":
                return Blue;
            case "Cyan":
                return Cyan;
            default:
                return Indigo;
        }
    };

    const getBorderColor = () => {
        switch (selectedColor) {
            case "Indigo":
                return "#816BFF";
            case "Cyan":
                return "#1FCEC9";
            case "Blue":
                return "#4B97D3";
            case "Black":
                return "#3B4747";
            default:
                return "#816BFF";
        }
    }

    return (
        <div className="mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-[60px] w-[1320px] h-[720px] justify-center items-center">
                <img
                    src={getImage()}
                    alt="Yellow Travel Bag image"
                    className="h-[720px] w-[630px] mx-auto object-cover rounded-[4px]"
                />
                <div className=" w-[630px] h-[539px] text-left mx-auto ">
                    <h2 className="h-[68px] font-[700] text-[44px] leading-[44px] text-[#364A63] tracking-[-1.2px] py-3">
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
                        <span className="font-roboto font-[400] text-[14px] leading-[23.1px] text-[#8091A7]">(2 reviews)</span>
                    </div>
                    <div className="flex gap-[5px] pt-5 h-[50px]">
                        <p className="line-through font-roboto font-[400] text-[20px] leading-[30px] text-[#8091A7]">$99.00</p>
                        <p className="font-roboto font-[700] text-[24px] leading-[30px] text-[#6576FF]">$79.00</p>
                    </div>
                    <div className="h-[110px] pt-5 pr-1">
                        <p className="font-[400] text-[18px] leading-[30px] text-[#8091A7]  ">
                            I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born, and I will give you a complete account of the system, and expound the actual teaching.
                        </p>
                    </div>
                    <div className="flex gap-[43px] pt-5 pr-1  h-[67px]">
                        <div>
                            <p className="font-roboto font-[400] text-[14px] leading-[23.1px] text-[#8091A7]">Type</p>
                            <p className="font-roboto font-[700] text-[16px] leading-[23px] text-[#364A63]">Watch</p>
                        </div>
                        <div>
                            <p className="font-roboto font-[400] text-[14px] leading-[23.1px] text-[#8091A7]">Model Number</p>
                            <p className="font-roboto font-[700] text-[16px] leading-[23px] text-[#364A63]">Forerunner 290XT</p>
                        </div>
                    </div>
                    <div className=" h-[74px]">
                        <p className="font-[700] text-[18px] leading-5 text-[#364A63] mt-[20px] mb-[10px]">
                            Brand Color
                        </p>
                        <div className="flex items-center justify-start gap-[10px]">
                            <button
                                onClick={() => setSelectedColor("Indigo")}
                                className={`w-[24px] h-[24px] border-[1px] rounded-full transition-all duration-300 
                                    ${selectedColor === "Indigo" ? "border-[#816BFF]" : "border-transparent"}`}
                            >
                                <span className="block w-4 h-4 mx-auto bg-[#816BFF] rounded-full"></span>
                            </button>
                            <button
                                onClick={() => setSelectedColor("Cyan")}
                                className={`w-[24px] h-[24px] border-[1px] rounded-full transition-all duration-300 
                                ${selectedColor === "Cyan" ? "border-[#1FCEC9]" : "border-transparent"}`}
                            >
                                <span className="block w-4 h-4 mx-auto bg-[#1FCEC9] rounded-full"></span>
                            </button>
                            <button
                                onClick={() => setSelectedColor("Blue")}
                                className={`w-[24px] h-[24px] border-[1px] rounded-full transition-all duration-300 
                                ${selectedColor === "Blue" ? "border-[#4B97D3]" : "border-transparent"}`}
                            >
                                <span className="block w-4 h-4 mx-auto bg-[#4B97D3] rounded-full"></span>
                            </button>
                            <button
                                onClick={() => setSelectedColor("Black")}
                                className={`w-[24px] h-[24px] border-[1px] rounded-full transition-all duration-300 
                                ${selectedColor === "Black" ? "border-[#3B4747]" : "border-transparent"}`}
                            >
                                <span className="block w-4 h-4 mx-auto bg-[#3B4747] rounded-full"></span>
                            </button>
                        </div>

                        <div className="h-[86px]">
                            <p className="font-[700] text-[18px] leading-5 text-[#364A63] pt-5 pb-[10px]">
                                Wrist Size
                            </p>
                            <div className="flex gap-3 w-[339px] h-[36px]">
                                <button
                                    onClick={() => setSelectedSize("S")}
                                    className={`border rounded-[3px] px-[18px] py-[8px] text-sm ${selectedSize === "S" ? `border-[${getBorderColor()}]` : "border-gray-300"}`}
                                >
                                    <p className="text-[13px] leading-5 text-[#8091A7] tracking-[0.26px]">
                                        <span className="text-[#6576FF] font-[700]">S</span> $69
                                    </p>
                                </button>
                                <button
                                    onClick={() => setSelectedSize("M")}
                                    className={`border rounded-[3px] px-[18px] py-[8px] text-sm ${selectedSize === "M" ? `border-[${getBorderColor()}]` : "border-gray-300"}`}
                                >
                                    <p className="text-[13px] leading-5 text-[#8091A7] tracking-[0.26px]">
                                        <span className="text-[#364A63] font-[700]">M</span> $79
                                    </p>
                                </button>
                                <button
                                    onClick={() => setSelectedSize("L")}
                                    className={`border rounded-[3px] px-[18px] py-[8px] text-sm ${selectedSize === "L" ? `border-[${getBorderColor()}]` : "border-gray-300"}`}
                                >
                                    <p className="text-[13px] leading-5 text-[#8091A7] tracking-[0.26px]">
                                        <span className="text-[#364A63] font-[700]">L</span> $89
                                    </p>
                                </button>
                                <button
                                    onClick={() => setSelectedSize("XL")}
                                    className={`border rounded-[3px] px-[18px] py-[8px] text-sm ${selectedSize === "XL" ? `border-[${getBorderColor()}]` : "border-gray-300"}`}
                                >
                                    <p className="text-[13px] leading-5 text-[#8091A7] tracking-[0.26px]">
                                        <span className="text-[#364A63] font-[700]">XL</span> $99
                                    </p>
                                </button>
                            </div>

                            <div className="flex gap-3 pt-[20px] h-[56px] items-center ">
                                <div className="flex items-center  h-[36px] ">
                                    <button onClick={handleDecrease}
                                        className="w-[35px] h-[36px] border border-gray-300 rounded-l-[4px] px-[8px] py-[3px] flex items-center justify-center">
                                        <FiMinus />
                                    </button>

                                    <p className="w-[60px] h-[36px] border border-gray-300 px-[26px] py-[3px] flex items-center justify-center">
                                        {quantity}
                                    </p>

                                    <button onClick={handleIncrease}
                                        className="w-[35px] h-[36px] border border-gray-300 rounded-r-[4px] px-[8px] py-[3px] flex items-center justify-center">
                                        <FiPlus />
                                    </button>
                                </div>
                                <button className="bg-[#6576FF]  px-[18px] py-[8px] rounded-[3px] flex items-center justify-center">
                                    <p className=" font-[700] text-[13px] leading-5 tracking-[0.26px] text-[#FFFFFF]">
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
            <div className="pt-[112px]">
                <button onClick={handleCheckout}
                    className="w-[139px] h-[42px] mx-auto text-center rounded-[20px] bg-[#FFBB5A] px-[24px] py-[8px] text-base shadow-xl ">
                    <p className="flex items-center justify-center gap-[10px] ">
                        <span className="w-[62px] h-5 font-[700] text-[14px] leading-5 text-[#364A63] tracking-[0.26px]">Checkout</span>
                        <span className="w-[19px] h-5 font-[700] text-[12px] leading-4 text-[#364A63] tracking-[0.26px] rounded-[5px] bg-[#FFFFFF] py-[2px] 
                        px-[6px] ">2</span>
                    </p>
                </button>
            </div>
            {showModal && (
                <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white p-[44px] rounded-[20px] w-[651px] h-[480px] space-y-4">
                        <h2 className="text-[#364A63] text-left font-bold text-[22px] leading-[24px]">Your Cart</h2>
                        <div className="grid grid-cols-[278px_1fr_1fr_1fr_1fr] gap-4 border-b border-[#DBDFEA] h-[36px] pt-1 pr-1 pb-2">
                            <div className="font-normal text-[14px] leading-[23.1px] text-[#8091A7] text-left">Item</div>
                            <div className="font-normal text-[14px] leading-[23.1px] text-[#8091A7]">Color</div>
                            <div className="font-normal text-[14px] leading-[23.1px] text-[#8091A7]">Size</div>
                            <div className="font-normal text-[14px] leading-[23.1px] text-[#8091A7]">Qnt</div>
                            <div className="font-normal text-[14px] leading-[23.1px] text-[#8091A7] text-right">Price</div>
                        </div>


                        {/* Cart item rows */}
                        <div className="space-y-4 ">
                            {/* First Item */}
                            <div className="grid grid-cols-[278px_1fr_1fr_1fr_1fr] gap-4 border-b border-[#DBDFEA] pb-4 pr-1 ">
                                <div className="flex items-center gap-2">
                                    <img src={Indigo} alt="Item" className="w-[36px] h-[36px] rounded-[3px] object-cover" />
                                    <div className="text-[#364A63] font-normal text-[14px] leading-[23.1px] text-left">Classy Modern Smart Watch</div>
                                </div>
                                <div className="text-[#364A63] font-normal text-[14px] leading-[23.1px] my-auto">Black</div>
                                <div className="text-[#364A63] font-bold text-[14px] leading-[23.1px] my-auto">XL</div>
                                <div className="text-[#364A63] font-bold text-[14px] leading-[23.1px] my-auto">1 </div>
                                <div className="text-[#364A63] font-bold text-[14px] leading-[23.1px] my-auto text-right">$99.00</div>
                            </div>

                           {/* total count */}
                            <div className="grid grid-cols-[278px_1fr_1fr_1fr_1fr] gap-4">
                                <div className="text-[#373737] font-bold text-[16px] leading-[22px] -tracking-[0.2] text-left my-auto ">Total</div>
                                <div className="text-[#8091A7] text-[14px] leading-[20px]"></div>
                                <div className="text-[#8091A7] text-[14px] leading-[20px]"></div>
                                <div className="text-[#8091A7] font-bold text-[14px] leading-[34px] -tracking-[0.2px]">1</div>
                                <div className="text-[#8091A7] font-bold text-[18px] leading-[34px] -tracking-[0.2px] text-right">$79.00</div>
                            </div>
                        </div>
                        <div className="flex justify-end gap-6 pt-[10px]">
                            <button
                                onClick={handleCloseModal}
                                className="px-[18px] py-2 rounded-[3px]  w-[152px] border border-1 border-[#DBDFEA] "
                            >
                                <p className="text-[#364A63] font-bold text-[13px] leading-[20px] tracking-[0.26px] w-[116px]">Continue Shopping</p>
                            </button>
                            <button
                                onClick={handleCloseModal}
                                className="bg-[#6576FF] px-[18px] py-2 rounded-[3px] text-white w-[94px]"
                            >
                                <p className="text-white font-bold text-[13px] leading-[20px] tracking-[0.26px]">Checkout</p>
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default App;
