import React from 'react';
import { connect } from 'react-redux';

//components
import PostItem from './Post/Post';

type Props = { articlesArray: [] };

const mapStateToProps = function(state:any) {
  return {
    articlesArray: state.articles,
  }
}

class Home extends React.Component<Props, {}> {

  render() {
    return (
        <div className="home">
          {this.props.articlesArray.map((item:any) => (
            <PostItem key={item.id} postData={item}></PostItem>
          ))}
        </div>
    );
  }
}

export default connect(mapStateToProps)(Home);

