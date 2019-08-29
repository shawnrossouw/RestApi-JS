let name = "user";

function render(user) {
  document.querySelector(".image").src = user.avatar_url;
  document.querySelector(".name").innerHTML = user.name;
  document.querySelector(".company").innerHTML = user.company;
  document.querySelector(".bio").innerHTML = user.bio;
  document.querySelector(".blog").innerHTML = user.blog;
}

fetch("https://api.github.com/users/shawnrossouw")
  .then(req => req.json())
  .then(data => {
    console.log(data);
    render(data);
  });

//js promises is a way to use data from a request before it arrives.
//A promise receives 2 arguments which are functions, i.e resolve and reject.
//
