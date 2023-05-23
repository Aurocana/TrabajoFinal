import {
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Typography,
} from "@mui/material";

export default function Tarjeta({ name, descripcion, image }) {
    return (
        <Card sx={{ width: 345, marginBottom: "20px" }} raised>
            <CardMedia
                sx={{ height: 350 }}
                image={`https://image.tmdb.org/t/p/w500${image}`}
                https:title="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {descripcion}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    );
}



