$(document).ready(function () {
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
  var x = 1;
  $(".increment-item .form-control").attr("value", x);
  $(".increment-item .btn-increase").click(function () {
    var inputValue = $(".increment-item .form-control").attr("value");
    if (inputValue < 99) {
      $(".increment-item .form-control").attr("value", ++x);
    }
  });
  $(".increment-item .btn-decrease").click(function () {
    var inputValue = $(".increment-item .form-control").attr("value");
    if (inputValue > 0) {
      $(".increment-item .form-control").attr("value", --x);
    }
  });
});

// Chart
var options = {
  series: [
    {
      name: "Desktops",
      data: [10, 41, 35, 51, 49, 62, 69, 91, 148],
    },
  ],
  chart: {
    height: 250,
    type: "line",
    zoom: {
      enabled: false,
    },
    toolbar: {
      show: false,
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "straight",
  },

  grid: {
    row: {
      colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
      opacity: 0.5,
    },
  },
  xaxis: {
    categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"],
  },
};

var chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();
