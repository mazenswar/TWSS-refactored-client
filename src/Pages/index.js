import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// Components
import Home from './Home';
import Nav from '../Components/Nav';
import Feminists from './Feminists';
import FeministShow from './FeministShow';
import PostShow from './PostShow';
import ConversationShow from './ConversationShow';
import Search from './Search';
import Posts from './Posts';
import Auth from './AuthForm';
import NewPost from './NewPost';
import Conversations from './Conversations';
import Profile from './Profile';

/// Styles
import '../stylesheets/master.scss';
import '../stylesheets/about-page.scss';
import '../stylesheets/all-posts.scss';
import '../stylesheets/conversations.scss';
import '../stylesheets/forms.scss';
import '../stylesheets/index.scss';
import '../stylesheets/messages.scss';
import '../stylesheets/new-post.scss';
import '../stylesheets/search-page.scss';
import '../stylesheets/show-post.scss';
import '../stylesheets/show.scss';
import '../stylesheets/user-profile.scss';
import { useSelector } from 'react-redux';

export default () => {
  const user = useSelector((state) => state.user);

  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/auth" component={Auth} />
        <Route exact path="/feminists" component={Feminists} />
        <Route exact path="/feminists/:id" component={FeministShow} />
        <Route exact path="/conversations" component={Conversations} />
        <Route exact path="/conversations/:id" component={ConversationShow} />
        <Route exact path="/posts" component={Posts} />
        {user.id ? <Route exact path="/posts/new" component={NewPost} /> : null}
        <Route exact path="/posts/:id" component={PostShow} />
        <Route exact path="/search" component={Search} />
        {user.id ? <Route exact path="/profile" component={Profile} /> : null}
      </Switch>
    </Router>
  );
};
