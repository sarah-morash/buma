/**
 * event.js
 * On mouse/keyboard events, perform specific tasks
 * Author: buma
 **/
$(document).ready( function() {
	/*	Clicking on other category, will appear the textfield to fill with the new category	*/
	$('#category').change( function() {
		var sel = $(this).val();
		if(sel == "other") {
			$('#new_category').show();
			$('#otherLabel').show();
		} else {
			$('#new_category').hide();	
			$('#otherLabel').hide();
		}
	});
	
	if ($("#add_budget_form select[name='category']").val() == "other") {
		$('#new_category').show();
		$('#otherLabel').show();
	}

	/*	Ajax for add_budget form	*/
	$('#btn_add_budget_form').click(function(){
		var form_data = $("#add_budget_form").serialize(),
			amount = $("#add_budget_form input[name='amount']").val(),
			category = $("#add_budget_form select[name='category_id']").val(),
			new_category = $("#add_budget_form input[name='new_category']").val(),
			message = $("#add_budget_form .alert"),
			add_category = false;
			message.hide().removeClass("alert-success");
			
		if (amount == "undefined" || amount == "" || (!amount.match(/(?=.)^\$?(([1-9][0-9]{0,2}(,[0-9]{3})*)|0)?(\.[0-9]{1,2})?$/))) {
			message.show().html("Fill the AMOUNT field correctly.");
			message.addClass("alert-failure");
		}	
		else if (category == "undefined" || category == "") {
			message.show().html("Fill the CATEGORY field correctly.");
			message.addClass("alert-failure");
		}			
		else if (category == "other" && (new_category == "undefined" || new_category == "")) {
			message.show().html("Fill the OTHER field correctly.");
			message.addClass("alert-failure");
		}
		else {
			//if (category == "other") add_category = true;
			$.ajax({
				type: "POST",
				url: "/group11/buma/add_budget_post.php",
				data: form_data,
				success: function(result) {
					message.show().html(result);
					if (result == "Budget added.") {
						message.addClass("alert-success");
						$("#add_budget_form input[name='amount']").val('');
						//$("#add_budget_form select[name='category_id'] option:first").attr('selected','selected');
						$("#add_budget_form input[name='new_category']").val('');
					}
				}
			});
		}
	});

	/* Create new wish */
	$("#my_wish").click( function() {
		$("#new_wish").show();
	});		

	$(".remove").click( function() {
		var text;
		var edit = confirm("Are you sure you want to remove this wish?");	
		if (edit === true) {
			//REMOVE
		} else {
			//CANCEL
		}	
	});


	$(".edit").click( function() {
		var text;
		var edit = confirm("Are you sure you want to remove this wish?");	
		if (edit === true) {
			//REMOVE
		} else {
			//CANCEL
		}	
	});


	$(".complete").click( function() {
		var text;
		var edit = confirm("Are you sure you want to remove this wish?");	
		if (edit === true) {
			//REMOVE
		} else {
			//CANCEL
		}	
	});
/*});
		message.hide().removeClass("alert-success");
		if (amount == "undefined" || amount == "") message.show().html("Fill the AMOUNT field correctly.");
		else if (category == "undefined" || category == "") message.show().html("Fill the CATEGORY field correctly.");
		else if (category == "other" && (new_category == "undefined" || new_category == "")) message.show().html("Fill the OTHER field correctly.");
		else {
			if (category == "other") add_category = true;
			alert("Category added.");
			$.ajax({
				type: "POST",
				url: "/add_budget_post.php",
				data: form_data,
				success: function(result) {
					if (result == "Budget added.") message.addClass("alert-success");
					message.show().html(result);
				}
			});
		}
		return false;
	});*/
	
	/*	Ajax for login form	*/
	$('#btn_login_form').click(function(){
		var form_data = $("#login_form").serialize(),
			email = $("#login_form input[name='email']").val(),
			password = $("#login_form input[name='password']").val(),
			message = $("#login_form .alert");
		message.hide().removeClass("alert-success");
		if (email == "undefined" || email == "") message.show().html("Fill the EMAIL field correctly.");
		else if (password == "undefined" || password == "") message.show().html("Fill the PASSWORD field correctly.");
		else {
			$.ajax({
				type: "POST",
				url: "/group11/buma/login_post.php",
				data: form_data,
				success: function(result) {
					if (result == "Logged in.") {
						message.addClass("alert-success");
						window.location.replace("home");
					}
					message.show().html(result);
				}
			});
		}
		return false;
	});
	
	/*	Ajax for delete budget home	*/
	$('.btn_delete').click(function(){
		var budget_id = $(this).prev('.budget_id').html();
		alert(budget_id);
		/*var form_data = $("#login_form").serialize(),
			email = $("#login_form input[name='email']").val(),
			password = $("#login_form input[name='password']").val(),
			message = $("#login_form .alert");
		message.hide().removeClass("alert-success");
		if (email == "undefined" || email == "") message.show().html("Fill the EMAIL field correctly.");
		else if (password == "undefined" || password == "") message.show().html("Fill the PASSWORD field correctly.");
		else {
			$.ajax({
				type: "POST",
				url: "/group11/buma/login_post.php",
				data: form_data,
				success: function(result) {
					if (result == "Logged in.") {
						message.addClass("alert-success");
						window.location.replace("home");
					}
					message.show().html(result);
				}
			});
		}
		return false;*/
		});


/* Ajax for register form */
	$('#register_form_buttom').click(function(){
		var form_data =$("#register_form").serialize(),
			email = $("#register_form input[name='email']").val(),
			password = $("#register_form input[name='password']").val(),
			username = $("#register_form input[name='username']").val(),
			userid	 = $("#register_form input[name='user_id']").val(),
		
			message = $("#register_form .alert");
			
			$.ajax({
				type: "POST",
				url: "/group11/buma/register_post.php",
				data: form_data,
				success: function(result) {
					if (result == "Register successfully.") {
						$("#register_form input[name='email']").val('');				
						$("#register_form input[name='password']").val('');
						$("#register_form input[name='usrname']").val('');	
						$("#register_form input[name='userid']").val('');	
						message.addClass("alert-success");
						window.location.replace("login");
					}
					message.show().html(result);
				}
			});
		
		return false;
			});
			
	/*Ajax for forgot form*/		
	/*$('#forget_form').click(function(){
		var form_data =$("#forget_form").serialize(),
			email = $("#forget_form input[name='email']").val(),
			message.hide().removeClass("alert-success");
		if (email == "undefined" || email == "") message.show().html("Fill the EMAIL field correctly.");
		
		else {
			$.ajax({
				type: "POST",
				url: "/group11/buma/forget_post.php",
				data: form_data,
				success: function(result) {
					if (result == "Message sended.") {
						message.addClass("alert-success");
					}
					message.show().html(result);
				}
			});
		}
		return false;
			});		*/
			
});