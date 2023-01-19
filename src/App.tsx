import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function RecipeReviewCard() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        height="194"
        image="data:image/jpeg;base64,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"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
            aside for 10 minutes.
          </Typography>
          <Typography paragraph>
            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
            medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
            occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a
            large plate and set aside, leaving chicken and chorizo in the pan. Add
            pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook,
            stirring often until thickened and fragrant, about 10 minutes. Add
            saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
          </Typography>
          <Typography paragraph>
            Add rice and stir very gently to distribute. Top with artichokes and
            peppers, and cook without stirring, until most of the liquid is absorbed,
            15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and
            mussels, tucking them down into the rice, and cook again without
            stirring, until mussels have opened and rice is just tender, 5 to 7
            minutes more. (Discard any mussels that don&apos;t open.)
          </Typography>
          <Typography>
            Set aside off of the heat to let rest for 10 minutes, and then serve.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}

