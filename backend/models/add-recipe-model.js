import mongoose, {Schema} from "mongoose";

const addRecipeSchema = new Schema({
  userFullname:{type: String, required: true},
  userDescription: {type: String, required: true},
  userCountry: {type: String, required: true},
  recipeName: {type: String, required: true},
  recipeDetails: {type: String, required: true}
})

const addRecipeSchemaFinal = mongoose.model('addRecipeSchema', addRecipeSchema);

export default addRecipeSchemaFinal;