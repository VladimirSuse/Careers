<div class="loader"><img src="../../img/loader.gif"></div>
<div id="service-table-container" style='display:none'>	
	<table id ="service-table" class="styled-table">
		<thead>
			<th scope='col'>Service Name (EN)</th>
			<th scope='col'>Service Name (FR)</th>
			<th scope='col'>Price ($)</th>
			<th scope-'col'></th>
		</thead>	
		<tobdy>
			<?php
				foreach($data as $d){
					echo "<tr data-service-id='".$d['id']."'>
							<td>".$d['name_en']."</td>
							<td>".$d['name_fr']."</td>
							<td><div>".$d['price']."</td>
							<td>
								<div data-service-id='".$d['id']."' class='table-button fairs-button icon-left icon-cancel entypo delete metro primary small btn'><a>Delete</a></div>
								<div data-service-id='".$d['id']."' class='table-button fairs-button icon-left icon-pencil entypo view-edit metro primary small btn'><a>Edit</a></div>
							</td>
						  </tr>";
				}
			?>
		</thead>		
	</table>
</div>	