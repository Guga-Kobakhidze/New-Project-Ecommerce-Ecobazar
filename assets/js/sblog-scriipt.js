// For Single Blog //

document.addEventListener("DOMContentLoaded", function () {
  const urlParams = new URLSearchParams(window.location.search);
  const productID = urlParams.get("productID");

  const products = [
    {
      id: "1",
      title:
        "Maecenas tempor urna sed quam mollis, a placerat dui fringill Suspendisse.",
      subtitle: `Maecenas lacinia felis nec placerat sollicitudin. Quisque placerat dolor at scelerisque imperdiet. Phasellus tristique felis dolor. `,
      imageUrl: "assets/images/Sblog/main.png",
      sImageUrl1: "assets/images/Sblog/bio1.png",
      sImageUrl2: "assets/images/Sblog/bio2.png",
      userImg: "assets/images/Sblog/Images.png",
      userName: "Cameron Williamson",
    },
    {
      id: "2",
      title: "Eget lobortis lorem lacinia. Vivamus pharetra semper,",
      subtitle: `Eget lobortis lorem lacinia. Vivamus pharetra semper,`,
      imageUrl: "assets/images/News/image5.png",
      sImageUrl1: "assets/images/Sblog/bio1.png",
      sImageUrl2: "assets/images/Sblog/bio2.png",
      userImg: "assets/images/Sblog/User5.png",
      userName: "John Bohn",
    },
    {
      id: "3",
      title: "Maecenas blandit risus elementum mauris malesuada. ",
      subtitle: `Maecenas blandit risus elementum mauris malesuada. `,
      imageUrl: "assets/images/News/image6.webp",
      sImageUrl1: "assets/images/Sblog/bio1.png",
      sImageUrl2: "assets/images/Sblog/bio2.png",
      userImg: "assets/images/Sblog/User3.png",
      userName: "guenn loren",
    },
    {
      id: "4",
      title: "Maecenas blandit risus elementum mauris malesuada.  ",
      subtitle: `Maecenas blandit risus elementum mauris malesuada.  `,
      imageUrl: "assets/images/News/image7.webp",
      sImageUrl1: "assets/images/Sblog/bio1.png",
      sImageUrl2: "assets/images/Sblog/bio2.png",
      userImg: "assets/images/Sblog/User1.png",
      userName: "guenn loren",
    },
    {
      id: "5",
      title: "Eget lobortis lorem lacinia. Vivamus pharetra semper, ",
      subtitle: `Eget lobortis lorem lacinia. Vivamus pharetra semper, `,
      imageUrl: "assets/images/News/image8.jpg",
      sImageUrl1: "assets/images/Sblog/bio1.png",
      sImageUrl2: "assets/images/Sblog/bio2.png",
      userImg: "assets/images/Sblog/User4.png",
      userName: "Lisa loren",
    },
    {
      id: "6",
      title: "Maecenas blandit risus elementum mauris malesuada. ",
      subtitle: `Maecenas blandit risus elementum mauris malesuada. `,
      imageUrl: "assets/images/News/image9.jpg",
      sImageUrl1: "assets/images/Sblog/bio1.png",
      sImageUrl2: "assets/images/Sblog/bio2.png",
      userImg: "assets/images/Sblog/User2.png",
      userName: "Lonner loren",
    },
  ];

  const product = products.find((p) => p.id === productID);

  if (product) {
    const productTitle = document.getElementById("productTitle");
    const productSubtitle = document.getElementById("productSubtitle");
    const productImage = document.getElementById("MainImg");
    const productUserImg = document.getElementById("userImg");
    const productUserName = document.getElementById("userName");

    const productBioImages = document.getElementsByClassName("bio-img");
    for (let i = 0; i < productBioImages.length; i++) {
      productBioImages[i].src = product["sImageUrl" + (i + 1)];
    }

    productUserImg.src = product.userImg;
    productImage.src = product.imageUrl;
    productUserName.textContent = product.userName;
    productTitle.textContent = product.title;
    productSubtitle.textContent = product.subtitle;
  }
});
