$(document).ready(function(){
	//initialze buttonset, chosen
	$('.chzn-select').chosen();
	$('.buttonset').buttonset();
	//initalize employer table
	initEmployerTable();
	//initailize contact table 
	$('#contact-table').dataTable({
		"iDisplayLength": 10,
        "aaSorting": [[0, "asc"]],
        "aoColumnDefs": [{
            "bSortable": false,
            "aTargets": [1,2]
        }]
	});
	$('.loader').hide();
	$('#emp-table-container').fadeIn();
});

//handler for clicking add employer
$('#add-employer').click(function(){
	$('.topmenu').hide();
	$('#main-table').hide();
	$('#employer-form').fadeIn();
	$('#back-to-table').fadeIn();
});


$('#new-form-show').click(function(){
	$('#cd-title').hide();
	$('#contact-details-container').hide();
	$('#new-form').fadeIn();
	$('#anc-title').css('display','inline-block').fadeIn();
});	

$('#edit-new-form-show').click(function(){
	$('.edit-contact-input').val("");
	$('#edit-new-contact-title').html('Add A Contact');
	$('#edit-contact-details-container').hide();
	$('#edit-new-form').fadeIn();
});

$('#edit-back-to-contact-main').click(function(){
	$('#edit-new-form').hide();
    $('#edit-append-contact').fadeIn();
	$('#edit-contact-details-container').fadeIn();
});

//handler for when the user clicks "view list of existting contacts"
$('#contact-table-show').click(function(){
	$('#contact-details-container').hide();
	$('#contact-form-loader').show();
	$.ajax({
		type: "post",
		dataType: "json",
		url: "index.php?page=contact-list",
		success: function(data){
			$.each(data['dir_contacts'], function() {
        		$("#contact-table").dataTable().fnAddData([
            		'<p>' + this.first_name + ' ' + this.last_name +
            		'<div data-id="' + this.id + '" style="display:none">'+
                		'<p itemprop="' + this.street + '">' + this.street + '</p>'+
                		'<p itemprop="' + this.street2 + '">' + this.street2 + '</p>'+
                		'<p itemprop="' + this.postal_code + '">' + this.postal_code + '</p>'+
                		'<p itemprop="' + this.city + '">' + this.city + '</p>'+
                		'<p itemprop="' + this.province + '">' + this.province + '</p>'+
                		'<p itemprop="' + this.country + '">' + this.country + '</p>'+
                		'<p itemprop="' + this.phone + '">' + this.phone + '</p>'+
            		'</div>',
            		this.email,
            		"<div "+"id='"+this.id+"'"+" class='metro primary fairs-button icon-left entypo icon-plus small btn'><a>add</a></div>"
        		]);
        		$('tr:has(div[data-id="' + this.id + '"])').attr('data_contact_id', this.id);   
    		});
			$('#contact-form-loader').hide();
			$('#contact-table-container').fadeIn();
			$('#toc-title').css('display','inline-block').fadeIn();
		}
	});
});

//handler for something
$('#back-to-table').click(function(){
	if($('#edit_emp_id').attr('data-edited') == 1){
		location.href = "index.php";
	}
	else{
		$('.emp-input').val('');
		$('.contact-input').val('');
		$('#employer-form').hide();
		$('#emp-edit-form').hide();
		$('.topmenu').fadeIn();
		$('#back-to-table').hide();
		$('#main-table').fadeIn();
	}
});

//handler for when the user clcks back on the new contact form
$('#back-to-contact-main').click(function(){
	$('#new-form').hide();
	$('#contact-details-container').fadeIn();
});

//handler for when the user clicks the edit button
$(document).on('click', '.view-edit', function(){
    $('.emp-edit-input').val('');
    $('#emp-edit-form radio').removeAttr('checked');
    $('.contacts-list').empty();
    $.ajax({
        type: 'post',
        dataType: 'json',
        url: 'index.php?page=view-edit',
        data: 'id=' + $(this).attr('data-emp-id'),
        success: function(data){
        	//populate text input fields
        	$('.edit-emp-input').each(function(){
        		$('#edit_emp_' + $(this).attr('name')).val(data['emp_info'][0][$(this).attr('name')]);
        		$('#edit_emp_' + $(this).attr('name')).attr('data-current-value',data['emp_info'][0][$(this).attr('name')]);
        	});
        	
        	//set contact type buttons	
        	(data['emp_info'][0].pst_exempt == '1' ? $('#edit_pst_exempt-yes').attr('checked', 'checked') : $('#edit_pst_exempt-no').attr('checked', 'checked'));
        	(data['emp_info'][0].hst_exempt == '1' ? $('#edit_hst_exempt-yes').attr('checked', 'checked') : $('#edit_hst_exempt-no').attr('checked', 'checked'));
        	
        	//populate dir contact lists
			$('.chzn-select').empty();
			if(data['dir_contacts'].length > 0){
	        	$.each(data['dir_contacts'], function(){
	        		$('#direct-contacts-list').append("<li><span data-contact-id='"+this.id+"' >" +this.first_name + " " + this.last_name + "</span>"+
	        		"<div data-type='direct' data-contact-id='"+this.id+"' class='view-edit-contact'><i class='icon-eye' title='view details'></i></div><div data-type='billing' data-contact-id='"+this.id+"' class='remove-contacts'><i class='icon-cancel remove-contact' title='unassign contact'></i></div>"+"</li>");
	        	});
        	}
        	//populate billing contact lists
        	if(data['bil_contacts'].length > 0){
	        	$.each(data['bil_contacts'], function(){
	        		$('#billing-contacts-list').append("<li><span data-contact-id='"+this.id+"' >" +this.first_name + " " + this.last_name + "</span>"+
	        		"<div data-type='billing' data-contact-id='"+this.id+"' class='view-edit-contact'><i class='icon-eye' title='view details'></i></div><div data-type='billing' data-contact-id='"+this.id+"' class='remove-contacts'><i class='icon-cancel remove-contact' title='unassign contact'></i></div>"+"</li>");
	        	});
        	}
        	//reiniialize jquery ui and fade in the proper divs
        	$('.buttonset').buttonset();
  	      	$('.chzn-select').chosen().trigger('liszt:updated');
  	      	$('#employer-title').html('Viewing ' + data['emp_info'][0].org_name_en);
  	      	$('.topmenu').hide();
			$('#main-table').hide();
			$('#emp-edit-form').fadeIn();
			$('#back-to-table').fadeIn();
        }
    });
});

//handler for when the user clciks the view button for a contact
$('.view-edit-contact').live('click', function(){
	var type = $(this).attr('data-type');
	$.ajax({
		type: 'post',
		dataType: 'json',
		url: 'index.php?page=view-edit-contact&type=' + type,
		data: 'id=' + $(this).attr('data-contact-id'),
		success: function(data){
			//populate text input fields
        	$('.edit-contact-input').each(function(){
        		$('#edit_contact_' + $(this).attr('name')).val(data[0][$(this).attr('name')]);
        		$('#edit_contact_' + $(this).attr('name')).attr('data-current-value',data[0][$(this).attr('name')]);
        	});
        	(type == 'billing' ? $('#edit_billing_contact-yes').attr('checked', 'checked') : $('#edit_billing_contact-no').attr('checked', 'checked'));
        	$('#edit-new-contact-title').html('Viewing ' + data[0].first_name + " " + data[0].last_name).css('float','center');
        	$('#edit-append-contact').hide();
        	$('#edit-contact-details-container').hide();
        	$('#edit-new-form').fadeIn();
		}
	});
});

//handled for clicking add new contact
$('#edit-append-contact').click(function(){
	var valid = true;
	$('.edit-contact-input').each(function(){
		if($(this).attr('name') != "street2" && $(this).val() == ""){
			$(this).css('outline-color', 'red');
			valid = false;
		}
		else{
			$(this).css('outline-color', '#A3A3A3');
		}
	});
	if(valid){
		$.ajax({
			type: 'post',
			url: 'index.php?page=add-contact-new',
			data: $('#edit-new-form').serialize() + "&employer_id=" + $('#edit_emp_id').val(),
			success: function(data){

			}
		});
	}
});

//handler for buttonset toggling
$('.buttonset input').click(function(){
	 if($(this).attr('name') == 'billing_contact'){
		// $.ajax({
		// 	type:'post',
		// 	url:'index.php?page=swap-contact-type',
		// 	data: + '' + '&career_employer_id' + $('#edit_emp_id').val(),
		// 	success: function(){
		// 		$('#edit_emp_id').attr('data-edited', 1);
		// 		showMessage('Employer changes saved successfully.');
		// 	}
		// });
	}
	else{
		$.ajax({
			type:'post',
			dataType: 'json',
			url: 'index.php?page=edit-employer-details',
			data: 'id=' + $('#edit_emp_id').val() + "&" + $(this).attr('name') + "=" +$(this).attr('value'),
			success:function(){
				$('#edit_emp_id').attr('data-edited', 1);
				showMessage('Employer changes saved successfully.');
			}
		});
	}
}); 

//handler for when the user edits a contact field
$('.edit-contact-input').blur(function(){
	var elem = $(this);
	if($('#edit_contact_id').val() != "" && elem.val() != elem.attr('data-current-value')){
		elem.attr('data-current-value', elem.val());
		$.ajax({
			type:'post',
			url:'index.php?page=edit-contact-details',
			data:'id=' + $('#edit_contact_id').val() + "&" + elem.attr('name') + "=" + elem.val(),
			success: function(data){
				if(data > 0){
					//if the input field is first name or last name
					if(elem.attr('id').indexOf('name') != -1){
						$('span[data-contact-id="'+$('#edit_contact_id').val()+'"]').html($('#edit_contact_first_name').val()+ ' ' +$('#edit_contact_last_name').val());
					}
					showMessage('Contact changes saved successfully.');
				}
			}
		});
	}
});

//handler for when the user edits an field
$('.edit-emp-input').blur(function(){
	if($(this).val() != $(this).attr('data-current-value') ){
		$(this).attr('data-current-value', $(this).val());
		$.ajax({
			type:'post',
			url:'index.php?page=edit-employer-details',
			data:'id=' + $('#edit_emp_id').val() + "&" + $(this).attr('name') + "=" + $(this).val(),
			success: function(data){
					$('#edit_emp_id').attr('data-edited', 1);
					showMessage('Employer changes saved successfully.');
			}
		});
	}
});

//handler for when the user clicks add contact on the new contact form
$('#append-contact').click(function(){
	var option = "<option ";
	$('.contact-input').each(function(i){
		option += "data-" + $(this).attr('name') + "='" + $(this).val() +"' ";
	});
	($('#billing_contact-yes').attr('checked') == 'checked' ? option+= "data-conact-type='1' " :  option+= "data-contact-type='0' ");
	option+= "selected>" + $('#contact_first_name').val() +" "+ $('#contact_last_name').val() + "</option>";
	$('#contacts').append(option);
	$('.chzn-select').chosen().trigger('liszt:updated');
    $('#back-to-contact-main').click();
});

//handler for when the user clicks add employer on the new employer form
$('#confirm-add-emp').click(function(){
	//build a list of contacts string
	var contacts = "";
	$('.chzn-select > option:selected').each(function(){
		for(var i = 0; i < $(this)[0].attributes.length; i++){
			if($(this)[0].attributes[i].specified && $(this)[0].attributes[i].name != 'id' && $(this)[0].attributes[i].name != 'value'){
				contacts += ($(this)[0].attributes[i].value + ',') ;
			}
		}
		contacts = contacts.substring(0, contacts.length -1);
		contacts+=":";
	});
	contacts = contacts.substring(0, contacts.length -1);
	$.ajax({
		type: 'post',
		dataType: 'json',
		url: 'index.php?page=add-employer',
		data: $('#emp_form').serialize() + '&contacts=' + contacts,
		success: function(data){
		}
	})
});

function showMessage(message) {
    $('.success-message').text(message);
    $('.success-message').animate({top: '8px', opacity: '1.0'}, 300, 'easeOutCubic').delay(1000).animate({top: '-35px', opacity: '0.0'}, 300, 'easeOutCubic');
}

function initEmployerTable(){
	$('#employer-table').dataTable({
		"iDisplayLength": 15,
        "aaSorting": [[0, "asc"]],
        "aoColumnDefs": [{
            "bSortable": false,
            "aTargets": [3,4,5]
        }]
	});
}