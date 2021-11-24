//Daniel Dietrich - Assignment 9 - INF 651
//NOTE: Each Answer is followed by a portion 
//of code to test the answer for each question.
//Additionally, I provided an alternate answer for 
//Question 2, as the function name doesn't entirly 
//match what we are asked to do.


////////////////////////
// NOTE: Use the API endpoints available at
// https://jsonplaceholder.typicode.com/
// to get the data required in these exercises.
// HINT: Read the documented Resources and Routes.
// Also the guide:
// https://jsonplaceholder.typicode.com/guide/
///////////////////////

// 1) Create a function named "getAllPosts".
// Use Fetch with Async/Await to request
// all the posts. The function should
// return all the posts as JSON data.

async function getAllPosts () {
const data = await fetch("https://jsonplaceholder.typicode.com/posts");
const jsonData = await data.json();
return  jsonData;
}

async function q1test () { // Code to test Question #1 answer.
    const test1Data = await getAllPosts();
    console.log("Question 1:")
    console.log(test1Data);
}
q1test();

// 2) Create a function named "getAllUsers".
// Use Fetch with Async/Await to request
// all the posts. The function should
// return all the posts as JSON data.

//THE SOLUTION TO THIS QUESTION AS WRITTEN IS THE SAME AS #1, BUT WITH A DIFFERENT FUNCTION NAME (AS THE INSTRUCTIONS STILL TELL US TO RETRIEVE THE POSTS):
async function getAllUsers () {
    const data = await fetch("https://jsonplaceholder.typicode.com/posts");
    const jsonData = await data.json();
    return  jsonData;
    }

//HOWEVER, BASED ON THE FUNCTION NAME, IT SEEMS LIKE IT MAY HAVE BEEN INTENDED TO RETURN JUST THE UNIQUE USER ID VALUES
//THE CODE TO DO THIS IS INCLUDED IN THE FOLLOWING COMMENTED SECTION:

//async function getAllUsers () {
//    const data = await fetch("https://jsonplaceholder.typicode.com/posts");
//    const jsonData = await data.json();
//    const userIDs =[];
//    const mapped = await jsonData.map((post) => {
//        let testVal = true;
//        for (i = 0; i < userIDs.length; i++){
//           if (userIDs[i] == post.userId){
//                testVal = false;
//            }
//        }
//        if(testVal){
//            userIDs.push(post.userId)
//        }
//    })
//    return userIDs;
//    }

async function q2test () { // Code to test Question #2 answer.
    const test2Data = await getAllUsers();
    console.log("Question 2:")
    console.log(test2Data);
}
q2test();

// 3) Create a function named "getComments".
// This function needs to accept a "postID"
// parameter.
// Use Fetch with Async/Await to request
// all the comments for the postID that
// is passed in as a parameter.
// The function should return all the
// comments for the requested postID
// as JSON data.

async function getComments (postID) {
const allComments = await fetch("https://jsonplaceholder.typicode.com/comments");
const jsonComments = await allComments.json();
const postComments = await jsonComments.filter((post) => {
    return post.postId == postID;
})
    return postComments;
}
setTimeout(q3test, 1000);// Code to test Question #3 answer.
async function q3test () { 
    const test3Data = await getComments(5);
    console.log("Question 3:")
    console.log(test3Data);
}


// 4) Create a function named "getUser".
// This function needs to accept a "userID"
// parameter.
// Use Fetch with Async/Await to request
// the data for the requested user.
// The function should return JSON data.

async function getUser (userID) {
    const allUsers = await fetch("https://jsonplaceholder.typicode.com/users");
    const jsonUsers = await allUsers.json();
    const requestedUser = await  jsonUsers.filter((user) => {
        return user.id == userID;
    })
        return requestedUser;
    }
    setTimeout(q4test, 2000);// Code to test Question #4 answer.
    async function q4test () { 
        const test4Data = await getUser(5);
        console.log("Question 4:")
        console.log(test4Data);
    }


// 5) Create a function named "getTodosForUser".
// This function needs to accept a "userID"
// parameter.
// Use Fetch with Async/Await to request
// all of the todos for the requested user.
// The function should return JSON data.

async function getTodosForUser (userID) {
    const allTodos = await fetch("https://jsonplaceholder.typicode.com/todos");
    const jsonTodos = await allTodos.json();
    const requestedTodos = await  jsonTodos.filter((todos) => {
        return todos.userId == userID;
    })
        return requestedTodos;
    }

    setTimeout(q5test, 2500);// Code to test Question #5 answer.
    async function q5test () { 
        const test5Data = await getTodosForUser(5);
        console.log("Question 5:")
        console.log(test5Data);
    }
