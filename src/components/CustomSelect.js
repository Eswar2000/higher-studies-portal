
export default function CustomSelect({disabled,onSelect}) {

    return (
        <div className="dropdown">
            <select disabled={disabled} onSelect={onSelect}>
                <option value="">Select University</option>
                <option>Amrita Vishwa Vidyapeetham</option>
                <option>Stanford University</option>
                <option>Yale University</option>
                <option>Harvard University</option>
            </select>
        </div>
    );
}