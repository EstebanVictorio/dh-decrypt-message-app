import { createForm, FormProps, FormSchema } from 'remix-forms'
import { Form as FrameworkForm, useActionData, useSubmit, useNavigation } from 'react-router-dom'
import BaseButton from 'components/forms/BaseButton'

const RemixForm = createForm({ component: FrameworkForm, useNavigation, useSubmit, useActionData })

const Form = <Schema extends FormSchema>(props: FormProps<Schema>) => {
  return (
    <RemixForm
      {...props}
      buttonComponent={BaseButton}
    />
  )
}

export default Form