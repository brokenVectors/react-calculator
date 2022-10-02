import {
    Grid
} from "@mui/material";
import ButtonRow from "./ButtonRow";
export default function Buttons(props) {
    function handleClick(str) {
        props.onClick(str);
    }
    return <Grid container spacing={props.spacing || 0.5} direction="column">
        <ButtonRow buttons={["C", "%", "+/-", "/"]} onClick={handleClick}/>
        <ButtonRow buttons={["7", "8", "9", "*"]} onClick={handleClick}/>
        <ButtonRow buttons={["4", "5", "6", "-"]} onClick={handleClick}/>
        <ButtonRow buttons={["1", "2", "3", "+"]} onClick={handleClick}/>
        <ButtonRow buttons={[".", "0", "="]} onClick={handleClick}/>
    </Grid>
}