## react-router

1. BrowserRouter로 App 컴포넌트 감싸기

```js
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
```

2. App.js에서 Route로 라우팅 설정

```js
<div>
  <Route path='/' component={Home} exact={true}>
  <Route path={['/about', '/info']} component={About}>
</div>
```

3. Link로 a태그 만들기

```js
<Link to='주소'>내용</Link>
```

4. URL 파라미터

props로 match받아오고 match.params 조회

```js
<Route path="/profile/:username" component={Profile}>
```

```js
Const Profile = ({ match }) => {
  const { username } = match.params,username;
}
```

```js
<Router>
  <Switch>
    <Route path="/movie">
      <Detail />
    </Route>
    <Route path="/">
      <Home />
    </Route>
  </Switch>
</Router>

<Link to="/">Home</Link>

import { useParams } from 'react-router-dom'
```