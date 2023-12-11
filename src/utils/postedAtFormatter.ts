// const intervals = {
//   years: 2628288 * 12,
//   months: 2628288,
//   weeks: 604800,  
//   days: 86400,   
//   hours: 3600,
//   minutes: 60,
//   seconds: 1,
// }

// export function formatPostedAt(date: Date) {
//   const secondsAgo = (new Date().getTime() - date.getTime()) / 1000
  
//   switch (true) {
//     case secondsAgo < intervals.seconds:
//       return "Just now"
//     case secondsAgo < intervals.minutes:
//       return Math.floor(secondsAgo) + " seconds ago"
//     case secondsAgo < intervals.hours:
//       return `${Math.floor(secondsAgo / intervals.minutes)} minutes ago`
//     case secondsAgo < intervals.days:
//       return `${Math.floor(secondsAgo / intervals.hours)} hours ago`
//     case secondsAgo < intervals.weeks:
//       return `${Math.floor(secondsAgo / intervals.days)} days ago`
//     case secondsAgo < intervals.months:
//       return `${Math.floor(secondsAgo / intervals.weeks)} weeks ago`
//     case secondsAgo < intervals.years:
//       return `${Math.floor(secondsAgo / intervals.months)} months ago`
//     case secondsAgo > intervals.years:
//       return `${Math.floor(secondsAgo / intervals.years)} years ago`

//     default:
//       return "Just now"
//   }
// }



// Better alternative
// https://blog.webdevsimplified.com/2020-07/relative-time-format/
const formatter = new Intl.RelativeTimeFormat(undefined, { numeric: "auto" })

type TDivision = {
  amount: number;
  name: Intl.RelativeTimeFormatUnit
}

const divisions: TDivision[] = [
  {amount: 60, name: "seconds"},
  {amount: 60, name: "minutes"},
  {amount: 24, name: "hours"},
  {amount: 7, name: "days"},
  {amount: 4.34524, name: "weeks"},
  {amount: 12, name: "months"},
  {amount: Number.POSITIVE_INFINITY, name: "years"},
]

export function formatPostedAt(date: Date) {
  let duration = (date.getTime() - new Date().getTime()) / 1000

  for (let division of divisions) {
    if (Math.abs(duration) < division.amount) {
      return formatter.format(Math.round(duration), division.name)
    }
    duration /= division.amount
  }
}