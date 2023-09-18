// For Single Product //

document.addEventListener("DOMContentLoaded", function () {
  // Your product data array
  const products = [
    {
      id: "s1",
      title: "Green Apple",
      description: `Class aptent taciti sociosqu ad litora torquent per conubia nostra, 
                      per inceptos himenaeos. Nulla nibh diam, blandit vel consequat nec, ultrices et 
                      ipsum. Nulla varius magna a consequat pulvinar.`,
      newPrice: "$14.99",
      oldPrice: "$20.99",
      imageUrl: "assets/images/Sproduct/0.jpg",
      simageUrl: "assets/images/Sproduct/0.jpg",
    },
    {
      id: "s2",
      title: "Fresh Indian Malta",
      description: `Class aptent taciti sociosqu ad litora torquent per conubia nostra, 
                        per inceptos himenaeos. Nulla nibh diam, blandit vel consequat nec, ultrices et 
                        ipsum. Nulla varius magna a consequat pulvinar.`,
      newPrice: "$20.00",
      oldPrice: "",
      imageUrl: "assets/images/Sproduct/1.png",
      simageUrl: "assets/images/Sproduct/1.png",
    },
    {
      id: "s3",
      title: "Chinese cabbage",
      description: `Class aptent taciti sociosqu ad litora torquent per conubia nostra, 
                        per inceptos himenaeos. Nulla nibh diam, blandit vel consequat nec, ultrices et 
                        ipsum. Nulla varius magna a consequat pulvinar.`,
      newPrice: "$12.00",
      oldPrice: "",
      imageUrl: "assets/images/Sproduct/2.jpg",
      simageUrl: "assets/images/Sproduct/2.jpg",
    },
    {
      id: "s4",
      title: "Green Lettuce",
      description: `Class aptent taciti sociosqu ad litora torquent per conubia nostra, 
                        per inceptos himenaeos. Nulla nibh diam, blandit vel consequat nec, ultrices et 
                        ipsum. Nulla varius magna a consequat pulvinar.`,
      newPrice: "$9.00",
      oldPrice: "",
      imageUrl: "assets/images/Sproduct/3.jpg",
      simageUrl: "assets/images/Sproduct/3.jpg",
    },
    {
      id: "s5",
      title: "Eggplant",
      description: `Class aptent taciti sociosqu ad litora torquent per conubia nostra, 
                          per inceptos himenaeos. Nulla nibh diam, blandit vel consequat nec, ultrices et 
                          ipsum. Nulla varius magna a consequat pulvinar.`,
      newPrice: "$34.00",
      oldPrice: "",
      imageUrl: "assets/images/Sproduct/4.jpg",
      simageUrl: "assets/images/Sproduct/4.jpg",
    },
    {
      id: "s6",
      title: "Big Potatoes",
      description: `Class aptent taciti sociosqu ad litora torquent per conubia nostra, 
                          per inceptos himenaeos. Nulla nibh diam, blandit vel consequat nec, ultrices et 
                          ipsum. Nulla varius magna a consequat pulvinar.`,
      newPrice: "$20.00",
      oldPrice: "",
      imageUrl: "assets/images/Sproduct/5.jpg",
      simageUrl: "assets/images/Sproduct/5.jpg",
    },
    {
      id: "s7",
      title: "Corn",
      description: `Class aptent taciti sociosqu ad litora torquent per conubia nostra, 
                          per inceptos himenaeos. Nulla nibh diam, blandit vel consequat nec, ultrices et 
                          ipsum. Nulla varius magna a consequat pulvinar.`,
      newPrice: "$12.00",
      oldPrice: "",
      imageUrl: "assets/images/Sproduct/6.jpg",
      simageUrl: "assets/images/Sproduct/6.jpg",
    },
    {
      id: "s8",
      title: "Fresh Cauliflower",
      description: `Class aptent taciti sociosqu ad litora torquent per conubia nostra, 
                          per inceptos himenaeos. Nulla nibh diam, blandit vel consequat nec, ultrices et 
                          ipsum. Nulla varius magna a consequat pulvinar.`,
      newPrice: "$12.00",
      oldPrice: "",
      imageUrl: "assets/images/Sproduct/7.jpg",
      simageUrl: "assets/images/Sproduct/7.jpg",
    },
    {
      id: "s9",
      title: "Green Capsicum",
      description: `Class aptent taciti sociosqu ad litora torquent per conubia nostra, 
                          per inceptos himenaeos. Nulla nibh diam, blandit vel consequat nec, ultrices et 
                          ipsum. Nulla varius magna a consequat pulvinar.`,
      newPrice: "$9.00",
      oldPrice: "$20.99",
      imageUrl: "assets/images/Sproduct/8.webp",
      simageUrl: "assets/images/Sproduct/8.webp",
    },
    {
      id: "s10",
      title: "Green Chili",
      description: `Class aptent taciti sociosqu ad litora torquent per conubia nostra, 
                          per inceptos himenaeos. Nulla nibh diam, blandit vel consequat nec, ultrices et 
                          ipsum. Nulla varius magna a consequat pulvinar.`,
      newPrice: "$34.00",
      oldPrice: "",
      imageUrl: "assets/images/Sproduct/9.webp",
      simageUrl: "assets/images/Sproduct/9.webp",
    },
    {
      id: "s11",
      title: "Red Capsicum",
      description: `Class aptent taciti sociosqu ad litora torquent per conubia nostra, 
                          per inceptos himenaeos. Nulla nibh diam, blandit vel consequat nec, ultrices et 
                          ipsum. Nulla varius magna a consequat pulvinar.`,
      newPrice: "$12.00",
      oldPrice: "",
      imageUrl: "assets/images/Sproduct/10.jpg",
      simageUrl: "assets/images/Sproduct/10.jpg",
    },
    {
      id: "s12",
      title: "Red Tomato",
      description: `Class aptent taciti sociosqu ad litora torquent per conubia nostra, 
                          per inceptos himenaeos. Nulla nibh diam, blandit vel consequat nec, ultrices et 
                          ipsum. Nulla varius magna a consequat pulvinar.`,
      newPrice: "$9.00",
      oldPrice: "20.99",
      imageUrl: "assets/images/Sproduct/11.png",
      simageUrl: "assets/images/Sproduct/11.png",
    },
    {
      id: "s13",
      title: "Surjapur Mango",
      description: `Class aptent taciti sociosqu ad litora torquent per conubia nostra, 
                          per inceptos himenaeos. Nulla nibh diam, blandit vel consequat nec, ultrices et 
                          ipsum. Nulla varius magna a consequat pulvinar.`,
      newPrice: "$34.00",
      oldPrice: "",
      imageUrl: "assets/images/Sproduct/9.webp",
      simageUrl: "assets/images/Sproduct/9.webp",
    },
    {
      id: "s14",
      title: "Green Cucamber",
      description: `Class aptent taciti sociosqu ad litora torquent per conubia nostra, 
                          per inceptos himenaeos. Nulla nibh diam, blandit vel consequat nec, ultrices et 
                          ipsum. Nulla varius magna a consequat pulvinar.`,
      newPrice: "$14.99",
      oldPrice: "20.99",
      imageUrl: "assets/images/Sproduct/13.jpg",
      simageUrl: "assets/images/Sproduct/13.jpg",
    },
    {
      id: "s15",
      title: "Red Chilli",
      description: `Class aptent taciti sociosqu ad litora torquent per conubia nostra, 
                          per inceptos himenaeos. Nulla nibh diam, blandit vel consequat nec, ultrices et 
                          ipsum. Nulla varius magna a consequat pulvinar.`,
      newPrice: "$34.00",
      oldPrice: "",
      imageUrl: "assets/images/Sproduct/14.jpg",
      simageUrl: "assets/images/Sproduct/14.jpg",
    },
  ];

  // Add a click event listener to all elements with class "product-details-button"
  const productButtons = document.querySelectorAll(".product-details-button");

  productButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      const productID = button.getAttribute("data-product-id");
      const product = products.find((p) => p.id === productID);

      if (product) {
        // Populate the product details here
        const sproductTitle = document.getElementById("sproductTitle");
        const sProductDescr = document.getElementById("sProductDescr");
        const sProductImage = document.getElementById("S-pro");
        const ssProductImage = document.getElementById("Ss-pro");
        const sNewPrice = document.getElementById("newPrice");
        const sOldPrice = document.getElementById("oldPrice");

        sNewPrice.textContent = product.newPrice;
        sOldPrice.textContent = product.oldPrice;
        sProductImage.src = product.imageUrl;
        ssProductImage.src = product.imageUrl;
        sproductTitle.textContent = product.title;
        sProductDescr.textContent = product.description;
      }
    });
  });
});
