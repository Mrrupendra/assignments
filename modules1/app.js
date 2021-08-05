
const readline = require("readline")
const readline_1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let books = ["Malgudi Days","Godan","2 States","Sacred Games"];

console.log("This is the Book Show Menu, their are some options are as follows:-");

const main = () => {

                        readline_1.question("Select/type option <1> for Show all the books || Select/type option <2> for Add a new book || Select/type option <3> for Quit: ",
                                function(option){
                                    if(option == 1){
                                        books.join('');
                                        console.log(books);
                                        main();
                                    }
                                    else if(option == 2){
                                        readline_1.question("Please write the name of the book to add: ", function(nameOfBook){
                                                books.push(nameOfBook);
                                                console.log(`${nameOfBook} book is added successfully`);
                                                main();
                                        });
                                    }
                                    else if(option == 3){
                                        readline_1.question("Are you sure you want to quit - press Y to quit or press N to stay: ",function(ans){
                                                if(ans == "Y" || ans == "y"){
                                                    readline_1.close();
                                                }
                                                else if(ans == "N" || ans == "n"){
                                                    main();
                                                }
                                        })
                                    }
                                    else{
                                        console.log("You have selected an invalid entry so please press 1, 2 or 3: ");
                                        main();
                                    }
                         });
                   }

                   main();

              readline_1.on("close", function(){
                console.log("Bye Bye");
            })
            
            