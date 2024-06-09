import { useRouteError } from "react-router-dom"

export const ErrorComponent = () => {
  const error = useRouteError();
  console.error(error)
  return (
    <div>
      Something broke in 'Remote'
      {error instanceof Error ? (

        <div>{error.message}</div>
      ) : (

        <div>An unknow error, whoops</div>
      )}
    </div>
  )
}
