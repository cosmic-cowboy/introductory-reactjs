////////////////////////////////////////////
// React Bootstrap
////////////////////////////////////////////
// 読み込み
var Alert = ReactBootstrap.Alert;

var Dashboard = React.createClass({
	render: function () {
		return (
			  <Alert bsStyle='warning'>
			    ダッシュボード
			  </Alert>
		);
	}
});

var Users = React.createClass({
	render: function () {
		return (
			<div>
				<Alert bsStyle='warning'>
				ユーザ一覧
				</Alert>
				<a href='index.html#/settings'>設定にリダイレクト</a>
			</div>
		);
	}
});

var Settings = React.createClass({
	render: function () {
		return (
			  <Alert bsStyle='warning'>
			    設定
			  </Alert>
		);
	}
});


////////////////////////////////////////////
// React Route
////////////////////////////////////////////
// 読み込み
var Route = ReactRouter.Route;
var NotFoundRoute = ReactRouter.NotFoundRoute;
var DefaultRoute = ReactRouter.DefaultRoute;
var Redirect = ReactRouter.Redirect;
var Link = ReactRouter.Link;
var RouteHandler = ReactRouter.RouteHandler;

var mainStyle = {
	marginTop: 60
};
// ReactRouter の Link を使って、リンクを表現する
// <RouteHandler/>コンポーネントをrenderすると、
// ルーティングで定義されたアクティブな子コンポーネントが呼び出される
var App = React.createClass({
	render: function () {
		return (
			<div>
		    <nav className="navbar navbar-default navbar-fixed-top">
		      <div className="container">
		        <div className="navbar-header">
		          <a className="navbar-brand" href="#">Flow</a>
		        </div>
		        <div id="navbar">
		          <ul className="nav navbar-nav">
		            <li><Link to="app">ダッシュボード</Link></li>
		            <li><Link to="users">ユーザ一覧</Link></li>
		            <li><Link to="settings">設定</Link></li>
		          </ul>
		          <ul className="nav navbar-nav navbar-right">
		            <li>Logged in</li>
		          </ul>
		        </div>
		      </div>
		    </nav>
			<div className="container" style={mainStyle}>
				<RouteHandler/>
			</div>
			</div>
		);
	}
});

// urlの階層構造をネストされた<Route/>タグで表現する
// pathが指定されていない場合、pathはnameから自動補完 /users, /settingsという具合
// <Route/>のhandlerにはReactのコンポーネントを紐付ける。
// render時に、アクティブな<Route/>のhandlerがコンポーネントを呼び出され、表示される。
var routes = ( 
		<Route name="app" path="/" handler={App}>
			<Route name="users" handler={Users}/>
			<Route name="settings" handler={Settings}/>
			<DefaultRoute handler={Dashboard}/>
			<Redirect from="gotoSettings" to="settings" />
		</Route>
);

////////////////////////////////////////////
// render等
////////////////////////////////////////////

//React RouterはリクエストされたURLに最も深くマッチする<Route/>を探し出し、 
//その木構造の中での枝に含まれる全ての<Route/>をアクティブにする。 
ReactRouter.run(routes, function (Handler) {
	React.render(<Handler/>, document.body);
});






