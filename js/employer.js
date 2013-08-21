$(document).ready(function(){
	//initialze buttonset
	$('.buttonset').buttonset();
	$('.chzn-select').chosen();
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

	$('#employer-table-abridged').dataTable({
		"iDisplayLength": 15,
        "aaSorting": [[0, "asc"]],
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

//handler for when the user clicks "view list of existting contacts"
$('#contact-table-show').click(function(){
		$('#new-form').hide();
		$('#anc-title').hide();
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

//handler for when the user clicks the edit button
$('.view-edit').on('click', function(){
    $('.emp-edit-input').val('');
    $('#emp-edit-form radio').removeAttr('checked');
    $.ajax({
        type: 'post',
        dataType: 'json',
        url: 'index.php?page=view-edit',
        data: 'id=' + $(this).attr('data-emp-id'),
        success: function(data){
        	$('#edit_emp_id').val(data['emp_info'][0].id);
        	$('#edit_emp_org_name_en').val(data['emp_info'][0].org_name_en);
        	$('#edit_emp_org_name_fr').val(data['emp_info'][0].org_name_fr);
        	$('#edit_emp_dep_name_en').val(data['emp_info'][0].dep_name_en);
        	$('#edit_emp_dep_name_fr').val(data['emp_info'][0].dep_name_fr);
        	$('#edit_emp_website_en').val(data['emp_info'][0].website_en);
        	$('#edit_emp_website_fr').val(data['emp_info'][0].website_fr);
        	(data['emp_info'][0].pst_exempt == '1' ? $('#edit_pst_exempt-yes').attr('checked', 'checked') : $('#edit_pst_exempt-no').attr('checked', 'checked'));
        	(data['emp_info'][0].hst_exempt == '1' ? $('#edit_hst_exempt-yes').attr('checked', 'checked') : $('#edit_hst_exempt-no').attr('checked', 'checked'));
        	$('.buttonset').buttonset();
      	    $('.emp-edit-input').each(function(i){
				toggleInputStyle($(this));
			});
  	      	$('#emp-edit-title').html('Viewing ' + data['emp_info'][0].org_name_en);
  	      	$('.topmenu').hide();
			$('#main-table').hide();
			$('#emp-edit-form').fadeIn();
			$('#back-to-table').fadeIn();
        }
    });
});

function toggleInputStyle(elem){
	if(elem.val() == ""){
		elem.css('border','1px solid #CCC');
	}
	else{
		elem.css('border','none');
	}
}