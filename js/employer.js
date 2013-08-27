$(document).ready(function(){
	//initialze buttonset, chosen
	$('.chzn-select').chosen();
	$('.buttonset').buttonset();
	//initalize employer table
	$('#employer-table').dataTable({
		"iDisplayLength": 15,
        "aaSorting": [[0, "asc"]],
        "aoColumnDefs": [{
            "bSortable": false,
            "aTargets": [3,4,5]
        }]
	});
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
	$('#edit-contact-details-container').hide();
	$('#edit-new-form').fadeIn();
});

$('#edit-back-to-contact-main').click(function(){
	$('#edit-new-form').hide();
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
	$('.emp-input').val('');
	$('.contact-input').val('');
	$('#employer-form').hide();
	$('#emp-edit-form').hide();
	$('.topmenu').fadeIn();
	$('#back-to-table').hide();
	$('#main-table').fadeIn();
});

//handler for when the user clcks back on the new contact form
$('#back-to-contact-main').click(function(){
	$('#new-form').hide();
	$('#contact-details-container').fadeIn();
});

//handler for when the user clicks the edit button
$('.view-edit').on('click', function(){
    $('.emp-edit-input').val('');
    $('#emp-edit-form radio').removeAttr('checked');
    $('.contact-list').empty();
    $.ajax({
        type: 'post',
        dataType: 'json',
        url: 'index.php?page=view-edit',
        data: 'id=' + $(this).attr('data-emp-id'),
        success: function(data){
        	//populate text input fields
        	$('.edit-emp-input').each(function(){
        		$('#edit_emp_' + $(this).attr('name')).val(data['emp_info'][0][$(this).attr('name')]);
        	});
        	
        	//set contact type buttons	
        	(data['emp_info'][0].pst_exempt == '1' ? $('#edit_pst_exempt-yes').attr('checked', 'checked') : $('#edit_pst_exempt-no').attr('checked', 'checked'));
        	(data['emp_info'][0].hst_exempt == '1' ? $('#edit_hst_exempt-yes').attr('checked', 'checked') : $('#edit_hst_exempt-no').attr('checked', 'checked'));
        	
        	//populate dir contact lists
			$('.chzn-select').empty();
			if(data['dir_contacts'].length > 0){
	        	$.each(data['dir_contacts'], function(){
	        		$('#dir-contacts-select').append("<option data-contact-id='"+this.id+"' selected>" +this.first_name + " " + this.last_name + "</option>");
	        	});
        	}
        	$.each(data['all_dir_contacts'], function(){
        		//if the contact option is not already appended
        		if($('#dir-contacts-select > option[data-contact-id="'+this.id+'"]').length === 0){
        			$('#dir-contacts-select').append("<option data-contact-id='"+this.id+"'>" +this.first_name + " " + this.last_name + "</option>");
        		}
	        });
        	//populate billing contact lists
        	if(data['bil_contacts'].length > 0){
	        	$.each(data['bil_contacts'], function(){
	        		$('#bil-contacts-select').append("<option data-contact-id='"+this.id+"' selected>" +this.first_name + " " + this.last_name + "</option>");
	        	});
        	}
        	$.each(data['all_bil_contacts'], function(){
		        if($('#bil-contacts-select > option[data-contact-id="'+this.id+'"]').length === 0){
	        		$('#bil-contacts-select').append("<option data-contact-id='"+this.id+"'>" +this.first_name + " " + this.last_name + "</option>");
	        	}		
        	});
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

//handler for when the user clicks add contact on the view edit form
$('#edit-append-contact').click(function(){
	if($('#edit_billing_contact-yes').attr('checked') == 'checked'){
		$('#bil-contacts-select').append("<option data-contact-id='"+this.id+"'>" +this.first_name + " " + this.last_name + "</option>");
	}
	else{

	}
	$('.chzn-select').chosen().trigger('liszt:updated');
});
