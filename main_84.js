pizza_list_array = [];

function getmenu()
	{    
        // Da un nombre apropiado de identificación como .
        var item = document.getElementById("nomnbre_pizza").value; 
       
        //Agrega la función push() para llevar los elementos al array.
        pizza_list_array.push(item);
        
        var remove_commas = pizza_list_array.join("<br># ");
        document.getElementById("mostrar_menú").innerHTML =  "# " + remove_commas;
	}