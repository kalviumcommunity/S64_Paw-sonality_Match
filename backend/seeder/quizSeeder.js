const mongoose = require('mongoose');
const dotenv = require('dotenv');
const connectDB = require('../config/db');
const Quiz = require('../models/Quiz');

dotenv.config();

const questions = [
  {
    question: "How do you spend your weekends?",
    options: ["Outdoors", "With friends"],
    correctAnswerIndex: 0
  },
  {
    question: "What's your ideal weather?",
    options: ["Cold", "Sunny"],
    correctAnswerIndex: 1
  },
  {
    question: "What's your favorite type of food?",
    options: ["Meat", "Vegetarian"],
    correctAnswerIndex: 0
  },
  {
    question: "How social are you?",
    options: ["Very Social", "A little"],
    correctAnswerIndex: 0
  },
  {
    question: "Do you like to travel?",
    options: ["Love it!", "Sometimes"],
    correctAnswerIndex: 0
  },
  {
    question: "What's your energy level?",
    options: ["High", "Low"],
    correctAnswerIndex: 0
  },
  {
    question: "How do you handle stress?",
    options: ["Exercise", "Sleep"],
    correctAnswerIndex: 0
  },
  {
    question: "What's your ideal home?",
    options: ["Big house", "Apartment"],
    correctAnswerIndex: 0
  },
  {
    question: "Do you like being the center of attention?",
    options: ["Yes", "No"],
    correctAnswerIndex: 0
  },
  {
    question: "What’s your favorite activity?",
    options: ["Running", "Reading"],
    correctAnswerIndex: 0
  }
];

const seedQuestions = async () => {
  try {
    await connectDB();

    // ✅ Clear existing questions before adding new ones
    await Quiz.deleteMany(); 
    console.log('✅ Existing questions deleted');

    await Quiz.insertMany(questions);
    console.log('✅ Questions seeded successfully');

    process.exit();
  } catch (error) {
    console.error(`❌ Error seeding data: ${error.message}`);
    process.exit(1);
  }
};

seedQuestions();
