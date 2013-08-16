<div class='row'>
    <h3><i class="icon-users" title=".icon-users"></i><?= $page_title ?></h3>
    <div class="topmenu icon-left entypo icon-arrows-ccw metro small primary btn" data-currview="main" id="table-switch-view"><a>Switch table view</a></div>
    <div class="topmenu icon-left entypo icon-user-add metro small primary btn" id="add-employer"><a>Add an Employer</a></div>
</div>
</div>
<div class="content container">
    <div class='row' id="main-table">
        <div class="twenty columns panel">
            <?php require "components/employer-table.php" ?>
        </div>
    </div>
    <div class='row' id="miniTable-details" style="display:none">
        <div class="seven columns panel">
            <?php require "components/mini-table.php" ?>
        </div>
        <div class="twelve columns panel">
        </div>
    </div>
</div>    