// utils/getFinancialAdvice.js
import OpenAI from "openai";

// Initialize the OpenAI client
const openai = new OpenAI({
  baseURL: "https://models.inference.ai.azure.com",
  apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true,

});

// Function to fetch user-specific data (mocked for this example)

// Function to generate personalized financial advice
const getFinancialAdvice = async (totalBudget, totalIncome, totalSpend) => {
  console.log(totalBudget, totalIncome, totalSpend);
  try {
    const userPrompt = `
      Based on the following financial data:
      - Total Budget: ${totalBudget} USD 
      - Expenses: ${totalSpend} USD 
      - Incomes: ${totalIncome} USD
      Provide detailed financial advice in 2 sentence to help the user manage their finances more effectively.
    `;

    // Send the prompt to the OpenAI API
    const chatCompletion = await openai.chat.completions.create({
      model: "gpt-4o",
      temperature: 1,
      max_tokens: 4096,
      top_p: 1,
      messages: [{ role: "user", content: userPrompt }],
    });

    // Process and return the response
    const advice = chatCompletion.choices[0].message.content;

    console.log(advice);
    return advice;
  } catch (error) {
    console.error("Error fetching financial advice:", error);
    return "Sorry, I couldn't fetch the financial advice at this moment. Please try again later.";
  }
};

export default getFinancialAdvice;
