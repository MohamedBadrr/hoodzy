import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../../components/ui/tabs";
import { productReviews } from "../data/productTabs";
import ProductFaqs from "./ProductFaqs";
import ProductReviews from "./ProductReviews";

export default function ProductTabs() {
  return (
    <Tabs defaultValue="reviews" className="mt-16">
      <TabsList>
        <TabsTrigger value="reviews">Rating & Reviews</TabsTrigger>
        <TabsTrigger value="faqs">FAQs</TabsTrigger>
      </TabsList>

      <TabsContent value="reviews" className="pt-8">
        <ProductReviews reviews={productReviews} totalReviews={451} />
      </TabsContent>

      <TabsContent value="faqs" className="pt-8">
        <ProductFaqs />
      </TabsContent>
    </Tabs>
  );
}
