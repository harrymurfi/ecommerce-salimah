function viewData(table)
{
  $(document).ready(function ()
  {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function ()
    {
      if (this.readyState == 1)
      {
        $("#content-data").hide();
        $("#content-loading").show();
      }
      if (this.readyState == 4 && this.status == 200)
      {
        $("#content-loading").hide();
        $("#content-data").show();
        $("#content-data").html(this.responseText);
      }
    };
    xhttp.open("get", "/admin/fetch-query/" + table, true);
    xhttp.send();
  });

}

function viewDataTiming(table)
{
  $(document).ready(function ()
  {
    $("#content-data").hide();
    $("#content-loading").show();
    setTimeout(function()
    {
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function ()
      {
        if (this.readyState == 4 && this.status == 200)
        {
          $("#content-loading").hide();
          $("#content-data").show();
          $("#content-data").html(this.responseText);
        }
      };
      xhttp.open("get", "/admin/fetch-query/" + table, true);
      xhttp.send();
    }, 1000);
  });
}

function deleteData(table, id)
{
  if (confirm("Delete " + id +". Confirm?") == true) 
  {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function ()
    {
      if (this.readyState == 4 && this.status == 200)
      {
        viewDataTiming(table);
        addMessage(this.responseText);
      }
    };
    xhttp.open("post", "/admin/delete-data/" + table + "/" + id, true);
    xhttp.send();
  }
}

function addData(table)
{
  $(document).ready(function()
  {
    
  });
}

function addMessage(message)
{
  $(document).ready(function ()
  {
    setTimeout(function()
    {
      $("#content-message").show();
      $("#content-message").html(message);
    }, 1050);
  });
}

function alertMe()
{
  $(document).ready(function ()
  {
    
  });
}