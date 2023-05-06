import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import categories from "../categories";

interface Props {
  onSubmit: (data: FormData) => void;
}

const schema = z.object({
  name: z
    .string()
    .min(1, { message: "Required" })
    .min(3, { message: "Product field must be at least 8 characters" })
    .max(16, { message: "Product field must be 16 characters long" }),
  category: z.enum(categories, {
    errorMap: () => ({ message: "Required" }),
  }),
});

type FormData = z.infer<typeof schema>;

const FamilyForm = ({ onSubmit }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="col-sm-4">
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          {...register("name")}
          name="name"
          type="text"
          className="form-control"
        />
        {errors.name && <p className="text-danger">{errors.name.message}</p>}
      </div>
      <div className="mb-3">
        <label htmlFor="category" className="form-label">
          Category
        </label>
        <select {...register("category")} id="category" className="form-select">
          <option value=""></option>
          {categories.map(category => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
        {errors.category && (
          <p className="text-danger">{errors.category.message}</p>
        )}
      </div>
      <button className="col-sm-12 btn btn-primary">Submit</button>
    </form>
  );
};

export default FamilyForm;
