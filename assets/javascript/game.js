var game = {

	char1: [
	name = "1",
	health = 120,
	att = 6,
	ctatt = 10 ],

	char2: [
	name = "2",
	health = 100,
	att = 6,
	ctatt = 5 ],

	char3: [
	name = "3",
	health = 150,
	att = 6,
	ctatt = 20 ],

	char4: [
	name = "4",
	health = 180,
	att = 6,
	ctatt = 25 ]

}
	$(document).ready(function() {
			var health1 = game.char1[1];
			var health2 = game.char2[1];
			var health3 = game.char3[1];
			var health4 = game.char4[1];

			var att1 = game.char1[2];
			var att2 = game.char2[2];
			var att3 = game.char3[2];
			var att4 = game.char4[2];

			var ctatt1 = game.char1[3];
			var ctatt2 = game.char2[3];
			var ctatt3 = game.char3[3];
			var ctatt4 = game.char4[3];

			var char1 = $("#char1")
			var char2 = $("#char2")
			var char3 = $("#char3")
			var char4 = $("#char4")

			var enemy1 = $("#enemy1")
			var enemy2 = $("#enemy2")
			var enemy3 = $("#enemy3")

			var vschar2 = false
			var vschar3 = false
			var vschar4 = false

			var counter = 6


		$("#stats").hide();
		$("#defstats").hide();

		$("#char1").on("click", function(){
			$("#userpickplace").append(char1);
			$("#enemy1spot").append("<div>" + "<img src=\"assets/images/PH2.png\">" + "</div>");
			$("#enemy2spot").append("<div>" + "<img src=\"assets/images/PH3.png\">" + "</div>");
			$("#enemy3spot").append("<div>" + "<img src=\"assets/images/PH4.png\">" + "</div>");
			$("#selection").empty();
			var userpickchar1 = true;
			$("#stats").show();
			$("#hptext").html("Hp: " + health1);
			$("#attText").html("Att: " + att1);
			$("#ctAtt").html("Counter: " + ctatt1);


			$("#enemy1spot").on("click", function(){
				$("#defplace").html("<div>" + "<img src=\"assets/images/PH2.png\">" + "</div>");
				$("#enemy1spot").empty();
				var vschar2 = true;
				$("#defstats").show();
				$("#defhptext").html("Hp: " + health2);
				$("#defattText").html("Att: " + att2);
				$("#defctAtt").html("Counter: " + ctatt2);


				if (userpickchar1 == true && vschar2 == true) {
					vschar3 = false;
					vschar4 = false;
					$("#attack").on("click", function(){
						health1 = parseInt(health1) - parseInt(ctatt2);
						att1 = parseInt(att1) + parseInt(counter);
						health2 = parseInt(health2) - parseInt(att1);
						$("#hptext").html("Hp: " + health1);
						$("#attText").html("Att: " + att1);
						$("#defhptext").html("Hp: " + health2);


					});
				}
			});

			$("#enemy2spot").on("click", function(){
				$("#defplace").html("<div>" + "<img src=\"assets/images/PH3.png\">" + "</div>");
				$("#enemy2spot").empty();
				var vschar3 = true;
				$("#defstats").show();
				$("#defhptext").html("Hp: " + health3);
				$("#defattText").html("Att: " + att3);
				$("#defctAtt").html("Counter: " + ctatt3);

				if (userpickchar1 == true && vschar3 == true) {
					vschar2 = false;
					vschar4 = false;
					$("#attack").on("click", function(){
						health1 = parseInt(health1) - parseInt(ctatt3);
						att1 = parseInt(att1) + parseInt(counter);
						health3 = parseInt(health3) - parseInt(att1);
						$("#hptext").html("Hp: " + health1);
						$("#attText").html("Att: " + att1);
						$("#defhptext").html("Hp: " + health3);
						// if health1 < 0 { else if health2 < 0
					});
				}	
			});

		// Enemy spot 3 info (char4)
			$("#enemy3spot").on("click", function(){
				$("#defplace").html("<div>" + "<img src=\"assets/images/PH4.png\">" + "</div>");
				$("#enemy3spot").empty();
				var vschar4 = true;
				$("#defstats").show();
				$("#defhptext").html("Hp: " + health4);
				$("#defattText").html("Att: " + att4);
				$("#defctAtt").html("Counter: " + ctatt4);

				if (userpickchar1 == true && vschar4 == true) {
					vschar2 = false
					vschar3 = false
					$("#attack").on("click", function(){
						health1 = parseInt(health1) - parseInt(ctatt4);
						att1 = parseInt(att1) + parseInt(counter);
						health4 = parseInt(health4) - parseInt(att1);
						$("#hptext").html("Hp: " + health1);
						$("#attText").html("Att: " + att1);
						$("#defhptext").html("Hp: " + health4);
					});
				}
			});
		});


		$("#char2").on("click", function(){
			$("#userpickplace").append(char2);
			$("#enemy1spot").append("<div>" + "<img src=\"assets/images/PH1.png\">" + "</div>");
			$("#enemy2spot").append("<div>" + "<img src=\"assets/images/PH3.png\">" + "</div>");
			$("#enemy3spot").append("<div>" + "<img src=\"assets/images/PH4.png\">" + "</div>");
			$("#selection").empty();
			var userpickchar2 = true;
			$("#stats").show();
			$("#hptext").html("Hp: " + health2);
			$("#attText").html("Att: " + att2);
			$("#ctAtt").html("Counter: " + ctatt2);
			$("#enemy1spot").on("click", function(){
				$("#defplace").html("<div>" + "<img src=\"assets/images/PH1.png\">" + "</div>");
				$("#enemy1spot").empty();
				var vschar1 = true;
				$("#defstats").show();
				$("#defhptext").html("Hp: " + health1);
				$("#defattText").html("Att: " + att1);
				$("#defctAtt").html("Counter: " + ctatt1);

				if (userpickchar2 == true && vschar1 == true) {
					vschar3 = false;
					vschar4 = false;
					$("#attack").on("click", function(){
						health2 = parseInt(health2) - parseInt(ctatt1);
						att2 = parseInt(att2) + parseInt(counter);
						health1 = parseInt(health1) - parseInt(att2);
						$("#hptext").html("Hp: " + health2);
						$("#attText").html("Att: " + att2);
						$("#defhptext").html("Hp: " + health1);
					});
				}
			});

			$("#enemy2spot").on("click", function(){
				$("#defplace").html("<div>" + "<img src=\"assets/images/PH3.png\">" + "</div>");
				$("#enemy2spot").empty();
				var vschar3 = true;
				$("#defstats").show();
				$("#defhptext").html("Hp: " + health3);
				$("#defattText").html("Att: " + att3);
				$("#defctAtt").html("Counter: " + ctatt3);

				if (userpickchar2 == true && vschar3 == true) {
					vschar3 = false;
					vschar4 = false;
					$("#attack").on("click", function(){
						health2 = parseInt(health2) - parseInt(ctatt3);
						att2 = parseInt(att2) + parseInt(counter);
						health3 = parseInt(health3) - parseInt(att2);
						$("#hptext").html("Hp: " + health2);
						$("#attText").html("Att: " + att2);
						$("#defhptext").html("Hp: " + health3);
					});
				}	
			});

			$("#enemy3spot").on("click", function(){
					$("#defplace").html("<div>" + "<img src=\"assets/images/PH4.png\">" + "</div>");
					$("#enemy3spot").empty();
			});

		});

		$("#char3").on("click", function(){
			$("#userpickplace").append(char3);
			$("#enemy1spot").append("<div>" + "<img src=\"assets/images/PH1.png\">" + "</div>");
			$("#enemy2spot").append("<div>" + "<img src=\"assets/images/PH2.png\">" + "</div>");
			$("#enemy3spot").append("<div>" + "<img src=\"assets/images/PH4.png\">" + "</div>");
			$("#selection").empty();
			var userpickchar3 = true;

			$("#enemy1spot").on("click", function(){
					$("#defplace").html("<div>" + "<img src=\"assets/images/PH1.png\">" + "</div>");
					$("#enemy1spot").empty();
			});

			$("#enemy2spot").on("click", function(){
					$("#defplace").html("<div>" + "<img src=\"assets/images/PH2.png\">" + "</div>");
					$("#enemy2spot").empty();
			});

			$("#enemy3spot").on("click", function(){
					$("#defplace").html("<div>" + "<img src=\"assets/images/PH4.png\">" + "</div>");
					$("#enemy3spot").empty();
			});
		});

		$("#char4").on("click", function(){
			$("#userpickplace").append(char4);
			$("#enemy1spot").append("<div>" + "<img src=\"assets/images/PH1.png\">" + "</div>");
			$("#enemy2spot").append("<div>" + "<img src=\"assets/images/PH2.png\">" + "</div>");
			$("#enemy3spot").append("<div>" + "<img src=\"assets/images/PH3.png\">" + "</div>");
			$("#selection").empty();
			var userpickchar4 = true;

			$("#enemy1spot").on("click", function(){
					$("#defplace").html("<div>" + "<img src=\"assets/images/PH1.png\">" + "</div>");
					$("#enemy1spot").empty();
			});

			$("#enemy2spot").on("click", function(){
					$("#defplace").html("<div>" + "<img src=\"assets/images/PH2.png\">" + "</div>");
					$("#enemy2spot").empty();
			});

			$("#enemy3spot").on("click", function(){
					$("#defplace").html("<div>" + "<img src=\"assets/images/PH3.png\">" + "</div>");
					$("#enemy3spot").empty();
			});
		});


});



