'use client';
import {useEffect,useState} from 'react';
export default function Base64Image({src,alt,className}){
 const [data,setData]=useState('');
 useEffect(()=>{let active=true;fetch(src).then(r=>r.text()).then(t=>{if(active)setData('data:image/jpeg;base64,'+t.trim())});return()=>{active=false}},[src]);
 if(!data)return <div className={(className||'')+' imageLoading'} aria-label={alt}/>;
 return <img src={data} alt={alt} className={className}/>;
}
