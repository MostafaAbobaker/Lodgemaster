$(document).ready(function () {
  $("#AddOrder").click(function () {
    var SelectItem = $("#selectItem").val();
    var Count = $("#inputCount").val();
    $("#contentValue").append(`
    <span class="badge-item mx-2 mb-3">
    ${SelectItem}
    <span class="badge-number">${Count}</span>
    <span class="icon-exit ">
    <i class="fa-solid fa-xmark fa-fw"></i>
    </span>
    `);
    var Count = $("#inputCount").val(1);
  });
  $(".icon-exit").click(function () {
    $(this).parents(".badge-item").remove();
  });
  $("#demo .step-content .step-tab-panel button").click(function () {
    $(this)
      .parents(".step-tab-panel")
      .next()
      .addClass("active")
      .siblings()
      .removeClass("active");
    $("#demo .step-steps li.active").next().addClass("active");
  });
  $("aside.aside-bar ul li").click(function () {
    $(this).addClass("active").siblings().removeClass("active");
  });
  if ($("table.table").hasClass("table-responsive-scroll")) {
    $(".scroll-table").addClass("active");
  }
  if ($("table.table").hasClass("table-responsive")) {
    $(".list-table").addClass("active");
  }
  $(".list-table").click(function () {
    if ($("table.table").hasClass("table-responsive-scroll")) {
      $("table.table")
        .addClass("table-responsive")
        .removeClass("table-responsive-scroll");
      $(this).addClass("active").siblings().removeClass("active");
    }
  });
  $(".scroll-table").click(function () {
    if ($("table.table").hasClass("table-responsive")) {
      $("table.table")
        .addClass("table-responsive-scroll")
        .removeClass("table-responsive ");
      $(this).addClass("active").siblings().removeClass("active");
    }
  });
  $(".group-button-toggle .btn-toggle").click(function () {
    $(this).addClass("active").siblings().removeClass("active");
  });
  $(".expand-aside").click(function () {
    $("aside.aside-bar").toggleClass("show-expand-aside");
  });
  $(".show-aside").click(function () {
    $("aside.aside-bar").toggleClass("show-aside");
  });

  $("#incrementButton").click(function () {
    if ($("#inputCount").val() < 99) {
      $("#inputCount").val(parseInt($("#inputCount").val()) + 1);
    }
  });
  $("#decrementButton").click(function () {
    if ($("#inputCount").val() > 1) {
      $("#inputCount").val(parseInt($("#inputCount").val()) - 1);
    }
  });
});
