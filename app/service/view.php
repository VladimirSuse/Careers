<div class="success-message" style='margin:auto'>Changes saved successfully.</div>
<div class='row'>
    <div  class="page-title"><i class="icon-suitcase"></i><?= $page_title?></div>
    <div class="topmenu fairs-button icon-left entypo icon-suitcase metro medium primary btn" id="add-service"><a>Add a Service</a></div>
    <div class="topmenu fairs-button icon-left entypo icon-arrow-left metro medium primary btn" id="back-to-table"><a>Back</a></div>
    <div class="error-message centered-row">There was a problem making the changes, please try again.</div>
</div>
</div>
<div class="content container">
    <div class='row' id="main-table">
        <div class="twenty columns panel">
            <?php require "components/service-table.php" ?>
        </div>
    </div>
    <div class='row' id="service-form" style="display:none">
        <div class="twenty columns panel">
            <?php  require "components/service-form.php" ?>
        </div>
    </div>
    <div class='row' id="service-edit-form" style="display:none">
        <div class="twenty columns panel">
            <?php require "components/service-edit-form.php" ?>
        </div>
    </div>
</div>    