// For Single Page //

document.addEventListener("DOMContentLoaded", function () {
  const urlParams = new URLSearchParams(window.location.search);
  const productID = urlParams.get("productID");

  const products = [
    {
      id: "single-1",
      title: "Green Apple",
      description: `Class aptent taciti sociosqu ad litora torquent per conubia nostra, 
                        per inceptos himenaeos. Nulla nibh diam, blandit vel consequat nec, ultrices et 
                        ipsum. Nulla varius magna a consequat pulvinar.`,
      newPrice: "$14.99",
      oldPrice: "$20.99",
      imageUrl: "assets/images/Sproduct/0.jpg",
      smallImage1: "assets/images/singleProduct/apple-1.jpg",
      smallImage2: "assets/images/singleProduct/apple-2.jpg",
      smallImage3: "assets/images/singleProduct/apple-3.jpg",
      smallImage4: "assets/images/singleProduct/apple-4.jpg",
    },
    {
      id: "single-2",
      title: "Fresh Indian Malta",
      description: `Class aptent taciti sociosqu ad litora torquent per conubia nostra, 
                          per inceptos himenaeos. Nulla nibh diam, blandit vel consequat nec, ultrices et 
                          ipsum. Nulla varius magna a consequat pulvinar.`,
      newPrice: "$20.00",
      oldPrice: "",
      imageUrl: "assets/images/Sproduct/1.png",
      smallImage1: "assets/images/singleProduct/malta-1.png",
      smallImage2: "assets/images/singleProduct/malta-2.jpg",
      smallImage3: "assets/images/singleProduct/malta-3.webp",
      smallImage4: "assets/images/singleProduct/malta-4.jpg",
    },
    {
      id: "single-3",
      title: "Chinese cabbage",
      description: `Class aptent taciti sociosqu ad litora torquent per conubia nostra, 
                          per inceptos himenaeos. Nulla nibh diam, blandit vel consequat nec, ultrices et 
                          ipsum. Nulla varius magna a consequat pulvinar.`,
      newPrice: "$12.00",
      oldPrice: "",
      imageUrl: "assets/images/Sproduct/2.jpg",
      smallImage1: "assets/images/Sproduct/2.jpg",
      smallImage2: "assets/images/singleProduct/cabbage-2.jpg",
      smallImage3: "assets/images/singleProduct/cabbage-3.webp",
      smallImage4: "assets/images/singleProduct/cabbage-4.jpg",
    },
    {
      id: "single-4",
      title: "Green Lettuce",
      description: `Class aptent taciti sociosqu ad litora torquent per conubia nostra, 
                          per inceptos himenaeos. Nulla nibh diam, blandit vel consequat nec, ultrices et 
                          ipsum. Nulla varius magna a consequat pulvinar.`,
      newPrice: "$9.00",
      oldPrice: "",
      imageUrl: "assets/images/Sproduct/3.jpg",
    },
    {
      id: "single-5",
      title: "Eggplant",
      description: `Class aptent taciti sociosqu ad litora torquent per conubia nostra, 
                            per inceptos himenaeos. Nulla nibh diam, blandit vel consequat nec, ultrices et 
                            ipsum. Nulla varius magna a consequat pulvinar.`,
      newPrice: "$34.00",
      oldPrice: "",
      imageUrl: "assets/images/Sproduct/4.jpg",
    },
    {
      id: "single-6",
      title: "Big Potatoes",
      description: `Class aptent taciti sociosqu ad litora torquent per conubia nostra, 
                            per inceptos himenaeos. Nulla nibh diam, blandit vel consequat nec, ultrices et 
                            ipsum. Nulla varius magna a consequat pulvinar.`,
      newPrice: "$20.00",
      oldPrice: "",
      imageUrl: "assets/images/Sproduct/5.jpg",
    },
    {
      id: "single-7",
      title: "Corn",
      description: `Class aptent taciti sociosqu ad litora torquent per conubia nostra, 
                            per inceptos himenaeos. Nulla nibh diam, blandit vel consequat nec, ultrices et 
                            ipsum. Nulla varius magna a consequat pulvinar.`,
      newPrice: "$12.00",
      oldPrice: "",
      imageUrl: "assets/images/Sproduct/6.jpg",
    },
    {
      id: "single-8",
      title: "Fresh Cauliflower",
      description: `Class aptent taciti sociosqu ad litora torquent per conubia nostra, 
                            per inceptos himenaeos. Nulla nibh diam, blandit vel consequat nec, ultrices et 
                            ipsum. Nulla varius magna a consequat pulvinar.`,
      newPrice: "$12.00",
      oldPrice: "",
      imageUrl: "assets/images/Sproduct/7.jpg",
    },
    {
      id: "single-9",
      title: "Green Capsicum",
      description: `Class aptent taciti sociosqu ad litora torquent per conubia nostra, 
                            per inceptos himenaeos. Nulla nibh diam, blandit vel consequat nec, ultrices et 
                            ipsum. Nulla varius magna a consequat pulvinar.`,
      newPrice: "$9.00",
      oldPrice: "$20.99",
      imageUrl: "assets/images/Sproduct/8.webp",
    },
    {
      id: "single-10",
      title: "Green Chili",
      description: `Class aptent taciti sociosqu ad litora torquent per conubia nostra, 
                            per inceptos himenaeos. Nulla nibh diam, blandit vel consequat nec, ultrices et 
                            ipsum. Nulla varius magna a consequat pulvinar.`,
      newPrice: "$34.00",
      oldPrice: "",
      imageUrl: "assets/images/Sproduct/9.webp",
    },
    {
      id: "single-11",
      title: "Red Capsicum",
      description: `Class aptent taciti sociosqu ad litora torquent per conubia nostra, 
                            per inceptos himenaeos. Nulla nibh diam, blandit vel consequat nec, ultrices et 
                            ipsum. Nulla varius magna a consequat pulvinar.`,
      newPrice: "$12.00",
      oldPrice: "",
      imageUrl: "assets/images/Sproduct/10.jpg",
    },
    {
      id: "single-12",
      title: "Red Tomato",
      description: `Class aptent taciti sociosqu ad litora torquent per conubia nostra, 
                            per inceptos himenaeos. Nulla nibh diam, blandit vel consequat nec, ultrices et 
                            ipsum. Nulla varius magna a consequat pulvinar.`,
      newPrice: "$9.00",
      oldPrice: "20.99",
      imageUrl: "assets/images/Sproduct/11.png",
    },
    {
      id: "single-13",
      title: "Surjapur Mango",
      description: `Class aptent taciti sociosqu ad litora torquent per conubia nostra, 
                            per inceptos himenaeos. Nulla nibh diam, blandit vel consequat nec, ultrices et 
                            ipsum. Nulla varius magna a consequat pulvinar.`,
      newPrice: "$34.00",
      oldPrice: "",
      imageUrl: "assets/images/Sproduct/9.webp",
    },
    {
      id: "single-14",
      title: "Green Cucamber",
      description: `Class aptent taciti sociosqu ad litora torquent per conubia nostra, 
                            per inceptos himenaeos. Nulla nibh diam, blandit vel consequat nec, ultrices et 
                            ipsum. Nulla varius magna a consequat pulvinar.`,
      newPrice: "$14.99",
      oldPrice: "20.99",
      imageUrl: "assets/images/Sproduct/13.jpg",
    },
    {
      id: "single-15",
      title: "Red Chilli",
      description: `Class aptent taciti sociosqu ad litora torquent per conubia nostra, 
                            per inceptos himenaeos. Nulla nibh diam, blandit vel consequat nec, ultrices et 
                            ipsum. Nulla varius magna a consequat pulvinar.`,
      newPrice: "$34.00",
      oldPrice: "",
      imageUrl: "assets/images/Sproduct/14.jpg",
    },
  ];

  const product = products.find((p) => p.id === productID);

  if (product) {
    const singleTitle = document.getElementById("singleTitle");
    const singleDescription = document.getElementById("singleDescription");
    const singleImage = document.getElementById("singleImage");
    const singleNPrice = document.getElementById("singleNPrice");
    const singleOPrice = document.getElementById("singleOPrice");

    const productSmallImage = document.getElementsByClassName("small-img");
    for (let i = 0; i < productSmallImage.length; i++) {
      productSmallImage[i].src = product["smallImage" + (i + 1)];
    }

    singleNPrice.textContent = product.newPrice;
    singleOPrice.textContent = product.oldPrice;
    singleImage.src = product.imageUrl;
    singleTitle.textContent = product.title;
    singleDescription.textContent = product.description;
  }
});
