import {
    Button,
    Grid,
} from "@mui/material";
export default function ButtonRow(props) {
    return <Grid container item direction="row" spacing={props.spacing || 0.5}>
        {props.buttons.map((str, idx) => {
            return <Grid item key={idx}>
                <Button variant="contained"
                    style={{
                    maxWidth: '60px', maxHeight: '60px', minWidth: '60px', minHeight: '60px'
                }} onClick={() => {props.onClick(str)}}>
                    {str}
                </Button>
            </Grid>})}
    </Grid>
}