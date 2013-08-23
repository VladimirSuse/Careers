<div class='row'>
    <div  class="page-title"><i class="icon-users"></i><?= $page_title ?></div>
    <div class="topmenu fairs-button icon-left entypo icon-user-add metro medium primary btn" id="add-employer"><a>Add an Employer</a></div>
    <div class="topmenu fairs-button icon-left entypo icon-arrow-left metro medium primary btn" id="back-to-table"><a>Back</a></div>
</div>
</div>
<div class="content container">
    <div class='row' id="main-table">
        <div class="twenty columns panel">
            <?php require "components/employer-table.php" ?>
        </div>
    </div>
    <div class='row' id="employer-form" style="display:none">
        <div class="twenty columns panel">
            <?php require "components/emp-form.php" ?>
        </div>
    </div>
    <div class='row' id="emp-edit-form" style="display:none">
        <div class="twenty columns panel">
            <?php require "components/edit-form.php" ?>
        </div>
    </div>
</div>    