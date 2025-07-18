//--------------------------
// DISPLAY CLOCK FUNCTIONS
//--------------------------

  var timer = null
  

  function stop(){
    clearTimeout(timer)
  } 

  function start(){
    var time = new Date()
    var hours = time.getHours()
    var minutes = time.getMinutes()
    minutes=((minutes < 10) ? "0" : "") + minutes
    var seconds = time.getSeconds()
    seconds=((seconds < 10) ? "0" : "") + seconds
    // var clock = hours + ":" + minutes + ":" + seconds
    var clock = time
    document.forms[0].display.value = clock
    timer = setTimeout("start()",1000)
  }


//------------------------------
//  VERIFY USER NAME & PASSWORD
//------------------------------

  function access_check() {

    var strMessage = ""

    // Ensure a username and password were entered

    var user = document.access.user.value
    var password = document.access.password.value

    if (user.length == 0) {
       var strMessage = "You must enter a username. <br>"
    }

    if (password.length == 0) {
       var strMessage = strMessage + " " + "You must enter a password. <br>"
    }

    // If username and password entered, validate.

    if (strMessage.length == 0) {
       if (document.access.user.value != "Brownsville") {
          strMessage = "Username is incorrect. <br>"
       }

       if (document.access.password.value != "Red") {
          strMessage = strMessage + " " + "Password is incorrect. <br>"
       }

       if (strMessage.length == 0) {
          window.location = "bd_lskdjf.htm"     // Birthdays Page
       } else {
	    strMessage = strMessage + " " + "<br> Use the back arrow button to return to the previous page and correct the problem. <br>"
          document.write(strMessage)
       } 
    
    } else {
	 strMessage = strMessage + " " + "<br> Use the back arrow button to return to the previous page and correct the problem. <br>"
       document.write(strMessage)
    } 

  }

//------------------------------
//  DISPLAY BIRTHDATE
//------------------------------

  // Set Array of Birth Dates and Names

  members = 116					// Value is number of names plus 1 since array starts a zero.

bname = new Array(members);	            bdate = new Array(members);
bname[1] ="Alexandra Rojas";			bdate[1] = "May 2";
bname[2] ="Alejandro Rojas";			bdate[2] = "August 17";
bname[3] ="Alondra Rojas";				bdate[3] = "August 2";
bname[4] ="Anakaren Garza";				bdate[4] = "December 27, 2004";			// Boy's daugher
bname[5] ="Angelina Rojas";				bdate[5] = "April 1";					// Carlos' daughter
bname[6] ="Angelita Rojas";				bdate[6] = "February 7, 1954";
bname[7] ="Annika April Atkinson";		bdate[7] = "April 19";
bname[8] ="Anthony Rojas Jr.";			bdate[8] = "December 14";
bname[9] ="Anthony Lee Rojas";			bdate[9] = "November 12";				// Tone's son
bname[10] ="Antonio Flores";			bdate[10] = "February 1, 1901";
bname[11] ="Antonio Rojas";				bdate[11] = "November 12";
bname[12] ="Audrey Rojas";				bdate[12] = "November 8";				// Anthony's daughter
bname[13] ="Aurelio Rojas";				bdate[13] = "Unknown";
bname[14] ="Aurora Flores. Rojas";		bdate[14] = "February 18, 1930";
bname[15] ="Aurora Garza";				bdate[15] = "May 26, 1950";
bname[16] ="Aurora 'Yayi' Rojas";		bdate[16] = "March 17";
bname[17] ="Austin Alexander Atkinson";	bdate[17] = "July 25";
bname[18] ="Brian Rojas";				bdate[18] = "August 5";
bname[19] ="Carlos Rojas";				bdate[19] = "September 5, 1972";
bname[20] ="Christian Alejandro Cavazos";		bdate[20] = "May 13, 2000";
bname[21] ="Claudia Rojas";				bdate[21] = "September 12";
bname[22] ="Cristobal Rojas";			bdate[22] = "October 2";
bname[23] ="Dalia Carmichael";			bdate[23] = "October 31";
bname[24] ="Dalila Garza";				bdate[24] = "November 20, 1974";
bname[25] ="Damian Dominick Gonzalez";	bdate[25] = "February 1, 2004";			// Melissa's son
bname[26] ="Debbie Rojas";				bdate[26] = "June 6";
bname[27] ="Dina Rojas";				bdate[27] = "Unknown";
bname[28] ="Edward Mendoza";			bdate[28] = "Unknown";
bname[29] ="Edward Mendoza Jr.";		bdate[29] = "January 19";				// Michelle's son
bname[30] ="Erik Cantu";				bdate[30] = "March 2, 1978";
bname[31] ="Erik Kalani Cantu";			bdate[31] = "April 11, 2005";
bname[32] ="Erica Lynn Rojas";			bdate[32] = "September 1, 1991";
bname[33] ="Esperanza Rodriguez Flores";	bdate[33] = "March 8 1899";
bname[34] ="Esther Rojas";				bdate[34] = "December 20";
bname[35] ="Evangelina Atkinson";		bdate[35] = "April 4";
bname[36] ="Francisco Rojas III";		bdate[36] = "August 3, 1966";
bname[37] ="Francisco Rojas Sr";		bdate[37] = "October 30, 1928";
bname[38] ="Francisco Rojas IV";		bdate[38] = "April 26";
bname[39] ="Francisco Rojas Jr";		bdate[39] = "April 16";
bname[40] ="George Garza Jr.";			bdate[40] = "March 13";
bname[41] ="George Garza Sr.";			bdate[41] = "April 30, 1951";
bname[42] ="Heidi Rojas";				bdate[42] = "August 22";
bname[43] ="Jacob Rojas";				bdate[43] = "April 26";					// Carlos' son
bname[44] ="Jaime Alejandro Rojas";		bdate[44] = "November 23";
bname[45] ="Janie Rojas";				bdate[45] = "September 8";
bname[46] ="Jasmine Villareal";			bdate[46] = "January 15";
bname[47] ="Jay Rojas";					bdate[47] = "January 12";
bname[48] ="Jessica Rae Rojas Cantu";	bdate[48] = "September 28 1982";
bname[49] ="Joey Cavazos";				bdate[49] = "Unknown";
bname[50] ="Jonathan Mendoza";			bdate[50] = "Unknown";					// Michelle's son
bname[51] ="Juan Enrique Gonzalez III";	bdate[51] = "December 11, 1998";
bname[52] ="Juan Enrique Gonzalez Jr.";	bdate[52] = "May 30, 1975";
bname[53] ="Julio Max Lopez";			bdate[53] = "October 22";
bname[54] ="Karina Renee Garza";		bdate[54] = "May 27, 83";
bname[55] ="Kayla Renee Gonzalez";		bdate[55] = "April 17, 1996";			// Melissa's daughter
bname[56] ="Ken Carmichael";			bdate[56] = "October 14";
bname[57] ="Leslie Escoto";				bdate[57] = "July 9";					// Will's daughter
bname[58] ="Lizette Abigail Rojas";		bdate[58] = "July 23, 1989";
bname[59] ="Maria Benita Picazo Rojas";	bdate[59] = "Unknown";
bname[60] ="Marlen Rojas";				bdate[60] = "February 14";
bname[61] ="Melissa Yvette Gonzalez";	bdate[61] = "July 20, 1971";
bname[62] ="Michelle Gonzalez (Escoto)";	bdate[62] = "August 29";			// Will's daughter
bname[63] ="Michelle Mendoza";			bdate[63] = "October 31";
bname[64] ="Mine Rojas";				bdate[64] = "January 22";
bname[65] ="Monica Villareal";			bdate[65] = "May 23, 1968";
bname[66] ="Nicolas Rei Rojas";			bdate[66] = "August 31";
bname[67] ="Nikki Pena";				bdate[67] = "April 18";
bname[68] ="Oscar Rojas Jr.";			bdate[68] = "July 16";
bname[69] ="Oscar Rojas";				bdate[69] = "October 22";
bname[70] ="Osiel Villareal Jr.";		bdate[70] = "October 25";
bname[71] ="Osiel Villarreal";			bdate[71] = "August 4";
bname[72] ="Priscilla Clarisse Gonzalez";		bdate[72] = "April 28, 2001";
bname[73] ="Raeann Rojas";				bdate[73] = "August 11";
bname[74] ="Ricardo Rojas";				bdate[74] = "July 28, 1967";
bname[75] ="Robert Atkinson";			bdate[75] = "April 14";
bname[76] ="Roberto Rojas";				bdate[76] = "March 10, 1963";
bname[77] ="Rogerio Rojas";				bdate[77] = "February 2";
bname[78] ="Rolando Rojas";				bdate[78] = "July 28, 1968";
bname[79] ="Ruben Rojas";				bdate[79] = "August 3";
bname[80] ="Willie Escoto";				bdate[80] = "April 7";
bname[81] ="Angelina Rojas";			bdate[81] = "April 1";				// Carlos's daughter
bname[82] ="Natalie Garza";				bdate[82] = "April 25";				// Carlos/Chris' sister
bname[83] ="Jacob Rojas";				bdate[83] = "April 26";
bname[84] ="Matilde Rojas";				bdate[84] = "August 11, 1944";
bname[85] ="Anahi Esli Villarreal";		bdate[85] = "August 13"; 
bname[86] ="Erykah Judith Manzano";		bdate[86] = "October 13, 2009"; 	// Karina's daughter
bname[87] = "Hailey Munoz";				bdate[87] = "January 25"; 			// Lizette's daughter
bname[88] = "Laura Herzet (Germany)";	bdate[88] = "April 15";
bname[89] = "Kathyrne Edee Rojas";		bdate[89] = "December 29, 2010";	// Chris daughter
bname[90] = "Jaylynn Rojas";			bdate[90] = "January 29, 2007";		// Jay's daughter
bname[91] = "Jaime Estrada";			bdate[91] = "September 16 1965";
bname[92] = "Ruben Martinez";			bdate[92] = "February 2 1966";
bname[93] = "Kariana Garza";			bdate[93] = "May 18";
bname[94] = "Oscar Gadriel Rojas";		bdate[94] = "October 12 2016";		// Oscarito's son
bname[95] = "Isabella Grace Pena";		bdate[95] = "June 25 2018"
bname[96] = "Louie Pena";				bdate[96] = "February 27";
bname[97] = "Jesse Rodriguez";			bdate[97] = "March 18";
bname[98] = "Jessa Ann Rodriguez";		bdate[98] = "August 12, 2019";		// Annika's daughter
bname[99] = "Gael Bastian Rojas";		bdate[99] = "April 18, 2020";		// Bryan's son
bname[100] = "Arianna Renae";			bdate[100] = "September 22, 2020";	// Kayla's daughter
bname[101] = "Aniyah Rain Mendoza";		bdate[101] = "October 21, 2020";	// Michelle's son's daughter
bname[102] = "Audree Renee";			bdate[102] = "November 20, 2020";	// Annika's daughter
bname[103] = "Tesia Elise Rojas";		bdate[103] = "January 20, 2022";	// Bryan's daughter
bname[104] = "Anastasia Luna Rojas";	bdate[104] = "May 31, 2022";   		// Oscarito's daughter
bname[105] = "Stella Moon Mendoza";  	bdate[105] = "August 11, 2022";   	// Michelle's son's daughter
bname[106] = "Jeremy Rendon";  			bdate[106] = "February 26";			// 
bname[107] = "Jeremy Cole Rendon";  	bdate[107] = "July 15";				// Jasmine's son
bname[108] = "Larissa Rojas";  			bdate[108] = "October 7";			// Oscarito's wife
bname[109] = "Sandra Lopez";  			bdate[109] = "May 17";		    	// Mom's caretaker
bname[	110 ] = "Alexander Kai Rios";  			bdate[	110	 ] = "January 21, 2022";		// Kayla's
bname[	111 ] = "Isaiah Ugalde";  				bdate[	111	 ] = "March 22, 2022";		    // Priscilla's
bname[	113 ] = "Alyse April Rodriguez";  		bdate[	113	 ] = "April 6, 2023";		    // Annika's
bname[	114 ] = "Ayden Ace Rios";				bdate[	114	 ] = "June 14, 2024";			// Kayla's
bname[	115 ] = "Caleb Ugalde";					bdate[	115	 ] = "Nov 9, 2024";				// Priscilla's


  // This function updates the birthdate text field

  function update_birthdate() {
    p = document.pick.person.value;
    if (p == 0) {
      alert("You must select a name.")
    } else {
      document.pick.birthdate.value = bdate[p];
    }
  }
