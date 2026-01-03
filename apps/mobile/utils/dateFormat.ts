export const formatMessageDate = (date: string) =>
  new Date(date).toLocaleTimeString().slice(0, 5);
