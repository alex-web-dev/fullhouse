const $videoSections = document.querySelectorAll(".video-section");
$videoSections.forEach(($videoSection) => {
  const $playBtn = $videoSection.querySelector(".video-section__play");
  if (!$playBtn) return;

  $playBtn.addEventListener("click", () => {
    if ($videoSection.classList.contains("video-section--active")) return;

    const videoUrl = $videoSection.dataset.src;
    const $video = createVideo(videoUrl);

    $videoSection.prepend($video);
    $videoSection.classList.add("video-section--active");
    $video.play().catch(() => {});
  });
});

function createVideo(url) {
  const $video = document.createElement("video");
  $video.classList.add("video-section__player");
  $video.setAttribute("src", url);
  $video.setAttribute("controls", "");
  $video.setAttribute("playsinline", "");
  $video.setAttribute("muted", "");

  return $video;
}
