<div class='row'>
    <div  class="page-title" data-title="<?= $page_title?>"><i class="icon-users"></i><?= $page_title ?></div>
    <div class="topmenu fairs-button icon-left entypo icon-calendar metro medium primary btn" id="add-event"><a>Create an Event</a></div>
    <div class="topmenu fairs-button icon-left entypo icon-arrow-left metro medium primary btn" id="back-to-table"><a>Back</a></div>
    <div class="success-message">Changes saved successfully.</div>
    <div class="error-message">There was a problem making the changes, please try again.</div>
</div>
</div>
<div class="content container">
    <div class='component row' id="main-table">
        <div class="twenty columns panel">
            <?php require "components/event-table.php" ?>
        </div>
    </div>
    <div class='component row' id="event-new-form">
        <div class="twenty columns panel">
            <?php require "components/event-new-form.php" ?>
        </div>
    </div>
    <div class='component row' id="event-edit-form">
        <div class="twenty columns panel">
            <?php require "components/event-edit-form.php" ?>
        </div>
    </div>
</div>    