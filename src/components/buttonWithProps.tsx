import React from "react"

export const ButtonWithProps = (props: {text: string, onClick: Function} ) => {
  return (
    <button onClick={() =>props.onClick}>
      {props.text}
    </button>
  )
}