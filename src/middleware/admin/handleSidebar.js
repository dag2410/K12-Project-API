const sidebarItems = [
  {
    title: "Dashboards",
    icon: "fa-home",
    path: "/",
  },
  {
    title: "Categories",
    icon: "fa-tags",
    path: "/categories",
  },
  {
    title: "Rooms",
    icon: "fa-bed",
    path: "/rooms",
  },
  {
    title: "Topics",
    icon: "fa-bookmark",
    path: "/topics",
  },
  {
    title: "Posts",
    icon: "fa-file-alt",
    path: "/posts",
  },
  {
    title: "Comments",
    icon: "fa-comments",
    path: "/comments",
  },
  {
    title: "Users",
    icon: "fa-user",
    path: "/users",
  },
  {
    title: "Analytics",
    icon: "fa-chart-bar",
    path: "/analytics",
  },
  {
    title: "Settings",
    icon: "fa-cog",
    path: "/settings",
  },
];

function handleSidebar(req, res, next) {
  res.locals.path = req.path;
  res.locals.sidebarItems = sidebarItems;
  next();
}

module.exports = handleSidebar;

// <a href="categories.html" class="menu-item">
//       <i class="fas fa-tags"></i>
//       Categories
//     </a>
//     <a href="products.html" class="menu-item">
//       <i class="fas fa-shopping-cart"></i>
//       Products
//     </a>
//     <a href="topics.html" class="menu-item">
//       <i class="fas fa-bookmark"></i>
//       Topics
//     </a>
//     <a href="posts.html" class="menu-item">
//       <i class="fas fa-file-alt"></i>
//       Posts
//     </a>
//     <a href="comments.html" class="menu-item">
//       <i class="fas fa-comments"></i>
//       Comments
//     </a>
//     <a href="/admin/users" class="menu-item">
//       <i class="fas fa-user"></i>
//       Users
//     </a>
//     <a href="analytics.html" class="menu-item">
//       <i class="fas fa-chart-bar"></i>
//       Analytics
//     </a>
//     <a href="settings.html" class="menu-item">
//       <i class="fas fa-cog"></i>
//       Settings
//     </a>   <a href="index.html" class="menu-item">
//       <i class="fas fa-home"></i>
//       Dashboard
//     </a>
