<div class="loader"><img src="../../img/loader.gif"></div>
<div id="event-table-container" style="display:none">	
	<table id ="event-table" class="styled-table">
		<thead>
			<th scope='col'>Event Name</th>
			<th scope='col'>Location</th>
			<th scope="col">Price ($)</th>
			<th scope="col">Capacity</th>
			<th scope="col">Start Date</th>
		    <th scope="col">End Date</th>
			<th scope="col"></th>
		</thead>	
		<tobdy>
			<?php
				foreach($data as $d){
					echo "<tr data-event-id='".$d['id']."'>
							<td><div>".explode('-', $d['name_en'])[0]."</div><div>".explode('-', $d['name_fr'])[0]."</div></td>
							<td><div>".$d['location_en']."<div>".$d['location_fr']."</div></td>
							<td>".$d['price']."</td>
							<td style='text-align:center'>".$d['capacity']."</td>
							<td><div>".date('M d, Y @ G:i', strtotime($d['start_date']))."</div></td>
					        <td><div> ".date('M d, Y @ G:i', strtotime($d['end_date']))."</div></td>
							<td>
								<div data-emp-id='".$d['id']."' class='table-button fairs-button icon-left icon-pencil entypo view-edit metro primary small btn'><a>View/Edit</a></div>
							</td>
						  </tr>";
				}
			?>
		</thead>		
	</table>
</div>	