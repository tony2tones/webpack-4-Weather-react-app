import React from "react";

const WeatherType = props => {
  var weatherType = props.weatherType;
// var weatherType = "LIGHT INTENSITY DRIZZLE RAIN";
  var text;
  {
    console.log(weatherType);
  }
  return (
    <div>
      {(() => {
        switch (weatherType) {
          case "LIGHT INTENSITY DRIZZLE RAIN":
            text = "https://upload.wikimedia.org/wikipedia/commons/2/29/Big_Fat_Red_Cat.jpg";
            break;
          case "BROKEN CLOUDS":
            text = "../src/assets/img/darkimg.png";
        }
      })()}
      <img src={text} width="370px" height="300px"></img>
    </div>
  );
};

export default WeatherType;
