function TextBox({onChange}){
    return (
        <div className="App">
               <input type="text" onChange={onChange} />
        </div>
    );
}
export default TextBox