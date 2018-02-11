import React from "react";
import { createStore } from "redux";


const persons = (state, action) => {
	switch (action.type) {
		case "ADD": 
			state = state + action.payload;
			break;
		case "DELETE":
			break;
	}
	return state;
};

const store = createStore(persons, 0);



export default (props) => {
	console.log(props);
	function getPerson(){
		console.log("getPerson()");
		store.dispatch({
			type: "ADD",
			payload: 1
		});
		fetch("http://uinames.com/api/").
		then((Response)=> Response.json()).
		then((foundResponse)=>
		{
			let mainTable = document.querySelector("#mainTable");
			let person = foundResponse;
			console.log(person);
			store.subscribe(() => {
				console.log("Store updated", store.getState());
			});
			store.dispatch({
				type: "ADD",
				payload: 0
			});

			let newEl = "<tr><th>"+person.name+"</th><th>"+person.surname+"</th><th>"+person.gender+"</th><th>"+person.region+"</th></tr>";
			mainTable.innerHTML += newEl;

		})
	}
	return ( <div>
      		<table>
				<tbody id="mainTable">
					<tr>
						<th>First Name</th>
						<th>Surname</th>
						<th>Gender</th>
						<th>Region</th>
					</tr>
					
				</tbody>
			</table>
			<button onClick={getPerson}>
				Get person
			</button>
		</div>
    );
}