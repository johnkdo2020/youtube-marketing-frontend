import React from 'react';
import { Route } from 'react-router-dom';
import DetailVideoPage from './pages/DetailVideoPage';
import HomePage from './pages/HomePage';
import SearchPage from './pages/SearchPage';
import ChannelPage from './pages/ChannelPage';
import MarketPage from './pages/MarketPage';
import OrderPage from './pages/OrderPage';
// import CartPage from './pages/CartPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import PopupPage from './pages/PopupPage';
import CartListPage from './pages/CartListPage';
import PaymentPage from './pages/PaymentPage';

const App = () => {
    return (
        <div>
            <Route path="/" component={HomePage} exact={true} />
            {/* <Route path="/search" component={SearchPage} /> */}
            <Route path="/search/:type" component={SearchPage} />
            <Route path="/detail/:videoId" component={DetailVideoPage} />
            <Route path="/channel/:channelId" component={ChannelPage} />
            <Route path="/market/:postId" component={MarketPage} />
            <Route path="/order" component={OrderPage} />
            {/* <Route path="/cart" component={CartPage} /> */}
            <Route path="/login" component={LoginPage} />
            <Route path="/register" component={RegisterPage} />
            <Route path="/popup" component={PopupPage} />
            <Route path="/list" component={CartListPage} />
            <Route path="/payment" component={PaymentPage} />
        </div>
    );
};

export default App;
