var count = function(target, counter) {
 var output = []
 for (var i = 1 ; i <= target/counter; i++) {
   output.push(counter * i);
 }
  return output;
};

$(document).ready(function() {
  $("form#calculator").submit(function(event) {
    $("#result").show();
    var target = $("input#target").val();
    var counter = $("input#counter").val();
    var resultList = count(target, counter);

    resultList = resultList.join(', ');

    $(".result_list").text(resultList);

    event.preventDefault();

  });


});
