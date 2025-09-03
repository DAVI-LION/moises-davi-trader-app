export function formatarData(isoString) {
  const data = new Date(isoString);
  return data.toLocaleString("pt-BR", {
    dateStyle: "short",
    timeStyle: "short",
  });
}
