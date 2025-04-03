import { createSignal } from "solid-js";

export const [isModalOpen, setIsModalOpen] = createSignal(false);
export const togglePopup = () => setIsModalOpen((prev) => !prev);

export const [isLoading, setIsLoading] = createSignal(false);
export const setLoading = (loading: boolean) => setIsLoading(loading);

export const [isSignup, setIsSignup] = createSignal<boolean>(true);
export const toggleSignup = () => setIsSignup((prev) => !prev);

export const [username, setUsername] = createSignal<string>("")
export const [password, setPassword] = createSignal<string>("")
export const [email, setEmail] = createSignal<string>("")

export const [url, setUrl] = createSignal<string>("")
export const [title, setTitle] = createSignal<string>("")

export const [error, setError] = createSignal<string>("")
export const [isError, setIsError] = createSignal<boolean>(false)