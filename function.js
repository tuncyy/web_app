
function search() 
{
 let input,filter,table,tr,td,i,txtValue;
 input = document.getElementById('myInput');
 filter = input.value.toUpperCase();
 table = document.getElementById('myTable');
 tr = table.getElementsByTagName('tr');


 for(i = 0; tr.length ; i++)
   {
     td = tr[i].getElementsByTagName("td")[0];
     
     if(td)
      {
        txtValue = td.textContent || td.innerText;

        if(txtValue.toUpperCase().indexOf(filter) > -1)
          {
           tr[i].style.display = "block";
          }
        else
         {
           tr[i].style.display = "none";
         }
      }
   }
}