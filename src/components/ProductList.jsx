import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/CartSlice";

const plants = [
  {
    id: 1,
    name: "Snake Plant",
    price: 15,
    category: "Indoor",
    image: "/images/snake.jpg",
  },
  {
    id: 2,
    name: "Peace Lily",
    price: 20,
    category: "Indoor",
    image: "/images/peace.jpg",
  },
  {
    id: 3,
    name: "Aloe Vera",
    price: 10,
    category: "Succulent",
    image: "/images/aloe.jpg",
  },
  {
    id: 4,
    name: "Cactus",
    price: 12,
    category: "Succulent",
    image: "/images/cactus.jpg",
  },
  {
    id: 5,
    name: "Areca Palm",
    price: 30,
    category: "Palm",
    image: "/images/palm.jpg",
  },
];

function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const isInCart = (id) => {
    return cartItems.find((item) => item.id === id);
  };

  const categories = ["Indoor", "Succulent", "Palm"];

  return (
    <div>
      {categories.map((category) => (
        <div key={category}>
          <h2>{category} Plants</h2>

          {plants
            .filter((plant) => plant.category === category)
            .map((plant) => (
              <div key={plant.id}>
                <img src={plant.image} alt={plant.name} />
                <h4>{plant.name}</h4>
                <p>${plant.price}</p>

                <button
                  onClick={() => dispatch(addToCart(plant))}
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
