function Start() {

   
    var scores;

    var ref_v = firebase.database().ref("DataQR/" + window.User_ID);

    ref_v.limitToFirst(20).orderByKey().on('value', getData, errData);

    function getData(data){
         scores = data.val();
        var keys = Object.keys(scores);
        console.log(keys);


        var myNode = document.getElementById("bottomNav");
        myNode.innerHTML = '';




        for (var i = 0; i < keys.length; i++) {
            var k =keys[i];

            var text = scores[k].text;
            var date_v = scores[k].Date;
       
     
        console.log(text);
        console.log(date_v);
        console.log(k);
        

        var para = document.createElement("li");
        var t22 = document.createTextNode(" ");
        para.appendChild(t22); 
        document.getElementById("nlist").appendChild(para);
            
            para.setAttribute('id', k);  
            para.setAttribute('class', "card-panel hoverable"); 


        var text_vl = document.createElement("h5");        
        var t = document.createTextNode(text);       
        text_vl.appendChild(t);                                
        document.getElementById(k).appendChild(text_vl);   


        var date_vl = document.createElement("p");        
        var t = document.createTextNode(date_v);       
        date_vl.appendChild(t);                                
        document.getElementById(k).appendChild(date_vl);   


        var botton_n = document.createElement("a");        
        var t = document.createTextNode("Delete");       
        botton_n.appendChild(t);
        botton_n.setAttribute('class', "waves-effect waves-light btn red botton_n");
        var fu_onclick = "remove('"+ k + "')";
        botton_n.setAttribute('onclick' , fu_onclick);                                
        document.getElementById(k).appendChild(botton_n);


        var botton_nn = document.createElement("a");        
        var t = document.createTextNode("Edit");       
        botton_nn.appendChild(t);
        botton_nn.setAttribute('class', "waves-effect waves-light btn modal-trigger btn botton_n_2");
        var fu_onclick = "edit_Id('"+k+"' , '"+text+"') ";
        botton_nn.setAttribute('onclick' , fu_onclick); 
        botton_nn.setAttribute('href' , '#modal2');                               
        document.getElementById(k).appendChild(botton_nn);

        var botton_nnn = document.createElement("a");        
        var t = document.createTextNode("Show QR Code");       
        botton_nnn.appendChild(t);
        botton_nnn.setAttribute('class', "waves-effect waves-light btn modal-trigger blue botton_n_2");
        
        var fu_onclick = " show_Id('"+k+"' , '"+text+"') ";
        botton_nnn.setAttribute('onclick' , fu_onclick);
         botton_nnn.setAttribute('href' , '#modal1');                               
        document.getElementById(k).appendChild(botton_nnn);





         
        }
    }




    function errData(err){
        console.log('Error!');  
        console.log(err);   
    }



}


firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
  
window.User_ID = user.uid +'/';
Start();
    
  } else {
     window.location.replace('Sign_in.html');
  }
});