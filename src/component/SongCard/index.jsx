import styles from "./songCard.module.css"
import { useState, useEffect } from "react";
import { countryCodes } from "../../data/countryCodes";
import useFetchForYoutube from "../Hooks/useFetchForYoutube"
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { IoIosHeart, IoIosHeartEmpty } from "react-icons/io";

import { Link, useSearchParams } from "react-router";

const SongCard = ({ artist, country, song, id, year }) => {

    const youtubeData = useFetchForYoutube(artist, song)
    const [searchParams] = useSearchParams()
    const lang = searchParams.get("lang")

    const [clickedFav, setClickedFav] = useState(false)

    useEffect(() => {
        const stored = JSON.parse(localStorage.getItem("favSongs")) || []
        const isFav = stored.some(item => item.artist === artist);
        setClickedFav(isFav)
    }, [artist])

    const favHandler = () => {
        const favData = { id, artist, song, country };
        const hadData = JSON.parse(localStorage.getItem("favSongs")) || [];
        const upDated = clickedFav ? hadData.filter(item => item.artist !== artist) : [...hadData, favData]
        setClickedFav(!clickedFav)
        localStorage.setItem("favSongs", JSON.stringify(upDated))
    }


    return (

        <Card sx={{ minWidth: 318, maxWidth: 318, minHeight: 330 }}>
            <CardMedia
                component="img"
                alt={artist}
                height="140"
                image={youtubeData || "https://via.placeholder.com/300x140?text=Loading..."}
            />
            <CardContent>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {countryCodes[country]}
                </Typography>
                <Typography gutterBottom variant="h5" component="div">
                    {artist}
                </Typography>

                <Typography gutterBottom variant="h6" component="div">
                    {song}
                </Typography>
            </CardContent>
            <CardActions disableSpacing className={styles.cardActions}>
                <Link to={`/languages/${year}/${id}${lang ? `?lang=${lang}` : ""}`}>
                    <Button size="small">Learn More</Button>
                </Link>
                <IconButton aria-label="add to favorites" onClick={favHandler} >
                    {clickedFav ? (
                        <IoIosHeart />
                    ) :
                        <IoIosHeartEmpty />
                    }

                </IconButton>
            </CardActions>
        </Card>

    )
}

export default SongCard
