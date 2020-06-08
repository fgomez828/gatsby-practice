import React from "react"
import { Link } from "gatsby"

export default function Header(props) {
	return(
		<div>
			<h5>
				<Link to="/">Home </Link> | 
				<Link to="/contact/">Contact </Link> | 
				<Link to="/about/">About </Link>
			</h5>
			<h1>{ props.headerText }</h1>
		</div>
	)
}