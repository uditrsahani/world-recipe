import { Router } from "express";
import addRecipeSchemaFinal from "../models/add-recipe-model.js";

const router = Router();

  router.post('/add-recipe', async (req, res)=>{
    const {userFullname, userDescription, userCountry, recipeName, recipeDetails} = req.body;

    if(!userFullname || !userDescription || !userCountry || !recipeName || !recipeDetails ){
      return res.status(400).json({message: 'All fields are required'})
    }

    //create new recipe
   try{
    const newRecipe = new addRecipeSchemaFinal ({
      userFullname,
      userCountry,
      userDescription,
      recipeName,
      recipeDetails
    })

    const savedRecipe = await newRecipe.save();

   return res.status(200).json({message: 'recipe added succesfully', recipe: savedRecipe})
   }

   catch(err){
    return res.status(500).json({message:'Error saving recipe: ' + err})
   }

    
  })

  router.get('/recipies', async(req, res)=>{
    try{
      const recipies = await addRecipeSchemaFinal.find();
      return res.status(200).json(recipies)
    }

    catch(err){
      return res.status(500).json({message: 'Error fecthing all recipies'})
    }
  })

  router.get('/ReadRecipe/:id', async (req, res)=>{
    try{
      const oneRecipe = await addRecipeSchemaFinal.findById(req.params.id);
      if(!oneRecipe){
        return res.status(400).json({message: 'Recipe not found'});
      }   

      return res.status(200).json(oneRecipe);
    }

    catch(err){
      console.log('Error finding recipe: '+ err);
    }
  })
 
  export default router;