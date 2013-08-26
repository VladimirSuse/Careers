$(document).ready(function(){
	//initialze buttonset, chosen, sortable
	$('.buttonset').buttonset();
	$('.chzn-select').chosen();
	$('.sortable').sortable({
		connectWith: '.sortable'
	});
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

//handler for when a user nevaigates awaay from an employer form field
$('.emp-input, .emp-edit-input').blur(function(){
	toggleInputStyle($(this));
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
        		toggleInputStyle($(this));
        	});
        	
        	//set contact type buttons	
        	(data['emp_info'][0].pst_exempt == '1' ? $('#edit_pst_exempt-yes').attr('checked', 'checked') : $('#edit_pst_exempt-no').attr('checked', 'checked'));
        	(data['emp_info'][0].hst_exempt == '1' ? $('#edit_hst_exempt-yes').attr('checked', 'checked') : $('#edit_hst_exempt-no').attr('checked', 'checked'));
        	
        	//populate direcct contact list
        	if(data['dir_contacts'].length > 0){
	        	$.each(data['dir_contacts'], function(){
	        		$('#direct-contact-list').append("<li class='ui-state-default' data-contact-id='"+ this.id + "''>" + this.first_name+" "+ this.last_name+"</li>");
	        	});
        	}
        	else{
				$('#direct-contact-list').append("no contacts found");
        	}
        	if(data['bil_contacts'].length > 0){
	        	$.each(data['bil_contacts'], function(){
	        		$('#billing-contact-list').append("<li class='ui-state-default' data-contact-id='"+ this.id + "''>" + this.first_name+" "+ this.last_name+"</li>");
	        	});
        	}
        	else{
        		$('#billing-contact-list').append("no contacts found");
        	}
        	$('#available-billing-contacts').autocomplete({
        		source: "available-billing-contacts"
        	});
        	//reiniialize jquery ui and fade in the proper divs
        	$('.buttonset').buttonset();
        	$('.sortable').sortable();
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
	$('.chzn-select').chosen();
    $('.chzn-select').trigger('liszt:updated');
    $('#back-to-contact-main').click();
});

//handler for when a user clicks add contact in the view-edit window
$('#edit-append-contact').click(function(){
	$('#edit-back-to-contact-main').click();	
	var item = "<li class='ui-state-default'>"+$('#edit_contact_first_name').val() +" "+ $('#edit_contact_last_name').val() + "</li>";
	if($('#edit_billing_contact-yes').attr('checked') == 'checked' ){
		$('#direct-contact-list').append(item).$('.sortable').sortable().show('slow');
	}
	else{
		$('#billing-contact-list').append(item).$('.sortable').sortable().show('slow');
	}
	$('.edit-contact-input').val('');Vla
});

function toggleInputStyle(elem){
	if(elem.val() == ""){
		elem.css('border','1px solid #CCC');
	}
	else{
		elem.css('border','none');
	}
}