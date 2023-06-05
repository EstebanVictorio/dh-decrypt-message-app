import { LoaderFunctionArgs } from "react-router-dom";

const loader = async (_: LoaderFunctionArgs): Promise<{ decodeLog: Operation[] }> => {
  return {
    decodeLog: [],
  }
}

export type HomeData = Awaited<ReturnType<typeof loader>>

export default loader