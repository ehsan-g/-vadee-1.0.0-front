import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Divider from '@material-ui/core/Divider';
import CssBaseline from '@material-ui/core/CssBaseline';
import Main from './pages/Main';
import Header from './components/nav/Header';
import Footer from './components/nav/Footer';

const App = () => (
  <>
    <BrowserRouter>
      <CssBaseline />
      <Header />
      <React.StrictMode>
        <Switch>
          <Route exact path="/" component={Main} />
          {/* <Route exact path="/sell" component={Sell} />
            <Route path="/artworks/:workId" component={ArtWork} />
            <Route
              path="/admin-panel/artwork/:artworkId/edit"
              component={ArtworkEdit}
            />
            <Route path="/cart/shippingAddress/:workId?" component={Cart} />
            <Route path="/cart/placeOrder/:workId?" component={Cart} />
            <Route path="/orders/:orderId" component={Cart} />
            <Route exact path="/login" component={EnterForm} />
            <Route exact path="/register" component={RegisterForm} />
            <Route exact path="/profile" component={UserProfile} />
            <Route path="/admin-panel/user/:userId/edit" component={UserEdit} />
            <Route exact path="/admin-panel/:route" component={AdminPanel} /> */}
        </Switch>
      </React.StrictMode>
      <Footer />
    </BrowserRouter>
  </>
);
export default App;
