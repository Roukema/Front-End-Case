jQuery(window).load(function () {
  jQuery(".flexslider").flexslider({
    animation: "slide",
  });
});
$ = jQuery;

var mafs = $("#my-ajax-filter-search");
var mafsForm = mafs.find("form");

mafsForm.change(function (e) {
  e.preventDefault();

  selected = e.target.value;
  if (selected.length !== 0) {
    var filteredData = staticdata.filter(function (employee) {
      return employee.department == selected;
    });
  } else {
    var filteredData = staticdata;
  }
  // var data = {
  //   action: "my_ajax_filter_search",
  //   // department: member_department,
  //   genre: genre,
  // };
  // // console.log(" data in script", data);

  var image = my_data.template_directory_uri + "/images";
  function printDataToDom(response) {
    mafs.find("ul").empty();
    console.log("responseeee", response);
    if (response) {
      for (var i = 0; i < response.length; i++) {
        var html =
          "<li class='employee-box' id='member-" + response[i].id + "'>";
        html +=
          "      <img class='employee-box-image' src='" +
          image +
          response[i].member_image +
          "' alt='profielfoto' />";
        html += "          <h3> " + response[i].name_of_member + "</h3>";
        html += "          <p> " + response[i].member_description + "</p>";
        html +=
          "           <a href=" +
          response[i].member_linkedin +
          "/>" +
          "      <img id='liLogo' src='" +
          image +
          "/linkedin.png" +
          "' alt='linkedin' />" +
          "</a>";
        html += "</li>";
        mafs.find("ul").append(html);
      }
    } else {
      var html =
        "<li class='no-result'>No matching members found. Try a different filter or search keyword</li>";
      mafs.find("ul").append(html);
    }
  }
  printDataToDom(filteredData);
});

window.addEventListener("DOMContentLoaded", (event) => {
  $(function () {
    $("input:radio:first").change();
  });
});
