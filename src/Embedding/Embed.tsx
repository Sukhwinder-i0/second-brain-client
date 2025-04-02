import { createSignal } from "solid-js";
import { getPlateform } from "./GetPlateform.jsx";

interface Iframe {
  width: string;
  height: string;
  src: string;
  frameborder: HTMLIFrameElement;
  allow: string;
  allowfullscreen: boolean;
  scrollong: string;
}

const UniversalEmbed = () => {
  const [url, setUrl] = createSignal<string>("");

  const renderEmbed = () => {
    const platform = getPlateform(url());

    switch (platform) {
      case "twitter":
        return (
          <blockquote class="twitter-tweet">
                <a href="https://twitter.com/sama/status/1906210479695126886?ref_src=twsrc%5Etfw"></a>
            </blockquote>
        );
      case "youtube":
        return (
          <iframe
            width="560"
            height="315"
            src={url().replace("watch?v=", "embed/")}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          />
        );
      case "reddit":
        return (
          <div>
            <blockquote class="reddit-embed-bq" data-embed-height="740">Posts from the <a href="https://www.reddit.com/r/StartUpIndia/comments/1jnzotr/indian_vs_chinese_startup_ecosystem/">startupindia</a><br> </br> community on Reddit</blockquote>
          </div>
        );
      case "linkedin":
        return (
          <>
            <script
              src="https://platform.linkedin.com/in.js"
              type="text/javascript"
            />
            <script type="IN/Share" data-url={url()} />
          </>
        );
      case "medium":
        return (
          <iframe
            src={`${url()}/embed`}
            width="600"
            height="400"
            style={{ border: "none" }}
            allowfullscreen
          />
        );
      case "devto":
        return (
          <iframe
            src={url().replace("https://dev.to", "https://dev.to/embed")}
            width="600"
            height="400"
            style={{ border: "none" }}
            allowfullscreen
          />
        );
      case "github":
        return <script src={`${url()}.js`} />;
      default:
        return <p>Unsupported platform or invalid URL</p>;
    }
  };

  return (
    <div class="p-6">
      <input
        type="text"
        placeholder="Enter social media URL"
        class="border p-2 w-full"
        
      />
      <div class="mt-4">
        {url() ? renderEmbed() : <p>Enter a valid link to embed</p>}
      </div>
    </div>
  );
};

export default UniversalEmbed;
