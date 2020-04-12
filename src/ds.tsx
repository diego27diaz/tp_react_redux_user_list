import React from 'react';
import store from "./store/redux-store";
import { addArticle, addClientId } from "./store/redux-action-index";


//this is only to load dummy data

class DataSource extends React.Component {
  componentDidMount(){
    store.dispatch( addArticle({ id: 1, title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus rhoncus commodo sem eget dapibus. Nullam egestas tincidunt felis, facilisis faucibus quam facilisis sit amet. Sed', user: "Diego Diaz", city: "Armenia" , imgurl: "https://material-ui.com/static/images/cards/contemplative-reptile.jpg"}) );
    store.dispatch( addArticle({ id: 2, title: 'Aenean tempor a diam a aliquam. Integer vel tortor ultricies, finibus nisi id, ullamcorper sapien. Aliquam pellentesque convallis libero a tincidunt. Fusce euismod, mi eget dapibus', user: "Jhon Doe", city: "New York" , imgurl: "https://material-ui.com/static/images/cards/contemplative-reptile.jpg"}) );
    store.dispatch( addArticle({ id: 3, title: 'Proin ornare facilisis neque non auctor. Vivamus egestas nisl nec tortor faucibus tristique. Etiam semper, lectus sed finibus laoreet, neque elit bibendum erat, ac convallis sapien', user: "Alex Mag", city: "Bogotá" , imgurl: "https://material-ui.com/static/images/cards/contemplative-reptile.jpg"}) );
    store.dispatch( addArticle({ id: 4, title: 'Vivamus vitae nisi nec velit tincidunt viverra sed ut urna. Morbi condimentum sem magna, eu hendrerit mi mollis ut. Nullam quam ipsum, posuere sit amet tempor a, elementum id nunc.', user: "Wizard98", city: "Lima" , imgurl: "https://material-ui.com/static/images/cards/contemplative-reptile.jpg"}) );
    store.dispatch( addArticle({ id: 5, title: 'Suspendisse odio purus, feugiat vitae pulvinar sit amet, consectetur id lacus. Proin fringilla sit amet dui in faucibus. Maecenas sit amet lacus orci. Proin vel consectetur tortor.', user: "Carl Doe", city: "Madrid" , imgurl: "https://material-ui.com/static/images/cards/contemplative-reptile.jpg"}) );
    store.dispatch( addArticle({ id: 6, title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus rhoncus commodo sem eget dapibus. Nullam egestas tincidunt felis, facilisis faucibus quam facilisis sit amet.', user: "Juan Perez", city: "Quito" , imgurl: "https://material-ui.com/static/images/cards/contemplative-reptile.jpg"}) );
    store.dispatch( addArticle({ id: 7, title: 'vel tortor ultricies, finibus nisi id, ullamcorper sapien. Aliquam pellentesque convallis libero a tincidunt. Fusce euismod, mi eget dapibus malesuada, sem urna dignissim lacus', user: "JonasX", city: "New York" , imgurl: "https://material-ui.com/static/images/cards/contemplative-reptile.jpg"}) );
    store.dispatch( addArticle({ id: 8, title: 'erat. Cras magna leo, laoreet et egestas a, sollicitudin non nibh. Curabitur volutpat non mauris sed pharetra. Pellentesque rutrum nunc sem, id interdum neque vehicula quis.', user: "Mary Lu", city: "Armenia" , imgurl: "https://material-ui.com/static/images/cards/contemplative-reptile.jpg"}) );
    store.dispatch( addArticle({ id: 9, title: 'Quisque sit amet diam justo. Donec porttitor lorem sed bibendum bibendum. In sed ligula eu lacus accumsan dapibus. In id metus at dui congue eleifend. Curabitur imperdiet ', user: "Danna", city: "Barcelona" , imgurl: "https://material-ui.com/static/images/cards/contemplative-reptile.jpg"}) );
    store.dispatch( addArticle({ id: 10, title: 'nc. Quisque finibus lectus massa, a tincidunt urna euismod sit amet. Sed lacinia hendrerit lorem in dictum. Phasellus nec diam libero. Phasellus lacinia sem nibh, ac feugiat', user: "Rox111", city: "Sevilla" , imgurl: "https://material-ui.com/static/images/cards/contemplative-reptile.jpg"}) );
    
    //clientid generator
    store.dispatch( addClientId({id: Math.floor(Math.random()*101)}));
  }

  render() {
    return null
  }
}

export default DataSource;

