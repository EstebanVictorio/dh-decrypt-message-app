export const parse = (encoded: string) => {
  const decoded = encoded.split("000")
  const [first_name, last_name, id] = decoded
  return {
    first_name,
    last_name,
    id,
  }
}
