function formatDuration(seconds) {
  if (seconds === 0) return "now";

  const secondsInMinute = 60;
  const secondsInHour = secondsInMinute * 60;
  const secondsInDay = secondsInHour * 24;
  const secondsInYear = secondsInDay * 365;

  const years = Math.floor(seconds / secondsInYear);
  const days = Math.floor((seconds % secondsInYear) / secondsInDay);
  const hours = Math.floor((seconds % secondsInDay) / secondsInHour);
  const minutes = Math.floor((seconds % secondsInHour) / secondsInMinute);
  const remainingSeconds = seconds % secondsInMinute;

  const formatComponent = (value, unit) => {
    if (value === 0) return "";
    if (value === 1) return `${value} ${unit}`;
    return `${value} ${unit}s`;
  };

  const components = [
    formatComponent(years, "year"),
    formatComponent(days, "day"),
    formatComponent(hours, "hour"),
    formatComponent(minutes, "minute"),
    formatComponent(remainingSeconds, "second"),
  ].filter((component) => component !== "");

  if (components.length === 1) {
    return components[0];
  }

  const lastComponent = components.pop();
  return `${components.join(", ")} and ${lastComponent}`;
}
