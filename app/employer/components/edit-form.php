<div class="row">
	<h3 style="margin-bottom:2em" id="employer-title"></h3>
	<div class="centered fourteen columns">
		<div class="row" style="padding:1em;border:solid #C7E3FF 1px;"  id="edit-employer-details">	
			<div class="emp-step" id="emp-edit-title">Employer Details</div>
			<form id="emp_edit_form">
				<div class="row">
						<input type="hidden" class="edit-emp-input" id="edit_emp_id" name="id">
				</div>
				<div class="row">
					<div class="seven columns labels">
						<label for="edit_emp_org_name_en">Organization Name (En)</label>
					</div>
					<div class="thirteen columns">
						<input type="text" class="edit-emp-input" id="edit_emp_org_name_en" name="org_name_en">
					</div>
				</div>
				<div class="row">
					<div class="seven columns labels">
						<label for="edit_org_name_fr">Organization Name (Fr)</label>
					</div>
					<div class="thirteen columns">
						<input type="text" class="edit-emp-input" id="edit_emp_org_name_fr" name="org_name_fr">
					</div>
				</div>
				<div class="row">
					<div class="seven columns labels">
						<label for="edit_dep_name_en">Department Name (En)</label>
					</div>
					<div class="thirteen columns">
						<input type="text" class="edit-emp-input" id="edit_emp_dep_name_en" name="dep_name_en">
					</div>
				</div>
				<div class="row">
					<div class="seven columns labels">
						<label for="edit_org_name_en">Department Name (Fr)</label>
					</div>
					<div class="thirteen columns">	
						<input type="text" class="edit-emp-input" id="edit_emp_dep_name_fr" name="dep_name_fr">
					</div>	
				</div>
				<div class="row">
					<div class="seven columns labels">
						<label for="edit_emp_website_en">Website (En)</label>
					</div>
					<div class="thirteen columns">	
						<input type="text" class="edit-emp-input" id="edit_emp_website_en" name="website_en">
					</div>	
				</div>
				<div class="row">
					<div class="seven columns labels">
						<label for="edit_emp_website_fr">Website (Fr)</label>
					</div>
					<div class="thirteen columns">
						<input type="text" class="edit-emp-input" id="edit_emp_website_fr" name="website_fr">
					</div>	
				</div>
				<div class="row">
			        <div class="seven columns labels">
			        	<label for="edit_emp_pst_exempt">PST exempt</label>
			        </div>
			        <div class="thirteen columns">	
				        <div class="buttonset">
				            <input type='radio' name='pst_exempt' id='edit_pst_exempt-yes' value='1'><label for='edit_pst_exempt-yes'>Yes</label>
				            <input type='radio' name='pst_exempt' id='edit_pst_exempt-no' checked='checked' value='0'><label for='edit_pst_exempt-no'>No</label>
				        </div>
				    </div>    
			    </div>
			    <div class="row">
			       	<div class="seven columns labels">
			        	<label for="edit_hst_exempt">PST exempt</label>
			        </div>
			        <div class="thirteen columns">
				        <div class="buttonset">
				            <input type='radio' name='hst_exempt' id='edit_hst_exempt-yes' value='1'><label for='edit_hst_exempt-yes'>Yes</label>
				            <input type='radio' name='hst_exempt' id='edit_hst_exempt-no' checked='checked' value='0'><label for='edit_hst_exempt-no'>No</label>
				        </div>
				    </div>    
			    </div>
			</form>
		</div>
		<div class='row' style="margin-bottom:2em">
		</div>
		<div class="row" id="edit-contact-details-container">
			<div class="row" style="margin-top:2em">
				<div class = "ten columns list-container">
					<div class="emp-step" id="dir-contacts-title">Direct Contacts</div>
					<ul id="direct-contacts-list" class="contacts-list">
					</ul>	
				</div>
				<div class= "ten columns list-container">
					<div class="emp-step" id="bil-contacts-title">Billing Contacts</div>
					<ul id="billing-contacts-list" class="contacts-list">
					</ul>	
				</div>
			</div>
		<div class="btn metro medium primary icon-left fairs-button entypo icon-user-add" id="edit-new-form-show" style="margin-top:1em"><a>Add a new contact</a></div>
		</div>
		<div class="row" id="edit-new-form" style="padding:1em;border:solid #C7E3FF 1px;">
			<div class="emp-step" id="edit-new-contact-title"></div>
			<div class='row' style="margin-bottom:2em">
			</div>
			<form id="edit_contact_form">		
				<div class="row">
						<input type="hidden" class='edit-contact-input' id="edit_contact_id" name="id">
				</div>
				<div class="row">
					<div class="seven columns labels">
						<label for="edit_contact_first_name">First Name</label>
					</div>
					<div class="thirteen columns">
						<input type="text" class="edit-contact-input" id="edit_contact_first_name" name="first_name">
					</div>
				</div>
				<div class="row">
					<div class="seven columns labels">
						<label for="edit_contact_last_name">Last Name</label>
					</div>
					<div class="thirteen columns">
						<input type="text" class="edit-contact-input" id="edit_contact_last_name" name="last_name">
					</div>
				</div>
				<div class="row">
					<div class="seven columns labels">
						<label for="edit_contact_street">Main Address</label>
					</div>
					<div class="thirteen columns">
						<input type="text" class="edit-contact-input" id="edit_contact_street" name="street">
					</div>
				</div>
				<div class="row">
					<div class="seven columns labels">
						<label for="edit_contact_street2">Alternate Address</label>
					</div>
					<div class="thirteen columns">	
						<input type="text" class="edit-contact-input" id="edit_contact_street2" name="street2">
				</div>
				<div class="row">
					<div class="seven columns labels">
						<label for="contact_postal_code">Postal Code</label>
					</div>
					<div class="thirteen columns">	
						<input type="text" class="edit-contact-input" id="edit_contact_postal_code" name="postal_code">
					</div>	
				</div>
				<div class="row">
					<div class="seven columns labels">
						<label for="edit_contact_province">Province</label>
					</div>
					<div class="thirteen columns">
						<input type="text" class="edit-contact-input" id="edit_contact_province" name="province">
					</div>	
				</div>
				<div class="row">
					<div class="seven columns labels">
						<label for="edit_contact_city">City</label>
					</div>
					<div class="thirteen columns">
						<input type="text" class="edit-contact-input" id="edit_contact_city" name="city">
					</div>	
				</div>
				<div class="row">
					<div class="seven columns labels">
						<label for="contact_country">Country</label>
					</div>
					<div class="thirteen columns">
						<input type="text" class="edit-contact-input" id="edit_contact_country" name="country">
					</div>	
				</div>
				<div class="row">
					<div class="seven columns labels">
						<label for="edit_contact_phone">Phone Number</label>
					</div>
					<div class="thirteen columns">
						<input type="text" class="edit-contact-input" id="edit_contact_phone" name="phone">
					</div>	
				</div>
				<div class="row">
					<div class="seven columns labels">
						<label for="contact_extension">Extension</label>
					</div>
					<div class="thirteen columns">
						<input type="text" class="edit-contact-input" id="edit_contact_extension" name="extension">
					</div>	
				</div>
				<div class="row">
					<div class="seven columns labels">
						<label for="edit_contact_email">Email Address</label>
					</div>
					<div class="thirteen columns">
						<input type="text" class="edit-contact-input" id="edit_contact_email" name="email">
					</div>	
				</div>
				<div class="row">
			       	<div class="seven columns labels" style="margin-bottom:2.05em">
			        	<label for="edit_billing_contact">Contact Type</label>
			        </div>
			        <div class="thirteen columns">
				        <div class="buttonset">
				            <input type='radio' name='billing_contact' id='edit_billing_contact-yes' value='1'><label for='edit_billing_contact-yes'>Billing</label>
				            <input type='radio' name='billing_contact' id='edit_billing_contact-no' checked='checked' value='0'><label for='edit_billing_contact-no'>Direct</label>
				        </div>
				    </div>    
			    </div>
			    <div class="row text-center">
			    	<div class="fairs-button icon-left entypo icon-arrow-left metro medium primary btn" id="edit-back-to-contact-main"><a>Back</a></div>
				    <div id="edit-append-contact" class="metro primary fairs-button icon-left entypo icon-plus medium btn"><a>Add Contact</a></div>
				</div>									
			</form>
		</div>
		<div class="row" id="edit-contact-table-container">	
		</div>
	</div>	
</div>	