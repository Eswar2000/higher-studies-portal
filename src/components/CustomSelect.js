
export default function CustomSelect({disabled,value=1,onChange,options}) {


    return (
        <div className="dropdown">
            <select disabled={disabled} value={value} onChange={onChange}>
                {/*<option value="">Select University</option>*/}
                {typeof options!=="undefined" && options.map((item, index)=>(
                    <option value={options[index].uniID}>{options[index].uniName}</option>
                ))}
            </select>
        </div>
    );
}