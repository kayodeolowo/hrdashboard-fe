// components/modals/PaymentModal.js
import React from "react";
import { InputComponent } from "../styles/InputComponent";
import { optionsOfiiceType } from "@/app/data/options";
import DropDownComp from "../styles/DropDownComp";
import { YellowBtn } from "../styles/YellowBtn";
import { Button } from "../styles/Button";



interface PaymentModalProps {

    onClose: () => void;
    isOpen: boolean;
}

const AddJobModal: React.FC<PaymentModalProps> = ({ isOpen, onClose }) => {
    return (
        <>
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90  overflow-y-auto scrollbar-hide">
                    <div className=" bg-darkgray p-4  rounded-lg shadow-md w-[90%] max-h-[30rem] lg:w-[24rem] mt-10 scrollbar-hide overflow-y-auto">

                        <h1> Add New Job</h1>

                       <div className="h-[1px] mt-2 mb-2 w-ful bg-[#2F2F31] " > </div>
                        <DropDownComp    label=""
options={optionsOfiiceType}
selectedValue={null} 
onSelect={() => {}}
                         />
                        <InputComponent className="mt-4"  placeholder  ="Enter Ofiice Location" />
                        <InputComponent className="mt-4" placeholder  ="Enter Job Title" />
                        <InputComponent className="mt-4" placeholder  ="Enter Amount" />
                       
<div className="w-full grid-cols-2 grid gap-4 mt-4">
<Button onClick={onClose} className="border-gray"> Cancel </Button>
<YellowBtn> Add </YellowBtn>
</div>

                    </div>
                </div>
            )}</>

    );
};
export default AddJobModal;
