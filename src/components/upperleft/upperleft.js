import './upperleft.css';

function Upperleft(props) {
  const { country } = props;
  return (
    <div className='upperleft'>
      <div class="upperleft-parent">
        <div class="upperleft-div1"> <h1>Confirmed Case</h1> </div>
        <div class="upperleft-div2"> <h1>Mortality Rate</h1> </div>
        <div class="upperleft-div3"> <h1>Vaccine Rate</h1> </div>
        <div class="upperleft-div4"> <h1>Correlation Rate</h1> </div>
        <div class="upperleft-div5"> <h2>{country ? 5 : '-'}</h2> </div>
        <div class="upperleft-div6"> <h2>{country ? 6 : '-'}</h2> </div>
        <div class="upperleft-div7"> <h2>{country ? 7 : '-'}</h2> </div>
        <div class="upperleft-div8"> <h2>{country ? 8 : '-'}</h2> </div>
      </div>
    </div>
  );
}

export default Upperleft;