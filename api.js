var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  
  fetch("https://www.balldontlie.io/api/v1/players", requestOptions)
    .then(response => response.json())
    .then(result => {
      $(document).ready(function(){

        //To add datas in table

        for(var i=0; i<result.data.length; i++){

          $(".data").append(`<tr>
                              <td>${result.data[i].id}</td>
                              <td>${result.data[i].first_name}</td>
                              <td>${result.data[i].team.division}</td>
                              <td>${result.data[i].team.full_name}</td>
                              </tr>`)
        }

        //To add team name in dropdown box

        let teams=result.data.map(function(user){
          return user.team.full_name
        });


        let teamlist = Array.from(new Set(teams));
        for(var i=0; i<teamlist.length;i++){
          $(".teams").append(`<option value="${teamlist[i]}">${teamlist[i]}</option>`);
        }

        //To display team selected from dropdownbox

        $(".teams").on("change", function() {
          let dropDown = $(this).val().toLowerCase();
          $(".data tr").filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(dropDown) > -1)
          });
        });
        
        //To display data according to search box

      })
      $(".search").on("keyup", function() {
        let value = $(this).val().toLowerCase();
        $(".data tr").filter(function() {
          $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
      });

      //To sort data by id

      $("#id").each(function(coloumn){
        $("#id").data("type",$("#id").attr("class"));
        $(".sortId").click(function(){
          var type = $("#id").data("type");
          var records = $("table").find("tbody>tr");
          records.sort(function(a,b){
            var value1 = $(a).children("td").eq(0).text();
            var value2 = $(b).children("td").eq(0).text();

            if(type == "num"){
              value1 *= value1;
              value2 *= value2;
            }

            return (value1<value2)?-1:(value1>value2 ?1:0)
          });

          $.each(records, function(index,row){
            $("tbody").append(row);
          });

        });
      });

      //To sort data by first name

      $("#fName").each(function(coloumn){
        $("#fName").data("type",$("#fName").attr("class"));
        $(".sortName").click(function(){
          var type = $("#fName").data("type");
          var records = $("table").find("tbody > tr");
          
          records.sort(function(a,b){
            var value1 = $(a).children("td").eq(1).text();
            var value2 = $(b).children("td").eq(1).text();
            if(type == "num"){
              value1 *= value1;
              value2 *= value2;
            }
            return (value1 < value2)?-1:(value1>value2 ?1:0)
          })
            $.each(records, function(index, row){
              $(".data").append(row);
            });
        });
      });

      //To sort data by division

      $("#div").each(function(coloumn){
        $("#div").data("type",$("#div").attr("class"));
        $(".sortDiv").click(function(){
          var type = $("#div").data("type");
          var records = $("table").find("tbody > tr");
          
          records.sort(function(a,b){
            var value1 = $(a).children("td").eq(2).text();
            var value2 = $(b).children("td").eq(2).text();
            if(type == "num"){
              value1 *= value1;
              value2 *= value2;
            }
            return (value1 < value2)?-1:(value1>value2 ?1:0)
          })
            $.each(records, function(index, row){
              $(".data").append(row);
            });
        });
      });

      //To sort data by teamname

      $("#tName").each(function(coloumn){
        $("#tName").data("type",$("#tName").attr("class"));
        $(".sortTn").click(function(){
          var type = $("#tName").data("type");
          var records = $("table").find("tbody > tr");
          
          records.sort(function(a,b){
            var value1 = $(a).children("td").eq(3).text();
            var value2 = $(b).children("td").eq(3).text();
            if(type == "num"){
              value1 *= value1;
              value2 *= value2;
            }
            return (value1 < value2)?-1:(value1>value2 ?1:0)
          })
            $.each(records, function(index, row){
              $(".data").append(row);
            });
        });
      });
});