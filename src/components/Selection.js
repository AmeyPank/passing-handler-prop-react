export default function Selection({ color, text }) {
  return (
    <div>
       <div style={{ backgroundColor: color }} className="fix-box">{text}</div> 
    </div>
  )
}
