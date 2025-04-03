import { onMount } from "solid-js";

const RedditPost = () => {
  onMount(() => {
    // Load Reddit's embed script after the component mounts
    const script = document.createElement("script");
    script.src = "https://embed.redditmedia.com/widgets/platform.js";
    script.async = true;
    document.body.appendChild(script);
  });

  return (
    <div class="w-full">
      <blockquote class="reddit-embed-bq" data-embed-height="500">
        <a href="https://www.reddit.com/r/programming/comments/xyz123/example_post_link/">
        </a>
      </blockquote>
    </div>
  );
};

export default RedditPost;
