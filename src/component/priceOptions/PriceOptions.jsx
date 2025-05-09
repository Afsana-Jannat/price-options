import PriceOption from "../priceOption/PriceOption";


const PriceOptions = () => {

    const priceOptions = [
        {
            "id": "basic-001",
            "name": "Basic Plan",
            "price_per_month": 29.99,
            "features": [
                "Access to gym equipment",
                "Locker room access",
                "1 guest pass per month"
            ]
        },
        {
            "id": "standard-002",
            "name": "Standard Plan",
            "price_per_month": 49.99,
            "features": [
                "Access to gym equipment",
                "Locker room access",
                "Unlimited group classes",
                "2 guest passes per month",
                "Free fitness assessment"
            ]
        },
        {
            "id": "premium-003",
            "name": "Premium Plan",
            "price_per_month": 79.99,
            "features": [
                "24/7 gym access",
                "All Standard Plan features",
                "Free personal training session (monthly)",
                "Access to sauna & spa",
                "5 guest passes per month",
                "Nutrition guidance"
            ]
        },
        {
            "id": "student-004",
            "name": "Student Plan",
            "price_per_month": 24.99,
            "features": [
                "Access to gym equipment",
                "Locker room access",
                "Limited group classes",
                "Valid student ID required"
            ]
        }
    ]


    return (
        <div className="mt-8">
            <h2 className="text-3xl font-semibold text-center">Best Prices in the town</h2>
            <div className="m-8 grid md:grid-cols-3 gap-6">
                {
                    priceOptions.map(option => <PriceOption
                        key={option.id}
                        option={option}
                    >
                    </PriceOption>)
                }
            </div>
        </div>
    );
};

export default PriceOptions;