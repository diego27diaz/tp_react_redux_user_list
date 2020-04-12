import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

//Styles
import './Post.css';

type Props = { postData: {
  id: 0,
  title: "",
  user: "",
  city: "",
  imgurl: "",
} };

class Post extends React.Component<Props, {}> {
  
  render() {
    return (
      <Card className="root">
      <CardActionArea>
        <CardMedia
          className="media"
          image={this.props.postData.imgurl}
          title="Post"
        />
        <CardContent className="card-content">
          <Typography gutterBottom variant="h5" component="h2">
            {this.props.postData.user} from {this.props.postData.city}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          {this.props.postData.title}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions>
    </Card>

    )
  }
}
export default Post;

