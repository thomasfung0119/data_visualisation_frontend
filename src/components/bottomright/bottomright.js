import './bottomright.css';
import { Timeline } from '../timeline';

function Bottomright(props) {
  
  return (
    <div className="bottomright">
      <h1> {props.country} Time Series </h1>
      <Timeline country = {props.country} />
    </div>
    
  )
}

export default Bottomright;