# React-slack-app

## react-routerおさらい
- react-routerを使って呼び出したいコンポーネントをindex.jsのRootで書く
```
 const Root = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
    </Switch>
  </Router>
)
```