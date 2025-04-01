import { createSignal } from "solid-js";
import { getPlateform } from "../utils/GetPlateform.jsx";

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
            <a href="https://x.com/elonmusk/status/1905399600506101923">tweet</a>
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
        //   <iframe
        //     src={`${url()}/embed`}
        //     width="600"
        //     height="400"
        //     style={{ border: "none" }}
        //     // scrolling="no"
        //   />
        <div>
            <blockquote class="reddit-embed-bq h-3/6" data-embed-height="316"><a href="https://www.reddit.com/r/reactjs/comments/1jmemz3/why_is_routing_so_complicated_now/">Why is routing so complicated now?</a><br></br> by<a href="https://www.reddit.com/user/ScreamingArtichoke/">u/ScreamingArtichoke</a> in<a href="https://www.reddit.com/r/reactjs/">reactjs</a></blockquote><script  src="https://embed.reddit.com/widgets.js" charset="UTF-8"></script>
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
        onInput={(e) => setUrl(e.currentTarget.value)}
      />
      <div class="mt-4">
        {url() ? renderEmbed() : <p>Enter a valid link to embed</p>}
      </div>
    </div>
  );
};

export default UniversalEmbed;
