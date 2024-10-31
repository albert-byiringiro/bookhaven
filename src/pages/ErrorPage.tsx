import React from 'react'
import { useRouteError } from 'react-router-dom'

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error)

  return (
    <div>
        <h1 className="Oops!"></h1>
        <p className="">sorry, an unexcepted error has occurred.</p>
        <p className="">
            <i className="">
                {error.statusText || error.message}
            </i>
        </p>
    </div>
  )
}
