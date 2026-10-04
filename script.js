 const time = document.getElementById("time")
 const date = document.getElementById("date")
 const day = document.getElementById("day")
 const months= ["JAN", "FAB" ,"MAR" ,"APR" ,"MAY","JUN","JUL","AUG","SEP","OCT", "NOV","DEC"]
   const dayChild = day.children;
 
 const Updateclock = () =>{
       const now = new Date();
        
       let hours =now.getHours().toString().padStart(2, 0);
       hours = hours % 12 || 12;
       
       let minutes = now.getMinutes().toString().padStart(2,0);
       let seconds = now.getSeconds().toString().padStart(2,0);

       let ampm = hours>= 12 ? "AM" : "PM";
       
       time.textContent= `${hours}:${minutes}:${seconds} ${ampm}`;
         const month = months[now.getMonth()]; 
         let today = now.getDate().toString().padStart(2, 0);
         let year = now.getFullYear();

        date.textContent= `${today} / ${month} / ${year}`
         
       Array.from(dayChild).forEach((e, i) =>{
        if (i == now.getDay()) {
            e.classList = "text-center text-white font-bold bg-blue-700   cursor-pointer "
        }
    })

 };

 Updateclock()
 setInterval(Updateclock , 1000)