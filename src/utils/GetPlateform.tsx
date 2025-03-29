export const getPlateform = (url: String) => {
    if (url.includes("twitter.com") || url.includes("x.com")) return "twitter"
    if (url.includes("youtube.com") || url.includes("youtu.be")) return "youtube"
    if (url.includes("reddit.com")) return "reddit";
    if (url.includes("linkedin.com")) return "linkedin";
    if (url.includes("medium.com")) return "medium";
    if (url.includes("dev.to")) return "devto";
    if (url.includes("github.com")) return "github";
}