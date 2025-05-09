import Feature from "../feature/Feature";


const PriceOption = ({ option }) => {
    const { name, price_per_month, features } = option;
    return (
        <div className="bg-red-900 flex flex-col rounded-lg text-center p-4 text-white">
            <h2>
                <span className="text-4xl font-semibold">{price_per_month}</span>
                <span className="text-xl">/month</span>
            </h2>
            <h2 className="mb-4 mt-2">
                <span className="text-2xl">{name}</span>
            </h2>
            <h4 className="flex-grow">
                {
                    features.map((feature, index) => <Feature
                        key={index} feature={feature} ></Feature>)
                }
            </h4>
            <button className="w-full py-2 font-bold rounded-lg
            bg-red-950 hover:bg-red-400 mt-2">Buy Now</button>
        </div>
    );
};

export default PriceOption;