import React from "react";
import Request from 'react-http-request';

export default (props) => {
	console.log(props);
	function getPerson(){
		
		console.log("test");
		/*<table>
		<tbody>
			<tr>
			<th>First Name</th>
			<th>Surname</th>
			<th>Gender</th>
			<th>Region</th>
		</tr>
			<tr>

				<td>{person.name}</td>	
				<td>{person.surname}</td>	
				<td>{person.gender}</td>	
				<td>{person.region}</td>	
			</tr>
		</tbody>
	</table>;*/
	}
	return (
		<Request url='http://uinames.com/api/' method='get' accept='application/json' verbose={true}>
	        {
	            ({error, result, loading}) => {
		            if (loading) {
		              return <div>loading...</div>;
		            } else {
		            	var person = result['body'];
		            	console.log(person);
		              	return <div>
		              		<table>
								<tbody>
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
						</div>;
		              		
		            }
	          	}
	        }
	    </Request>
    );
}