import React from "react";
import PurchaseImg from "../assets/QuestionMark.png";

function PurchaseStep() {
    return (
        <div className="purchase-section flex flex-col items-center w-full relative">
            <div className="purchase-head text-[40px] font-[700] w-full flex justify-center">
                How to Purchase?
            </div>
            <div className="purchase-step flex gap-[48px] mt-16 items-end justify-center">
                <img
                    src={PurchaseImg}
                    className="purchase-img relative h-[518px]"
                    alt="Purchase Steps"
                />
                <div className="purchase-list flex flex-col text-white gap-[40px] justify-center w-[585px] mb-4">
                    <div className="flex gap-2">
                        <div className="purchase-num text-[33px] font-[700]">1.</div>
                        <div className="purchase-title text-[19px] mt-1">
                            Choose the desired course from our extensive
                            selection.
                        </div>
                    </div>
                    <div className="flex gap-2">
                        <div className="purchase-num text-[33px] font-[700]">2.</div>
                        <div className="purchase-title text-[19px] mt-1">
                            Review the test details.
                        </div>
                    </div>
                    <div className="flex gap-2">
                        <div className="purchase-num text-[33px] font-[700]">3.</div>
                        <div className="purchase-title text-[19px]">
                            Proceed to the secure payment gateway to complete
                            your purchase.
                        </div>
                    </div>
                    <div className="flex gap-2">
                        <div className="purchase-num text-[33px] font-[700]">4.</div>
                        <div className="purchase-title text-[19px]">
                            Proceed to the secure payment gateway to complete
                            your purchase.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PurchaseStep;
