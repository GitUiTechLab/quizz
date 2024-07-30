import React from "react";

function ParaList({ paraList }) {
    return (
        <div className="para-section flex-col gap-[100px] ">
            <div className="para-img mb-[50px] h-[86px] w-[86px] ml-[-370px] top-[-50px]">
                <img src={process.env.PUBLIC_URL + paraList.url} alt="Frame" />
            </div>
            <div className="para-content absolute flex-col w-[334px] h-[103px] left-[285px] mt-[-106px]">
                <div className="para-title font-bold text-[19px] mb-2">{paraList.title}</div>
                <div className="para-para font-[400] text-gray-400">{paraList.para}</div>
            </div>
        </div>
    );
}

export default ParaList;
