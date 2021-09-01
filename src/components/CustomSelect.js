import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

export default function CustomSelect() {
    return (
        <div className="dropdown">
            <select>
                <option value="">Select University</option>
                <option>Option A</option>
                <option>Option B</option>
                <option>Option C</option>
                <option>Option D</option>
            </select>
        </div>
    );
}