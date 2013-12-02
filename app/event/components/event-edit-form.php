<div class="row">
    <h3 style="margin-bottom:2em" id="event-title"></h3>
    <div class="centered fourteen columns">
        <div class="row" style="padding:1em;border:solid #C7E3FF 1px;"> 
            <div class="event-step" id="edit-add-event-title">Event Details</div>
            <form id="event_edit_form" action="post">
                <div class="row">
                    <div class="seven columns labels">
                        <label for="event_name_en">Name (En)</label>
                    </div>
                    <div class="thirteen columns">
                        <input type="text" class="event-edit-input" id="edit_event_name_en" name="name_en">
                    </div>
                </div>
                <div class="row">
                    <div class="seven columns labels">
                        <label for="name_fr">Name (Fr)</label>
                    </div>
                    <div class="thirteen columns">
                        <input type="text" class="event-edit-input" id="edit_event_name_fr" name="name_fr">
                    </div>
                </div>
                <div class="row">
                    <div class="seven columns labels">
                        <label for="location_en">Location (En)</label>
                    </div>
                    <div class="thirteen columns">
                        <input type="text" class="event-edit-input" id="edit_event_location_en" name="location_en">
                    </div>
                </div>
                <div class="row">
                    <div class="seven columns labels">
                        <label for="location_fr">Location (Fr)</label>
                    </div>
                    <div class="thirteen columns">  
                        <input type="text" class="event-edit-input" id="edit_event_location_fr" name="location_fr">
                    </div>  
                </div>
                <div class="row">
                    <div class="seven columns labels">
                        <label for="start_date">Start Date(En)</label>
                    </div>
                    <div class="thirteen columns">
                        <input type="text" class="event-edit-input date-pickers" id="edit_event_start_date" name="start_date">
                    </div>
                </div>
                <div class="row">
                    <div class="seven columns labels">
                        <label for="end_date">End Date(En)</label>
                    </div>
                    <div class="thirteen columns">
                        <input type="text" class="event-edit-input date-pickers" id="edit_event_end_date" name="end_date">
                    </div>
                </div>                                
                <div class="row">
                    <div class="seven columns labels">
                        <label for="ev_link_en">Link (En)</label>
                    </div>
                    <div class="thirteen columns">  
                        <input type="text" class="event-edit-input" id="edit_event_ev_link_en" name="ev_link_en">
                    </div>  
                </div>
                <div class="row">
                    <div class="seven columns labels">
                        <label for="ev_location_fr">Link (Fr)</label>
                    </div>
                    <div class="thirteen columns">  
                        <input type="text" class="event-edit-input" id="edit_event_ev_location_fr" name="ev_link_fr">
                    </div>  
                </div>                  
                <div class="row">
                    <div class="seven columns labels">
                        <label for="ev_price">Price ($) </label>
                    </div>
                    <div class="thirteen columns">  
                        <input type="number" class="event-edit-input" id="edit_event_ev_price" name="ev_price">
                    </div>  
                </div>
                <div class="row">
                    <div class="seven columns labels">
                        <label for="capacity">Capacity</label>
                    </div>
                    <div class="thirteen columns">  
                        <input type="number" class="event-edit-input" id="edit_event_capacity" name="capacity">
                    </div>  
                </div>                     
                <div class="row">
                    <div class="seven columns labels">
                        <label for="description_en">Description (En)</label>
                    </div>
                    <div class="thirteen columns">  
                        <textarea class="event-edit-input editable" name="edescription_en" id="edit_description_en"></textarea>
                    </div>  
                </div>
                <div class="row">
                    <div class="seven columns labels">
                        <label for="description_fr">Description (Fr)</label>
                    </div>
                    <div class="thirteen columns">  
                        <textarea class="event-edit-input editable" name="description_fr" id="edit_description_fr"></textarea>
                    </div>  
                </div>            
            </form>

            <form id="event_new_services_form">
                <div class="row">
                        <div class="seven columns labels">
                            <label for="ev_description_fr">Services<div style='font-size:12px'>select all that apply</div></label>
                        </div>
                        <div class="thirteen columns" id='event-services'>  
                        </div>
                </div>
            </form>    
        </div>
    </div>  
</div>  
  