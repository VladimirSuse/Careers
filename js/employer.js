$(document).ready(function(){
    $('.navbar a:contains('+$('.page-title').attr('data-title')+')').css('background-color','#86B2D9');
    //initialze jquery ui and chosen
    $('.chzn-select').chosen();
	$('.buttonset').buttonset();
	//initalize employer table
	initEmployerTable();
	//initailize contact table 
	$('#edit-contacts-table').dataTable({
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
	$('.edit-contact-input').val('');
	$('#edit-new-contact-title').html('Add A Contact');
	$('#edit-contact-details-container').hide();
	$('#edit-new-form').fadeIn();
});

$('.edit-back-to-contact-main').click(function(){
	$('.edit-contact-input').val('');
	$('.contacts-container').hide();
    $('#edit-append-contact').fadeIn();
	$('#edit-contact-details-container').fadeIn();
});

//handler for when the user clicks add an existing contact
$('#edit-contact-table-show').click(function(){
	var tableBody = '';
    $('#edit-contact-details-container').hide();
    $('.loader').show();
    $.ajax({
		type: 'post',
		dataType: 'json',
		url: 'index.php?page=contact-list',
        data:'employer_id=' +$('#edit_emp_id').val(),
		success: function(data){
			$.each(data, function() {
        		tableBody += '<tr data-contact-id="'+this.id+'">' + 
                '<td>'+
                    '<p>' + this.first_name + ' ' + this.last_name + '</p>' +
                    '<div data-id="' + this.id + '" style="display:none">'+
                        '<p itemprop="' + this.street + '">' + this.street + '</p>'+
                        '<p itemprop="' + this.street2 + '">' + this.street2 + '</p>'+
                        '<p itemprop="' + this.postal_code + '">' + this.postal_code + '</p>'+
                        '<p itemprop="' + this.city + '">' + this.city + '</p>'+
                        '<p itemprop="' + this.province + '">' + this.province + '</p>'+
                        '<p itemprop="' + this.country + '">' + this.country + '</p>'+
                        '<p itemprop="' + this.phone + '">' + this.phone + '</p>'+
                    '</div>'+
                '</td>' +
                '<td>' + this.phone + (this.extension !== '0' ? ' ext: '+this.extension : '') + '</td>'+
                '<td>' + this.email +'</td>' +
                '<td>' + 
                    "Add as: <div style='margin-right:1em' data-type='billing' "+ "data-name='"+this.first_name+" " + this.last_name +"' data-id='"+this.id+"'"+" class='metro primary table-button add-existing-contact entypo small btn'><a>billing</a></div>" +
                    "<div data-type='direct' "+"data-name='"+this.first_name+" " + this.last_name + "' data-id='"+this.id+"'"+" class='metro primary table-button add-existing-contact entypo small btn'><a>direct</a></div>" +
                '<td>' + 
              '</tr>';
            });  
            console.log(tableBody);
			$('.loader').hide();
            $("#edit-contacts-table tbody").html(tableBody);
            $("#edit-contacts-table").dataTable().fnDraw();
			$('#results-container').fadeIn();
            $('#edit-contacts-table-container').fadeIn();
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
		$('.component').hide();;
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
        	//populate all form data
        	populateEditForm(data);
        	//reiniialize jquery ui and fade in the proper divs, resize windows
            $('.buttonset').buttonset();
  	      	$('.chzn-select').chosen().trigger('liszt:updated');
  	      	$('.topmenu').hide();
			$('.component').hide();
			$('#emp-edit-form').fadeIn();
			$('#back-to-table').fadeIn();
        }
    });
});

//handler for when the user clciks the view button for a contact
$(document).on('click','.view-edit-contact', function(){
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
        	(type === 'billing' ? $('#edit_billing_contact-yes').prop('checked', true) : $('#edit_billing_contact-no').prop('checked', true));
        	$('#edit-new-contact-title').html(data[0].first_name + " " + data[0].last_name).css('float','center');
        	$('.buttonset').buttonset();
            $('#edit-append-contact').hide();
        	$('#edit-contact-details-container').hide();
            $('#edit-new-form').fadeIn();
		}
	});
});

//handler for clicking add new contact
$('#edit-append-contact').click(function(){
	var type = ($('#edit_billing_contact-yes').prop('checked') ? 'billing' : 'direct');
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
	if(true){
		$.ajax({
			type: 'post',
			dataType:'json',
			url: 'index.php?page=add-contact-new',
			data: $('#edit_contact_form').serialize() + "&employer_id=" + $('#edit_emp_id').val() + '&type=' + type,
			success: function(data){
                updateContactList(data, type);
                showMessage('Contact saved successfully.');
			}
		});
	}
});

//handler for clicking billing or direct on existing contact table
$(document).on('click', '.add-existing-contact', function(){
    var type = $(this).attr('data-type');
    var confirmAdd = confirm('Do you wish to add '+$(this).attr('data-name')+' as a ' + type + ' contact?');
    if(confirm){
        $.ajax({
            type:'post',
            dataType: 'json',
            url: 'index.php?page=add-contact-existing',
            data: 'employer_id='+ $('#edit_emp_id').val() +'&contact_id=' + $(this).attr('data-id')  + '&type=' + type,
            success: function(data){
                updateContactList(data, type);
                showMessage('Contact saved successfully.');
                $('#back-to-contact-main').click();
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
		if($(this).attr('id').indexOf('edit') >= 0){
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

//handler for when the user clicks add employer on the new employer form
$('#confirm-add-emp').click(function(){
	$.ajax({
		type: 'post',
		dataType: 'json',
		url: 'index.php?page=add-employer',
		data: $('#emp_form').serialize(),
		success: function(data){
			var returnedField = data;
			if(!isNaN(data['emp_info'][0].id)){
				showMessage('Employer added successfully.');
				setTimeout(function(){
					    //send user straight to edit form, clear all fields
					    $('.emp-edit-input').val('');
   						$('#emp-edit-form radio').removeAttr('checked');
    					$('.contacts-list').empty();
    					//force a refresh of table upon hitting back on the edit form
    					$('#edit_emp_id').attr('data-edited', 1);
    					populateEditForm(returnedField);
    					$('.component').hide()
    					$('#emp-edit-form').fadeIn();
				},1500);
			}
		}
	})
});

//handler for when the user clicks remove contact on the employer edit form
$(document).on('click', '.remove-contacts', function(){
	var id = $(this).attr('data-contact-id');
	var confirmDelete = confirm("Are you sure you want to unassign this contact?");
	if(confirmDelete){
		$.ajax({
			type:'post',
			url: 'index.php?page=remove-contact',
			data: 'id=' + id + '&type=' + $(this).attr('data-type'),
			success: function(data){
				if(data){
					$('div[data-contact-id="'+id+'"]').parent().remove();
					           
				}
			}
		});
	}
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

function populateEditForm(data){
	//populate text input fields
	$('.edit-emp-input').each(function(){
		$('#edit_emp_' + $(this).attr('name')).val(data['emp_info'][0][$(this).attr('name')]);
		$('#edit_emp_' + $(this).attr('name')).attr('data-current-value',data['emp_info'][0][$(this).attr('name')]);
	});
	
	//set contact type buttons	
	(data['emp_info'][0].pst_exempt == '1' ? $('#edit_pst_exempt-yes').prop('checked', true) : $('#edit_pst_exempt-no').prop('checked', true));
	(data['emp_info'][0].hst_exempt == '1' ? $('#edit_hst_exempt-yes').prop('checked', true) : $('#edit_hst_exempt-no').prop('checked', true));
	
	//populate dir contact lists
	$('.chzn-select').empty();
	if(data['dir_contacts'].length > 0){
    	$.each(data['dir_contacts'], function(){
    		$('#direct-contacts-list').append("<li class='contact-card'><div data-contact-id='"+this.id+"' >" +this.first_name + " " + this.last_name + "</div>"+ "<div>" + this.phone + "</div>" + "<div>" + this.email + "</div>" +
    		"<div data-type='direct' data-contact-id='"+this.id+"' class='view-edit-contact'>View </div><span id='divider'>|</span><div data-type='direct' data-contact-id='"+this.id+"' class='remove-contacts'>Delete</div>"+"</li>");
    	});
	}
	//populate billing contact lists
	if(data['bil_contacts'].length > 0){
    	$.each(data['bil_contacts'], function(){
    		$('#billing-contacts-list').append("<li class='contact-card'><div data-contact-id='"+this.id+"' >" +this.first_name + " " + this.last_name + "</div>"+ "<div>" + this.phone + "</div>" + "<div>" + this.email + "</div>" +
    		"<div data-type='billing' data-contact-id='"+this.id+"' class='view-edit-contact'>View </div><span id='divider'>|</span><div data-type='billing' data-contact-id='"+this.id+"' class='remove-contacts'>Delete</div>"+"</li>");
    	});
	}
	$('#employer-title').html(data['emp_info'][0].org_name_en);
}

function updateContactList(data, type){
    $('#'+type+'-contacts-list').empty();
    //create new list of contacts
    $.each(data, function(){
        $('#'+type+'-contacts-list').append("<li class='contact-card'><div data-contact-id='"+this.id+"' >" +this.first_name + " " + this.last_name + "</div>"+ "<div>" + this.phone + "</div>" + "<div>" + this.email + "</div>" +
            "<div data-type='"+type+"' data-contact-id='"+this.id+"' class='view-edit-contact'>View </div><span id='divider'>|</span><div data-type='"+type+"' data-contact-id='"+this.id+"' class='remove-contacts'>Delete</div>"+"</li>");
    });
}    