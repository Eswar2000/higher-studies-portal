
export default function CustomInput({type="text", placeholder,onChange,disabled=false,value=""}){
    return (
        <div className="formDiv">
            <input disabled={disabled} value={value} type={type} className="formInput" placeholder=" " onChange={onChange}/>
            <label className="formLabel">{placeholder}</label>
        </div>
    );
}