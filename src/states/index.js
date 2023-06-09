const { atom } = require("recoil");

export const hpState = atom({
    key: "hpState",
    default: 100,
});

export const showHpState = atom({
    key: "showHpState",
    default: false,
});

export const showCaptionState = atom({
    key: "showCaptionState",
    default: false,
});

export const captionState = atom({
    key: "captionState",
    default: {
        title: "",
        content: ``,
    },
});

export const posState = atom({
    key: "posState",
    default: [50, 50],
});

export const descriptionState = atom({
    key: "descriptionState",
    default: ``,
});

export const showDescriptionState = atom({
    key: "showDescriptionState",
    default: true,
});