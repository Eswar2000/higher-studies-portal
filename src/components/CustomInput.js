
export default function CustomInput({id, type, placeholder,onChange}){
    return (
        <input id={id} type={type} name="username" placeholder={placeholder} onChange={onChange}/>
    );
}