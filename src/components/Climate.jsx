import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';

const ClimateNews = () => {
    const [news, setNews] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const lastFetchTime = useRef(0);

    const options = {
        method: 'GET',
        url: 'https://climate-news-feed.p.rapidapi.com/page/1',
        params: {limit: '10'},
        headers: {
            'X-RapidAPI-Key': '90d9cad4aemsh0c2ae781060c8c2p1a0ee0jsna36176967a11',
            'X-RapidAPI-Host': 'climate-news-feed.p.rapidapi.com'
        }
    };

    const fetchData = async () => {
        const currentTime = Date.now();
      
        setIsLoading(true);
      
        try {
            const response = await axios.request(options);
            console.log(response.data);
            setNews(response.data);
            
            setIsLoading(false);
        
        } catch (err) {
            setError(err);
            setIsLoading(false);
        }
    };
      
    useEffect(() => {
        fetchData();
    }, []);
  
    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error fetching news: {error.message}</p>;
  
    return (
        <div className='bg-slate-50 text-black mt-5 scroll-y-'>
            <h2 className='font-bold'>Climate News</h2>
            <hr className='border-blue-400 h-6' />
            <ul>
                { news.articles && news.articles.map((article, index) => (
                    <li key={index}>

                        <a  href={article.url} target="_blank" rel="noopener noreferrer"> 
                        <span className='text-white-400'>{article.title} 
                       <hr className='border-blue-400' />
                        </span>
                        </a>

                    </li>
                ))}
            </ul>
        </div>
    );
}
  
export default ClimateNews;
