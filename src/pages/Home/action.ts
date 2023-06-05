import { ActionFunction } from "react-router-dom"
import { encoded } from "schemas"
import formAction from "components/forms/Form/formAction"
import { parseMutation } from "mutations"

const action: ActionFunction = async ({ request }) => {
  const res = await formAction({
    request,
    schema: encoded,
    mutation: parseMutation,
  })

  const data: Person = await res.json()
  
  return data
}

export default action