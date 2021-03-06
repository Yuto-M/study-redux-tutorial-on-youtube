# このドキュメントの目的
作業中にわからなかったコマンド・疑問に思ったコマンドを残しておくので適宜解決してください

## 以下項目

- ~~環境構築で最初に打つ下記コマンド~~
  - packageの実行コマンドでnpxってのがある。
```
npx create-react-app redux-tutorial
```

- ~~yarnの下記コマンド~~
```
yarn add readux react-redux
```
  - yarn addがpackage.jsonとかに残しつつ、インストール
  - yarn installがnpm install

- reducerを分割する際の粒度をどれくらいにするか。component単位、page単位etc??

- window.devToolsExtensionとは何か？
- ~~mapDispatchToProp()とmapActionsToProps()の違い~~
  - actionをmapするかdispatchをmapするかの違いだと思う

- ~~class componentの中でmethodを定義した際にconstructorでbindするのは何故か確認。~~
  - constructorでthisをbindしているからインスタンスをさせるが、thisでbindしていないとコードバックがjsの仕様的にundefinedになるから
https://qiita.com/nb_tomo/items/f0d9855e6b55b40b35b8

- gitでローカルリポジトリで作業した後、remoteリポジトリを作成してうまいことpushさせる方法。リモートリポジトリ作成時にreadme.mdを作成してローカルリポジトリをpushしようとするとエラーになる。（単に、リモートの内容をローカルに取り込んでいないため）。ただ、リモートの内容をローカルに取り込もうとするとリポジトリのhistoryが違うと言われてエラーになってしまう。
一応下記方法で解決はできたが、本来的にはどうやるのが良い感じなのか。
https://qiita.com/takanatsu/items/fc89de9bd11148da1438

- combineReducers()でオブジェクトのkeyとreducerをセットで定義するがその際に設定したkeyがstate.keyでreducerの引数stateに渡されるstateはstoreが保持しているstateのstate.keyの部分のみ？
- ~~bindActionCreators()は何をしてるのか。~~
  - reduxでは、actionCreatorはactionを返すだけだが、fluxではacitonを作成したらそのままdispatch()まで行う。reduxでもそれを行うには、bindActionCreators()を使用する。
  　つまり、dispatch()まで行うactionCreatorを作成するのに使う関数。
- ~~reduxのcompose, applyMiddlewareは何をするためのものか~~
  - applyMiddlewareはミドルウェアをreduxに適用できるようにするために必要
  - composeは関数を受けとって、合成関数を返す関数
    - https://hogehuga.com/post-1123/
- ~~actionCreatorとは~~
  - actionを返す関数のこと
- jQueryのajaxメソッドの使い方
- createSelector()とは
- ~~mapDispatchToPropsで非同期を扱う方法~~
  - そもそも純粋なreduxで非同期を扱うには、middlewareで制御する必要があるっぽい
    - そこで、redux-thunkを使う。mapDispatchToProps()でdispatch()に関数を返すようにすると、redux-thunkが働き、ajax通信完了後のstoreに送りたい値をdispatch()して、それをまたdispatch()するとうまくいく。詳細は公式に書いてある。
https://github.com/reduxjs/redux-thunk
```
// Meet thunks.
// A thunk in this context is a function that can be dispatched to perform async
// activity and can dispatch actions and read state. 
// This is an action creator that returns a thunk:
function makeASandwichWithSecretSauce(forPerson) {
  // We can invert control here by returning a function - the "thunk".
  // When this function is passed to `dispatch`, the thunk middleware will intercept it,
  // and call it with `dispatch` and `getState` as arguments. 
  // This gives the thunk function the ability to run some logic, and still interact with the store.
  return function (dispatch) {
    return fetchSecretSauce().then(
      sauce => dispatch(makeASandwich(forPerson, sauce)),
      error => dispatch(apologize('The Sandwich Shop', forPerson, error))
    );
  };
}

// Thunk middleware lets me dispatch thunk async actions
// as if they were actions!

store.dispatch(
  makeASandwichWithSecretSauce('Me')
);
```