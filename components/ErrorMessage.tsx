interface ErrorMessageProps {
  error: Error
}

export default function ErrorMessage({ error }: ErrorMessageProps) {
  return (
    <p className="py-6 text-red-500">
      Oops! Looks like something went wrong: {error.message}.
      <br />
      Please try again later, by refreshing the page.
    </p>
  )
}


