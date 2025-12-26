import CreateMealForm from "./CreateMealForm/CreateMealForm";

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

      <CreateMealForm></CreateMealForm>
    </div>
  );
};

export default CreateMealPage;
