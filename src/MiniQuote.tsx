import { useMemo, useState } from "react";

type Product = "shirtA" | "shirtB";

const PRICE_BREAKS = [
    { min: 1, max: 12, price: 15 },
    { min: 13, max: 49, price: 12 },
    { min: 50, max: Infinity, price: 10 },
];

const PRODUCT_SURCHARGE: Record<Product, number> = {
    shirtA: 0,
    shirtB: 2,
};

export default function MiniQuote() {
    const [product, setProduct] = useState<Product>("shirtA");
    const [quantity, setQuantity] = useState<number>(1);

    const unitPrice = useMemo(() => {
        if (quantity <= 0) return 0;

        const basePrice =
            PRICE_BREAKS.find(
                (b) => quantity >= b.min && quantity <= b.max
            )?.price ?? 0;

        return basePrice + PRODUCT_SURCHARGE[product];
    }, [product, quantity]);

    const totalPrice = useMemo(() => {
        if (quantity <= 0) return 0;
        return unitPrice * quantity;
    }, [unitPrice, quantity]);

    return (
        <div className="mx-auto mt-20 w-full max-w-md rounded-xl border bg-white p-6 shadow-sm">
            <h2 className="mb-4 text-xl font-semibold">Mini Quote</h2>

            <div className="space-y-4">
                <div>
                    <label className="mb-1 block text-sm font-medium">
                        Product
                    </label>
                    <select
                        className="w-full rounded-md border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900"
                        value={product}
                        onChange={(e) =>
                            setProduct(e.target.value as Product)
                        }
                    >
                        <option value="shirtA">Shirt A</option>
                        <option value="shirtB">Shirt B</option>
                    </select>
                </div>

                <div>
                    <label className="mb-1 block text-sm font-medium">
                        Quantity
                    </label>
                    <input
                        type="number"
                        min={1}
                        className="w-full rounded-md border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900"
                        value={quantity}
                        onChange={(e) =>
                            setQuantity(Number(e.target.value))
                        }
                    />
                </div>

                <div className="rounded-lg bg-slate-50 p-4">
                    <div className="text-sm text-slate-600">
                        Unit Price
                    </div>
                    <div className="text-lg font-medium">
                        ${unitPrice.toFixed(2)}
                    </div>

                    <div className="mt-2 border-t pt-2 text-sm text-slate-600">
                        Total
                    </div>
                    <div className="text-xl font-semibold">
                        ${totalPrice.toFixed(2)}
                    </div>
                </div>
            </div>
        </div>
    );
}
