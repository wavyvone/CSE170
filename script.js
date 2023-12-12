function HotDrinkScroll() {
    document.getElementsByTagName('h2')[0].scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest"
      });
    // will scroll to hot drinks
  }

function ColdDrinkScroll() {
    document.getElementsByTagName('h2')[1].scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest"
      });
    // scroll to cold drinks
}

function FoodScroll() {
    document.getElementsByTagName('h2')[2].scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest"
      });
}

function BagIncrement() {
    var bagIcon = document.getElementById('bag');
    var currNum = parseInt(bagIcon.getAttribute("datacount"));
    if (isNaN(currNum)) {
        currNum = 0;
    }
    var newCount = currNum + 1;
    bagIcon.setAttribute("datacount", newCount);
}

function changeHeart(lovely) {
    let hearts = [
      "https://static.thenounproject.com/png/5054463-200.png",
      "https://cdn1.iconfinder.com/data/icons/app-user-interface-flat/64/like_love_heart_app_user_interface-1024.png"
    ];
    var heartimg = document.getElementById(lovely);
    let currNum = parseInt(
      heartimg.getAttribute("val"));
    let newImgNum = (currNum + 1) % 2;

    heartimg.setAttribute("src", hearts[newImgNum]);

    heartimg.setAttribute("val", newImgNum);
  }