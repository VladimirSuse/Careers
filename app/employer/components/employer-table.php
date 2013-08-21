<div class="loader"><img src="../../img/loader.gif"></div>
<div id="emp-table-container" style="display:none">	
	<table id ="employer-table" class="styled-table">
		<thead>
			<th scope='col'>Organization Name</th>
			<th scope='col'>Department Name</th>
			<th scope='col'>Website</th>
			<th scope="col">HST Exempt</th>
			<th scope="col">PST Exempt</th>
			<th scope-'col'></th>
		</thead>	
		<tobdy>
			<?php
				foreach($data as $d){
					echo "<tr data-emp-id='".$d['id']."'>
							<td><div>".$d['org_name_en']."<div>".$d['org_name_fr']."</div></td>
							<td><div>".$d['dep_name_en']."<div>".$d['dep_name_fr']."</div></td>
							<td><div>".$d['website_en']."<div>".$d['website_fr']."</div></td>
							<td>".($d['hst_exempt'] == 1 ? "<i class='icon-check tax-yes' title='.icon-check'></i>" : "<i class='icon-cancel tax-no' title='.icon-cancel'></i>" )."</td>
							<td>".($d['pst_exempt'] == 1 ? "<i class='icon-check tax-yes' title='.icon-check'></i>" : "<i class='icon-cancel tax-no' title='.icon-cancel'></i>" )."</td>
							<td>
								<div data-emp-id='".$d['id']."' class='table-button fairs-button icon-left icon-calendar entypo metro primary small btn'><a>Events</a></div>
								<div data-emp-id='".$d['id']."' class='table-button fairs-button icon-left icon-pencil entypo view-edit metro primary small btn'><a>Edit</a></div>
							</td>
						  </tr>";
				}
			?>
		</thead>		
	</table>
</div>	