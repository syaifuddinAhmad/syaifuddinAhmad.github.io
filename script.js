//create new lis/ membuat list baru
		function todoList() {
          var item = document.getElementById('todoInput').value
          var text = document.createTextNode(item)
          var newItem = document.createElement("li")
          newItem.appendChild(text)
          var checkbox = document.createElement('input');
			checkbox.type = "checkbox";
			checkbox.name = "name";
			checkbox.value = "value";
			checkbox.id = "id";
			newItem.appendChild(checkbox);
          document.getElementById("todoList").appendChild(newItem)
	//click N close button
			var myNodelist = document.getElementsByTagName("LI");
            var i;
            for (i = 0; i < myNodelist.length; i++) {
              var span = document.createElement("SPAN");
              var txt = document.createTextNode("\u00D7");
              span.className = "close";
              span.appendChild(txt);
              myNodelist[i].appendChild(span);
            }

          var close = document.getElementsByClassName("close");
            var i;
            for (i = 0; i < close.length; i++) {
              close[i].onclick = function() {
                var div = this.parentElement;
                div.style.display = "none";
              }
            }
    	}  