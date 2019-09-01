function func_name(){
	var a=document.getElementById("prog");
	var name=document.getElementById("name").value;
	if(name!=""){
		a.value+=10;
	} 	
}

function func_name1(){
	var a=document.getElementById("prog");
	var name1=document.getElementById("name").value;
	if(name1!=""){
		a.value-=10;
	}
}

function func_d_n(){
	var a=document.getElementById("prog");
	var dname=document.getElementById("d_name").value;
	if(dname!=""){
		a.value+=10;
	} 	
}

function func_d_n1(){
	var a=document.getElementById("prog");
	var dname1=document.getElementById("d_name").value;
	if(dname1!=""){
		a.value-=10;
	}
}

function func_email(){
	var a=document.getElementById("prog");
	var email=document.getElementById("email").value;
	if(email!=""){
		a.value+=10;
	} 	
}

function func_email1(){
	var a=document.getElementById("prog");
	var email1=document.getElementById("email").value;
	if(email1!=""){
		a.value-=10;
	} 	
}

function func_pass(){
	var a=document.getElementById("prog");
	var password=document.getElementById("password").value;
	if(password!=""){
		a.value+=10;
	} 	
}

function func_pass1(){
	var a=document.getElementById("prog");
	var password1=document.getElementById("password").value;
	if(password1!=""){
		a.value-=10;
	} 	
}

function func_c_p(){
	var a=document.getElementById("prog");
	var cpass=document.getElementById("c_password").value;
	if(cpass!=""){
		a.value+=10;
	} 	
}

function func_c_p1(){
	var a=document.getElementById("prog");
	var cpass1=document.getElementById("c_password").value;
	if(cpass1!=""){
		a.value-=10;
	} 	
}

function func_dob(){
	var a=document.getElementById("prog");
	var dob=document.getElementById("d_o_b").value;
	if(dob!=""){
		a.value+=10;
	} 	
}

function func_dob1(){
	var a=document.getElementById("prog");
	var dob1=document.getElementById("d_o_b").value;
	if(dob1!=""){
		a.value-=10;
	} 	
}

function func_city(){
	var a=document.getElementById("prog");
	var city=document.getElementById("city").value;
	if(city!=""){
		a.value+=10;
	} 	
}

function func_city1(){
	var a=document.getElementById("prog");
	var city1=document.getElementById("city").value;
	if(city1!=""){
		a.value-=10;
	} 	
}


function func_res(){
	var a=document.getElementById("prog");
	a.value=10;
}

function func_dan(){
	var a=document.getElementById("prog");
	var b=document.first_form.dance.checked;
	var c=document.first_form.sing.checked;
	var d=document.first_form.paint.checked;
	if(b!=true&&c!=true&&d!=true){
		a.value-=10;
		return false;
	}
	if(c==true||d==true){
		return 0;
	}
	else{
		a.value+=10;
	}
}

function func_sin(){
	var a=document.getElementById("prog");
	var b=document.first_form.dance.checked;
	var c=document.first_form.sing.checked;
	var d=document.first_form.paint.checked;
	if(b!=true&&c!=true&&d!=true){
		a.value-=10;
		return false;
	}
	if(b==true||d==true){
		return 0;
	}
	else{
		a.value+=10;
	}
}

function func_pan(){
	var a=document.getElementById("prog");
	var b=document.first_form.dance.checked;
	var c=document.first_form.sing.checked;
	var d=document.first_form.paint.checked;
	if(b!=true&&c!=true&&d!=true){
		a.value-=10;
		return 0;
	}
	if(b==true||c==true){
		return 0;
	}
	else{
		a.value+=10;
	}
}

function func_c(){
	var a=document.getElementById("prog");
	var b=document.getElementById("male").checked;
	var c=document.getElementById("female").checked;
	var d=document.getElementById("other").checked;
	if(b==true||c==true||d==true)
	{
		a.value+=10;
	}
}

/*
var e=1;
function func_m(){
	var a=document.getElementById("prog");
	var b=document.getElementById("male").checked;
	var c=document.getElementById("female").checked;
	var d=document.getElementById("other").checked;
	if(e==1){
		break;
	}
	else{
		if(b==true){
		const e=1;
		a.value+=10;
		}	
	}
}

function func_f(){
	var a=document.getElementById("prog");
	var b=document.getElementById("male").checked;
	var c=document.getElementById("female").checked;
	var d=document.getElementById("other").checked;
	if(e==1){
		break;
	}
	else{
		if(c==true){
		const e=1;
		a.value+=10;
		}	
	}
}

function func_o(){
	var a=document.getElementById("prog");
	var b=document.getElementById("male").checked;
	var c=document.getElementById("female").checked;
	var d=document.getElementById("other").checked;
	if(e==1){
		break;
	}
	else{
		if(d==true){
		const e=1;
		a.value+=10;
		}	
	}
}
*/