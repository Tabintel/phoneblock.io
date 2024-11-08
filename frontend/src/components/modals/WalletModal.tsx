"use client"
import React from 'react';
import { motion } from 'framer-motion'
import { RxCross2 } from "react-icons/rx";
import { useSelector, useDispatch } from 'react-redux'

import { slide } from '@/constants/framer';
import { offWalletModal, onRegisterModal } from '@/services/modalSlice';
const WalletModal = () => {
    const { walletmodal } = useSelector((store) => store.modal);
    const dispatch = useDispatch()
    let loginisLoading = false;
   
    const handleOffWalletModal = () => {
        dispatch(offWalletModal(""))
        dispatch(onRegisterModal(""))
    }
    return (
        <motion.div
            initial={{ opacity: 0 }}
            exit={{
                opacity: 0,
                transition: {
                    duration: 1.2,
                },
            }}
            animate={{ opacity: 1 }}
            className='h-[100vh] bg-[#16161644] w-full fixed top-0 left-0 z-[5000] flex items-center justify-center'>
            <motion.div
                variants={slide}
                initial="initial"
                animate={walletmodal ? "enter" : "exit"}
                exit={"exit"}
                className="w-full min-h-full md:w-[400px] md:max-w-[380px]  md:min-h-[440px] justify-center relative items-start md:rounded-[10px] flex flex-col gap-12 p-8 bg-white">
                <div

                    onClick={() => dispatch(offWalletModal(""))}

                    className="absolute top-4 right-4 text-[#000] cursor-pointer w-12 h-12 flex items-center hover:bg-[#fafafa] rounded-full justify-center text-xl">
                    <RxCross2 />
                </div>
                <div className="w-full flex flex-col gap-1">
                    <h3 className="text-3xl md:text-3xl family2">
                        Welcome to Phoneblock
                    </h3>
                    <span className="block text-sm md:text-sm max-w-[250px] pt-1">
                        Sign In with Web3 Wallet to access your account
                    </span>
                </div>
                <form className="w-full flex flex-col gap-3">

                    <div className="w-full flex items-center justify-center flex-col gap-8">
                       <div className="flex w-full flex-col gap-4">
                            <button
                                data-test="WalletModal_button"
                                type="submit"
                                disabled={loginisLoading}
                                className="p-3 px-8 flex btn items-center justify-center w-full cursor-pointer rounded-md regular"

                            >
                                {loginisLoading ? (
                                    <div className="w-full flex justify-center items-center gap-4">
                                        {/* <Loader type="dots" /> Login in progress */}
                                        Login in progress
                                    </div>
                                ) : (
                                    "Connect with Meta Mask"
                                )}
                            </button>
                            <span className="text-sm font-normal text-dark">
                                <span className="">Dont have a MetaMask?</span>{" "}
                                <span
                                    // onClick={handleWalletModal}
                                    style={{ textDecoration: "underline" }}
                                    className="family2 cursor-pointer"
                                >
                                  Get it here
                                </span>
                            </span>
                       </div>
                        <div className="w-full flex items-center justify-center flex-col gap-3">
                            <span className="text-sm font-normal text-dark">
                                <span className="">Dont have an account?</span>{" "}
                                <span
                                    onClick={handleOffWalletModal}
                                    style={{ textDecoration: "underline" }}
                                    className="family2 cursor-pointer"
                                >
                                    Sign Up
                                </span>
                            </span>
                            <span
                                // onClick={handleWalletModal}
                                style={{ textDecoration: "underline" }}
                                className="text-center text-sm family2 cursor-pointer"
                            >
                              Forget Password
                            </span>
                        </div>
                    </div>
                </form>
            </motion.div>
        </motion.div>
    )
}

export default WalletModal;