//create an object that contains movie name, age, time, and Cost
function Ticket(movieName, age, time) {
  this.movieName = movieName,
  this.age = age,
  this.time = time,
  this.cost = 3
}

//prototype to determine if a movie is new based on its name
Ticket.prototype.isNewMovie = function(movieName) {
  if (movieName === "clowns") {
    this.cost += 2;
  }
}
//prototype to determine the cost based on if the user is an adult
Ticket.prototype.userAge = function(age) {
  console.log("in user age");
  if (age === "adult") {
    this.cost += 2;
  }
}
//prototype that determines to cost based on the time of day
Ticket.prototype.movieTime = function(time) {
  if (time === "regular") {
    this.cost += 2;
  }
}

function attachContactListeners() {
  $("ul#shows").on("click", "li", function() {
    console.log(this.value);
      if (this.value === 0) {
        $(this).next().html("Beware! this movie is about clowns.<br>Rated: G - for Gore");
      } else if (this.value === 1) {
        $(this).next().html("Harry is a bald sasquatch in search of true love... or a full body wig. Either will work. Just watch it.");
      } else {
        $(this).next().html("BAAAA! said no sheep ever in this movie. The sheep are quiet... too quiet.");
      }
  });
}

$(document).ready(function() {
  attachContactListeners();
  //output the name of the movie, the time, and the cost. it should also clear the input fields
  $("button").click(function() {
    console.log("button works");
    var movie = $("input:radio[name=movie]:checked").val();
    var age = $("input:radio[name=age]:checked").val();
    var time = $("input:radio[name=time]:checked").val();
    var ticket = new Ticket(movie, age, time);
    ticket.isNewMovie(movie);
    ticket.userAge(age);
    ticket.movieTime(time);
    console.log(ticket);
    $(".output").text("Your " + ticket.time + " ticket for " + ticket.movieName + " is $" + ticket.cost + ".");
  });
  $(".showForm").click(function() {
    $("#form").show();
  })
})
