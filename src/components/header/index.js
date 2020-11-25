import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style';

const Header = () => (
	<header class={style.header}>
		<Link href="/"><h1>Renaissance Kamite</h1></Link>
		<nav>
			<Link activeClassName={style.active} href="/blogs">Blog</Link>
		</nav>
	</header>
);

export default Header;
