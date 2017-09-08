/*
$(document).ready(function ()
{
  // perform query
  $("#manajemen-produk li").click(function ()
  {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function ()
    {
      if (this.readyState == 1)
      {
        alert("Loading Data...");
      }
      if (this.readyState == 4 && this.status == 200)
      {
        $("#content-right").html(this.responseText);
      }
    };
    xhttp.open("get", "/admin/fetch-query/" + $(this).text(), true);
    xhttp.send();
  });
});*/

function deleteData(table, id)
{
  if (confirm("Delete " + id +". Confirm?") == true) 
  {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function ()
    {
      if (this.readyState == 4 && this.status == 200)
      {
        alert(this.responseText);
        viewData(table);
      }
    };
    xhttp.open("post", "/admin/delete-data/" + table + "/" + id, true);
    xhttp.send();
  }
}

function viewData(table)
{
  $(document).ready(function()
  {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function ()
    {
      if (this.readyState == 1)
      {
        alert("Loading Data...");
      }
      if (this.readyState == 4 && this.status == 200)
      {
        $("#content-right").html(this.responseText);
      }
    };
    xhttp.open("get", "/admin/fetch-query/" + table, true);
    xhttp.send();
  });

}

function alertMe(table)
{
  $(document).ready(function ()
  {
    alert(table);
  });
}