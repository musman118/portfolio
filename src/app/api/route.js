
let mongoose = require('mongoose');
import Request from 'next'
import { NextResponse } from 'next/server';
// let Blog = mongoose.model('Blog')
const connectDB  =  require("./db"); 
const BlogSchema = require('./models'); // Adjust the path if needed
// const Blog = mongoose.model('Blog', BlogSchema);
const Blog = mongoose.models['Blog'] || mongoose.model('Blog', BlogSchema);


// const Blog = require("./models");
export async function GET(request) {
    connectDB()
    const recentBlogs = await Blog.find().sort({ date: -1 }).limit(2); // Sort descending by date, limit to 2
    // Output: Array of 2 most recent blog documents
    console.log("Inside route.js")
   
    return NextResponse.json( recentBlogs )}

