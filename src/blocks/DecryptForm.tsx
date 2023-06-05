import AddonField from "components/forms/AddonField"
import Form from "components/forms/Form"
import { Unlock, Lock } from "react-feather"
import { Fragment } from "react"
import { encoded } from "schemas"
import clsx from "clsx"
import { useActionData } from "react-router-dom"

const DecryptForm = () => {
  const actionData = useActionData() as Person | undefined

  return (
    <Form schema={encoded} method="POST" action="/" className="flex flex-col gap-y-3 rounded-md p-8 shadow-2xl items-center justify-center bg-blue-500 w-80 sm:w-96">
      {({ Field, register, getFieldState, formState }) => {
        const { error } = getFieldState("message")

        let bgColor = "bg-rose-300 border-rose-300"

        if(!formState.isValid && error) {
          bgColor = "bg-red-500 border-red-500"
        }

        if(formState.isValid) {
          bgColor = "bg-green-500 border-green-500"
        }
        
        const buttonClassNames = clsx(
          "text-white p-2",
          bgColor,
        )

        return (
          <Fragment>
            { error
              ? (
                  <p className="p-3 text-xs lg:text-base general text-white bg-red-500 text-center rounded-sm shadow-lg w-full whitespace-pre-line">
                    {error?.message}
                  </p>
                )
              : null
             }
            <Field name="message" className="w-full">
              {({ Label }) => {
                return (
                  <Fragment>
                    <Label htmlFor="message" className="text-white">Message: </Label>
                    <AddonField className="shadow-xl mt-2">
                      <AddonField.Input id="message" className="transition-shadow p-2 flex-grow" {...register("message") }/>
                      <AddonField.Addon className={buttonClassNames} type="submit">
                        { formState.isValid ? <Unlock/> : <Lock/> }
                      </AddonField.Addon>
                    </AddonField>
                  </Fragment>
                )
              }}
            </Field>
            
              {
                actionData
                ? (
                  <section className="text-white">
                    <h1>Decoded message:</h1>
                    <Fragment>
                      <p className="text-sm text-yellow-200">
                        ID:
                        <span className="text-white font-bold ml-1">{actionData.id}</span>
                      </p>
                      <p className="text-sm text-yellow-200">
                        First name:
                        <span className="text-white font-bold ml-1">{actionData.first_name}</span>
                      </p>
                      <p className="text-sm text-yellow-200">
                        Last name:
                        <span className="text-white font-bold ml-1">{actionData.last_name}</span>
                      </p>
                    </Fragment>
                  </section>
                )
                : null
              }
          </Fragment>
        )
      }}
    </Form>
  )
}

export default DecryptForm