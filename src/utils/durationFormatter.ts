// https://stackoverflow.com/questions/63087270/converting-seconds-to-ddhhmmss-or-days-hours-mins-secs
export function formatDuration(seconds: number,) { 
  const secInDay = 24 * 60 * 60
  const secInHour = 60 * 60
  let day = Math.floor(seconds / secInDay)
  let hr = Math.floor((seconds - day * secInDay) / secInHour)
  let min = Math.floor((seconds - day * secInDay - hr * secInHour) / 60)
  let sec = seconds % 60

  // I think these are not necessary, but yea might aswell.
  if (min === 60) {
      hr++;
      min = 0;
  }
  if (hr === 24) {
      day++;
      min = 0;
  }

  let valStr = (day != 0) ? day + ":" : "";
  valStr += (hr != 0) ? leadingZeroFormatter(hr) + ":" : "";
  valStr += (min != 0) ? leadingZeroFormatter(min) + ":" : "00:";
  valStr += (sec != 0) ? leadingZeroFormatter(sec) : "00";

  // Remove possible leading 0 if only displaying mins & secs
  if (valStr.length === 5 && valStr[0] === "0") return valStr.slice(1)
  return valStr;
}

const leadingZeroFormatter = (val: number) => {
  return val <= 9 ? "0" + val : val
}