import React from "react";

export default function DayForecast(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temperature.maximum);
    return `${temperature}°`;
  }

  function minTemperature() {
    let temperature = Math.round(props.data.temperature.minimum);
    return `${temperature}°`;
  }

  function day() {
    let date = new Date(props.data.time * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }

  return (
    <div>
      <div className="ForecastDay">{day()}</div>
      <img
        src={props.data.condition.icon_url}
        alt={props.data.condition.description}
        className="DailyForecast-icon"
      />
      <div>
        <span className="MaxTemperature">{maxTemperature()}</span>
        <span className="MinTemperature">{minTemperature()}</span>
      </div>
    </div>
  );
}
