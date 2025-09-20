import { Card, CardHeader, CardContent, CardFooter } from '../ui/Card.jsx';
import Button from '../ui/Button.jsx';

export default function ProductCard({ product }) {
  return (
    <Card className="max-w-sm">
      <CardHeader>
        <img 
          src={product.image || '/placeholder-suit.jpg'} 
          alt={product.name}
          className="w-full h-48 object-cover"
        />
      </CardHeader>
      <CardContent>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">
          {product.name}
        </h3>
        <p className="text-gray-600 text-sm mb-4">
          {product.description}
        </p>
        <div className="flex justify-between items-center">
          <span className="text-2xl font-bold text-blue-600">
            {product.price} kr
          </span>
          <span className="text-sm text-gray-500">
            {product.category}
          </span>
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="primary" className="w-full">
          Se detaljer
        </Button>
      </CardFooter>
    </Card>
  );
}