interface Props{
    children : string;
    onClick : () => void;
    color?  : string;
}

const Button = ({children , onClick ,color="danger" }:Props) => {
  return (
    <div>
        <button type="button" className={'btn btn-'+color} onClick={onClick}>
            {children}
        </button>
    </div>
  )
}

export default Button