/*

@author Rebecca Viegas
@purpose This code is a to-do list "application" designed for the user to store and complete tasks based on the data they enter. All tasks are constructed based on predefined constructors and are stored in arrays for reference. Click on view tasks to view all tasks that are created and stored on the app.

It is expected that this code will expand to include more robust task items and will later have the ability to be updated and deleted based on the user's choice.


*/


//START IIFE
(function(){

    window.onload = function(){

        showData();

    }

    // GET THE CURRENT DATE AND TIME //

    //get full date for display
    var n = new Date();

    //get and display current day of the week
    var d = n.getDay();
    var day;
 
    //get and display current month
    var m = n.getMonth();
    var month;
 
    //get date of the month
    var date = n.getDate();
 
    //get current year
    var year = n.getFullYear();

    var hour = n.getHours();

    var minutes = n.getMinutes();

    //add zero to minutes less than 10 to ensure it is formatted correctly
    if(minutes < 10){

        var minutes = "0" + n.getMinutes();

    }else{

        var minutes = n.getMinutes();

    }

    // S W I T C H   S T A T E M E N T S  F O R  D A Y  O F  W E E K  A N D  M O N T H // 
 
    //switch statement to retrieve current day of the week
    switch(d){
        case 0:
            day = "Sun";
            break;
        case 1:
            day = "Mon";
            break;
        case 2:
            day = "Tues";
            break;
        case 3:
            day = "Wed";
            break;
        case 4:
            day = "Thurs";
            break;
        case 5:
            day = "Fri";
            break;
        case 6:
            day = "Sat";
            break;
        default:
            alert("Current Day of the Week Not Available");
    } 
 
    //switch statement to retrieve current month
    switch(m){
        case 0:
            month = "Jan";
            break;
        case 1:
            month = "Feb";
            break;
        case 2:
            month = "Mar";
            break;
        case 3:
            month = "Apr";
            break;
        case 4:
            month = "May";
            break;
        case 5:
            month = "June";
            break;
        case 6:
            month = "July";
            break;
        case 7:
            month = "Aug";
            break;
        case 8:
            month = "Sep";
            break;
        case 9:
            month ="Oct";
            break;
        case 10:
            month = "Nov";
            break;
        case 11:
            month ="Dec";
            break;
        default:
            alert("Current Month of the Year Not Available");
    } 

    var todaysDate = day + " " + month + " " + date + " " + year + " @ " + hour + ":" + minutes; 

     // STORE ALL TASKS IN THEIR OWN RESPECTIVE ARRAYS //
     var arrayOfTasks_normal = new Array;	
     var arrayOfTasks_appt = new Array;
     var arrayOfTasks_shop = new Array;
     var arrayOfTasks_bill = new Array;

    var i = 1;

    // T O G G L E  S U B  M E N U  O F  A D D  T A S K //

    //get the option to add a new task from header nav
    var addNewTask = document.getElementById('addNewTask');
    var viewAllTasks = document.getElementById('viewTask');

    var cancelTaskBtn_normal = document.getElementById('cancelBtn_normal');
    var cancelTaskBtn_appt = document.getElementById('cancelBtn_appt');
    var cancelTaskBtn_shopping = document.getElementById('cancelBtn_shopping');
    var cancelTaskBtn_bill = document.getElementById("cancelBtn_bill");

    //get the value of the initial task description
    var getTask = document.getElementById('taskDesc');

    //get div that will show the task description above
    var showTaskDesc = document.getElementById('displayTaskDesc');
    var showTaskDesc2 = document.getElementById('displayTaskDesc2');
    var showTaskDesc3 = document.getElementById('displayTaskDesc3');
    var showTaskDesc4 = document.getElementById('displayTaskDesc4');

    //grab user's selected priority input for task
    var priorityNum = document.getElementById('dropDownNum');
  
    //get the IDS of the FOUR initial buttons to identify what type of task this will be
    var normalBtn = document.getElementById('normalBtn');
    var apptBtn = document.getElementById('apptBtn');
    var shoppingBtn = document.getElementById('shoppingBtn');
    var billBtn = document.getElementById('billBtn');

    //add event listeners to all task buttons 
    normalBtn.addEventListener("click", normalTask);
    apptBtn.addEventListener("click", apptTask);
    shoppingBtn.addEventListener("click", shoppingTask);
    billBtn.addEventListener("click", billTask);

    addNewTask.addEventListener("click", showTaskLoad);

    viewAllTasks.addEventListener("click", showAllTasks);

    //add event listeners to all buttons that cancel the current task creation
    cancelTaskBtn_normal.addEventListener("click", cancelTask);
    cancelTaskBtn_appt.addEventListener("click", cancelTask);
    cancelTaskBtn_shopping.addEventListener("click", cancelTask);
    cancelTaskBtn_bill.addEventListener("click", cancelTask)

    // L O A D  I N T R O  A P P  T E X T //
    $(document).ready(function(){

        $('.introText').slideDown(2000)

    })

    // PRELIMINARY FUNCTIONS THAT CONTORL BASIC BEHAVIOURS OF APP //

    // S H O W  B E G I N N I N G  T A S K  L O A D //
    function showTaskLoad(){

        getTask.value = "";
        
        // HIDE OTHER DIVS AND SHOW NORMAL TASK DIV //
        $(".addTaskDisplay-regular").hide("fast", function(){

            $(".introText").hide("fast", function(){

                $(".addTaskDisplay-appt").hide("fast", function(){

                    $(".addTaskDisplay-billPayment").hide("fast", function(){

                        $(".addTaskDisplay-shop").hide("fast", function(){

                            $(".showAllTasksDisplay").hide("fast", function(){

                                $(".showBasic").show("fast");
                

                            });

                        });

                    });

                });

            });

        });

    }

    // C A N C E L  B U T T O N   A N D   S T A R T  A T  I N I T I A L  T A S K   L O A D //
    function cancelTask(){

        getTask.value = "";

        $(".addTaskDisplay-regular").hide("fast", function(){

            $(".introText").hide("fast", function(){

                $(".addTaskDisplay-appt").hide("fast", function(){

                    $(".addTaskDisplay-shop").hide("fast", function(){

                        $(".addTaskDisplay-billPayment").hide("fast", function(){                        

                            $(".showBasic").show("fast");

                            });

                        });

                    });

                });

            });

            showTaskLoad();
            
        };

      
    // FUNCTIONS - MAIN TASKS THAT CONTROL CONTSTRUCTOR BEHAVIOUR // 


    // S T A R T   N O R M A L   T A S K //
        function normalTask(){

            // 	Normal Task constructor
            function Task(desc,priority) {
                
                this.id         = undefined;
                this.desc   	= desc;
                this.priority 	= priority; 
                this.complete 	= false;
                this.entryDate	= null;		
                
            } //*** END Task() constructor

               

            //ensure the user has entered a task description
            if(getTask.value === ""){

                alert("Enter a task description to continue");
                
            }

            else{

                // HIDE OTHER DIVS AND SHOW NORMAL TASK DIV //
                $(".showBasic").hide("fast", function(){
        
                    $(".addTaskDisplay-appt").hide("fast", function(){
        
                        $(".addTaskDisplay-shop").hide("fast", function(){

                            $(".addTaskDisplay-billPayment").hide("fast", function(){
                            
                                $(".addTaskDisplay-regular").show("fast");

                            });
                            
                        });
        
                    });
        
                });
        
                //show the user's task description 
                showTaskDesc.innerHTML = getTask.value;

                 //attach event handler to ADD NEW TASK button to submit user's inputted values
                 var submit_normal = document.getElementById("submitBtn_normal");
                 submit_normal.addEventListener("click", pushNewTask_normal);

                function pushNewTask_normal(){  

                    submit_normal.removeEventListener("click", pushNewTask_normal);
                    //new instance of NORMAL TASK constructor
                    var addNewNormalTask = new Task;

                    //store the value of the getTask into new instance of constructor
                    addNewNormalTask.desc = getTask.value;

                    var priorityValue;

                    //redefine priority value based on the integer
                    if(priorityNum.value === "1"){
               
                       priorityValue = "must do";
               
                   }else if(priorityNum.value === "2"){
               
                       priorityValue = "should do";
               
                   }else if(priorityNum.value === "3"){
               
                       priorityValue = "nice to do";
               
                   }
          
                    //store the value of the priority 
                    addNewNormalTask.priority = priorityValue;
              
                    //store today's date in instance
                    addNewNormalTask.entryDate = todaysDate;

                    //add an ID to the new task and increment up 
                    addNewNormalTask.id = i++;
              
                    //finally push the constructor to an array
                    // arrayOfTasks_normal.push(addNewNormalTask);  
                    arrayOfTasks_normal.push(addNewNormalTask);  

                    showTaskLoad();

                    //create toString method to override default toString on object and concatenate for proper display on HTML
                    Task.prototype.toString	= function normalToString(){

                        // returns string containing object's property values
                        return 'ID: ' + this.id + '<br>Description: ' + this.desc + '<br>Priority:  ' + this.priority + '<br>Completed? ' + this.complete + '<br>Created: ' + this.entryDate; 
                                        
                    }	//*** END TASK.tostring() method

                   //display the new task to page in a list item
                    var showNormal = document.getElementById('displayNormalTasks');
                    showNormal.innerHTML += "<li class='taskItems'>" + addNewNormalTask.toString() + "</li>";

                    storeData();


                }
              
            } //END OF IF/ELSE STATEMENT
            
            submit_normal.addEventListener("click", pushNewTask_normal);
          
        } // END OF NORMAL TASK FUNCTION 


        // S T A R T  A P P O I N T M E N T  T A S K //
        function apptTask(){

            // 	APPOINTMENT Task constructor
            function Appointment(desc,priority) {
                    
                this.id         = undefined;
                this.desc   	= desc;
                this.priority 	= priority; 
                this.complete 	= false;
                this.entryDate	= null;	
                this.apptDate   = "";
                this.apptTime   = "";
                this.apptPlace  = "";	
                    
            } //*** END APPOINTMENT() constructor

            if(getTask.value === ""){

                alert("Enter a task description to continue");

            }else{

                // HIDE OTHER DIVS AND SHOW NORMAL TASK DIV //
                $(".showBasic").hide("fast", function(){
        
                    $(".addTaskDisplay-regular").hide("fast", function(){
        
                        $(".addTaskDisplay-shop").hide("fast", function(){

                            $(".addTaskDisplay-billPayment").hide("fast", function(){
        
                                $(".addTaskDisplay-appt").show("fast");

                            });
                            
                        });
        
                    });
        
                });
        
                    //show the user's task description 
                    showTaskDesc2.innerHTML = getTask.value;

                     //get value of appointment DATE field
                     var getApptDate = document.getElementById("inputDate");

                     //clear this field to start form again
                     getApptDate.value= "";

                     //get value of appointment TIME field
                     var getApptTime = document.getElementById("inputTime");

                    //clear this field to start form again
                     getApptTime.value = "";

                     //get value of the appointment PLACE field
                     var getApptPlace = document.getElementById("taskPlace");

                    //clear this field to start form again
                     getApptPlace.value = "";

                    //attach event handler to ADD NEW TASK button to submit user's inputted values
                    var submit_appt = document.getElementById("submitBtn_appt");
                    submit_appt.addEventListener("click", pushNewTask_appt);

                    //get the values of the input fields and check that they have values
                    
                        function pushNewTask_appt(){ 

                            if(getApptDate.value === ""){

                                alert('Please enter a valid date for your appointment')
        
                            }else if(getApptTime.value === ""){
        
                                alert('Please enter a valid time for your appointment')
    
                            }else if(getApptPlace.value === ""){
    
                                alert('Please enter a valid location for your appointment')
                            }
        
                            else{

                                submit_appt.removeEventListener("click", pushNewTask_appt);

                                //new instance of APPOINTMENT TASK constructor
                                var addNewApptTask = new Appointment;

                                var priorityValue;

                                //redefine priority value based on the integer
                                if(priorityNum.value === "1"){
                           
                                   priorityValue = "must do";
                           
                               }else if(priorityNum.value === "2"){
                           
                                   priorityValue = "should do";
                           
                               }else if(priorityNum.value === "3"){
                           
                                   priorityValue = "nice to do";
                           
                               }

                                //store the value of the priority 
                                addNewApptTask.priority = priorityValue;

                                addNewApptTask.desc = getTask.value;

                                //store today's date in instance
                                addNewApptTask.entryDate = todaysDate;

                                addNewApptTask.id = i++;

                                addNewApptTask.apptDate = getApptDate.value;
                                addNewApptTask.apptTime = getApptTime.value;
                                addNewApptTask.apptPlace = getApptPlace.value;
  
                                //finally push the constructor to an array
                                arrayOfTasks_appt.push(addNewApptTask);

                                showTaskLoad();

                                //create toString method to override default toString on object and concatenate for proper display on HTML
                                Appointment.prototype.toString	= function apptToString(){

                                    // returns string containing object's property values
                                    return 'ID: ' + this.id + '<br>Description: ' + this.desc + '<br>Priority:  ' + this.priority + '<br>Appointment Date: ' + this.apptDate + '<br>Appointment Time: ' + this.apptTime  + '<br>Appointment Place: ' + this.apptPlace + '<br>Completed? ' + this.complete + '<br>Created: ' + this.entryDate; 
                                                    
                                }	//*** END TASK.tostring() method

                                //display the new task to page in a list item
                                var showAppts = document.getElementById('displayApptTasks');
                                showAppts.innerHTML += "<li class='taskItems'>" + addNewApptTask.toString() + "</li>";

                            } //END OF IF/ELSE STATEMENT

                    } //END OF PUSH TASK TO ARRAY FUNCTION 
                    submit_appt.addEventListener("click", pushNewTask_appt);

            } // END OF IF/ELSE STATEMENT

    
        } // END OF APPOINTMENT TASK 
    
    
        // S T A R T  S H O P P I N G  T A S K // 
        function shoppingTask(){

             // SHOPPING Task constructor
             function Shopping(desc,priority) {
                
                this.id         = undefined;
                this.desc   	= desc;
                this.priority 	= priority; 
                this.complete 	= false;
                this.entryDate	= null;	
                this.items      = "";
                this.notes      = "";	
                
            } //*** END Shopping() constructor

            //void top nav buttons for user 
            // addNewTask.removeEventListener("click", showTaskLoad);

            if(getTask.value === ""){

                alert("Enter a task description to continue");

            }else{

                // HIDE OTHER DIVS AND SHOW NORMAL TASK DIV //
                $(".showBasic").hide("fast", function(){
        
                    $(".addTaskDisplay-regular").hide("fast", function(){
        
                        $(".addTaskDisplay-appt").hide("fast", function(){

                            $(".addTaskDisplay-billPayment").hide("fast", function(){
        
                                $(".addTaskDisplay-shop").show("fast");

                            });
                            
                        });
        
                    });
        
                });
        
                    //show the user's task description 
                    showTaskDesc3.innerHTML = getTask.value;

                    // D E F I N E   C O N S T R U C T O R   F O R   A P P O I N T M E N T   T A S K //

                    //store any user input notes
                    var shopNotes = document.getElementById("shopNotes");

                    //keep array to store shopping list items
                    var eachShoppingItem = new Array;

                    //grab the button to add individual items
                    var addItemsBtn = document.getElementById("addShoppingItems");

                    addItemsBtn.addEventListener("click", pushShopItems);

                     //attach event handler to ADD NEW TASK button to submit user's inputted values
                     var submit_shop = document.getElementById("submitBtn_shopping");
                     submit_shop.addEventListener("click", pushNewTask_shop);

                    function pushShopItems(){

                        //grab user's input to add items to shopping list
                        var addItems = document.getElementById("shopItem");

                        eachShoppingItem.push(addItems.value);

                        addItems.value = "";

                    }

                    //check input fields to ensure values are present
                    function pushNewTask_shop(){ 
                        
                        if(eachShoppingItem.length < 1){

                            alert('you should add at least one item to your shopping list!');

                        }else{

                            submit_shop.removeEventListener("click", pushNewTask_shop);

                            //new instance of APPOINTMENT TASK constructor
                            var addNewShopTask = new Shopping;

                            var priorityValue;

                            //redefine priority value based on the integer
                            if(priorityNum.value === "1"){
                       
                               priorityValue = "must do";
                       
                           }else if(priorityNum.value === "2"){
                       
                               priorityValue = "should do";
                       
                           }else if(priorityNum.value === "3"){
                       
                               priorityValue = "nice to do";
                       
                           }

                              //store today's date in instance
                            addNewShopTask.entryDate = todaysDate;

                            //store the value of the priority 
                            addNewShopTask.priority = priorityValue;

                            addNewShopTask.id = i++;

                            addNewShopTask.desc = getTask.value;

                            addNewShopTask.items = eachShoppingItem;

                            //add any notes the user enters to the instance of constuctor
                            addNewShopTask.notes = shopNotes.value;

                            //push full task to stored array
                            arrayOfTasks_shop.push(addNewShopTask);
    
        
                            showTaskLoad();

                            //create toString method to override default toString on object and concatenate for proper display on HTML
                            Shopping.prototype.toString	= function shoppingToString(){

                                // returns string containing object's property values
                                return 'ID: ' + this.id + '<br>Description: ' + this.desc + '<br>Priority:  ' + this.priority + '<br>Items: ' + this.items + '<br>Notes: ' + this.notes  + '<br>Completed? ' + this.complete + '<br>Created: ' + this.entryDate; 
                                                    
                            }	//*** END TASK.tostring() method

                            //display the new task to page in a list item
                            var showShopping = document.getElementById('displayShoppingTasks');
                            showShopping.innerHTML += "<li class='taskItems'>" + addNewShopTask.toString() + "</li>";


                        } //END OF IF/ELSE STATEMENT

                    } // END OF PUSH SHOPPING TASK TO ARRAY

                    submit_shop.addEventListener("click", pushNewTask_shop);
                
                } //END OF IF/ELSE 

            } //END OF SHOPPING TASK 


            /*

            THIS CONSTRUCTOR REPRESENTS A NEW SET OF DATA THAT CAN BE ADDED BY THE USER.
            This constructor defines a standard bill payment that the user needs to make, including the specific details like the amount, due date and occurence. It is based on the other constructors, but contains a field that has not yet been used (amount) and is controlled by a reg exp to ensure the format for amount is correctly identified by the user. 

            */


        // S T A R T   B I L L  P A Y M E N T   T A S K  //

        function billTask(){

             // BILL PAYMENT Task constructor
             function BillPayment(desc,priority) {
                
                this.id         = undefined;
                this.desc   	= desc;
                this.priority 	= priority; 
                this.complete 	= false;
                this.entryDate	= null;	
                this.billPaymentDate = "";
                this.billPaymentAmount = ""
                this.billPaymentOccurence = "";
                
            } //*** END BILL PAYMENT() constructor

            //void top nav buttons for user 
            // addNewTask.removeEventListener("click", showTaskLoad);

            if(getTask.value === ""){

                alert("Enter a task description to continue");

            }else{

                // HIDE OTHER DIVS AND SHOW NORMAL TASK DIV //
                $(".showBasic").hide("fast", function(){
        
                    $(".addTaskDisplay-regular").hide("fast", function(){
        
                        $(".addTaskDisplay-appt").hide("fast", function(){

                            $(".addTaskDisplay-shop").hide("fast", function(){
        
                                $(".addTaskDisplay-billPayment").show("fast");

                            });
                            
                        });
        
                    });
        
                });
        
                    //show the user's task description 
                    showTaskDesc4.innerHTML = getTask.value;

                    //get the due date for the bill payment
                    var billDate = document.getElementById("billDate");

                    //get the value of the amount field
                    var billPayAmount = document.getElementById("billAmount");
                    
                    //set pattern for regular expression to make sure that the amount entered is valid
                    var amountPattern = /^\d+(\.\d{1,2})?$/;

                    //get the type of occurence for the bill payment from the drop down menu
                    var getOccurence = document.getElementById("dropDownBill");

                    //get the button that will add the inputs to task constructor
                    var submit_bill = document.getElementById('submitBtn_bill');
                    submit_bill.addEventListener("click", pushNewTask_bill);

                    function pushNewTask_bill(){

                        //test the bill amount entry to ensure it is valid
                        if(amountPattern.test(billAmount.value) === false){

                            alert("no match - invalid amount");

                        }else if(billDate.value === ""){

                            alert('no date entered');

                        }else{

                            submit_bill.removeEventListener("click", pushNewTask_bill);

                            //new instance of APPOINTMENT TASK constructor
                            var addNewBillTask = new BillPayment;

                            var priorityValue;

                            //redefine priority value based on the integer
                            if(priorityNum.value === "1"){
                       
                               priorityValue = "must do";
                       
                           }else if(priorityNum.value === "2"){
                       
                               priorityValue = "should do";
                       
                           }else if(priorityNum.value === "3"){
                       
                               priorityValue = "nice to do";
                       
                           }

                            //set today's date and current time to entry date
                            addNewBillTask.entryDate = todaysDate;

                            addNewBillTask.desc = getTask.value;

                            addNewBillTask.id = i++;

                            //get the priority for this task
                            addNewBillTask.priority = priorityValue;

                            //add new bill date to instance of bill payment
                            addNewBillTask.billPaymentDate = billDate.value;

                            //add amount to instance of bill payment constructor
                            addNewBillTask.billPaymentAmount = billPayAmount.value;

                             //add bill payment occurence to instance of bill constructor
                            addNewBillTask.billPaymentOccurence = getOccurence.value;

                            arrayOfTasks_bill.push(addNewBillTask);
    
                            showTaskLoad();

                            //create toString method to override default toString on object and concatenate for proper display on HTML
                            BillPayment.prototype.toString	= function billPaymentToString(){

                            // returns string containing object's property values
                            return 'ID: ' + this.id + '<br>Description: ' + this.desc + '<br>Priority:  ' + this.priority + '<br>Due: ' + this.billPaymentDate + '<br>Amount: $' + this.billPaymentAmount  + '<br>Occurence: ' + this.billPaymentOccurence + '<br>Completed? ' + this.complete + '<br>Created: ' + this.entryDate; 
                                                
                            }	//*** END TASK.tostring() method

                            //display the new task to page in a list item
                            var showBills = document.getElementById('displayBillTasks');
                            showBills.innerHTML += "<li class='taskItems'>" + addNewBillTask.toString() + "</li>";

                        } //END OF IF/ELSE STATEMENT

                    } // END OF PUSH NEW BILL PAYMENT

                    submit_bill.addEventListener("click", pushNewTask_bill);
    
                } //END OF IF/ELSE STATEMENT

            } // END OF BILL PAYMENT TASK

            // SHOW ALL STORED TASKS //

            function showAllTasks(){
            
                //get the length of all arrays
                var allTasks = arrayOfTasks_normal.length + arrayOfTasks_appt.length + arrayOfTasks_shop.length + arrayOfTasks_bill.length;

                //get the element to display total tasks
                var totalLength = document.getElementById('totalLength');

                //long total length into HTML element
                totalLength.innerHTML += allTasks;

                $(".addTaskDisplay-regular").hide("fast", function(){

                    $(".introText").hide("fast", function(){

                        $(".addTaskDisplay-appt").hide("fast", function(){

                            $(".addTaskDisplay-shop").hide("fast", function(){

                                $(".addTaskDisplay-billPayment").hide("fast", function(){    
                                    
                                    $(".showBasic").hide("fast", function(){      

                                        $(".showAllTasksDisplay").show("fast");

                                    });

                                });

                            });

                        });

                    });

                }); 

            } // END OF SHOW ALL TASKS FUNCTION

            function storeData(){

                var itemName = "normalArray" + x;

                // var totalofTasks = allTasks;

                // localStorage.setItem(totalofTasks, allTasks);

                for(var x = 0; x < arrayOfTasks_normal.length; x++){

                    // console.log(localStorage.setItem("itemName", arrayOfTasks_normal[x]));

                }
        
            };


            function showData(){
                
                var itemName = "normalArray" + x;

                // document.getElementById('totalLength').innerHTML = localStorage.getItem(totalofTasks);

                for(var x = 0; x < arrayOfTasks_normal.length; x++){

                    //get images of fruits to display in HTML div
                    var showNormal = document.getElementById('displayNormalTasks');
                    showNormal.innerHTML += "<li class='taskItems'>" + localStorage.getItem("itemName") + "</li>";
    
                }
            };


})(); // END OF IIFE