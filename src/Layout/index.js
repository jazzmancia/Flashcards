import React from "react";
import {Redirect, Switch, Route} from "react-router-dom";

import Home from "./Home";
import Study from "../Study/index";
import NotFound from "./NotFound";
import Header from "./Header";
import DeckCreate from "../Decks/DeckCreate";
import DeckEdit from "../Decks/DeckEdit";
import DeckView from "../Decks/DeckView";
import CardEdit from "../Cards/CardEdit";
import CardCreate from "../Cards/CardCreate";



function Layout() {
  return (
    <div>
      <Header />
      <div className="container">
        
        <Switch>
          <Route path="/decks/new">
            <DeckCreate />
          </Route>
          <Route path="/decks/:deckId/study">
            <Study />
          </Route>
          <Route path="/decks/:deckId/edit">
            <DeckEdit />
          </Route>
          <Route path="/decks/:deckId/cards/new">
            <CardCreate />
          </Route>
          <Route path="/decks/:deckId/cards/:cardId/edit">
            <CardEdit />
          </Route>
          <Route exact path="/decks/:deckId">
            <DeckView />
          </Route>
          <Route exact path="/decks">
            <Redirect to="/"/> 
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route>
            <NotFound /> 
          </Route>
        </Switch>
      </div>
    </div>
  );
}
export default Layout;