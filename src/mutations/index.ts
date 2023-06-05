import { makeDomainFunction } from "domain-functions"
import { encoded } from "schemas"
import { parse } from "utils/parse"

export const parseMutation = makeDomainFunction(encoded)(async (values) => {
  const { message } = values
  const { first_name, last_name, id } = parse(message)
  return { first_name, last_name, id }
})