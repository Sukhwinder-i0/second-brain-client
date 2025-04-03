export const YoutubePost = (props: { shareLink: String }) => {
    
  const getVideoId = () => {
    const match = props.shareLink.match(/youtu\.be\/([^?]+)/);
    return match ? match[1] : "";
  };

  return (
    <div class="w-full">
      {getVideoId() ?
      (
        <iframe
          width="560"
          height="315"
          class="w-full h-auto contain-content"
          src={`https://www.youtube.com/embed/${getVideoId()}`}
          title="YouTube video player"
          style={{ border: "none" }}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      ): (
        <p>Invalid url</p>
      )}
    </div>
  );
};
