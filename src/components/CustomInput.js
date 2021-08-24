
export default function CustomInput({type, placeholder,onChange}){
    return (
        <div className="formDiv">
            <input type={type} className="formInput" placeholder=" " onChange={onChange}/>
            <label className="formLabel">{placeholder}</label>
        </div>
    );
}