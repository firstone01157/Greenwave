<div id="video-container"></div>

<script>
  const videoElement = document.createElement('video');
  videoElement.id = 'myVideo';
  videoElement.controls = true;
  videoElement.autoplay = true;
  videoElement.preload = 'auto';  
  videoElement.name = 'media';
  videoElement.style.width = '350px';
  videoElement.style.height = '50px';

  const sourceElement = document.createElement('source');
  const mediaSourceUrl = "https://atimeonline2.smartclick.co.th/green";
  sourceElement.src = mediaSourceUrl;
  sourceElement.type = 'audio/aac';

  videoElement.appendChild(sourceElement);
  const container = document.getElementById('video-container');

  if (container) {
    container.appendChild(videoElement);

    videoElement.addEventListener('canplay', function() {
      videoElement.volume = 0.5;
      console.log('Video can play, volume set to 0.5');

      // พยายามเล่นวิดีโอแม้ว่า autoplay จะถูกบล็อก
      videoElement.play().catch(error => console.error("Autoplay prevented:", error));
    });

    sourceElement.addEventListener('error', function() {
      console.error("Error loading media source:", mediaSourceUrl);
      container.textContent = 'ขออภัย ไม่สามารถโหลดไฟล์เสียงได้';
    });

 </script>
