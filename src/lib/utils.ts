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
