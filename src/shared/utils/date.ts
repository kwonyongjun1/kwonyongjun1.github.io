export const formatRelativeDate = (dateString: string): string => {
  const date = new Date(dateString);
  const now = new Date();

  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const yesterday = new Date(today);
  yesterday.setDate(yesterday.getDate() - 1);
  const inputDate = new Date(
    date.getFullYear(),
    date.getMonth(),
    date.getDate()
  );

  const formatTime = (d: Date): string => {
    const hours = String(d.getHours()).padStart(2, "0");
    const minutes = String(d.getMinutes()).padStart(2, "0");
    const seconds = String(d.getSeconds()).padStart(2, "0");
    return `${hours}:${minutes}:${seconds}`;
  };

  const formatDate = (d: Date): string => {
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, "0");
    const day = String(d.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  if (inputDate.getTime() === today.getTime()) {
    return `오늘 ${formatTime(date)}`;
  } else if (inputDate.getTime() === yesterday.getTime()) {
    return `어제 ${formatTime(date)}`;
  } else {
    return `${formatDate(date)} ${formatTime(date)}`;
  }
};
