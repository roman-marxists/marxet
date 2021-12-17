import { useState } from 'react';
import { Card, CardActionArea, CardMedia } from '@mui/material';

const ListingOption = ({ id, name }) => {
  const [ highlighted, setHighlighted ] = useState(false);
  const cardID = `listing-option-${id}`

  const handleHighlight = () => {
    setHighlighted(!highlighted);

    const currentCard = document.getElementById(cardID);
    if (highlighted) {
      currentCard.sx.border = "343a40 2px solid";
    } else {
      currentCard.sx.border = "#801f12 2px solid";
    }
  }

  return (
    <Card
      id={cardID}
      sx={{
        border: "#801f12 2px solid"
      }}
    >
      <CardActionArea onClick={handleHighlight}>
        <CardMedia
          component="img"
          height="100px"
          src={"https://source.unsplash.com/random/"}
        />
        <CardContent className='plain-text' >
          <b>{name}</b>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default ListingOption;