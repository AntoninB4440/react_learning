import { useState } from "react"

function Main(){
    const [ingredients, setIngredients] = useState([]);

    const ingredientsListItems = ingredients.map(ingredient => 
        <li key={ingredient}>{ingredient}</li>
    )

    function addIngredient(formData){
        const newIngredient = formData.get("ingredient")
        setIngredients(prevIngredients => [...prevIngredients, newIngredient])
    }

    return(
        <main>
            <form 
                className="add-ingredient-form" 
                name="ingredient-form"
                action={addIngredient}>
                <input
                    type="text"
                    placeholder="e.g. oregano"
                    aria-label="Add ingredient"
                    name="ingredient"
                />
                <button>+ Add ingredient</button>
            </form>
            <ul>
                {ingredientsListItems}
            </ul>
        </main>
    )
}

export default Main