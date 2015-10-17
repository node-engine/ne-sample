'use strict';var React = require('react');var Router = require('react-router');var Route = Router.Route;var AboutHandler = require('../../app/handlers/AboutHandler.js').handler;var ContactHandler = require('../../app/handlers/ContactHandler.js').handler;var ExpressHandler = require('../../app/handlers/ExpressHandler.js').handler;var IndexHandler = require('../../app/handlers/IndexHandler.js').handler;var NotFoundHandler = require('../../app/handlers/NotFoundHandler.js').handler;var PeopleHandler = require('../../app/handlers/PeopleHandler.js').handler;var PostsHandler = require('../../app/handlers/PostsHandler.js').handler;var neAdminApiEditHandler = require('../../app/handlers/neAdminApiEditHandler.js').handler;var neAdminHandler = require('../../app/handlers/neAdminHandler.js').handler;var neAuthLoginHandler = require('../../app/handlers/neAuthLoginHandler.js').handler;var neAuthProfileHandler = require('../../app/handlers/neAuthProfileHandler.js').handler;var neAuthSignupHandler = require('../../app/handlers/neAuthSignupHandler.js').handler;var neAuthUsersEditHandlers = require('../../app/handlers/neAuthUsersEditHandlers.js').handler;var neAuthUsersHandler = require('../../app/handlers/neAuthUsersHandler.js').handler;var Root = require('../../app/handlers/aaRoot.js');var Routes = React.createElement(Route,{ path: '/', handler: Root },React.createElement(Route, { path: '/about', handler: AboutHandler }),React.createElement(Route, { path: '/contact', handler: ContactHandler }),React.createElement(Route, { path: '/express', handler: ExpressHandler }),React.createElement(Route, { path: '/', handler: IndexHandler }),React.createElement(Route, { path: '/notfound', handler: NotFoundHandler }),React.createElement(Route, { path: '/people', handler: PeopleHandler }),React.createElement(Route, { path: '/posts/:id', handler: PostsHandler }),React.createElement(Route, { path: '/admin/:apiName', handler: neAdminApiEditHandler }),React.createElement(Route, { path: '/admin', handler: neAdminHandler }),React.createElement(Route, { path: '/login', handler: neAuthLoginHandler }),React.createElement(Route, { path: '/profile', handler: neAuthProfileHandler }),React.createElement(Route, { path: '/signup', handler: neAuthSignupHandler }),React.createElement(Route, { path: '/admin/users/:_id', handler: neAuthUsersEditHandlers }),React.createElement(Route, { path: '/admin/users', handler: neAuthUsersHandler }),React.createElement(Route, { path: '*', handler: NotFoundHandler }));module.exports = Routes;