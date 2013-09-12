<div class="row">
	<h3 style="margin-bottom:2em" id="edit-service-title"></h3>
	<div class="centered fourteen columns">
		<div class="row" style="padding:1em;border:solid #C7E3FF 1px;">	
			<div class="service-step" id="service-title">Service Details</div>
			<form id="service_form" action="post">
				<div class="row">
					<input type="hidden" class="edit-service-input" id="edit_service_id" name="id">
				</div>
				<div class="row">
					<div class="seven columns labels">
						<label for="service_name_en">Service Name (En)</label>
					</div>
					<div class="thirteen columns">
						<input type="text" class="edit-service-input" id="edit_service_name_en" name="name_en">
					</div>
				</div>
				<div class="row">
					<div class="seven columns labels">
						<label for="service_name_fr">Service Name (Fr)</label>
					</div>
					<div class="thirteen columns">
						<input type="text" class="edit-service-input" id="edit_service_name_fr" name="name_fr">
					</div>
				</div>
				<div class="row">
					<div class="seven columns labels">
						<label for="service_price">Price ($)</label>
					</div>
					<div class="thirteen columns">
						<input type="number" class="edit-service-input" id="edit_service_price" name="price">
					</div>
				</div>
			</form>
		</div>
	</div>	
</div>