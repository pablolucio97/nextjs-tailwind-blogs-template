export function getThemeColor(variable: string) {
  if (typeof window === "undefined") {
    return "#2563eb";
  }

  const value = getComputedStyle(document.documentElement)
    .getPropertyValue(variable)
    .trim();

  return value || "#2563eb";
}
