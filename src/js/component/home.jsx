import React from "react";
import { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const TrafficLight= ()=>{
	const [color,setColor]= useState("")
	return (
		<div className="trafficLight">
			<div className="base"></div>
			<div className="semaForo">
				<div className={"light red " + (color == "red"? "redOn":"")}
					onClick={() => setColor("red")}>
				</div>
				<div className={"light yellow " + (color == "yellow"? "yellowOn":"")}
					onClick={() => setColor("yellow")}>
				</div>
				<div className={"light green " +  (color == "green"? "greenOn":"") }
					onClick={() => setColor("green")}>
				</div>
			</div>
		</div>
	)
}

export default TrafficLight




