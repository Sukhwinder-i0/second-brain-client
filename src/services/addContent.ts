import axios from "axios";
import { url, title } from "../hooks/common.js";
export const addContent = async() => {
    const backendUrl = import.meta.env.VITE_BACKEND_URL;
    const token = localStorage.getItem("token");

    const response = await axios.post(
        `${backendUrl}/api/v1/content/add-content`, {
            link: url(),
            title: title()
        },
        {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }
    )

    console.log("Response:", response.data);
    alert("Content Added")
}