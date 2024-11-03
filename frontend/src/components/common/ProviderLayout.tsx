"use client"
import { store } from '@/store';
import React from 'react';
import { Provider } from 'react-redux'
export default function ProviderLayout({ children }: { children: React.ReactNode }) {
    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
}
