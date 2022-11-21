import './bottomright.css';
import { Timeline } from '../timeline';

function Bottomright(props) {
  const { country } = props;

  return (
    <div className="bottomright">
      {country && <h1> {country} Time Series </h1>}
      {!country && <h1> Select a country </h1>}
      <Timeline country={country} />
    </div>

  )
}

export default Bottomright;