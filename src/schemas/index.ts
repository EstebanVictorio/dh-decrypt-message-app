import { z as zod } from "zod"
import { errorMessage } from "./error"


export const encoded =
  zod
    .object({
      message:
        zod
          .string()
          .min(1, errorMessage("REQUIRED_FIELD", "message"))
          .regex(/^\w+000\w+000[1-9]+$/, errorMessage("INVALID_FIELD", "message", `Field "message" is invalid. \n Format must be:\n(word) 000 (word) 000 (no 0 number)`))
    })
    .required()
