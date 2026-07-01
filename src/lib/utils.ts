export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export function timeAgo(dateString: string): string {
  const now = new Date().getTime();
  const then = new Date(dateString).getTime();
  const diffSeconds = Math.floor((now - then) / 1000);

  const units: [number, string][] = [
    [60, "second"],
    [60, "minute"],
    [24, "hour"],
    [30, "day"],
    [12, "month"],
    [Number.POSITIVE_INFINITY, "year"],
  ];

  let value = diffSeconds;
  let unitLabel = "second";

  for (const [amount, label] of units) {
    if (value < amount) {
      unitLabel = label;
      break;
    }
    value = Math.floor(value / amount);
    unitLabel = label;
  }

  return `${value} ${unitLabel}${value !== 1 ? "s" : ""} ago`;
}
