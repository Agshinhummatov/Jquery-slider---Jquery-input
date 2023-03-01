$(document).ready(function () {

    let people = [];


    if (localStorage.getItem("people") != null) {
        people = JSON.parse(localStorage.getItem("people"));
    }


    $("button").click(function () {

        
       $("ul").empty();
       let user1 = $(".name").val()
       let user2 = $(".surname").val()


       people.push({
            id:user1 + new Date().getMilliseconds(),
            name : user1,
            surname :user2
       })

        

     
        


        localStorage.setItem("people", JSON.stringify(people));

       

        for (const item of people) {
            
            
            
          $("ul").append($(`<li  data-id="${item.id}" class="list-group-item"> ${item.name +" " + item.surname} </li>`));



        }
        $(".name").val("")
        $(".surname").val("")



    })


    for (const item of people) {
            
        $("ul").append($(`<li data-id="${item.id}" class="list-group-item"> ${item.name +" " + item.surname} </li>`));

    }



    $(document).on("click",("ul li"),function() {
        
        people =people.filter(m => m.id !=$(this).attr("data-id"))
        localStorage.setItem("people", JSON.stringify(people));


        $(this).remove()

    })

    


  



});