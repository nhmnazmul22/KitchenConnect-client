import { ImagePlus, Clock, MapPin, DollarSign } from "lucide-react";
import Textarea from "../../../../components/common/UI/Textarea";
import Input from "../../../../components/common/UI/Input";
import Select from "../../../../components/common/UI/Select";

const CreateMealPage = () => {
  return (
    <div className="mr-5">
      <div className="mb-8">
        <h1 className="font-display text-2xl md:text-3xl font-bold text-foreground">
          Create New Meal
        </h1>
        <p className="text-muted-foreground mt-1">
          Share your culinary creations with hungry customers
        </p>
      </div>

      <form className="">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="bg-base-100 card-elevated rounded-2xl p-6 border border-base-300">
            <label className="label text-base font-semibold mb-4 block">
              Meal Image
            </label>
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <div className="w-40 h-40 bg-muted rounded-xl border-2 border-dashed border-border flex items-center justify-center">
                <ImagePlus className="w-10 h-10 text-muted-foreground" />
              </div>
              <div className="flex-1 space-y-2">
                <Input placeholder="Enter image URL" />
                <p className="text-xs text-muted-foreground">
                  Upload a high-quality image of your meal. Recommended size:
                  800x600px.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-base-100 card-elevated rounded-2xl p-6 border border-base-300">
            <label className="label text-base font-semibold mb-4 block">
              Basic Information
            </label>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="sm:col-span-2">
                <label htmlFor="foodName" className="label">
                  Meal Name
                </label>
                <Input
                  id="foodName"
                  placeholder="e.g., Homemade Butter Chicken"
                  className="mt-1.5"
                />
              </div>

              <div>
                <label htmlFor="chefName" className="label">
                  Chef Name
                </label>
                <Input
                  id="chefName"
                  value="Chef Priya Sharma"
                  readOnly
                  className="mt-1.5"
                  labelClassNames="bg-base-300"
                />
              </div>

              <div>
                <label htmlFor="chefId" className="label">
                  Chef ID
                </label>
                <Input
                  id="chefId"
                  value="chef001"
                  readOnly
                  className="mt-1.5"
                  labelClassNames="bg-base-300"
                />
              </div>

              <div>
                <label htmlFor="userEmail" className="label">
                  Email
                </label>
                <Input
                  id="userEmail"
                  value="priya@example.com"
                  readOnly
                  className="mt-1.5"
                  labelClassNames="bg-base-300"
                />
              </div>

              <div className="flex flex-col gap-1 w-full">
                <label htmlFor="experience">Experience</label>
                <Select
                  id="experience"
                  label="Select Experience"
                  options={[
                    "1-3 years",
                    "4-7 years",
                    "8-15 years",
                    "15+ years",
                  ]}
                />
              </div>
            </div>
          </div>

          <div className="bg-base-100 card-elevated rounded-2xl p-6 border border-base-300">
            <label className="label text-base font-semibold mb-4 block">
              Pricing & Delivery
            </label>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="price" className="label">
                  Price ($)
                </label>
                <div className="relative mt-1.5">
                  <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    id="price"
                    type="number"
                    step="0.01"
                    placeholder="15.99"
                    className="pl-9"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="deliveryTime" className="label">
                  Delivery Time
                </label>
                <div className="relative mt-1.5">
                  <Clock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input id="deliveryTime" placeholder="30-45 mins" />
                </div>
              </div>

              <div>
                <label htmlFor="deliveryArea" className="label">
                  Delivery Area
                </label>
                <div className="relative mt-1.5">
                  <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input id="deliveryArea" placeholder="Downtown, Midtown" />
                </div>
              </div>
            </div>
          </div>

          <div className="bg-base-100 card-elevated rounded-2xl p-6 border border-base-300">
            <label className="label font-semibold mb-4 block">Details</label>
            <div className="space-y-4">
              <div>
                <label htmlFor="ingredients" className="label">
                  Ingredients (comma-separated)
                </label>
                <Input
                  id="ingredients"
                  placeholder="Chicken, Butter, Tomatoes, Cream, Spices"
                  className="mt-1.5"
                />
              </div>

              <div>
                <label htmlFor="description" className="label">
                  Description
                </label>
                <Textarea
                  id="description"
                  placeholder="Describe your meal, cooking method, and what makes it special..."
                  className="mt-1.5 min-h-30"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="ml-auto flex gap-4 max-w-sm mt-5">
          <button className="btn btn-outline flex-1">Save as Draft</button>
          <button className="btn btn-primary flex-1 btn-shine">
            Publish Meal
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateMealPage;
