<div class="row">
	<h3 style="margin-bottom:2em">Add a new Employer</h3>
	<div class="centered fourteen columns">
		<div class="row" style="padding:1em;border:solid #C7E3FF 1px;">	
			<div class="emp-step" id="step-one">Step 1: Employer Details</div>
			<form id="emp_form" action="post">
				<div class="row">
					<div class="seven columns labels">
						<label for="emp_org_name_en">Organization Name (En)</label>
					</div>
					<div class="thirteen columns">
						<input type="text" class="emp-input" id="emp_org_name_en" name="org_name_en">
					</div>
				</div>
				<div class="row">
					<div class="seven columns labels">
						<label for="org_name_fr">Organization Name (Fr)</label>
					</div>
					<div class="thirteen columns">
						<input type="text" class="emp-input" id="emp_org_name_fr" name="org_name_fr">
					</div>
				</div>
				<div class="row">
					<div class="seven columns labels">
						<label for="dep_name_en">Department Name (En)</label>
					</div>
					<div class="thirteen columns">
						<input type="text" class="emp-input" id="emp_dep_name_en" name="dep_name_en">
					</div>
				</div>
				<div class="row">
					<div class="seven columns labels">
						<label for="org_name_en">Department Name (Fr)</label>
					</div>
					<div class="thirteen columns">	
						<input type="text" class="emp-input" id="emp_dep_name_fr" name="dep_name_fr">
					</div>	
				</div>
				<div class="row">
					<div class="seven columns labels">
						<label for="website_en">Website (En)</label>
					</div>
					<div class="thirteen columns">	
						<input type="text" class="emp-input" id="emp_website_en" name="website_en">
					</div>	
				</div>
				<div class="row">
					<div class="seven columns labels">
						<label for="website_fr">Website (Fr)</label>
					</div>
					<div class="thirteen columns">
						<input type="text" class="emp-input" id="emp_website_fr" name="website_fr">
					</div>	
				</div>
				<div class="row">
			        <div class="seven columns labels">
			        	<label for="pst_exempt">PST exempt</label>
			        </div>
			        <div class="thirteen columns">	
				        <div class="buttonset">
				            <input type='radio' name='pst_exempt' id='pst_exempt-yes' value='1'><label for='pst_exempt-yes'>Yes</label>
				            <input type='radio' name='pst_exempt' id='pst_exempt-no' checked='checked' value='0'><label for='pst_exempt-no'>No</label>
				        </div>
				    </div>    
			    </div>
			    <div class="row">
			       	<div class="seven columns labels">
			        	<label for="hst_exempt">PST exempt</label>
			        </div>
			        <div class="thirteen columns">
				        <div class="buttonset">
				            <input type='radio' name='hst_exempt' id='hst_exempt-yes' value='1'><label for='hst_exempt-yes'>Yes</label>
				            <input type='radio' name='hst_exempt' id='hst_exempt-no' checked='checked' value='0'><label for='hst_exempt-no'>No</label>
				        </div>
				    </div>    
			    </div>
			</form>
		</div>
		<div class='row' style="margin-bottom:2em">
		</div>
		<div class='row' style="padding:1em;border:solid #C7E3FF 1px;">
			<div class="emp-step" id="step-two">Step 2: Add Employer Contacts (Optional)</div>
			<div class="row" id="contact-details-container">
				<p><span id="new-form-show">Add a new contact</span> or select from a list of exising contacts below</p>
				<div class="row" id="contact-select">
					<select class="chzn-select" data-placeholder='contacts to be added' id='contacts' multiple>
						<option>lawl</option>
					</select>	
				</div>
			</div>
			<div class="row" id="new-form">
				<form id="contact_form" action="post">		
					<div class="row">
						<div class="seven columns labels">
							<label for="contact_first_name">First Name</label>
						</div>
						<div class="thirteen columns">
							<input type="text" class="contact-input" id="contact_first_name" name="first_name">
						</div>
					</div>
					<div class="row">
						<div class="seven columns labels">
							<label for="contact_last_name">Last Name</label>
						</div>
						<div class="thirteen columns">
							<input type="text" class="contact-input" id="contact_last_name" name="last_name">
						</div>
					</div>
					<div class="row">
						<div class="seven columns labels">
							<label for="contact_street">Main Address</label>
						</div>
						<div class="thirteen columns">
							<input type="text" class="contact-input" id="contact_street" name="street">
						</div>
					</div>
					<div class="row">
						<div class="seven columns labels">
							<label for="contact_street2">Alternate Address</label>
						</div>
						<div class="thirteen columns">	
							<input type="text" class="contact-input" id="contact_street2" name="street2">
						</div>	
					</div>
					<div class="row">
						<div class="seven columns labels">
							<label for="contact_postal_code">Postal Code</label>
						</div>
						<div class="thirteen columns">	
							<input type="text" class="contact-input" id="contact_postal_code" name="postal_code">
						</div>	
					</div>
					<div class="row">
						<div class="seven columns labels">
							<label for="contact_province">Province</label>
						</div>
						<div class="thirteen columns">
							<input type="text" class="contact-input" id="contact_province" name="province">
						</div>	
					</div>
					<div class="row">
						<div class="seven columns labels">
							<label for="contact_city">City</label>
						</div>
						<div class="thirteen columns">
							<input type="text" class="contact-input" id="contact_city" name="city">
						</div>	
					</div>
					<div class="row">
						<div class="seven columns labels">
							<label for="contact_country">Country</label>
						</div>
						<div class="thirteen columns">
							<input type="text" class="contact-input" id="contact_country" name="country">
						</div>	
					</div>
					<div class="row">
						<div class="seven columns labels">
							<label for="contact_phone">Phone Number</label>
						</div>
						<div class="thirteen columns">
							<input type="text" class="contact-input" id="contact_phone" name="phone">
						</div>	
					</div>
					<div class="row">
						<div class="seven columns labels">
							<label for="contact_extension">Extension</label>
						</div>
						<div class="thirteen columns">
							<input type="text" class="contact-input" id="contact_extension" name="extension">
						</div>	
					</div>
					<div class="row">
						<div class="seven columns labels">
							<label for="contact_email">Email Address</label>
						</div>
						<div class="thirteen columns">
							<input type="text" class="contact-input" id="contact_email" name="email">
						</div>	
					</div>
					<div class="row">
				       	<div class="seven columns labels" style="margin-bottom:2.05em">
				        	<label for="billing_contact">Contact Type</label>
				        </div>
				        <div class="thirteen columns">
					        <div class="buttonset">
					            <input type='radio' name='billing_contact' id='billing_contact-yes' value='1'><label for='billing_contact-yes'>Billing</label>
					            <input type='radio' name='billing_contact' id='billing_contact-no' checked='checked' value='0'><label for='billing_contact-no'>Direct</label>
					        </div>
					    </div>    
				    </div>
				    <div class="row text-center">
				    	<div class="fairs-button icon-left entypo icon-arrow-left metro medium primary btn" id="back-to-contact-main"><a>Back</a></div>
					    <div id="append-contact" class="metro primary fairs-button icon-left entypo icon-plus medium btn"><a>Add Contact</a></div>
					</div>									
				</form>
			</div>
			<div class="row" id="contact-table-container">	
				<div class="row" id="contact-table-title">Viewing All Direct Contacts</div>
				<div class="row" style="text-align:left;margin-bottom:1em">
					<div id="contact-form-hide" class="metro primary fairs-button icon-left entypo icon-arrow-left small btn"><a>Back To form</a></div>
					<div id="contact-form-hide" class="metro primary fairs-button icon-left entypo icon-arrows-ccw small btn"><a>toggle billing/direct contacts</a></div>
				</div>
				<table id="contact-table">
					<thead>
						<th scope="col">Contact Name</th>
						<th scope="col">Email</th>
						<th scope="col"></th>
					</thead>
					<tbody>
					</tbody>	
				</table>	
			</div>
		</div>	
	</div>	
</div>	
<div class="row" style="margin-top:2em">
	<div class="medium btn metro primary fairs-button icon-left entypo icon-check"><a>Add employer</a></div>
</div>	