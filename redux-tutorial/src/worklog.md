# このドキュメントの目的
作業中に使用したコマンド・気づいた点・覚えておくべきことなどを書き残します。

## 以下項目
- createStore()でstoreを作成する際には、reducerを引数で渡す必要がある
  - reducerは関数として定義する
- actionは、オブジェクトでtypeとpayloadを保持する
- store.dispatch()でactionを引数として渡すとreducerにそのactionが渡される。
  - reducerは渡されてきたaciton.typeにより新しいstateを返す。これにより、storeに保持されているstateが更新される。
- createStore(reducer)をした時点で初期化のaction.typeが渡っているっぽかった（デバッグしたらわかる）。