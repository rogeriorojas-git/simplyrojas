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
//  FOR BIRTHDAY PAGE
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
//  VERIFY USER NAME & PASSWORD
//  FOR PHOTOS PAGE
//------------------------------

  function access_check_photos() {

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
          window.location = "Photos.htm"     // Birthdays Page
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

  // Set Array of Birth Dates and Names9		// Value is number of names plus 1 since array starts a zero.
  
  members = 121					// Value is number of names plus 1 since array starts a zero.

  bname = new Array(members);	    bdate = new Array(members);

bname[	1	] = "Alexandra Rojas";				bdate[	1	] = "May 2";
bname[	2	] = "Alejandro Rojas";				bdate[	2	] = "August 17";
bname[	3	] = "Alondra Rojas";				bdate[	3	] = "August 2";
bname[	4	] = "Anahi Esli Villarreal";		bdate[	4	] = "August 13"; 
bname[	5	] = "Anakaren Garza";				bdate[	5	] = "December 27";
bname[	6	] = "Angelina Rojas";				bdate[	6	] = "April 1";				// Carlo's daughter
bname[	7	] = "Angelita Rojas";				bdate[	7	] = "February 7";
bname[	8	] = "Annika April Atkinson";		bdate[	8	] = "April 19";
bname[	9	] = "Anthony Lee Rojas";			bdate[	9	] = "November 12";
bname[	10	] = "Anthony Rojas Jr.";			bdate[	10	] = "December 14";
bname[	11	] = "Antonio Flores";				bdate[	11	] = "February 1";
bname[	12	] = "Antonio Rojas";				bdate[	12	] = "November 12";
bname[	13	] = "Audrey Rojas";					bdate[	13	] = "November 8";			// Anthony's daughter
bname[	14	] = "Aurelio Rojas";				bdate[	14	] = "Unknown";
bname[	15	] = "Aurora Flores Rojas";			bdate[	15	] = "February 18";
bname[	16	] = "Aurora Garza";					bdate[	16	] = "May 26";
bname[	17	] = "Aurora 'Yayi' Rojas";			bdate[	17	] = "March 17";
bname[	18	] = "Austin Alexander Atkinson";	bdate[	18	] = "July 25";
bname[	19	] = "Bryan Rojas";					bdate[	19	] = "August 5";
bname[	20	] = "Carlos Rojas";					bdate[	20	] = "September 5";
bname[	21	] = "Christian Alejandro Cavazos";	bdate[	21	] = "May 13";
bname[	22	] = "Claudia Rojas";				bdate[	22	] = "September 12";
bname[	23	] = "Cristobal Rojas";				bdate[	23	] = "October 2";
bname[	24	] = "Dalia Carmichael";				bdate[	24	] = "October 31";
bname[	25	] = "Damian Dominick Gonzalez";		bdate[	25	] = "February 1";			// Melissa's son
bname[	26	] = "Debbie Rojas";					bdate[	26	] = "June 6";
bname[	27	] = "Dina Rojas";					bdate[	27	] = "Unknown";
bname[	28	] = "Edward Mendoza Jr";			bdate[	28	] = "January 19";			// Michelle's son
bname[	29	] = "Edward Mendoza";				bdate[	29	] = "November 14";
bname[	30	] = "Erik Cantu";					bdate[	30	] = "March 2";
bname[	31	] = "Erik Kalani Cantu";			bdate[	31	] = "April 11";
bname[	32	] = "Erica Rojas Heeschen";			bdate[	32	] = "September 1";
bname[  33  ] = "Eric C. Manzano";				bdate[  33  ] = "October 14";
bname[	34	] = "Esperanza Rodriguez Flores";	bdate[	34	] = "March 8";
bname[	35	] = "Esther Rojas";					bdate[	35	] = "December 20";
bname[	36	] = "Evangelina Atkinson";			bdate[	36	] = "April 4";
bname[	37	] = "Francisco Rojas III";			bdate[	37	] = "August 3";
bname[	38	] = "Francisco Rojas Sr";			bdate[	38	] = "October 30";
bname[	39	] = "Francisco Rojas IV";			bdate[	39	] = "April 26";
bname[	40	] = "Francisco Rojas Jr";			bdate[	40	] = "April 16";
bname[	41	] = "George Garza Jr.";				bdate[	41	] = "March 13";
bname[	42	] = "George Garza Sr.";				bdate[	42	] = "April 30";
bname[	43	] = "Heidi Rojas";					bdate[	43	] = "August 22";
bname[	44	] = "Jacob Rojas";					bdate[	44	] = "April 26";				// Carlos' son
bname[	45	] = "Jaime Alejandro Rojas";		bdate[	45	] = "November 23";
bname[	46	] = "Janie Rojas";					bdate[	46	] = "September 8";
bname[	47	] = "Jasmine Villareal";			bdate[	47	] = "January 15";
bname[	48	] = "Jay Rojas";					bdate[	48	] = "January 12";
bname[	49	] = "Jessica Rae Rojas Cantu";		bdate[	49	] = "September 28";
bname[	50	] = "Joey Cavazos";					bdate[	50	] = "Unknown";
bname[	51	] = "Jonathan Mendoza";				bdate[	51	] = "August 1";				// Michelle's son
bname[	52	] = "Juan Enrique Gonzalez III";	bdate[	52	] = "December 11";
bname[	53	] = "Juan Enrique Gonzalez Jr.";	bdate[	53	] = "May 30";
bname[	54	] = "Julio Max Rojas";				bdate[	54	] = "October 22";
bname[	55	] = "Karina Renee Garza";			bdate[	55	] = "June 27";
bname[	56	] = "Kayla Renee Gonzalez";			bdate[	56	] = "April 17";				// Melissa's daughter
bname[	57	] = "Ken Carmichael";				bdate[	57	] = "October 14";
bname[	58	] = "Leslie Ann Escoto";			bdate[	58	] = "July 9";				// Will's daughter
bname[	59	] = "Lizette Rojas";				bdate[	59	] = "July 23";
bname[	60	] = "Maria Benita Picazo Rojas";	bdate[	60	] = "Unknown";
bname[	61	] = "Marlen Rojas";					bdate[	61	] = "February 14";
bname[	62	] = "Matilde Rojas";				bdate[	62	] = "August 11"
bname[	63	] = "Melissa Yvette Gonzalez";		bdate[	63	] = "July 20";
bname[	64	] = "Michelle Gonzalez (Escoto)";	bdate[	64	] = "August 29";
bname[	65	] = "Michelle Mendoza";				bdate[	65	] = "October 31";
bname[	66	] = "Mine Rojas";					bdate[	66	] = "January 22";
bname[	67	] = "Monica Villarreal";			bdate[	67	] = "May 23";
bname[	68	] = "Natalie Garza";				bdate[	68	] = "April 25";				// Carlos/Chris' sister
bname[	69	] = "Nicolas Rei Rojas";			bdate[	69	] = "August 31";
bname[	70  ] = "Nikki Rojas";					bdate[	70	] = "April 18";
bname[	71	] = "Oscar Antonio Rojas";			bdate[	71	] = "July 16";
bname[	72	] = "Oscar Rojas";					bdate[	72	] = "October 22";
bname[	73	] = "Osiel Villareal Jr.";			bdate[	73	] = "October 25";
bname[	74	] = "Osiel Villarreal";				bdate[	74	] = "August 4";
bname[	75	] = "Priscilla Clarisse Gonzalez";	bdate[	75	] = "April 28";				// Melissa's daughter
bname[	76	] = "Raeann Elizabeth Rojas";		bdate[	76	] = "August 11";
bname[	77	] = "Ricardo Rojas";				bdate[	77	] = "July 28";
bname[	78	] = "Robert Atkinson";				bdate[	78	] = "April 14";
bname[	79	] = "Roberto Rojas";				bdate[	79	] = "March 10";
bname[	80	] = "Rogerio Rojas";				bdate[	80	] = "February 2";
bname[	81	] = "Rolando Rojas";				bdate[	81	] = "July 28";
bname[	82	] = "Ruben Rojas";					bdate[	82	] = "August 3";
bname[	83	] = "Willie Escoto";				bdate[	83	] = "April 7";
bname[	84	] = "Erykah Judith Manzano";		bdate[	84	] = "October 13";  			// Karina's daughter
bname[	85	] = "Hailey Munoz";					bdate[	85	] = "January 25";  			// Lizette's daughter
bname[	86	] = "Laura Herzet (Germany)";		bdate[	86	] = "April 15";
bname[	87	] = "Katherine Edi Rojas";		    bdate[	87	] = "December 29";			// Chris' daughter
bname[	88	] = "Jaylynn Rojas";				bdate[	88	] = "January 29";
bname[	89	] = "Jaime Estrada";				bdate[	89	] = "September 16";
bname[	90	] = "Ruben Martinez";				bdate[	90	] = "February 2";
bname[	91	] = "Serena Hill";					bdate[	91	] = "April 4";			// Claudia's daughter
bname[	92	] = "Christopher Andres Escoto";	bdate[	92	] = "August 20";
bname[  93  ] = "Alissa Jean Rojas";			bdate[  93  ] = "January 8";        // Frankie's daughter
bname[  94  ] = "Camila Bae Loera";				bdate[  94  ] = "April 24";			// Lizette's daughter
bname[  95  ] = "Alayna LeAnn Pena";			bdate[  95  ] = "June 8";			// Frankie's daughter
bname[  96  ] = "Arielle Rojas";				bdate[  96  ] = "July 28";
bname[  97  ] = "Kariana Garza";				bdate[  97  ] = "May 18";
bname[  98  ] = "Oscar Gadriel Rojas";			bdate[  98  ] = "October 12";		// Oscarito's son
bname[  99  ] = "Isabella Grace Pena";			bdate[  99  ] = "June 25";			// Nikki's daughter
bname[  100  ] = "Louie Pena";				    bdate[  100  ] = "February 27";
bname[  101  ] = "Jesse Rodriguez";				bdate[  101  ] = "March 18";
bname[	102	 ] = "Jessa Ann Rodriguez";			bdate[	102	 ] = "August 12";       // Annika's daughter
bname[	103	 ] = "Gael Bastian Rojas";			bdate[	103	 ] = "April 18";		// Bryan's son
bname[	104	 ] = "Joey Loera Jr.";				bdate[	104	 ] = "August 24";
bname[	105  ] = "Grant Heeschen";			    bdate[	105	 ] = "March 25";
bname[	106  ] = "Arianna Renae Rios";			bdate[	106	 ] = "September 22";	// Kayla's daughter
bname[  107  ] = "Aniyah Rain Mendoza";		 	bdate[	107	 ] = "October 21";      // Michelle's son's daughter
bname[	108  ] = "Audree Renee";			    bdate[	108	 ] = "November 20";     // Annika's daughter
bname[	109  ] = "Tesia Elise Rojas";			bdate[	109	 ] = "January 20";      // Bryan's daughter
bname[	110	 ] = "Anastasia Luna Rojas";		bdate[	110	 ] = "May 31";   		// Oscarito's daughter
bname[	111	 ] = "Stella Moon Mendoza";  		bdate[	111	 ] = "August 11";		// Michelle's son's daughter
bname[	112	 ] = "Jeremy Rendon";  				bdate[	112	 ] = "February 26";		// 
bname[	113	 ] = "Jeremy Cole Rendon";  		bdate[	113	 ] = "July 15";			// 
bname[	114	 ] = "Larissa Rojas";  				bdate[	114	 ] = "October 7";		// Oscarito's wife
bname[	115	 ] = "Sandra Lopez";  				bdate[	115	 ] = "May 17";		    // Mom's caretaker
bname[	116 ] = "Alexander Kai Rios";  			bdate[	116	 ] = "January 21";		// Kayla's
bname[	117 ] = "Isaiah Ugalde";  				bdate[	117	 ] = "March 22";		// Priscilla's
bname[	118 ] = "Alyse April Rodriguez";  		bdate[	118	 ] = "April 6";		    // Annika's
bname[	119 ] = "Ayden Ace Rios";				bdate[	119	 ] = "June 14";			// Kayla's
bname[	120 ] = "Caleb Ugalde";					bdate[	120	 ] = "Nov 9";			// Priscilla's


  // This function updates the birthdate text field

  function update_birthdate() {
    p = document.pick.person.value;
    if (p == 0) {
      alert("You must select a name.")
    } else {
      document.pick.birthdate.value = bdate[p];
    }
  }
