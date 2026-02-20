import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../redux/CartSlice";
import { Link } from "react-router-dom";

const plants = [
  // Indoor (6)
  {
    id: 1,
    name: "Snake Plant",
    price: 15,
    category: "Indoor",
    image: process.env.PUBLIC_URL + "/images/snake.jpg",
  },
  {
    id: 2,
    name: "Peace Lily",
    price: 20,
    category: "Indoor",
    image: process.env.PUBLIC_URL + "/images/peace.jpg",
  },
  {
    id: 3,
    name: "Spider Plant",
    price: 18,
    category: "Indoor",
    image: process.env.PUBLIC_URL + "/images/spider.jpg",
  },
  {
    id: 4,
    name: "ZZ Plant",
    price: 22,
    category: "Indoor",
    image: process.env.PUBLIC_URL + "/images/zz.jpg",
  },
  {
    id: 5,
    name: "Pothos",
    price: 16,
    category: "Indoor",
    image: process.env.PUBLIC_URL + "/images/pothos.jpg",
  },
  {
    id: 6,
    name: "Rubber Plant",
    price: 25,
    category: "Indoor",
    image: process.env.PUBLIC_URL + "/images/rubber.jpg",
  },

  // Succulent (6)
  {
    id: 7,
    name: "Aloe Vera",
    price: 10,
    category: "Succulent",
    image: process.env.PUBLIC_URL + "/images/aloe.jpg",
  },
  {
    id: 8,
    name: "Cactus",
    price: 12,
    category: "Succulent",
    image: process.env.PUBLIC_URL + "/images/cactus.jpg",
  },
  {
    id: 9,
    name: "Echeveria",
    price: 14,
    category: "Succulent",
    image: process.env.PUBLIC_URL + "/images/echeveria.jpg",
  },
  {
    id: 10,
    name: "Jade Plant",
    price: 17,
    category: "Succulent",
    image: process.env.PUBLIC_URL + "/images/jade.jpg",
  },
  {
    id: 11,
    name: "Haworthia",
    price: 13,
    category: "Succulent",
    image: process.env.PUBLIC_URL + "/images/haworthia.jpg",
  },
  {
    id: 12,
    name: "Sedum",
    price: 11,
    category: "Succulent",
    image: process.env.PUBLIC_URL + "/images/sedum.jpg",
  },

  // Palm (6)
  {
    id: 13,
    name: "Areca Palm",
    price: 30,
    category: "Palm",
    image: process.env.PUBLIC_URL + "/images/palm.jpg",
  },
  {
    id: 14,
    name: "Parlor Palm",
    price: 28,
    category: "Palm",
    image: process.env.PUBLIC_URL + "/images/parlor.jpg",
  },
  {
    id: 15,
    name: "Majesty Palm",
    price: 35,
    category: "Palm",
    image: process.env.PUBLIC_URL + "/images/majesty.jpg",
  },
  {
    id: 16,
    name: "Kentia Palm",
    price: 40,
    category: "Palm",
    image: process.env.PUBLIC_URL + "/images/kentia.jpg",
  },
  {
    id: 17,
    name: "Fan Palm",
    price: 32,
    category: "Palm",
    image: process.env.PUBLIC_URL + "/images/fan.jpg",
  },
  {
    id: 18,
    name: "Sago Palm",
    price: 29,
    category: "Palm",
    image: process.env.PUBLIC_URL + "/images/sago.jpg",
  },
];

function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0,
  );

  const isInCart = (id) => {
    return cartItems.find((item) => item.id === id);
  };

  const categories = ["Indoor", "Succulent", "Palm"];

  return (
    <div>
      {/* Navbar */}
      <nav>
        <Link to="/">Home</Link> | <Link to="/plants">Plants</Link> |{" "}
        <Link to="/cart">Cart ({totalItems})</Link>
      </nav>

      {categories.map((category) => (
        <div key={category}>
          <h2>{category} Plants</h2>

          {plants
            .filter((plant) => plant.category === category)
            .map((plant) => (
              <div key={plant.id}>
                <img src={plant.image} alt={plant.name} width="150" />
                <h4>{plant.name}</h4>
                <p>${plant.price}</p>

                <button
                  onClick={() => dispatch(addItem(plant))}
                  disabled={isInCart(plant.id)}
                >
                  {isInCart(plant.id) ? "Added" : "Add to Cart"}
                </button>

                <hr />
              </div>
            ))}
        </div>
      ))}
    </div>
  );
}

export default ProductList;
