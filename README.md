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

## firebaseのセットアップ
- firebaseをググってログインして[プロジェクトを追加]の鉄板の流れ
- リダイレクトで管理画面に飛ぶので[開始するアプリ]でwebを選択
- scriptをコピーしてsrc/firebase.jsを使ってペタッとはる
- gitignoreに一応firebase.jsを追加しておく
```
import firebase from 'firebase/app';
import 'firebase/auth'
import 'firebase/database'
import 'firebase/storage'


var config = {
 //ここペタッと貼るところ
};
firebase.initializeApp(config);

export default firebase;
```

