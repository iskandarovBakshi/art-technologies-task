import { format } from "date-fns";

export function formatDate(d: string) {
  return format(new Date(d), "dd.MM.yyyy");
}
