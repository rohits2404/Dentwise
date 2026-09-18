import { Dashboard } from "@/features/dashboard";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import React from "react";

export const dynamic = "force-dynamic";

const DashboardPage = async () => {
    const user = await currentUser();

    if (!user) redirect("/");

    return <Dashboard />;
};

export default DashboardPage;
