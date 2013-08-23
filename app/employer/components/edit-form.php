<div class="row">
	<h3 style="margin-bottom:2em" id="emp-edit-title"></h3>
	<div class="centered fourteen columns">
		<div class="row" style="padding:1em;border:solid #C7E3FF 1px;">	
			<div class="section-title">Employer Details</div>
			<form id="emp_edit_form" action="post">
				<div class="row">
					<div class="ten columns">
						<input type="hidden" class="emp-edit-input" id="edit_emp_id" name="id">
					</div>
				</div>
				<div class="row">
					<div class="ten columns labels">
						<label for="emp_org_name_en">Organization Name (En)</label>
					</div>
					<div class="ten columns">
						<input type="text" class="emp-edit-input" id="edit_emp_org_name_en" name="org_name_en">
					</div>
				</div>
				<div class="row">
					<div class="ten columns labels">
						<label for="org_name_fr">Organization Name (Fr)</label>
					</div>
					<div class="ten columns">
						<input type="text" class="emp-edit-input" id="edit_emp_org_name_fr" name="org_name_fr">
					</div>
				</div>
				<div class="row">
					<div class="ten columns labels">
						<label for="dep_name_en">Department Name (En)</label>
					</div>
					<div class="ten columns">
						<input type="text" class="emp-edit-input" id="edit_emp_dep_name_en" name="dep_name_en">
					</div>
				</div>
				<div class="row">
					<div class="ten columns labels">
						<label for="org_name_en">Department Name (Fr)</label>
					</div>
					<div class="ten columns">	
						<input type="text" class="emp-edit-input" id="edit_emp_dep_name_fr" name="dep_name_fr">
					</div>	
				</div>
				<div class="row">
					<div class="ten columns labels">
						<label for="website_en">Website (En)</label>
					</div>
					<div class="ten columns">	
						<input type="text" class="emp-edit-input" id="edit_emp_website_en" name="website_en">
					</div>	
				</div>
				<div class="row">
					<div class="ten columns labels">
						<label for="website_fr">Website (Fr)</label>
					</div>
					<div class="ten columns">
						<input type="text" class="emp-edit-input" id="edit_emp_website_fr" name="website_fr">
					</div>	
				</div>
				<div class="row">
			        <div class="ten columns labels">
			        	<label for="pst_exempt">PST exempt</label>
			        </div>
			        <div class="ten columns">	
				        <div class="buttonset">
				            <input type='radio' name='pst_exempt' id='edit_pst_exempt-yes' value='1'><label for='edit_pst_exempt-yes'>Yes</label>
				            <input type='radio' name='pst_exempt' id='edit_pst_exempt-no' checked='checked' value='0'><label for='edit_pst_exempt-no'>No</label>
				        </div>
				    </div>    
			    </div>
			    <div class="row">
			       	<div class="ten columns labels">
			        	<label for="hst_exempt">HST exempt</label>
			        </div>
			        <div class="ten columns">
				        <div class="buttonset">
				            <input type='radio' name='hst_exempt' id='edit_hst_exempt-yes' value='1'><label for='edit_hst_exempt-yes'>Yes</label>
				            <input type='radio' name='hst_exempt' id='edit_hst_exempt-no' checked='checked' value='0'><label for='edit_hst_exempt-no'>No</label>
				        </div>
				    </div>    
			    </div>
			</form>
		</div>
	</div>
</div>	
<div class="row" style="margin-top:2em">
	<div id="commit-changes" class="medium btn metro primary fairs-button icon-left entypo icon-check"><a>Commit Changes</a></div>
</div>	