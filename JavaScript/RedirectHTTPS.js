console.log("https://mynotecoin.com");

if (window.location.host == "mynotecoin.com") {  
  if (location.protocol !== 'https:') {
    console.log('Redirect to HTTPS');
    location.replace(`https:${location.href.substring(location.protocol.length)}`);
  }
}
function copyToClipBoard(enlace) {
  navigator.clipboard.writeText(enlace)
      .then(() => {
      console.log("Text copied "+ enlace + " to clipboard...")
  })
      .catch(err => {
      console.log('Something went wrong', err);
  })
  alert("MyNoteCoin!");
}
registroServiceWorker();