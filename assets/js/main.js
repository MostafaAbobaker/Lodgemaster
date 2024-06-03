$(document).ready(function () {
  

  $("#AddOrder").click(function () {
    let SelectItem = $("#selectItem").val();
    let Count = $("#inputCount").val();
    $("#contentValue .badge-item").each(function (index) {
      if ($(this).children(".text").text() == SelectItem ){
        alert("This is Add " + SelectItem);
      } else {
        console.log(
          $(this).children(".text").text() + " - Nomber of: " + index + "<br/>"
        );
      }
      
    });
    $("#contentValue").append(`
    <span class="badge-item mx-2 mb-3">
    <span class="text">${SelectItem}</span>
    
    <span class="badge-number">${Count}</span>
    <span class="icon-exit ">
    <i class="fa-solid fa-xmark fa-fw"></i>
    </span>
    `);
      Count = $("#inputCount").val(1);
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
  $(".icon-toggle").click(function () {
    $(' .Dashboard-home').toggleClass("show-expand-aside ");
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
    $(this).toggleClass("active");
  });
  $(".group-button .btn-outline-master").click(function () {
    $(this).addClass("active").siblings().removeClass('active');
  });
  // $(".expand-aside").click(function () {
  //   $("aside.aside-bar").toggleClass("show-expand-aside");
  // });
  // $(".show-aside").click(function () {
  //   $("aside.aside-bar").toggleClass("show-aside");
  // });

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

  function readURL(input) {
    if (input.files && input.files[0]) {
      var reader = new FileReader();
      reader.onload = function (e) {
        $("#imagePreview").css(
          "background-image",
          "url(" + e.target.result + ")"
        );
        $("#imagePreview").hide();
        $("#imagePreview").fadeIn(650);
      };
      reader.readAsDataURL(input.files[0]);
    }
  }
  $("#imageUpload").change(function () {
    readURL(this);
  });
  $(".js-example-templating").select2({
    tags: true,
  });
  $('#AddOrderItem ').click(function() {
    let lectionRoom =  $('#exampleDataList .form-control').val();
    if(lectionRoom != "") {
      $('span.label-info').show().text(lectionRoom);
    $('#exampleDataList .form-control').slideUp();
    $(this).attr("disabled", true);
    $('.rest-info').attr("disabled", false);
    }
    
  });
  $('.rest-info ').click(function() {
    let labelInfo = $('span.label-info').text()
    $('span.label-info').slideUp();
    $('#exampleDataList .form-control').slideDown();
    $('#exampleDataList .form-control').val(labelInfo);
    $('#AddOrderItem ').attr("disabled", false);
    $(this).attr("disabled", true);
  });
  
});



/* Javascript */

document.addEventListener('DOMContentLoaded', function () {
  var collapses = document.querySelectorAll('#collapseGroup .collapse');
  collapses.forEach(function (collapse) {
      collapse.addEventListener('show.bs.collapse', function () {
          collapses.forEach(function (otherCollapse) {
              if (otherCollapse !== collapse) {
                  var bsCollapse = new bootstrap.Collapse(otherCollapse, {
                      toggle: false
                  });
                  bsCollapse.hide();
              }
          });
      });
  });
});