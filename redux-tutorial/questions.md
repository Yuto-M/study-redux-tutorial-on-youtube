# このドキュメントの目的
作業中にわからなかったコマンド・疑問に思ったコマンドを残しておくので適宜解決してください

## 以下項目

- 環境構築で最初に打つ下記コマンド
```
npx create-react-app redux-tutorial
```

- yarnの下記コマンド
```
yarn add readux react-redux
```

- reducerを分割する際の粒度をどれくらいにするか。component単位、page単位etc??

- window.devToolsExtensionとは何か？
- mapDispatchToProp()とmapActionsToProps()の違い

- class componentの中でmethodを定義した際にconstructorでbindするのは何故か確認。

- gitでローカルリポジトリで作業した後、remoteリポジトリを作成してうまいことpushさせる方法。リモートリポジトリ作成時にreadme.mdを作成してローカルリポジトリをpushしようとするとエラーになる。（単に、リモートの内容をローカルに取り込んでいないため）。ただ、リモートの内容をローカルに取り込もうとするとリポジトリのhistoryが違うと言われてエラーになってしまう。
一応下記方法で解決はできたが、本来的にはどうやるのが良い感じなのか。
https://qiita.com/takanatsu/items/fc89de9bd11148da1438

- combineReducers()でオブジェクトのkeyとreducerをセットで定義するがその際に設定したkeyがstate.keyでreducerの引数stateに渡されるstateはstoreが保持しているstateのstate.keyの部分のみ？
- bindActionCreators()は何をしてるのか。