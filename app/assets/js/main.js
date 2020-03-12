var testimonials = [
  {name: "Rachelle Vaughn", position: "CFO", comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."},
  {name: "Lilli Thatcher", position: "CEO", comment: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia"},
  {name: "JANE GALADRIEL", position: "CEO TENGKUREP", comment: "This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit."},
  {name: "Clifford Blankenship", position: "President", comment: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio."},
  {name: "Marguerite Cisneros", position: "COO", comment: "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through"},
];

var users = $("#Testimonials .user");
users.on("click", function(event) {
  var element = event.target.attributes["1"].value;
  var numElem = element.split(".png")[0].split("-")[1];
  
  for(user of users) {
    user.width = "45";
  }
  users[numElem - 1].width = "70";

  $("#Testimonials .comment").html(testimonials[numElem - 1].comment);
  $("#Testimonials .name").html(testimonials[numElem - 1].name);
  $("#Testimonials .position").html(testimonials[numElem - 1].position);
});