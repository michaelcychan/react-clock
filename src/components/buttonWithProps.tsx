export const ButtonWithProps = (props: {text: string} ) => {
  return (
    <button>
      {props.text}
    </button>
  )
}