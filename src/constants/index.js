import {
  Facebook,
  Instagram,
  Twitter,
  Users,
  Youtube,
  Utensils,
  Clock,
  Shield,
  ChefHat,
  TrendingUp,
  User,
  ShoppingBag,
  Star,
  Heart,
  UtensilsCrossed,
  ClipboardList,
  FileCheck,
  BarChart3,
} from "lucide-react";

export const navLinks = [
  { name: "Home", path: "/" },
  { name: "Meals", path: "/meals" },
];

export const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Youtube, href: "#", label: "Youtube" },
];

export const benefits = [
  {
    icon: ChefHat,
    title: "Local Expert Chefs",
    description:
      "Discover talented home chefs in your neighborhood creating authentic, lovingly-prepared meals.",
  },
  {
    icon: Utensils,
    title: "Fresh & Homemade",
    description:
      "Every dish is made with fresh ingredients and prepared with the care of a home-cooked meal.",
  },
  {
    icon: Clock,
    title: "Fast Delivery",
    description:
      "Hot, fresh meals delivered to your door within 30-60 minutes of ordering.",
  },
  {
    icon: Shield,
    title: "Quality Guaranteed",
    description:
      "All our chefs are verified and rated by real customers for your peace of mind.",
  },
];

export const stats = [
  { icon: Users, value: "10,000+", label: "Happy Customers" },
  { icon: ChefHat, value: "500+", label: "Local Chefs" },
  { icon: Utensils, value: "50,000+", label: "Meals Delivered" },
  { icon: TrendingUp, value: "4.9", label: "Average Rating" },
];

export const dashboardMenuItems = {
  user: [
    { icon: User, label: "My Profile", path: "/dashboard/profile" },
    { icon: ShoppingBag, label: "My Orders", path: "/dashboard/orders" },
    { icon: Star, label: "My Reviews", path: "/dashboard/reviews" },
    { icon: Heart, label: "Favorites", path: "/dashboard/favorites" },
  ],
  chef: [
    { icon: User, label: "My Profile", path: "/dashboard/profile" },
    {
      icon: UtensilsCrossed,
      label: "Create Meal",
      path: "/dashboard/create-meal",
    },
    { icon: ChefHat, label: "My Meals", path: "/dashboard/my-meals" },
    {
      icon: ClipboardList,
      label: "Order Requests",
      path: "/dashboard/order-requests",
    },
  ],
  admin: [
    { icon: User, label: "My Profile", path: "/dashboard/profile" },
    { icon: Users, label: "Manage Users", path: "/dashboard/users" },
    { icon: FileCheck, label: "Role Requests", path: "/dashboard/requests" },
    { icon: BarChart3, label: "Statistics", path: "/dashboard/statistics" },
  ],
};

// Static mock data for LocalChefBazaar
export const meals = [
  {
    _id: "meal001",
    foodName: "Homemade Butter Chicken",
    chefName: "Chef Priya Sharma",
    chefId: "chef001",
    image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=500",
    price: 15.99,
    rating: 4.8,
    deliveryArea: "Downtown, Midtown",
    deliveryTime: "30-45 mins",
    ingredients: [
      "Chicken",
      "Butter",
      "Tomatoes",
      "Cream",
      "Spices",
      "Garlic",
      "Ginger",
    ],
    experience: "8 years",
    description:
      "Creamy, rich butter chicken made with authentic family recipe passed down through generations.",
  },
  {
    _id: "meal002",
    foodName: "Traditional Lasagna",
    chefName: "Chef Marco Rossi",
    chefId: "chef002",
    image: "https://images.unsplash.com/photo-1574894709920-11b28e7367e3?w=500",
    price: 18.99,
    rating: 4.9,
    deliveryArea: "Westside, Central",
    deliveryTime: "45-60 mins",
    ingredients: [
      "Pasta",
      "Ground Beef",
      "Ricotta",
      "Mozzarella",
      "Tomato Sauce",
      "Herbs",
    ],
    experience: "15 years",
    description:
      "Layers of fresh pasta with slow-cooked meat sauce and three types of cheese.",
  },
  {
    _id: "meal003",
    foodName: "Spicy Thai Green Curry",
    chefName: "Chef Somchai",
    chefId: "chef003",
    image: "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=500",
    price: 14.5,
    rating: 4.7,
    deliveryArea: "Eastside, University",
    deliveryTime: "25-40 mins",
    ingredients: [
      "Coconut Milk",
      "Green Curry Paste",
      "Chicken",
      "Bamboo Shoots",
      "Thai Basil",
    ],
    experience: "10 years",
    description:
      "Aromatic green curry with tender chicken in creamy coconut milk.",
  },
  {
    _id: "meal004",
    foodName: "Mexican Street Tacos",
    chefName: "Chef Maria Garcia",
    chefId: "chef004",
    image: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=500",
    price: 12.99,
    rating: 4.6,
    deliveryArea: "All Areas",
    deliveryTime: "20-35 mins",
    ingredients: [
      "Corn Tortillas",
      "Carne Asada",
      "Cilantro",
      "Onions",
      "Lime",
      "Salsa Verde",
    ],
    experience: "12 years",
    description:
      "Authentic street-style tacos with perfectly seasoned carne asada.",
  },
  {
    _id: "meal005",
    foodName: "Japanese Ramen Bowl",
    chefName: "Chef Takeshi Yamamoto",
    chefId: "chef005",
    image: "https://images.unsplash.com/photo-1557872943-16a5ac26437e?w=500",
    price: 16.99,
    rating: 4.9,
    deliveryArea: "Downtown, Northside",
    deliveryTime: "35-50 mins",
    ingredients: [
      "Tonkotsu Broth",
      "Ramen Noodles",
      "Chashu Pork",
      "Soft Egg",
      "Nori",
      "Green Onions",
    ],
    experience: "20 years",
    description:
      "Rich, creamy tonkotsu ramen with 12-hour simmered pork bone broth.",
  },
  {
    _id: "meal006",
    foodName: "Mediterranean Mezze Platter",
    chefName: "Chef Layla Hassan",
    chefId: "chef006",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=500",
    price: 22.99,
    rating: 4.8,
    deliveryArea: "Central, Southside",
    deliveryTime: "30-45 mins",
    ingredients: [
      "Hummus",
      "Falafel",
      "Baba Ganoush",
      "Pita",
      "Olives",
      "Feta",
      "Tzatziki",
    ],
    experience: "14 years",
    description: "A generous spread of house-made Mediterranean favorites.",
  },
  {
    _id: "meal007",
    foodName: "Southern Fried Chicken",
    chefName: "Chef Big Mama Johnson",
    chefId: "chef007",
    image: "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=500",
    price: 13.99,
    rating: 4.7,
    deliveryArea: "All Areas",
    deliveryTime: "40-55 mins",
    ingredients: [
      "Chicken",
      "Buttermilk",
      "Flour",
      "Secret Spices",
      "Hot Honey",
    ],
    experience: "25 years",
    description:
      "Crispy, juicy fried chicken with our secret family spice blend.",
  },
  {
    _id: "meal008",
    foodName: "Vegetarian Buddha Bowl",
    chefName: "Chef Emma Green",
    chefId: "chef008",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500",
    price: 11.99,
    rating: 4.5,
    deliveryArea: "Downtown, Westside",
    deliveryTime: "20-30 mins",
    ingredients: [
      "Quinoa",
      "Roasted Vegetables",
      "Chickpeas",
      "Avocado",
      "Tahini Dressing",
    ],
    experience: "6 years",
    description:
      "Nourishing bowl packed with colorful roasted vegetables and protein.",
  },
  {
    _id: "meal009",
    foodName: "Korean BBQ Bibimbap",
    chefName: "Chef Kim Soo-Jin",
    chefId: "chef009",
    image: "https://images.unsplash.com/photo-1553163147-622ab57be1c7?w=500",
    price: 15.5,
    rating: 4.8,
    deliveryArea: "Eastside, Central",
    deliveryTime: "30-45 mins",
    ingredients: [
      "Rice",
      "Bulgogi Beef",
      "Vegetables",
      "Gochujang",
      "Fried Egg",
      "Sesame",
    ],
    experience: "11 years",
    description:
      "Colorful mixed rice bowl with marinated beef and spicy gochujang.",
  },
  {
    _id: "meal010",
    foodName: "Classic French Coq au Vin",
    chefName: "Chef Pierre Dubois",
    chefId: "chef010",
    image: "https://images.unsplash.com/photo-1600891964092-4316c288032e?w=500",
    price: 24.99,
    rating: 4.9,
    deliveryArea: "Downtown only",
    deliveryTime: "50-65 mins",
    ingredients: [
      "Chicken",
      "Red Wine",
      "Mushrooms",
      "Pearl Onions",
      "Bacon",
      "Thyme",
    ],
    experience: "18 years",
    description:
      "Traditional French braised chicken in rich Burgundy wine sauce.",
  },
];

export const reviews = [
  {
    _id: "rev001",
    foodId: "meal001",
    foodName: "Homemade Butter Chicken",
    reviewerName: "Sarah Mitchell",
    reviewerImage:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100",
    rating: 5,
    comment:
      "Absolutely incredible! The butter chicken was just like my grandmother used to make. Rich, creamy, and perfectly spiced.",
    date: "2024-01-15",
  },
  {
    _id: "rev002",
    foodId: "meal002",
    foodName: "Traditional Lasagna",
    reviewerName: "Michael Chen",
    reviewerImage:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100",
    rating: 5,
    comment:
      "Best lasagna I've ever had outside of Italy. The layers were perfect and the meat sauce was divine!",
    date: "2024-01-12",
  },
  {
    _id: "rev003",
    foodId: "meal005",
    foodName: "Japanese Ramen Bowl",
    reviewerName: "Emily Watson",
    reviewerImage:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100",
    rating: 5,
    comment:
      "The broth was so rich and flavorful. Chef Takeshi truly knows his craft. Will definitely order again!",
    date: "2024-01-10",
  },
  {
    _id: "rev004",
    foodId: "meal003",
    foodName: "Spicy Thai Green Curry",
    reviewerName: "David Park",
    reviewerImage:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100",
    rating: 4,
    comment:
      "Great authentic flavor! The spice level was perfect. Would love a bit more vegetables next time.",
    date: "2024-01-08",
  },
  {
    _id: "rev005",
    foodId: "meal007",
    foodName: "Southern Fried Chicken",
    reviewerName: "Jessica Brown",
    reviewerImage:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100",
    rating: 5,
    comment:
      "Big Mama's chicken is legendary! Crispy on the outside, juicy on the inside. The hot honey is a game changer.",
    date: "2024-01-05",
  },
];

export const orders = [
  {
    _id: "ord001",
    foodId: "meal001",
    mealName: "Homemade Butter Chicken",
    chefName: "Chef Priya Sharma",
    chefId: "chef001",
    userEmail: "john@example.com",
    quantity: 2,
    price: 31.98,
    status: "delivered",
    paymentStatus: "paid",
    deliveryTime: "2024-01-15 19:30",
    address: "123 Main St, Downtown",
  },
  {
    _id: "ord002",
    foodId: "meal005",
    mealName: "Japanese Ramen Bowl",
    chefName: "Chef Takeshi Yamamoto",
    chefId: "chef005",
    userEmail: "john@example.com",
    quantity: 1,
    price: 16.99,
    status: "pending",
    paymentStatus: "pending",
    deliveryTime: "2024-01-18 20:00",
    address: "123 Main St, Downtown",
  },
  {
    _id: "ord003",
    foodId: "meal002",
    mealName: "Traditional Lasagna",
    chefName: "Chef Marco Rossi",
    chefId: "chef002",
    userEmail: "john@example.com",
    quantity: 1,
    price: 18.99,
    status: "preparing",
    paymentStatus: "paid",
    deliveryTime: "2024-01-18 18:30",
    address: "123 Main St, Downtown",
  },
];

export const users = [
  {
    _id: "user001",
    name: "John Doe",
    email: "john@example.com",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100",
    address: "123 Main St, Downtown",
    role: "user",
    status: "active",
  },
  {
    _id: "user002",
    name: "Chef Priya Sharma",
    email: "priya@example.com",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=100",
    address: "456 Oak Ave, Midtown",
    role: "chef",
    status: "active",
    chefId: "chef001",
  },
  {
    _id: "user003",
    name: "Admin Sarah",
    email: "admin@localchefbazaar.com",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100",
    address: "789 Admin Blvd",
    role: "admin",
    status: "active",
  },
];

export const roleRequests = [
  {
    _id: "req001",
    name: "Michael Torres",
    email: "michael@example.com",
    requestType: "chef",
    status: "pending",
    requestTime: "2024-01-16 14:30",
  },
  {
    _id: "req002",
    name: "Lisa Wang",
    email: "lisa@example.com",
    requestType: "chef",
    status: "pending",
    requestTime: "2024-01-15 09:15",
  },
];

export const favorites = [
  {
    _id: "fav001",
    mealId: "meal001",
    mealName: "Homemade Butter Chicken",
    chefName: "Chef Priya Sharma",
    price: 15.99,
    dateAdded: "2024-01-10",
  },
  {
    _id: "fav002",
    mealId: "meal005",
    mealName: "Japanese Ramen Bowl",
    chefName: "Chef Takeshi Yamamoto",
    price: 16.99,
    dateAdded: "2024-01-12",
  },
  {
    _id: "fav003",
    mealId: "meal007",
    mealName: "Southern Fried Chicken",
    chefName: "Chef Big Mama Johnson",
    price: 13.99,
    dateAdded: "2024-01-14",
  },
];

export const platformStats = {
  totalUsers: 1245,
  totalChefs: 89,
  totalOrders: 5678,
  totalRevenue: 98450.5,
  pendingOrders: 45,
  deliveredOrders: 5520,
  cancelledOrders: 113,
  monthlyData: [
    { month: "Jan", orders: 420, revenue: 8400 },
    { month: "Feb", orders: 480, revenue: 9600 },
    { month: "Mar", orders: 520, revenue: 10400 },
    { month: "Apr", orders: 490, revenue: 9800 },
    { month: "May", orders: 560, revenue: 11200 },
    { month: "Jun", orders: 610, revenue: 12200 },
  ],
};
