<div id="mini-table-container" >	
	<table id ="employer-table-abridged" class="styled-table">
		<thead>
			<th scope='col'>Organization Name</th>
		</thead>	
		<tobdy>
			<?php
				foreach($data as $d){
					echo "<tr data-emp-id='".$d['id']."'>
							<td><div>".$d['org_name_en']."<div>".$d['org_name_fr']."</div></td>
						  </tr>";
				}
			?>
		</thead>		
	</table>
</div>	