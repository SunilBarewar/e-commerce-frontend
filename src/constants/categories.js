/**
 * "tops",
"womens-dresses",
"womens-shoes",
"mens-shirts",
"mens-shoes",
"mens-watches",
"womens-watches",
"womens-bags",
"womens-jewellery"
 */

export const sidebarCategories = [
  {
    title: "Woman's Fashion",
    submenu: true,
    sublinks: [
      {
        title: "watches",
        route: "womens-watches",
      },
      {
        title: "jewellery",
        route: "womens-jewellery",
      },
      {
        title: "bags",
        route: "womens-bags",
      },
      {
        title: "shoes",
        route: "womens-shoes",
      },
      {
        title: "tops",
        route: "tops",
      },
      {
        title: "dresses",
        route: "womens-dresses",
      },
    ],
  },
  {
    title: "Men's Fashion",
    submenu: true,
    sublinks: [
      {
        title: "shirts",
        route: "mens-shirts",
      },
      {
        title: "shoes",
        route: "mens-shoes",
      },
      {
        title: "watches",
        route: "mens-watches",
      },
    ],
  },
  {
    title: "Electronics",
    // route: "/electronics",
    submenu: true,
    sublinks: [
      {
        title: "laptops",
        route: "laptops",
      },
      {
        title: "smartphones",
        route: "phones",
      },
    ],
  },
  {
    title: "Furniture",
    route: "furniture",
  },
  {
    title: "Home-decoration",
    route: "home-decoration",
  },
  {
    title: "Groceries",
    route: "groceries",
  },
  {
    title: "Health & Beauty",
    route: "skincare",
  },
];

export const categories = [
  {
    title: "phones",
    route: "/phones",
    icon: "./image/icons/phone.png",
  },
  {
    title: "laptops",
    route: "/laptops",
    icon: "./image/icons/computer.png",
  },
  {
    title: "watches",
    route: "/watch",
    icon: "./image/icons/watch.png",
  },
  {
    title: "camera",
    route: "/camera",
    icon: "./image/icons/camera.png",
  },
  {
    title: "headphones",
    route: "/headphones",
    icon: "./image/icons/headphone.png",
  },
  {
    title: "gaming",
    route: "/gaming",
    icon: "./image/icons/gaming.png",
  },
];
