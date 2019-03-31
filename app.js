$(document).ready(function() {
  $(".icon").css('display','none');

  $(".weather-container").css('background-color','black');
  $(".button").click(function(e) {
    e.preventDefault();
    $(".weather-container").css('background-color','white');
    $(".city").html("");
    $(".main").html("");
    $(".description").html("");
    $(".icon").css('display','inline');
    $(".icon").html("");
    $(".temp").html("");

    let inputValue = $("input").val();
    $.getJSON(
      `http://api.openweathermap.org/data/2.5/weather?q=${inputValue}&units=imperial&APPID=8ddc6938c87f46e8454e0bbc7eef35b0`,
      data => {
        console.log(data);

        let iconSrc = `http://api.openweathermap.org/img/w/${
          data.weather[0].icon
        }.png`;

        console.log(iconSrc);

        $(".city").append(data.name);
        $(".main").append(data.weather[0].main);
        $(".description").append(data.weather[0].description);
        $(".icon").attr("src", iconSrc);
        $(".temp").append(Math.floor(data.main.temp)+"\xB0");
      }
    );
  });
});
