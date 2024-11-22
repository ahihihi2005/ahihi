document.addEventListener("DOMContentLoaded", () => {
  const overlay = document.getElementById("overlay");
  const yesButton = document.getElementById("yes-button");
  const noButton = document.getElementById("no-button");
  const video = document.getElementById("fullscreen-video");

  // Khi nhấn Yes
  yesButton.addEventListener("click", () => {
    // Ẩn overlay
    overlay.style.display = "none";

    // Hiển thị video
    video.style.display = "block";

    // Mở video ở chế độ toàn màn hình
    if (video.requestFullscreen) {
      video.requestFullscreen();
    } else if (video.webkitRequestFullscreen) { // Safari
      video.webkitRequestFullscreen();
    } else if (video.msRequestFullscreen) { // IE/Edge
      video.msRequestFullscreen();
    }

    // Phát video
    video.play().catch((error) => {
      console.error("Cannot play video automatically:", error);
    });
  });
  // Khi nhấn No
  noButton.addEventListener("click", () => {
    // Ẩn overlay
    overlay.style.display = "none";

    // Hiển thị video
    video.style.display = "block";

    // Mở video ở chế độ toàn màn hình
    if (video.requestFullscreen) {
      video.requestFullscreen();
    } else if (video.webkitRequestFullscreen) { // Safari
      video.webkitRequestFullscreen();
    } else if (video.msRequestFullscreen) { // IE/Edge
      video.msRequestFullscreen();
    }

    // Phát video
    video.play().catch((error) => {
      console.error("Cannot play video automatically:", error);
    });
  });
});