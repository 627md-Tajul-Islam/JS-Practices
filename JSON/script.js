  //           JSON.stringify is used to make any object into a string
  //         const user = {
  //             id: 145,
  //             "name": "tajul",
  //             "lover": {
  //                 name: "jamila",
  //                 favFood: "pizza"
  //             },
  //             "friendAge": [12, 23, 56],
  //             "friend": ["kamal", "jamal", "Amal"],
  //         };
  //         const userFrom = JSON.stringify(user);
  //         console.log(userFrom);

  //         const userFromJSON = JSON.parse(userFrom);
  //         console.log(userFromJSON);

  //   JSON.parse is used to make any JSON string into an object

  document.getElementById("submit").addEventListener("click", function() {
      const title = document.getElementById('content').value;
      const body = document.getElementById('post').value;
      const post = {
          title: title,
          body: body
      };
      nowPostToServer(post);

  })

  function nowPostToServer(postInfo) {
      fetch('https://jsonplaceholder.typicode.com/posts', {
              method: 'POST',
              body: JSON.stringify(postInfo),
              headers: {
                  'Content-type': 'application/json; charset=UTF-8',
              },
          })
          .then((response) => response.json())
          .then((data) => console.log(data));
  }


  function displayUser(users) {
      const userNames = users.map(user => user.username);
      const ul = document.getElementById("user-container")
      for (let i = 0; i < userNames.length; i++) {
          const user = userNames[i];
          const li = document.createElement("li");
          li.innerText = user;
          ul.appendChild(li);
      }
  }