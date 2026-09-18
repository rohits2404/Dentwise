export { cn } from "cn";

export function generateAvatar(name: string, gender: "MALE" | "FEMALE") {
    const url = new URL("https://api.dicebear.com/10.x/avataaars/svg");

    url.searchParams.set("seed", name.trim());
    url.searchParams.set("topProbability", "100");
    url.searchParams.set("clothesVariant", "blazerAndShirt");
    url.searchParams.set("clothesProbability", "100");

    if (gender === "MALE") {
        url.searchParams.set("topVariant", "shortFlat");
        url.searchParams.set("facialHairVariant", "beardLight");
        url.searchParams.set("facialHairProbability", "100");
    } else {
        url.searchParams.set("topVariant", "longButNotTooLong");
        url.searchParams.set("facialHairProbability", "0");
    }

    return url.toString();
}

// phone formatting function for US numbers - ai generated 🎉
export const formatPhoneNumber = (value: string) => {
    if (!value) return value;

    const phoneNumber = value.replace(/[^\d]/g, "");
    const phoneNumberLength = phoneNumber.length;

    if (phoneNumberLength < 4) return phoneNumber;
    if (phoneNumberLength < 7) {
        return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
    }
    return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3, 6)}-${phoneNumber.slice(6, 10)}`;
};

export const APPOINTMENT_TYPES = [
    {
        id: "checkup",
        name: "Regular Checkup",
        duration: "60 min",
        price: "$120",
    },
    {
        id: "cleaning",
        name: "Teeth Cleaning",
        duration: "45 min",
        price: "$90",
    },
    {
        id: "consultation",
        name: "Consultation",
        duration: "30 min",
        price: "$75",
    },
    {
        id: "emergency",
        name: "Emergency Visit",
        duration: "30 min",
        price: "$150",
    },
];

export const getNext5Days = () => {
    const dates = [];
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);

    for (let i = 0; i < 5; i++) {
        const date = new Date(tomorrow);
        date.setDate(date.getDate() + i);
        dates.push(date.toISOString().split("T")[0]);
    }

    return dates;
};

export const getAvailableTimeSlots = () => {
    return [
        "09:00",
        "09:30",
        "10:00",
        "10:30",
        "11:00",
        "11:30",
        "14:00",
        "14:30",
        "15:00",
        "15:30",
        "16:00",
        "16:30",
    ];
};
