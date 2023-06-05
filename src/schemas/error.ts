export const ErrorMessage = {
  REQUIRED_FIELD: {
    code: 'REQUIRED_FIELD',
    message: "Field %s is required.",
  },
  INVALID_FIELD: {
    code: 'INVALID_FIELD',
    message: "Field %s is invalid.",
  },
} as const

export const errorMessage = (error: keyof typeof ErrorMessage, fieldName: string, customMessage?: string) => {
  const message = ErrorMessage[error].message.replace('%s', fieldName)
  return customMessage || message
}