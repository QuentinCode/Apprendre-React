
export default function Item(props) {
  return (
    <li>
        <div className="txt">{props.txt}</div>
        <button className="supprimer" onClick={() => props.delFunc(props.id)}>Supprimer</button>
    </li>
  )
}
