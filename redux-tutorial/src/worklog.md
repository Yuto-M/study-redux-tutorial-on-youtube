# このドキュメントの目的
作業中に使用したコマンド・気づいた点・覚えておくべきことなどを書き残します。

## 以下項目
- createStore()でstoreを作成する際には、reducerを引数で渡す必要がある
  - reducerは関数として定義する
- actionは、オブジェクトでtypeとpayloadを保持する
- store.dispatch()でactionを引数として渡すとreducerにそのactionが渡される。
  - reducerは渡されてきたaciton.typeにより新しいstateを返す。これにより、storeに保持されているstateが更新される。
- createStore(reducer)をした時点で初期化のaction.typeが渡っているっぽかった（デバッグしたらわかる）。
- 複数のreducerを合体させるには、combineReducers()を使用する
  - combineReducers()にはオブジェクトを引数として渡す。
  - 合体させたreducerをcreateReducer()の引数に渡す。
- storeを作成する際に初期stateをもたせたい場合、createStore()の第2引数にオブジェクトで初期stateを渡すとそれが設定できる
- reduxの拡張機能を追加して、createStore()の第3引数に渡すとブラウザでstateが確認できる
  - reduxの拡張機能では特定のactionがdispatchされたことによって、stateがどうなったかをtaraveling debuggingしながら確認したり、特定のactionでどんなpayloadがreducerに渡ったかを確認できる
- reduxのstoreとcomponentを結びつけるのに使用するのが、react-reduxのconnect()メソッド
  - connect()は3つの引数を取る。以下参照
    - mapStateToProps()
      - mapStateToProps()はstoreのstateをcomponentのどのpropsに渡すかを決定する
      - mapStateToProps()のstateはstoreで保持しているstateでreturnするオブジェクトのkeyがコンポーネントからthis.props.keyでアクセスできる。
    - mapActionsToProps() or mapDispatchToProps()
      - mapActionsToProps()はcomponentのpropsにactionを発行するための関数をmapするために使用する。actionを発行する関数は、新しいstateをdispatch()するので、storeが保持しているreducerでstateが更新される流れになる。
- mapStateToPropsの第二引数にはcomponentのプロパティに渡した値がセットされて渡ってくる。その渡ってきた値をmapStateToPropsで使用してプロパティに値をセットすることが可能
- connect()の第3引数として、mergePropsを設定できる
  - mergePropsは、propsFromState・propsFromDispatch・ownPropsの三種類を引数に取れる
    - propsFromStateは、mapStateToPropsでreturnしているオブジェクトがセットされる
    - propsFromDispatchは、mapActionsToPropsでreturnしているオブジェクトがセットされる
    - onwPropsは、componentに設定したプロパティがセットされる
- redux-thunkを使用してajax通信を行う
  - compose()でapplyMiddlewareの最初にredux-thunkを渡さないとエラーになる仕様
