function dis(val)
         {
             document.getElementById("result").value+=val
         }
           
        
function ans()
         {
              x = document.getElementById("result").value
              y = eval(x)
             document.getElementById("result").value = y
         }
           
         
function clr()
         {
             document.getElementById("result").value = ""
         }