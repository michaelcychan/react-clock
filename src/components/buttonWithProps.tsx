export const ButtonWithProps = (props: {text: string, onClick: Function} ) => {
  return (
    <button>
      {props.text}
    </button>
  )
}