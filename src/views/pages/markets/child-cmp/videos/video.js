/*var video = document.getElementById("video");

var stream_url = "https://ulivesport.info/224/index.m3u8";

var stream_url2 = "https://ulivesport.info/224/index.m3u8";

var ctry = 0;
var maxtry = 3;

if (Hls.isSupported()) {
  var hls = new Hls(config);

  hls.on(Hls.Events.ERROR, function(event, data) {
    var msg =
      "Player error: Type:" +
      data.type +
      " - Details:" +
      data.details +
      " - Fatal: " +
      data.fatal +
      " - Count: " +
      ctry;
    console.error(msg);

    if (data.details == "bufferAddCodecError") {
      location.reload();
      return;
    }

    if (data.fatal) {
      switch (data.type) {
        case Hls.ErrorTypes.MEDIA_ERROR:
          handleMediaError(hls);
          break;
        case Hls.ErrorTypes.NETWORK_ERROR:
          console.error("network error ... 404 ctr: " + ctry);
          if (ctry < maxtry) {
            ctry++;
            setTimeout(() => hlsTryLoad(), 1000);
          } else {
            //window.top.location.reload();
            location.reload();
            return;
          }
          break;
        default:
          console.error("unrecoverable error");
          hls.destroy();
          location.reload();
          return;
          break;
      }
    }
  });

  hls.loadSource(stream_url);
  hls.attachMedia(video);
  hls.on(Hls.Events.MANIFEST_PARSED, function() {
    //video.play();
  });
}
// hls.js is not supported on platforms that do not have Media Source Extensions (MSE) enabled.
// When the browser has built-in HLS support (check using `canPlayType`), we can provide an HLS manifest (i.e. .m3u8 URL) directly to the video element through the `src` property.
// This is using the built-in support of the plain video element, without using hls.js.
// Note: it would be more normal to wait on the 'canplay' event below however on Safari (where you are most likely to find built-in HLS support) the video.src URL must be on the user-driven
// white-list before a 'canplay' event will be emitted; the last video event that can be reliably listened-for when the URL is not on the white-list is 'loadedmetadata'.
else if (video.canPlayType("application/vnd.apple.mpegurl")) {
  video.src = stream_url2;

  video.addEventListener("loadedmetadata", function() {
    video.play();
  });
}

function hlsTryLoad() {
  console.error("re-connecting....");
  hls.loadSource(stream_url);
  hls.startLoad();
}
*/
