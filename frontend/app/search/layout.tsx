"use client";

import React from "react";
import ReduxProvider from "../store/ReduxProvider";
export default function AuthLayout(props: { children: React.ReactNode }) {
    return (
            <ReduxProvider>
                    <section style={{ height: "inherit" }}>{props.children}</section>
            </ReduxProvider>
    );
}
