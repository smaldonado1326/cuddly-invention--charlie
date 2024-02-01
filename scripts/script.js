$(document).ready(function() {
  console.log("ready!");

  $("img").draggable({
    stop: function() {
      console.log("stopping???");

      let dogeLeft = $("img").position().left;

      if (dogeLeft > 300) {
        console.log("we above 300", dogeLeft);

        $("h1").text("Wow! You won! Too easy!");
        $("h4").text("");

        $("img").attr("src", "https://www.vobss.com/wp-content/uploads/2022/03/congratulations-meme-vobss-11.jpg");
        // Change the above line to update the image source as needed
      } else {
        console.log("we NOT above 300");
      }
    }
  });
});