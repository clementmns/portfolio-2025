export type Season = "autumn" | "winter" | "spring" | "summer" | "auto";

export const Seasons = ["autumn", "winter", "spring", "summer", "auto"];

export const fallbackSeason: Season = getSeasonByDate(new Date());

export function getSeasonByDate(date: Date): Season {
  const month = date.getMonth(); // 0 = January, 11 = December

  if (month >= 2 && month <= 4) return "spring"; // March, April, May
  if (month >= 5 && month <= 7) return "summer"; // June, July, August
  if (month >= 8 && month <= 10) return "autumn"; // September, October, November
  return "winter"; // December, January, February
}
