<div class="row">
	<h3 style="margin-bottom:2em">Add a new service</h3>
	<div class="centered fourteen columns">
		<div class="row" style="padding:1em;border:solid #C7E3FF 1px;">	
			<div class="emp-step" id="service-title">Service Details</div>
			<form id="service_form" action="post">
				<div class="row">
					<div class="seven columns labels">
						<label for="service_name_en">Service Name (En)</label>
					</div>
					<div class="thirteen columns">
						<input type="text" class="service-input" id="service_name_en" name="name_en">
					</div>
				</div>
				<div class="row">
					<div class="seven columns labels">
						<label for="service_name_fr">Service Name (Fr)</label>
					</div>
					<div class="thirteen columns">
						<input type="text" class="service-input" id="service_name_fr" name="name_fr">
					</div>
				</div>
				<div class="row">
					<div class="seven columns labels">
						<label for="service_price">Price ($)</label>
					</div>
					<div class="thirteen columns">
						<input type="number" class="service-input" id="service_price" name="price">
					</div>
				</div>
			</form>
		</div>
	</div>	
</div>	
<div class="row" style="margin-top:2em">
	<div class="medium btn metro primary fairs-button icon-left entypo icon-check" id="confirm-add"><a>Add Service</a></div>
</div>	