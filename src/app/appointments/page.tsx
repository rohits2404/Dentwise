import { Appointments } from "@/features/appointments";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import React from "react";

const AppointmentPage = async () => {
    const user = await currentUser();

    if (!user) redirect("/");

    return <Appointments />;
};

export default AppointmentPage;
