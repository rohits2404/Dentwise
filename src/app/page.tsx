import { LandingPage } from "@/features/home";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import React from "react";

const HomePage = async () => {
    const user = await currentUser();

    if (user) redirect("/dashboard");

    return <LandingPage />;
};

export default HomePage;
