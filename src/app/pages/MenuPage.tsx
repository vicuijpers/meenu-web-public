"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Clock, Star, DollarSign } from "lucide-react";

interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  rating: number;
  prepTime: string;
  image: string;
  dietary: string[];
}

const MenuPage = () => {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [loading, setLoading] = useState(true);

  // Mock API call - replace with actual API endpoint later
  useEffect(() => {
    const fetchMenu = async () => {
      // Simulate API delay
      setTimeout(() => {
        const mockMenu: MenuItem[] = [
          {
            id: 1,
            name: "Classic Margherita Pizza",
            description:
              "Fresh mozzarella, basil, tomato sauce on our signature wood-fired crust",
            price: 16.99,
            category: "pizzas",
            rating: 4.8,
            prepTime: "12-15 min",
            image:
              "https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&w=400",
            dietary: ["vegetarian"],
          },
          {
            id: 2,
            name: "Grilled Salmon Bowl",
            description:
              "Atlantic salmon with quinoa, avocado, and citrus vinaigrette",
            price: 22.5,
            category: "mains",
            rating: 4.9,
            prepTime: "8-10 min",
            image:
              "https://images.pexels.com/photos/1833349/pexels-photo-1833349.jpeg?auto=compress&cs=tinysrgb&w=400",
            dietary: ["gluten-free", "healthy"],
          },
          {
            id: 3,
            name: "Truffle Mushroom Pasta",
            description:
              "Handmade fettuccine with wild mushrooms and truffle oil",
            price: 19.75,
            category: "pasta",
            rating: 4.7,
            prepTime: "10-12 min",
            image:
              "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=400",
            dietary: ["vegetarian"],
          },
          {
            id: 4,
            name: "Wagyu Beef Burger",
            description:
              "Premium wagyu beef with caramelized onions and aged cheddar",
            price: 26.0,
            category: "burgers",
            rating: 4.9,
            prepTime: "15-18 min",
            image:
              "https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=400",
            dietary: [],
          },
          {
            id: 5,
            name: "Mediterranean Salad",
            description:
              "Mixed greens, olives, feta cheese, and herb vinaigrette",
            price: 14.25,
            category: "salads",
            rating: 4.6,
            prepTime: "5-7 min",
            image:
              "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400",
            dietary: ["vegetarian", "gluten-free"],
          },
          {
            id: 6,
            name: "Chocolate Lava Cake",
            description:
              "Warm chocolate cake with molten center and vanilla ice cream",
            price: 9.5,
            category: "desserts",
            rating: 4.8,
            prepTime: "6-8 min",
            image:
              "https://images.pexels.com/photos/45202/brownie-dessert-cake-sweet-45202.jpeg?auto=compress&cs=tinysrgb&w=400",
            dietary: ["vegetarian"],
          },
        ];
        setMenuItems(mockMenu);
        setLoading(false);
      }, 1000);
    };

    fetchMenu();
  }, []);

  const categories = [
    { id: "all", name: "All Items" },
    { id: "pizzas", name: "Pizzas" },
    { id: "mains", name: "Main Courses" },
    { id: "pasta", name: "Pasta" },
    { id: "burgers", name: "Burgers" },
    { id: "salads", name: "Salads" },
    { id: "desserts", name: "Desserts" },
  ];

  const filteredItems =
    selectedCategory === "all"
      ? menuItems
      : menuItems.filter((item) => item.category === selectedCategory);

  if (loading) {
    return (
      <div className="min-h-screen pt-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500 mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading our delicious menu...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-8 pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Menu</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our carefully crafted dishes made with the finest
            ingredients
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                selectedCategory === category.id
                  ? "bg-orange-500 text-white shadow-md"
                  : "bg-white text-gray-700 border border-gray-200 hover:border-orange-300 hover:text-orange-600"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="aspect-video overflow-hidden relative">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-semibold text-gray-900 line-clamp-1">
                    {item.name}
                  </h3>
                  <div className="flex items-center text-orange-600 font-bold text-lg">
                    <DollarSign className="h-4 w-4" />
                    {item.price.toFixed(2)}
                  </div>
                </div>

                <p className="text-gray-600 mb-4 line-clamp-2 leading-relaxed">
                  {item.description}
                </p>

                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-400 mr-1" />
                    <span>{item.rating}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>{item.prepTime}</span>
                  </div>
                </div>

                {item.dietary.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.dietary.map((diet) => (
                      <span
                        key={diet}
                        className="px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full"
                      >
                        {diet}
                      </span>
                    ))}
                  </div>
                )}

                <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200">
                  Add to Order
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              No items found in this category.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MenuPage;
