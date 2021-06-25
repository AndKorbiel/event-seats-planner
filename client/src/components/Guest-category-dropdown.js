import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Button from "@material-ui/core/Button";

export default function CategoryDropdown(props) {
    return (
        <div id="custom-select">
            <FormControl variant="outlined" >
                <InputLabel id="select-outlined-label">Select category</InputLabel>
                <Select
                    labelId="select-outlined-label"
                    value={props.value}
                    onChange={e => props.handleChange(e)}
                    label="Select category"
                    name="SelectCategory"
                >
                    <MenuItem value="" key="0">All</MenuItem>
                    {props.list.map((el, index) => {
                        return (
                            <MenuItem value={el} key={el + index}>{el}</MenuItem>
                        )
                    })}
                </Select>
            </FormControl>
            <Button variant="contained" color="primary" size="large" onClick={()=> props.triggerSubmit()}>
                Search
            </Button>
        </div>

    )
}