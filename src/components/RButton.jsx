import { Button } from 'react-ui'
function RButton({onClick, value}){
    return (
        <div className="App">
          <p> <Button onClick={onClick}>{value}</Button></p>
        </div>
    );
}

export default RButton