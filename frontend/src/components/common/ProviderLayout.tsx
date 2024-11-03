"use client"
import { store } from '@/store';
import React from 'react';
import { AnimatePresence } from "framer-motion";
import LoginModal from '../modals/LoginModal';
import RegisterModal from '../modals/RegisterModal';
import { Provider, useSelector } from 'react-redux'
const ModalContextLayout = ({ children }: { children: React.ReactNode }) => {
    // const { loginmodal, registermodal, jobdetailsidebar } = usese(ModalContext)
    const { loginmodal, registermodal } = useSelector((store) => store.modal);
    return (
        <React.Fragment>
            {/* animating the login modal */}
            <AnimatePresence mode='wait' >
                {loginmodal && <LoginModal />}
            </AnimatePresence>
            {/* animating the register modal */}
            <AnimatePresence mode='wait' >
                {registermodal && <RegisterModal />}
            </AnimatePresence>

            {children}
        </React.Fragment>
    )
}
export default function ProviderLayout({ children }: { children: React.ReactNode }) {
    return (
        <Provider store={store}>
            <ModalContextLayout>
                {children}
            </ModalContextLayout>


        </Provider>
    );
}
