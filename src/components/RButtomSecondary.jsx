import { Button } from 'react-ui'
function RButtonSecondary({onClick, value}){
    return (
        <div className="App">
          <p> <Button variant="secondary" onClick={onClick}>{value}</Button></p>
        </div>
    );
}

export default RButtonSecondary