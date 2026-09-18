import { LandingPage } from "@/features/home";
import { syncUser } from "@/lib/actions/users";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import React from "react";

const HomePage = async () => {
    const user = await currentUser();

    await syncUser();

    if (user) redirect("/dashboard");

    return <LandingPage />;
};

export default HomePage;
