import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
        <div className='questions'>
            <div className='one d-flex justify-content-center flex-wrap m-5 p-5 rounded-3'>
                <h1>কনটেক্সট এপিআই কি?</h1>
                <p>যদি একটা পেরেন্ট কম্পোনেন্ট থেকে অনেক গুলো কম্পোনেন্ট এর নিচে একটা কম্পোনেন্ট এ ডাটা পাঠাতে চাই, তখন আমাদের একটা কম্পোনেন্ট থেকে আরেকটা কম্পোনেন্ট এরপর  আবার একটা কম্পোনেন্ট এ ডাটা পাঠিয়ে চাইল্ড কম্পোনেন্ট এ ডাটা পাঠাতে হয় । এই পদ্ধতিকে প্রোপ ড্রিল্লিং বলে। এই প্রোপ ড্রিল্লিং এড়ানোর জন্য আমরা কনটেক্সট এপিআই ব্যবহার করবো । কনটেক্সট এপিআই দিয়ে আমরা ডাটা গ্লোবালি পাঠাতে পারি ।  কনটেক্সট এপিআই ব্যবহার করার জন্য প্রথমে আমাদের একটা কনটেক্সট ক্রিয়েট করতে হবে । উদাহরণ : const FoodContext = createContext(data) । এরপর  পেরেন্ট কম্পোনেন্ট কে কনটেক্সট. প্রোভাইডার এর ভিতরে রাখতে হবে এবং একটা ভ্যালু দিতে হবে । তারপর আমাদের চাইল্ড কম্পোনেন্ট একটা ভ্যারিয়েবল ডিক্লেয়ার করতে হবে। সেটাতে আমরা লিখবো const data = useContext(কম্পোনেন্ট এর নাম) তারপর আমরা যেখানে ইচ্ছা সেখানে ডাটা ব্যাবহার করতে পারবো | </p>
            </div>
            <div>

            </div>
        </div>
    );
};

export default Blogs;