import './bottomright.css';
import { Timeline } from '../timeline';

function Bottomright(props) {
  const { country, confirmedCaseData } = props;

  return (
    <div className="bottomright">
      {country && <h1> {country} Confirmed Case TimeLine </h1>}
      {!country && <h1> Select a country </h1>}
      {country && <Timeline country={country} confirmedCaseData={confirmedCaseData}/> || <h1>No Data</h1> }
      
    </div>

  )
}

export default Bottomright;