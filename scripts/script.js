
$(document).ready(function() {
  console.log("ready!");

  $("img").draggable({
    stop: function() {
      console.log("stopping???");

      let dogeLeft = $(this).position().left; // Use $(this) to refer to the dragged image

      // Generate a random target zone within the range of the container width
      let containerWidth = $(".container").width();
      let targetZoneWidth = 200; // Adjust the width of the target zone as needed
      let randomTargetLeft = Math.floor(Math.random() * (containerWidth - targetZoneWidth));

      let distance = Math.abs(dogeLeft - randomTargetLeft);
      let threshold = 200; // Adjust the threshold as needed

      if (distance <= threshold) {
        $("#feedback").text("You are hot!");
      } else {
        $("#feedback").text("You are cold.");
      }

      if (dogeLeft > randomTargetLeft && dogeLeft < randomTargetLeft + targetZoneWidth) {
        console.log("Image hit the target zone!", dogeLeft);

        $("h1").text("Wow! You won! Too easy!");
        $("h4").text("");

        $(this).attr("src", "https://www.vobss.com/wp-content/uploads/2022/03/congratulations-meme-vobss-11.jpg");
        // Change the above line to update the image source as needed
      } else {
        console.log("Image did not hit the target zone");
      }
    }
  });
});
