import React, { useEffect, useState } from 'react';
import ProductItem from '../components/ProductItem';
import '../styles/ProductList.scss';
import useGetProducts from '../hooks/useGetProducts';

const API = 'https://api.escuelajs.co/api/v1/products';

const ProductList = ({ category }) => {
  const products = [
    {
      id: 12,
      title: 'Licensed Cotton Salad',
      price: 41200,
      description:
        'The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive',
      category: {
        id: 3,
        name: 'Furniture',
        image: 'https://api.lorem.space/image/furniture?w=640&h=480&r=4537',
      },
      images: [
        'https://api.lorem.space/image/furniture?w=640&h=480&r=2608',
        'https://api.lorem.space/image/furniture?w=640&h=480&r=2920',
        'https://api.lorem.space/image/furniture?w=640&h=480&r=1054',
      ],
    },
    {
      id: 17,
      title: 'Incredible Soft Pants',
      price: 78000,
      description:
        'The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients',
      category: {
        id: 2,
        name: 'Electronics',
        image: 'https://api.lorem.space/image/watch?w=640&h=480&r=4552',
      },
      images: [
        'https://api.lorem.space/image/watch?w=640&h=480&r=5931',
        'https://api.lorem.space/image/watch?w=640&h=480&r=39',
        'https://api.lorem.space/image/watch?w=640&h=480&r=5774',
      ],
    },
    {
      id: 18,
      title: 'Handcrafted Granite Pants',
      price: 96300,
      description:
        'Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals',
      category: {
        id: 5,
        name: 'Others',
        image: 'https://api.lorem.space/image?w=640&h=480&r=9748',
      },
      images: [
        'https://api.lorem.space/image?w=640&h=480&r=1767',
        'https://api.lorem.space/image?w=640&h=480&r=1648',
        'https://api.lorem.space/image?w=640&h=480&r=32',
      ],
    },
    {
      id: 19,
      title: 'Sleek Granite Cheese',
      price: 48700,
      description:
        'The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J',
      category: {
        id: 2,
        name: 'Electronics',
        image: 'https://api.lorem.space/image/watch?w=640&h=480&r=4552',
      },
      images: [
        'https://api.lorem.space/image/watch?w=640&h=480&r=6555',
        'https://api.lorem.space/image/watch?w=640&h=480&r=8608',
        'https://api.lorem.space/image/watch?w=640&h=480&r=7570',
      ],
    },
    {
      id: 20,
      title: 'Generic Rubber Chicken',
      price: 19900,
      description:
        'Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support',
      category: {
        id: 2,
        name: 'Electronics',
        image: 'https://api.lorem.space/image/watch?w=640&h=480&r=4552',
      },
      images: [
        'https://api.lorem.space/image/watch?w=640&h=480&r=3310',
        'https://api.lorem.space/image/watch?w=640&h=480&r=7096',
        'https://api.lorem.space/image/watch?w=640&h=480&r=471',
      ],
    },
    {
      id: 21,
      title: 'Awesome Plastic Mouse',
      price: 94000,
      description:
        'Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals',
      category: {
        id: 2,
        name: 'Electronics',
        image: 'https://api.lorem.space/image/watch?w=640&h=480&r=4552',
      },
      images: [
        'https://api.lorem.space/image/watch?w=640&h=480&r=2139',
        'https://api.lorem.space/image/watch?w=640&h=480&r=3644',
        'https://api.lorem.space/image/watch?w=640&h=480&r=1321',
      ],
    },
    {
      id: 22,
      title: 'Unbranded Metal Ball',
      price: 11600,
      description:
        'New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart',
      category: {
        id: 5,
        name: 'Others',
        image: 'https://api.lorem.space/image?w=640&h=480&r=9748',
      },
      images: [
        'https://api.lorem.space/image?w=640&h=480&r=7079',
        'https://api.lorem.space/image?w=640&h=480&r=9789',
        'https://api.lorem.space/image?w=640&h=480&r=9706',
      ],
    },
    {
      id: 23,
      title: 'Incredible Rubber Fish',
      price: 49400,
      description: 'The Football Is Good For Training And Recreational Purposes',
      category: {
        id: 3,
        name: 'Furniture',
        image: 'https://api.lorem.space/image/furniture?w=640&h=480&r=4537',
      },
      images: [
        'https://api.lorem.space/image/furniture?w=640&h=480&r=6908',
        'https://api.lorem.space/image/furniture?w=640&h=480&r=5760',
        'https://api.lorem.space/image/furniture?w=640&h=480&r=4767',
      ],
    },
    {
      id: 25,
      title: 'Practical Granite Chips',
      price: 52100,
      description:
        'Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support',
      category: {
        id: 1,
        name: 'Clothes',
        image: 'https://api.lorem.space/image/fashion?w=640&h=480&r=7359',
      },
      images: [
        'https://api.lorem.space/image/fashion?w=640&h=480&r=5621',
        'https://api.lorem.space/image/fashion?w=640&h=480&r=3642',
        'https://api.lorem.space/image/fashion?w=640&h=480&r=2855',
      ],
    },
    {
      id: 26,
      title: 'Tasty Wooden Ball',
      price: 16800,
      description: 'Carbonite web goalkeeper gloves are ergonomically designed to give easy fit',
      category: {
        id: 1,
        name: 'Clothes',
        image: 'https://api.lorem.space/image/fashion?w=640&h=480&r=7359',
      },
      images: [
        'https://api.lorem.space/image/fashion?w=640&h=480&r=3338',
        'https://api.lorem.space/image/fashion?w=640&h=480&r=6460',
        'https://api.lorem.space/image/fashion?w=640&h=480&r=8959',
      ],
    },
    {
      id: 27,
      title: 'Practical Granite Fish',
      price: 23000,
      description:
        'The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality',
      category: {
        id: 2,
        name: 'Electronics',
        image: 'https://api.lorem.space/image/watch?w=640&h=480&r=4552',
      },
      images: [
        'https://api.lorem.space/image/watch?w=640&h=480&r=6211',
        'https://api.lorem.space/image/watch?w=640&h=480&r=2916',
        'https://api.lorem.space/image/watch?w=640&h=480&r=6783',
      ],
    },
    {
      id: 29,
      title: 'Unbranded Steel Cheese',
      price: 65600,
      description:
        'Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support',
      category: {
        id: 4,
        name: 'Shoes',
        image: 'https://api.lorem.space/image/shoes?w=640&h=480&r=4444',
      },
      images: [
        'https://api.lorem.space/image/shoes?w=640&h=480&r=1248',
        'https://api.lorem.space/image/shoes?w=640&h=480&r=995',
        'https://api.lorem.space/image/shoes?w=640&h=480&r=1884',
      ],
    },
    {
      id: 30,
      title: 'Unbranded Cotton Computer',
      price: 27600,
      description:
        'The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J',
      category: {
        id: 1,
        name: 'Clothes',
        image: 'https://api.lorem.space/image/fashion?w=640&h=480&r=7359',
      },
      images: [
        'https://api.lorem.space/image/fashion?w=640&h=480&r=4786',
        'https://api.lorem.space/image/fashion?w=640&h=480&r=6939',
        'https://api.lorem.space/image/fashion?w=640&h=480&r=8711',
      ],
    },
    {
      id: 31,
      title: 'Refined Cotton Tuna',
      price: 14300,
      description:
        'New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016',
      category: {
        id: 4,
        name: 'Shoes',
        image: 'https://api.lorem.space/image/shoes?w=640&h=480&r=4444',
      },
      images: [
        'https://api.lorem.space/image/shoes?w=640&h=480&r=6399',
        'https://api.lorem.space/image/shoes?w=640&h=480&r=1089',
        'https://api.lorem.space/image/shoes?w=640&h=480&r=6463',
      ],
    },
    {
      id: 32,
      title: 'Rustic Steel Bike',
      price: 33800,
      description:
        'The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design',
      category: {
        id: 3,
        name: 'Furniture',
        image: 'https://api.lorem.space/image/furniture?w=640&h=480&r=4537',
      },
      images: [
        'https://api.lorem.space/image/furniture?w=640&h=480&r=8527',
        'https://api.lorem.space/image/furniture?w=640&h=480&r=4614',
        'https://api.lorem.space/image/furniture?w=640&h=480&r=3359',
      ],
    },
    {
      id: 33,
      title: 'Licensed Fresh Ball',
      price: 49800,
      description: 'The Football Is Good For Training And Recreational Purposes',
      category: {
        id: 3,
        name: 'Furniture',
        image: 'https://api.lorem.space/image/furniture?w=640&h=480&r=4537',
      },
      images: [
        'https://api.lorem.space/image/furniture?w=640&h=480&r=2024',
        'https://api.lorem.space/image/furniture?w=640&h=480&r=1853',
        'https://api.lorem.space/image/furniture?w=640&h=480&r=2590',
      ],
    },
    {
      id: 34,
      title: 'Handcrafted Fresh Chair',
      price: 25000,
      description: 'The Football Is Good For Training And Recreational Purposes',
      category: {
        id: 5,
        name: 'Others',
        image: 'https://api.lorem.space/image?w=640&h=480&r=9748',
      },
      images: [
        'https://api.lorem.space/image?w=640&h=480&r=5978',
        'https://api.lorem.space/image?w=640&h=480&r=1600',
        'https://api.lorem.space/image?w=640&h=480&r=2656',
      ],
    },
    {
      id: 35,
      title: 'Handcrafted Fresh Soap',
      price: 19500,
      description:
        "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
      category: {
        id: 1,
        name: 'Clothes',
        image: 'https://api.lorem.space/image/fashion?w=640&h=480&r=7359',
      },
      images: [
        'https://api.lorem.space/image/fashion?w=640&h=480&r=9883',
        'https://api.lorem.space/image/fashion?w=640&h=480&r=9664',
        'https://api.lorem.space/image/fashion?w=640&h=480&r=9689',
      ],
    },
    {
      id: 36,
      title: 'Ergonomic Granite Mouse',
      price: 58700,
      description:
        'Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals',
      category: {
        id: 1,
        name: 'Clothes',
        image: 'https://api.lorem.space/image/fashion?w=640&h=480&r=7359',
      },
      images: [
        'https://api.lorem.space/image/fashion?w=640&h=480&r=9993',
        'https://api.lorem.space/image/fashion?w=640&h=480&r=4897',
        'https://api.lorem.space/image/fashion?w=640&h=480&r=8998',
      ],
    },
    {
      id: 37,
      title: 'Tasty Wooden Ball',
      price: 67700,
      description:
        "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
      category: {
        id: 2,
        name: 'Electronics',
        image: 'https://api.lorem.space/image/watch?w=640&h=480&r=4552',
      },
      images: [
        'https://api.lorem.space/image/watch?w=640&h=480&r=6947',
        'https://api.lorem.space/image/watch?w=640&h=480&r=4115',
        'https://api.lorem.space/image/watch?w=640&h=480&r=5576',
      ],
    },
    {
      id: 38,
      title: 'Sleek Rubber Pizza',
      price: 20600,
      description:
        'New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016',
      category: {
        id: 4,
        name: 'Shoes',
        image: 'https://api.lorem.space/image/shoes?w=640&h=480&r=4444',
      },
      images: [
        'https://api.lorem.space/image/shoes?w=640&h=480&r=5820',
        'https://api.lorem.space/image/shoes?w=640&h=480&r=8611',
        'https://api.lorem.space/image/shoes?w=640&h=480&r=1616',
      ],
    },
    {
      id: 39,
      title: 'Fantastic Steel Chicken',
      price: 92100,
      description:
        'The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design',
      category: {
        id: 3,
        name: 'Furniture',
        image: 'https://api.lorem.space/image/furniture?w=640&h=480&r=4537',
      },
      images: [
        'https://api.lorem.space/image/furniture?w=640&h=480&r=9102',
        'https://api.lorem.space/image/furniture?w=640&h=480&r=4874',
        'https://api.lorem.space/image/furniture?w=640&h=480&r=3907',
      ],
    },
    {
      id: 40,
      title: 'Generic Fresh Sausages',
      price: 94500,
      description:
        'The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality',
      category: {
        id: 5,
        name: 'Others',
        image: 'https://api.lorem.space/image?w=640&h=480&r=9748',
      },
      images: [
        'https://api.lorem.space/image?w=640&h=480&r=2653',
        'https://api.lorem.space/image?w=640&h=480&r=4659',
        'https://api.lorem.space/image?w=640&h=480&r=3501',
      ],
    },
    {
      id: 41,
      title: 'Rustic Metal Computer',
      price: 98300,
      description: 'Carbonite web goalkeeper gloves are ergonomically designed to give easy fit',
      category: {
        id: 1,
        name: 'Clothes',
        image: 'https://api.lorem.space/image/fashion?w=640&h=480&r=7359',
      },
      images: [
        'https://api.lorem.space/image/fashion?w=640&h=480&r=660',
        'https://api.lorem.space/image/fashion?w=640&h=480&r=4206',
        'https://api.lorem.space/image/fashion?w=640&h=480&r=2621',
      ],
    },
    {
      id: 42,
      title: 'Sleek Soft Gloves',
      price: 76100,
      description:
        'New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016',
      category: {
        id: 5,
        name: 'Others',
        image: 'https://api.lorem.space/image?w=640&h=480&r=9748',
      },
      images: [
        'https://api.lorem.space/image?w=640&h=480&r=9347',
        'https://api.lorem.space/image?w=640&h=480&r=2898',
        'https://api.lorem.space/image?w=640&h=480&r=4857',
      ],
    },
    {
      id: 45,
      title: 'Rustic Soft Chips',
      price: 84100,
      description:
        'New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016',
      category: {
        id: 2,
        name: 'Electronics',
        image: 'https://api.lorem.space/image/watch?w=640&h=480&r=4552',
      },
      images: [
        'https://api.lorem.space/image/watch?w=640&h=480&r=6898',
        'https://api.lorem.space/image/watch?w=640&h=480&r=9441',
        'https://api.lorem.space/image/watch?w=640&h=480&r=331',
      ],
    },
    {
      id: 46,
      title: 'Unbranded Soft Shirt',
      price: 86000,
      description:
        'The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design',
      category: {
        id: 1,
        name: 'Clothes',
        image: 'https://api.lorem.space/image/fashion?w=640&h=480&r=7359',
      },
      images: [
        'https://api.lorem.space/image/fashion?w=640&h=480&r=1747',
        'https://api.lorem.space/image/fashion?w=640&h=480&r=4022',
        'https://api.lorem.space/image/fashion?w=640&h=480&r=6061',
      ],
    },
    {
      id: 48,
      title: 'Small Rubber Chair',
      price: 35600,
      description:
        'The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients',
      category: {
        id: 2,
        name: 'Electronics',
        image: 'https://api.lorem.space/image/watch?w=640&h=480&r=4552',
      },
      images: [
        'https://api.lorem.space/image/watch?w=640&h=480&r=7238',
        'https://api.lorem.space/image/watch?w=640&h=480&r=3252',
        'https://api.lorem.space/image/watch?w=640&h=480&r=9704',
      ],
    },
    {
      id: 49,
      title: 'Small Steel Salad',
      price: 15800,
      description:
        'The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality',
      category: {
        id: 1,
        name: 'Clothes',
        image: 'https://api.lorem.space/image/fashion?w=640&h=480&r=7359',
      },
      images: [
        'https://api.lorem.space/image/fashion?w=640&h=480&r=9819',
        'https://api.lorem.space/image/fashion?w=640&h=480&r=126',
        'https://api.lorem.space/image/fashion?w=640&h=480&r=9210',
      ],
    },
    {
      id: 50,
      title: 'Intelligent Frozen Chips',
      price: 98700,
      description:
        'New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart',
      category: {
        id: 1,
        name: 'Clothes',
        image: 'https://api.lorem.space/image/fashion?w=640&h=480&r=7359',
      },
      images: [
        'https://api.lorem.space/image/fashion?w=640&h=480&r=8590',
        'https://api.lorem.space/image/fashion?w=640&h=480&r=9508',
        'https://api.lorem.space/image/fashion?w=640&h=480&r=5439',
      ],
    },
    {
      id: 51,
      title: 'Licensed Soft Cheese',
      price: 41800,
      description:
        'Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals',
      category: {
        id: 1,
        name: 'Clothes',
        image: 'https://api.lorem.space/image/fashion?w=640&h=480&r=7359',
      },
      images: [
        'https://api.lorem.space/image/fashion?w=640&h=480&r=5303',
        'https://api.lorem.space/image/fashion?w=640&h=480&r=3867',
        'https://api.lorem.space/image/fashion?w=640&h=480&r=8075',
      ],
    },
    {
      id: 52,
      title: 'Small Frozen Chair',
      price: 40000,
      description:
        'The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design',
      category: {
        id: 3,
        name: 'Furniture',
        image: 'https://api.lorem.space/image/furniture?w=640&h=480&r=4537',
      },
      images: [
        'https://api.lorem.space/image/furniture?w=640&h=480&r=928',
        'https://api.lorem.space/image/furniture?w=640&h=480&r=3660',
        'https://api.lorem.space/image/furniture?w=640&h=480&r=9518',
      ],
    },
    {
      id: 53,
      title: 'Awesome Granite Bike',
      price: 68800,
      description:
        'Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals',
      category: {
        id: 1,
        name: 'Clothes',
        image: 'https://api.lorem.space/image/fashion?w=640&h=480&r=7359',
      },
      images: [
        'https://api.lorem.space/image/fashion?w=640&h=480&r=8701',
        'https://api.lorem.space/image/fashion?w=640&h=480&r=2360',
        'https://api.lorem.space/image/fashion?w=640&h=480&r=4199',
      ],
    },
    {
      id: 54,
      title: 'Gorgeous Rubber Mouse',
      price: 80800,
      description:
        'The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive',
      category: {
        id: 3,
        name: 'Furniture',
        image: 'https://api.lorem.space/image/furniture?w=640&h=480&r=4537',
      },
      images: [
        'https://api.lorem.space/image/furniture?w=640&h=480&r=4058',
        'https://api.lorem.space/image/furniture?w=640&h=480&r=7305',
        'https://api.lorem.space/image/furniture?w=640&h=480&r=9910',
      ],
    },
    {
      id: 55,
      title: 'Small Cotton Soap',
      price: 41700,
      description:
        'The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality',
      category: {
        id: 1,
        name: 'Clothes',
        image: 'https://api.lorem.space/image/fashion?w=640&h=480&r=7359',
      },
      images: [
        'https://api.lorem.space/image/fashion?w=640&h=480&r=2074',
        'https://api.lorem.space/image/fashion?w=640&h=480&r=276',
        'https://api.lorem.space/image/fashion?w=640&h=480&r=6975',
      ],
    },
    {
      id: 56,
      title: 'Intelligent Fresh Cheese',
      price: 58100,
      description:
        "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
      category: {
        id: 2,
        name: 'Electronics',
        image: 'https://api.lorem.space/image/watch?w=640&h=480&r=4552',
      },
      images: [
        'https://api.lorem.space/image/watch?w=640&h=480&r=1182',
        'https://api.lorem.space/image/watch?w=640&h=480&r=1510',
        'https://api.lorem.space/image/watch?w=640&h=480&r=9364',
      ],
    },
    {
      id: 58,
      title: 'Practical Fresh Pizza',
      price: 48000,
      description: 'The Football Is Good For Training And Recreational Purposes',
      category: {
        id: 5,
        name: 'Others',
        image: 'https://api.lorem.space/image?w=640&h=480&r=9748',
      },
      images: [
        'https://api.lorem.space/image?w=640&h=480&r=3316',
        'https://api.lorem.space/image?w=640&h=480&r=7635',
        'https://api.lorem.space/image?w=640&h=480&r=3982',
      ],
    },
    {
      id: 59,
      title: 'Handmade Wooden Cheese',
      price: 59200,
      description:
        'The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive',
      category: {
        id: 4,
        name: 'Shoes',
        image: 'https://api.lorem.space/image/shoes?w=640&h=480&r=4444',
      },
      images: [
        'https://api.lorem.space/image/shoes?w=640&h=480&r=4059',
        'https://api.lorem.space/image/shoes?w=640&h=480&r=4642',
        'https://api.lorem.space/image/shoes?w=640&h=480&r=689',
      ],
    },
    {
      id: 60,
      title: 'Fantastic Concrete Table',
      price: 10700,
      description:
        'The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design',
      category: {
        id: 5,
        name: 'Others',
        image: 'https://api.lorem.space/image?w=640&h=480&r=9748',
      },
      images: [
        'https://api.lorem.space/image?w=640&h=480&r=9966',
        'https://api.lorem.space/image?w=640&h=480&r=8533',
        'https://api.lorem.space/image?w=640&h=480&r=8228',
      ],
    },
    {
      id: 61,
      title: 'Tasty Soft Salad',
      price: 34600,
      description:
        'Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support',
      category: {
        id: 1,
        name: 'Clothes',
        image: 'https://api.lorem.space/image/fashion?w=640&h=480&r=7359',
      },
      images: [
        'https://api.lorem.space/image/fashion?w=640&h=480&r=696',
        'https://api.lorem.space/image/fashion?w=640&h=480&r=6305',
        'https://api.lorem.space/image/fashion?w=640&h=480&r=6561',
      ],
    },
    {
      id: 63,
      title: 'Licensed Concrete Towels',
      price: 57500,
      description:
        'The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive',
      category: {
        id: 4,
        name: 'Shoes',
        image: 'https://api.lorem.space/image/shoes?w=640&h=480&r=4444',
      },
      images: [
        'https://api.lorem.space/image/shoes?w=640&h=480&r=4784',
        'https://api.lorem.space/image/shoes?w=640&h=480&r=7413',
        'https://api.lorem.space/image/shoes?w=640&h=480&r=45',
      ],
    },
    {
      id: 64,
      title: 'Refined Concrete Bacon',
      price: 43600,
      description:
        'The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients',
      category: {
        id: 4,
        name: 'Shoes',
        image: 'https://api.lorem.space/image/shoes?w=640&h=480&r=4444',
      },
      images: [
        'https://api.lorem.space/image/shoes?w=640&h=480&r=9323',
        'https://api.lorem.space/image/shoes?w=640&h=480&r=8193',
        'https://api.lorem.space/image/shoes?w=640&h=480&r=9276',
      ],
    },
    {
      id: 65,
      title: 'Incredible Cotton Table',
      price: 12400,
      description:
        'The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive',
      category: {
        id: 1,
        name: 'Clothes',
        image: 'https://api.lorem.space/image/fashion?w=640&h=480&r=7359',
      },
      images: [
        'https://api.lorem.space/image/fashion?w=640&h=480&r=8827',
        'https://api.lorem.space/image/fashion?w=640&h=480&r=5544',
        'https://api.lorem.space/image/fashion?w=640&h=480&r=8331',
      ],
    },
    {
      id: 67,
      title: 'Rustic Steel Car',
      price: 27300,
      description:
        'Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support',
      category: {
        id: 1,
        name: 'Clothes',
        image: 'https://api.lorem.space/image/fashion?w=640&h=480&r=7359',
      },
      images: [
        'https://api.lorem.space/image/fashion?w=640&h=480&r=2169',
        'https://api.lorem.space/image/fashion?w=640&h=480&r=5931',
        'https://api.lorem.space/image/fashion?w=640&h=480&r=6946',
      ],
    },
    {
      id: 68,
      title: 'Incredible Wooden Computer',
      price: 92900,
      description:
        'The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive',
      category: {
        id: 3,
        name: 'Furniture',
        image: 'https://api.lorem.space/image/furniture?w=640&h=480&r=4537',
      },
      images: [
        'https://api.lorem.space/image/furniture?w=640&h=480&r=4953',
        'https://api.lorem.space/image/furniture?w=640&h=480&r=2347',
        'https://api.lorem.space/image/furniture?w=640&h=480&r=4108',
      ],
    },
    {
      id: 70,
      title: 'Tasty Cotton Computer',
      price: 85700,
      description:
        'Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support',
      category: {
        id: 1,
        name: 'Clothes',
        image: 'https://api.lorem.space/image/fashion?w=640&h=480&r=7359',
      },
      images: [
        'https://api.lorem.space/image/fashion?w=640&h=480&r=5920',
        'https://api.lorem.space/image/fashion?w=640&h=480&r=118',
        'https://api.lorem.space/image/fashion?w=640&h=480&r=3664',
      ],
    },
    {
      id: 71,
      title: 'Fantastic Frozen Car',
      price: 33200,
      description:
        'Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals',
      category: {
        id: 1,
        name: 'Clothes',
        image: 'https://api.lorem.space/image/fashion?w=640&h=480&r=7359',
      },
      images: [
        'https://api.lorem.space/image/fashion?w=640&h=480&r=8220',
        'https://api.lorem.space/image/fashion?w=640&h=480&r=5048',
        'https://api.lorem.space/image/fashion?w=640&h=480&r=7182',
      ],
    },
    {
      id: 72,
      title: 'Refined Steel Towels',
      price: 57400,
      description:
        'The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients',
      category: {
        id: 5,
        name: 'Others',
        image: 'https://api.lorem.space/image?w=640&h=480&r=9748',
      },
      images: [
        'https://api.lorem.space/image?w=640&h=480&r=5581',
        'https://api.lorem.space/image?w=640&h=480&r=3790',
        'https://api.lorem.space/image?w=640&h=480&r=3386',
      ],
    },
    {
      id: 73,
      title: 'Intelligent Granite Fish',
      price: 48600,
      description:
        'The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J',
      category: {
        id: 3,
        name: 'Furniture',
        image: 'https://api.lorem.space/image/furniture?w=640&h=480&r=4537',
      },
      images: [
        'https://api.lorem.space/image/furniture?w=640&h=480&r=3523',
        'https://api.lorem.space/image/furniture?w=640&h=480&r=5227',
        'https://api.lorem.space/image/furniture?w=640&h=480&r=7987',
      ],
    },
    {
      id: 74,
      title: 'Licensed Steel Soap',
      price: 28000,
      description:
        'The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive',
      category: {
        id: 4,
        name: 'Shoes',
        image: 'https://api.lorem.space/image/shoes?w=640&h=480&r=4444',
      },
      images: [
        'https://api.lorem.space/image/shoes?w=640&h=480&r=1821',
        'https://api.lorem.space/image/shoes?w=640&h=480&r=8407',
        'https://api.lorem.space/image/shoes?w=640&h=480&r=5936',
      ],
    },
    {
      id: 75,
      title: 'Fantastic Steel Tuna',
      price: 18000,
      description: 'The Football Is Good For Training And Recreational Purposes',
      category: {
        id: 3,
        name: 'Furniture',
        image: 'https://api.lorem.space/image/furniture?w=640&h=480&r=4537',
      },
      images: [
        'https://api.lorem.space/image/furniture?w=640&h=480&r=9902',
        'https://api.lorem.space/image/furniture?w=640&h=480&r=6672',
        'https://api.lorem.space/image/furniture?w=640&h=480&r=3509',
      ],
    },
    {
      id: 76,
      title: 'Small Wooden Mouse',
      price: 19300,
      description:
        'Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals',
      category: {
        id: 4,
        name: 'Shoes',
        image: 'https://api.lorem.space/image/shoes?w=640&h=480&r=4444',
      },
      images: [
        'https://api.lorem.space/image/shoes?w=640&h=480&r=637',
        'https://api.lorem.space/image/shoes?w=640&h=480&r=8845',
        'https://api.lorem.space/image/shoes?w=640&h=480&r=8669',
      ],
    },
    {
      id: 79,
      title: 'Practical Rubber Towels',
      price: 47900,
      description:
        'Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support',
      category: {
        id: 3,
        name: 'Furniture',
        image: 'https://api.lorem.space/image/furniture?w=640&h=480&r=4537',
      },
      images: [
        'https://api.lorem.space/image/furniture?w=640&h=480&r=4036',
        'https://api.lorem.space/image/furniture?w=640&h=480&r=2832',
        'https://api.lorem.space/image/furniture?w=640&h=480&r=9494',
      ],
    },
    {
      id: 80,
      title: 'Generic Fresh Soap',
      price: 44200,
      description:
        'The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients',
      category: {
        id: 3,
        name: 'Furniture',
        image: 'https://api.lorem.space/image/furniture?w=640&h=480&r=4537',
      },
      images: [
        'https://api.lorem.space/image/furniture?w=640&h=480&r=9332',
        'https://api.lorem.space/image/furniture?w=640&h=480&r=7420',
        'https://api.lorem.space/image/furniture?w=640&h=480&r=8652',
      ],
    },
    {
      id: 81,
      title: 'Tasty Soft Pizza',
      price: 54400,
      description:
        'The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality',
      category: {
        id: 4,
        name: 'Shoes',
        image: 'https://api.lorem.space/image/shoes?w=640&h=480&r=4444',
      },
      images: [
        'https://api.lorem.space/image/shoes?w=640&h=480&r=8524',
        'https://api.lorem.space/image/shoes?w=640&h=480&r=9928',
        'https://api.lorem.space/image/shoes?w=640&h=480&r=6807',
      ],
    },
    {
      id: 82,
      title: 'Licensed Frozen Car',
      price: 21600,
      description:
        'The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J',
      category: {
        id: 4,
        name: 'Shoes',
        image: 'https://api.lorem.space/image/shoes?w=640&h=480&r=4444',
      },
      images: [
        'https://api.lorem.space/image/shoes?w=640&h=480&r=9239',
        'https://api.lorem.space/image/shoes?w=640&h=480&r=2300',
        'https://api.lorem.space/image/shoes?w=640&h=480&r=9790',
      ],
    },
    {
      id: 84,
      title: 'Unbranded Cotton Pants',
      price: 26900,
      description: 'The Football Is Good For Training And Recreational Purposes',
      category: {
        id: 1,
        name: 'Clothes',
        image: 'https://api.lorem.space/image/fashion?w=640&h=480&r=7359',
      },
      images: [
        'https://api.lorem.space/image/fashion?w=640&h=480&r=7916',
        'https://api.lorem.space/image/fashion?w=640&h=480&r=39',
        'https://api.lorem.space/image/fashion?w=640&h=480&r=6396',
      ],
    },
    {
      id: 85,
      title: 'Gorgeous Concrete Chicken',
      price: 33400,
      description:
        "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
      category: {
        id: 3,
        name: 'Furniture',
        image: 'https://api.lorem.space/image/furniture?w=640&h=480&r=4537',
      },
      images: [
        'https://api.lorem.space/image/furniture?w=640&h=480&r=2300',
        'https://api.lorem.space/image/furniture?w=640&h=480&r=7327',
        'https://api.lorem.space/image/furniture?w=640&h=480&r=4426',
      ],
    },
    {
      id: 86,
      title: 'Small Steel Sausages',
      price: 86200,
      description:
        'The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive',
      category: {
        id: 1,
        name: 'Clothes',
        image: 'https://api.lorem.space/image/fashion?w=640&h=480&r=7359',
      },
      images: [
        'https://api.lorem.space/image/fashion?w=640&h=480&r=4429',
        'https://api.lorem.space/image/fashion?w=640&h=480&r=3216',
        'https://api.lorem.space/image/fashion?w=640&h=480&r=337',
      ],
    },
    {
      id: 87,
      title: 'Awesome Fresh Table',
      price: 63200,
      description:
        'The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive',
      category: {
        id: 1,
        name: 'Clothes',
        image: 'https://api.lorem.space/image/fashion?w=640&h=480&r=7359',
      },
      images: [
        'https://api.lorem.space/image/fashion?w=640&h=480&r=1899',
        'https://api.lorem.space/image/fashion?w=640&h=480&r=3109',
        'https://api.lorem.space/image/fashion?w=640&h=480&r=1384',
      ],
    },
    {
      id: 88,
      title: 'Small Soft Shirt',
      price: 80000,
      description:
        'The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J',
      category: {
        id: 2,
        name: 'Electronics',
        image: 'https://api.lorem.space/image/watch?w=640&h=480&r=4552',
      },
      images: [
        'https://api.lorem.space/image/watch?w=640&h=480&r=8679',
        'https://api.lorem.space/image/watch?w=640&h=480&r=1434',
        'https://api.lorem.space/image/watch?w=640&h=480&r=6140',
      ],
    },
    {
      id: 89,
      title: 'Small Rubber Ball',
      price: 19400,
      description:
        "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
      category: {
        id: 4,
        name: 'Shoes',
        image: 'https://api.lorem.space/image/shoes?w=640&h=480&r=4444',
      },
      images: [
        'https://api.lorem.space/image/shoes?w=640&h=480&r=7409',
        'https://api.lorem.space/image/shoes?w=640&h=480&r=1122',
        'https://api.lorem.space/image/shoes?w=640&h=480&r=8232',
      ],
    },
    {
      id: 90,
      title: 'Intelligent Rubber Shoes',
      price: 97800,
      description:
        'New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016',
      category: {
        id: 3,
        name: 'Furniture',
        image: 'https://api.lorem.space/image/furniture?w=640&h=480&r=4537',
      },
      images: [
        'https://api.lorem.space/image/furniture?w=640&h=480&r=1485',
        'https://api.lorem.space/image/furniture?w=640&h=480&r=7718',
        'https://api.lorem.space/image/furniture?w=640&h=480&r=2244',
      ],
    },
    {
      id: 92,
      title: 'Intelligent Steel Keyboard',
      price: 56400,
      description: 'Carbonite web goalkeeper gloves are ergonomically designed to give easy fit',
      category: {
        id: 1,
        name: 'Clothes',
        image: 'https://api.lorem.space/image/fashion?w=640&h=480&r=7359',
      },
      images: [
        'https://api.lorem.space/image/fashion?w=640&h=480&r=3788',
        'https://api.lorem.space/image/fashion?w=640&h=480&r=8747',
        'https://api.lorem.space/image/fashion?w=640&h=480&r=8682',
      ],
    },
    {
      id: 93,
      title: 'Sleek Metal Soap',
      price: 40000,
      description: 'Carbonite web goalkeeper gloves are ergonomically designed to give easy fit',
      category: {
        id: 4,
        name: 'Shoes',
        image: 'https://api.lorem.space/image/shoes?w=640&h=480&r=4444',
      },
      images: [
        'https://api.lorem.space/image/shoes?w=640&h=480&r=457',
        'https://api.lorem.space/image/shoes?w=640&h=480&r=6359',
        'https://api.lorem.space/image/shoes?w=640&h=480&r=5146',
      ],
    },
    {
      id: 94,
      title: 'Fantastic Soft Table',
      price: 46600,
      description:
        'The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients',
      category: {
        id: 4,
        name: 'Shoes',
        image: 'https://api.lorem.space/image/shoes?w=640&h=480&r=4444',
      },
      images: [
        'https://api.lorem.space/image/shoes?w=640&h=480&r=6174',
        'https://api.lorem.space/image/shoes?w=640&h=480&r=6841',
        'https://api.lorem.space/image/shoes?w=640&h=480&r=1122',
      ],
    },
    {
      id: 95,
      title: 'Refined Wooden Table',
      price: 31100,
      description:
        'New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart',
      category: {
        id: 3,
        name: 'Furniture',
        image: 'https://api.lorem.space/image/furniture?w=640&h=480&r=4537',
      },
      images: [
        'https://api.lorem.space/image/furniture?w=640&h=480&r=9547',
        'https://api.lorem.space/image/furniture?w=640&h=480&r=2694',
        'https://api.lorem.space/image/furniture?w=640&h=480&r=9831',
      ],
    },
    {
      id: 96,
      title: 'Rustic Frozen Bacon',
      price: 73800,
      description:
        'The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients',
      category: {
        id: 2,
        name: 'Electronics',
        image: 'https://api.lorem.space/image/watch?w=640&h=480&r=4552',
      },
      images: [
        'https://api.lorem.space/image/watch?w=640&h=480&r=5391',
        'https://api.lorem.space/image/watch?w=640&h=480&r=9200',
        'https://api.lorem.space/image/watch?w=640&h=480&r=9698',
      ],
    },
    {
      id: 97,
      title: 'Rustic Granite Computer',
      price: 72400,
      description:
        'The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality',
      category: {
        id: 5,
        name: 'Others',
        image: 'https://api.lorem.space/image?w=640&h=480&r=9748',
      },
      images: [
        'https://api.lorem.space/image?w=640&h=480&r=8866',
        'https://api.lorem.space/image?w=640&h=480&r=1655',
        'https://api.lorem.space/image?w=640&h=480&r=3223',
      ],
    },
    {
      id: 98,
      title: 'Refined Concrete Ball',
      price: 43200,
      description:
        'New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart',
      category: {
        id: 5,
        name: 'Others',
        image: 'https://api.lorem.space/image?w=640&h=480&r=9748',
      },
      images: [
        'https://api.lorem.space/image?w=640&h=480&r=7448',
        'https://api.lorem.space/image?w=640&h=480&r=1573',
        'https://api.lorem.space/image?w=640&h=480&r=7016',
      ],
    },
    {
      id: 99,
      title: 'Incredible Wooden Chair',
      price: 69000,
      description: 'Carbonite web goalkeeper gloves are ergonomically designed to give easy fit',
      category: {
        id: 3,
        name: 'Furniture',
        image: 'https://api.lorem.space/image/furniture?w=640&h=480&r=4537',
      },
      images: [
        'https://api.lorem.space/image/furniture?w=640&h=480&r=7458',
        'https://api.lorem.space/image/furniture?w=640&h=480&r=116',
        'https://api.lorem.space/image/furniture?w=640&h=480&r=4631',
      ],
    },
    {
      id: 100,
      title: 'Licensed Fresh Keyboard',
      price: 63300,
      description: 'The Football Is Good For Training And Recreational Purposes',
      category: {
        id: 1,
        name: 'Clothes',
        image: 'https://api.lorem.space/image/fashion?w=640&h=480&r=7359',
      },
      images: [
        'https://api.lorem.space/image/fashion?w=640&h=480&r=5584',
        'https://api.lorem.space/image/fashion?w=640&h=480&r=5333',
        'https://api.lorem.space/image/fashion?w=640&h=480&r=7739',
      ],
    },
    {
      id: 101,
      title: 'Handmade Wooden Shirt',
      price: 29200,
      description:
        'The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive',
      category: {
        id: 1,
        name: 'Clothes',
        image: 'https://api.lorem.space/image/fashion?w=640&h=480&r=7359',
      },
      images: [
        'https://api.lorem.space/image/fashion?w=640&h=480&r=128',
        'https://api.lorem.space/image/fashion?w=640&h=480&r=661',
        'https://api.lorem.space/image/fashion?w=640&h=480&r=3422',
      ],
    },
    {
      id: 103,
      title: 'Practical Fresh Pants',
      price: 40500,
      description:
        "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
      category: {
        id: 5,
        name: 'Others',
        image: 'https://api.lorem.space/image?w=640&h=480&r=9748',
      },
      images: [
        'https://api.lorem.space/image?w=640&h=480&r=2568',
        'https://api.lorem.space/image?w=640&h=480&r=9253',
        'https://api.lorem.space/image?w=640&h=480&r=3644',
      ],
    },
    {
      id: 104,
      title: 'Licensed Fresh Shirt',
      price: 69700,
      description:
        'Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals',
      category: {
        id: 3,
        name: 'Furniture',
        image: 'https://api.lorem.space/image/furniture?w=640&h=480&r=4537',
      },
      images: [
        'https://api.lorem.space/image/furniture?w=640&h=480&r=4686',
        'https://api.lorem.space/image/furniture?w=640&h=480&r=133',
        'https://api.lorem.space/image/furniture?w=640&h=480&r=1928',
      ],
    },
    {
      id: 105,
      title: 'Licensed Soft Shirt',
      price: 15000,
      description:
        'Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support',
      category: {
        id: 4,
        name: 'Shoes',
        image: 'https://api.lorem.space/image/shoes?w=640&h=480&r=4444',
      },
      images: [
        'https://api.lorem.space/image/shoes?w=640&h=480&r=4471',
        'https://api.lorem.space/image/shoes?w=640&h=480&r=6231',
        'https://api.lorem.space/image/shoes?w=640&h=480&r=199',
      ],
    },
    {
      id: 106,
      title: 'Practical Cotton Shoes',
      price: 50300,
      description:
        'Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support',
      category: {
        id: 5,
        name: 'Others',
        image: 'https://api.lorem.space/image?w=640&h=480&r=9748',
      },
      images: [
        'https://api.lorem.space/image?w=640&h=480&r=8188',
        'https://api.lorem.space/image?w=640&h=480&r=9387',
        'https://api.lorem.space/image?w=640&h=480&r=1586',
      ],
    },
    {
      id: 107,
      title: 'Small Concrete Bike',
      price: 69000,
      description:
        'New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart',
      category: {
        id: 1,
        name: 'Clothes',
        image: 'https://api.lorem.space/image/fashion?w=640&h=480&r=7359',
      },
      images: [
        'https://api.lorem.space/image/fashion?w=640&h=480&r=6629',
        'https://api.lorem.space/image/fashion?w=640&h=480&r=2141',
        'https://api.lorem.space/image/fashion?w=640&h=480&r=5983',
      ],
    },
    {
      id: 108,
      title: 'Intelligent Frozen Chicken',
      price: 78100,
      description:
        'New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart',
      category: {
        id: 3,
        name: 'Furniture',
        image: 'https://api.lorem.space/image/furniture?w=640&h=480&r=4537',
      },
      images: [
        'https://api.lorem.space/image/furniture?w=640&h=480&r=6020',
        'https://api.lorem.space/image/furniture?w=640&h=480&r=7164',
        'https://api.lorem.space/image/furniture?w=640&h=480&r=2721',
      ],
    },
    {
      id: 109,
      title: 'Tasty Plastic Pizza',
      price: 67300,
      description:
        'New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart',
      category: {
        id: 4,
        name: 'Shoes',
        image: 'https://api.lorem.space/image/shoes?w=640&h=480&r=4444',
      },
      images: [
        'https://api.lorem.space/image/shoes?w=640&h=480&r=8074',
        'https://api.lorem.space/image/shoes?w=640&h=480&r=6683',
        'https://api.lorem.space/image/shoes?w=640&h=480&r=1405',
      ],
    },
    {
      id: 110,
      title: 'Refined Soft Bacon',
      price: 68400,
      description:
        'New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart',
      category: {
        id: 1,
        name: 'Clothes',
        image: 'https://api.lorem.space/image/fashion?w=640&h=480&r=7359',
      },
      images: [
        'https://api.lorem.space/image/fashion?w=640&h=480&r=2202',
        'https://api.lorem.space/image/fashion?w=640&h=480&r=9885',
        'https://api.lorem.space/image/fashion?w=640&h=480&r=2710',
      ],
    },
    {
      id: 112,
      title: 'Refined Fresh Pizza',
      price: 44600,
      description:
        'New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016',
      category: {
        id: 3,
        name: 'Furniture',
        image: 'https://api.lorem.space/image/furniture?w=640&h=480&r=4537',
      },
      images: [
        'https://api.lorem.space/image/furniture?w=640&h=480&r=1318',
        'https://api.lorem.space/image/furniture?w=640&h=480&r=342',
        'https://api.lorem.space/image/furniture?w=640&h=480&r=7006',
      ],
    },
    {
      id: 113,
      title: 'Licensed Steel Pants',
      price: 43700,
      description:
        'New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart',
      category: {
        id: 5,
        name: 'Others',
        image: 'https://api.lorem.space/image?w=640&h=480&r=9748',
      },
      images: [
        'https://api.lorem.space/image?w=640&h=480&r=7186',
        'https://api.lorem.space/image?w=640&h=480&r=8007',
        'https://api.lorem.space/image?w=640&h=480&r=2340',
      ],
    },
    {
      id: 114,
      title: 'Handmade Cotton Computer',
      price: 13700,
      description:
        'The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality',
      category: {
        id: 2,
        name: 'Electronics',
        image: 'https://api.lorem.space/image/watch?w=640&h=480&r=4552',
      },
      images: [
        'https://api.lorem.space/image/watch?w=640&h=480&r=2449',
        'https://api.lorem.space/image/watch?w=640&h=480&r=9522',
        'https://api.lorem.space/image/watch?w=640&h=480&r=5067',
      ],
    },
    {
      id: 115,
      title: 'Tasty Cotton Car',
      price: 69800,
      description:
        "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
      category: {
        id: 3,
        name: 'Furniture',
        image: 'https://api.lorem.space/image/furniture?w=640&h=480&r=4537',
      },
      images: [
        'https://api.lorem.space/image/furniture?w=640&h=480&r=5355',
        'https://api.lorem.space/image/furniture?w=640&h=480&r=4584',
        'https://api.lorem.space/image/furniture?w=640&h=480&r=5307',
      ],
    },
    {
      id: 116,
      title: 'Practical Plastic Gloves',
      price: 73900,
      description:
        'Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support',
      category: {
        id: 1,
        name: 'Clothes',
        image: 'https://api.lorem.space/image/fashion?w=640&h=480&r=7359',
      },
      images: [
        'https://api.lorem.space/image/fashion?w=640&h=480&r=3350',
        'https://api.lorem.space/image/fashion?w=640&h=480&r=110',
        'https://api.lorem.space/image/fashion?w=640&h=480&r=168',
      ],
    },
    {
      id: 117,
      title: 'Sleek Soft Salad',
      price: 53500,
      description:
        'Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support',
      category: {
        id: 5,
        name: 'Others',
        image: 'https://api.lorem.space/image?w=640&h=480&r=9748',
      },
      images: [
        'https://api.lorem.space/image?w=640&h=480&r=5379',
        'https://api.lorem.space/image?w=640&h=480&r=2385',
        'https://api.lorem.space/image?w=640&h=480&r=3275',
      ],
    },
    {
      id: 118,
      title: 'Small Granite Computer',
      price: 21400,
      description:
        'The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive',
      category: {
        id: 3,
        name: 'Furniture',
        image: 'https://api.lorem.space/image/furniture?w=640&h=480&r=4537',
      },
      images: [
        'https://api.lorem.space/image/furniture?w=640&h=480&r=7676',
        'https://api.lorem.space/image/furniture?w=640&h=480&r=5581',
        'https://api.lorem.space/image/furniture?w=640&h=480&r=676',
      ],
    },
    {
      id: 119,
      title: 'Practical Granite Cheese',
      price: 32400,
      description:
        'The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J',
      category: {
        id: 3,
        name: 'Furniture',
        image: 'https://api.lorem.space/image/furniture?w=640&h=480&r=4537',
      },
      images: [
        'https://api.lorem.space/image/furniture?w=640&h=480&r=3110',
        'https://api.lorem.space/image/furniture?w=640&h=480&r=9836',
        'https://api.lorem.space/image/furniture?w=640&h=480&r=8934',
      ],
    },
    {
      id: 120,
      title: 'Handcrafted Soft Chips',
      price: 61400,
      description:
        'New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016',
      category: {
        id: 4,
        name: 'Shoes',
        image: 'https://api.lorem.space/image/shoes?w=640&h=480&r=4444',
      },
      images: [
        'https://api.lorem.space/image/shoes?w=640&h=480&r=6984',
        'https://api.lorem.space/image/shoes?w=640&h=480&r=9548',
        'https://api.lorem.space/image/shoes?w=640&h=480&r=3986',
      ],
    },
    {
      id: 121,
      title: 'Handmade Frozen Chips',
      price: 19800,
      description:
        'The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J',
      category: {
        id: 4,
        name: 'Shoes',
        image: 'https://api.lorem.space/image/shoes?w=640&h=480&r=4444',
      },
      images: [
        'https://api.lorem.space/image/shoes?w=640&h=480&r=2377',
        'https://api.lorem.space/image/shoes?w=640&h=480&r=5815',
        'https://api.lorem.space/image/shoes?w=640&h=480&r=3028',
      ],
    },
    {
      id: 122,
      title: 'Licensed Rubber Bacon',
      price: 58100,
      description:
        "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
      category: {
        id: 4,
        name: 'Shoes',
        image: 'https://api.lorem.space/image/shoes?w=640&h=480&r=4444',
      },
      images: [
        'https://api.lorem.space/image/shoes?w=640&h=480&r=7655',
        'https://api.lorem.space/image/shoes?w=640&h=480&r=7527',
        'https://api.lorem.space/image/shoes?w=640&h=480&r=9949',
      ],
    },
    {
      id: 123,
      title: 'Tasty Wooden Towels',
      price: 18300,
      description:
        'The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design',
      category: {
        id: 4,
        name: 'Shoes',
        image: 'https://api.lorem.space/image/shoes?w=640&h=480&r=4444',
      },
      images: [
        'https://api.lorem.space/image/shoes?w=640&h=480&r=2966',
        'https://api.lorem.space/image/shoes?w=640&h=480&r=1149',
        'https://api.lorem.space/image/shoes?w=640&h=480&r=170',
      ],
    },
    {
      id: 124,
      title: 'Intelligent Steel Mouse',
      price: 59200,
      description:
        'The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J',
      category: {
        id: 5,
        name: 'Others',
        image: 'https://api.lorem.space/image?w=640&h=480&r=9748',
      },
      images: [
        'https://api.lorem.space/image?w=640&h=480&r=3292',
        'https://api.lorem.space/image?w=640&h=480&r=9427',
        'https://api.lorem.space/image?w=640&h=480&r=4002',
      ],
    },
    {
      id: 125,
      title: 'Intelligent Wooden Soap',
      price: 44500,
      description:
        'The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J',
      category: {
        id: 3,
        name: 'Furniture',
        image: 'https://api.lorem.space/image/furniture?w=640&h=480&r=4537',
      },
      images: [
        'https://api.lorem.space/image/furniture?w=640&h=480&r=5897',
        'https://api.lorem.space/image/furniture?w=640&h=480&r=3200',
        'https://api.lorem.space/image/furniture?w=640&h=480&r=9917',
      ],
    },
    {
      id: 126,
      title: 'Ergonomic Cotton Pizza',
      price: 19200,
      description:
        'The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design',
      category: {
        id: 3,
        name: 'Furniture',
        image: 'https://api.lorem.space/image/furniture?w=640&h=480&r=4537',
      },
      images: [
        'https://api.lorem.space/image/furniture?w=640&h=480&r=5431',
        'https://api.lorem.space/image/furniture?w=640&h=480&r=2876',
        'https://api.lorem.space/image/furniture?w=640&h=480&r=489',
      ],
    },
    {
      id: 127,
      title: 'Handmade Concrete Bacon',
      price: 63100,
      description:
        'The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J',
      category: {
        id: 3,
        name: 'Furniture',
        image: 'https://api.lorem.space/image/furniture?w=640&h=480&r=4537',
      },
      images: [
        'https://api.lorem.space/image/furniture?w=640&h=480&r=2712',
        'https://api.lorem.space/image/furniture?w=640&h=480&r=3978',
        'https://api.lorem.space/image/furniture?w=640&h=480&r=1800',
      ],
    },
    {
      id: 128,
      title: 'Gorgeous Frozen Ball',
      price: 81300,
      description:
        'The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J',
      category: {
        id: 4,
        name: 'Shoes',
        image: 'https://api.lorem.space/image/shoes?w=640&h=480&r=4444',
      },
      images: [
        'https://api.lorem.space/image/shoes?w=640&h=480&r=8234',
        'https://api.lorem.space/image/shoes?w=640&h=480&r=8146',
        'https://api.lorem.space/image/shoes?w=640&h=480&r=4274',
      ],
    },
    {
      id: 129,
      title: 'Rustic Wooden Soap',
      price: 28800,
      description:
        'Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals',
      category: {
        id: 1,
        name: 'Clothes',
        image: 'https://api.lorem.space/image/fashion?w=640&h=480&r=7359',
      },
      images: [
        'https://api.lorem.space/image/fashion?w=640&h=480&r=4272',
        'https://api.lorem.space/image/fashion?w=640&h=480&r=4751',
        'https://api.lorem.space/image/fashion?w=640&h=480&r=9583',
      ],
    },
    {
      id: 130,
      title: 'Small Metal Bacon',
      price: 99100,
      description:
        'Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support',
      category: {
        id: 1,
        name: 'Clothes',
        image: 'https://api.lorem.space/image/fashion?w=640&h=480&r=7359',
      },
      images: [
        'https://api.lorem.space/image/fashion?w=640&h=480&r=9226',
        'https://api.lorem.space/image/fashion?w=640&h=480&r=1819',
        'https://api.lorem.space/image/fashion?w=640&h=480&r=9664',
      ],
    },
    {
      id: 131,
      title: 'Unbranded Frozen Shoes',
      price: 54000,
      description:
        'Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals',
      category: {
        id: 4,
        name: 'Shoes',
        image: 'https://api.lorem.space/image/shoes?w=640&h=480&r=4444',
      },
      images: [
        'https://api.lorem.space/image/shoes?w=640&h=480&r=4435',
        'https://api.lorem.space/image/shoes?w=640&h=480&r=5749',
        'https://api.lorem.space/image/shoes?w=640&h=480&r=4552',
      ],
    },
    {
      id: 132,
      title: 'Handmade Steel Bacon',
      price: 67500,
      description:
        'The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design',
      category: {
        id: 2,
        name: 'Electronics',
        image: 'https://api.lorem.space/image/watch?w=640&h=480&r=4552',
      },
      images: [
        'https://api.lorem.space/image/watch?w=640&h=480&r=8782',
        'https://api.lorem.space/image/watch?w=640&h=480&r=2110',
        'https://api.lorem.space/image/watch?w=640&h=480&r=2925',
      ],
    },
    {
      id: 133,
      title: 'Practical Concrete Bike',
      price: 22900,
      description:
        'The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients',
      category: {
        id: 1,
        name: 'Clothes',
        image: 'https://api.lorem.space/image/fashion?w=640&h=480&r=7359',
      },
      images: [
        'https://api.lorem.space/image/fashion?w=640&h=480&r=7154',
        'https://api.lorem.space/image/fashion?w=640&h=480&r=8025',
        'https://api.lorem.space/image/fashion?w=640&h=480&r=4480',
      ],
    },
    {
      id: 134,
      title: 'Sleek Metal Shoes',
      price: 81900,
      description:
        'The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J',
      category: {
        id: 5,
        name: 'Others',
        image: 'https://api.lorem.space/image?w=640&h=480&r=9748',
      },
      images: [
        'https://api.lorem.space/image?w=640&h=480&r=628',
        'https://api.lorem.space/image?w=640&h=480&r=846',
        'https://api.lorem.space/image?w=640&h=480&r=6781',
      ],
    },
    {
      id: 137,
      title: 'Handcrafted Metal Bacon',
      price: 29400,
      description:
        'The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients',
      category: {
        id: 2,
        name: 'Electronics',
        image: 'https://api.lorem.space/image/watch?w=640&h=480&r=4552',
      },
      images: [
        'https://api.lorem.space/image/watch?w=640&h=480&r=7220',
        'https://api.lorem.space/image/watch?w=640&h=480&r=7980',
        'https://api.lorem.space/image/watch?w=640&h=480&r=5378',
      ],
    },
    {
      id: 138,
      title: 'Generic Plastic Mouse',
      price: 21200,
      description:
        'The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality',
      category: {
        id: 1,
        name: 'Clothes',
        image: 'https://api.lorem.space/image/fashion?w=640&h=480&r=7359',
      },
      images: [
        'https://api.lorem.space/image/fashion?w=640&h=480&r=4482',
        'https://api.lorem.space/image/fashion?w=640&h=480&r=8832',
        'https://api.lorem.space/image/fashion?w=640&h=480&r=7116',
      ],
    },
    {
      id: 139,
      title: 'Small Metal Gloves',
      price: 36600,
      description:
        'New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016',
      category: {
        id: 5,
        name: 'Others',
        image: 'https://api.lorem.space/image?w=640&h=480&r=9748',
      },
      images: [
        'https://api.lorem.space/image?w=640&h=480&r=9538',
        'https://api.lorem.space/image?w=640&h=480&r=8845',
        'https://api.lorem.space/image?w=640&h=480&r=8592',
      ],
    },
    {
      id: 140,
      title: 'Licensed Fresh Cheese',
      price: 26900,
      description:
        'The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive',
      category: {
        id: 1,
        name: 'Clothes',
        image: 'https://api.lorem.space/image/fashion?w=640&h=480&r=7359',
      },
      images: [
        'https://api.lorem.space/image/fashion?w=640&h=480&r=8225',
        'https://api.lorem.space/image/fashion?w=640&h=480&r=9281',
        'https://api.lorem.space/image/fashion?w=640&h=480&r=878',
      ],
    },
    {
      id: 141,
      title: 'Handcrafted Cotton Bacon',
      price: 13800,
      description:
        'New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016',
      category: {
        id: 1,
        name: 'Clothes',
        image: 'https://api.lorem.space/image/fashion?w=640&h=480&r=7359',
      },
      images: [
        'https://api.lorem.space/image/fashion?w=640&h=480&r=6483',
        'https://api.lorem.space/image/fashion?w=640&h=480&r=4150',
        'https://api.lorem.space/image/fashion?w=640&h=480&r=4907',
      ],
    },
    {
      id: 142,
      title: 'Refined Plastic Cheese',
      price: 30200,
      description:
        'The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive',
      category: {
        id: 2,
        name: 'Electronics',
        image: 'https://api.lorem.space/image/watch?w=640&h=480&r=4552',
      },
      images: [
        'https://api.lorem.space/image/watch?w=640&h=480&r=588',
        'https://api.lorem.space/image/watch?w=640&h=480&r=1651',
        'https://api.lorem.space/image/watch?w=640&h=480&r=9224',
      ],
    },
    {
      id: 143,
      title: 'Gorgeous Soft Keyboard',
      price: 43000,
      description: 'Carbonite web goalkeeper gloves are ergonomically designed to give easy fit',
      category: {
        id: 5,
        name: 'Others',
        image: 'https://api.lorem.space/image?w=640&h=480&r=9748',
      },
      images: [
        'https://api.lorem.space/image?w=640&h=480&r=6110',
        'https://api.lorem.space/image?w=640&h=480&r=5127',
        'https://api.lorem.space/image?w=640&h=480&r=9819',
      ],
    },
    {
      id: 144,
      title: 'Incredible Steel Chair',
      price: 42200,
      description:
        "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
      category: {
        id: 1,
        name: 'Clothes',
        image: 'https://api.lorem.space/image/fashion?w=640&h=480&r=7359',
      },
      images: [
        'https://api.lorem.space/image/fashion?w=640&h=480&r=5093',
        'https://api.lorem.space/image/fashion?w=640&h=480&r=2401',
        'https://api.lorem.space/image/fashion?w=640&h=480&r=1776',
      ],
    },
    {
      id: 145,
      title: 'Awesome Metal Chips',
      price: 25500,
      description:
        'The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design',
      category: {
        id: 2,
        name: 'Electronics',
        image: 'https://api.lorem.space/image/watch?w=640&h=480&r=4552',
      },
      images: [
        'https://api.lorem.space/image/watch?w=640&h=480&r=7805',
        'https://api.lorem.space/image/watch?w=640&h=480&r=3402',
        'https://api.lorem.space/image/watch?w=640&h=480&r=4899',
      ],
    },
    {
      id: 146,
      title: 'Sleek Cotton Hat',
      price: 99200,
      description:
        'The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J',
      category: {
        id: 5,
        name: 'Others',
        image: 'https://api.lorem.space/image?w=640&h=480&r=9748',
      },
      images: [
        'https://api.lorem.space/image?w=640&h=480&r=5423',
        'https://api.lorem.space/image?w=640&h=480&r=8265',
        'https://api.lorem.space/image?w=640&h=480&r=3507',
      ],
    },
    {
      id: 147,
      title: 'Rustic Soft Bike',
      price: 15400,
      description:
        'New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016',
      category: {
        id: 5,
        name: 'Others',
        image: 'https://api.lorem.space/image?w=640&h=480&r=9748',
      },
      images: [
        'https://api.lorem.space/image?w=640&h=480&r=7709',
        'https://api.lorem.space/image?w=640&h=480&r=5916',
        'https://api.lorem.space/image?w=640&h=480&r=6934',
      ],
    },
    {
      id: 148,
      title: 'Sleek Metal Bacon',
      price: 25200,
      description: 'The Football Is Good For Training And Recreational Purposes',
      category: {
        id: 4,
        name: 'Shoes',
        image: 'https://api.lorem.space/image/shoes?w=640&h=480&r=4444',
      },
      images: [
        'https://api.lorem.space/image/shoes?w=640&h=480&r=3742',
        'https://api.lorem.space/image/shoes?w=640&h=480&r=9971',
        'https://api.lorem.space/image/shoes?w=640&h=480&r=3537',
      ],
    },
    {
      id: 149,
      title: 'Handcrafted Plastic Car',
      price: 98300,
      description:
        'The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design',
      category: {
        id: 2,
        name: 'Electronics',
        image: 'https://api.lorem.space/image/watch?w=640&h=480&r=4552',
      },
      images: [
        'https://api.lorem.space/image/watch?w=640&h=480&r=4381',
        'https://api.lorem.space/image/watch?w=640&h=480&r=5424',
        'https://api.lorem.space/image/watch?w=640&h=480&r=8787',
      ],
    },
    {
      id: 150,
      title: 'Ergonomic Cotton Bike',
      price: 42400,
      description:
        'The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality',
      category: {
        id: 5,
        name: 'Others',
        image: 'https://api.lorem.space/image?w=640&h=480&r=9748',
      },
      images: [
        'https://api.lorem.space/image?w=640&h=480&r=6027',
        'https://api.lorem.space/image?w=640&h=480&r=82',
        'https://api.lorem.space/image?w=640&h=480&r=7681',
      ],
    },
  ];

  const [filterProduct, setFilterProduct] = useState([]);

  useEffect(() => {
    setFilterProduct(
      products.filter((product) => {
        if (!category || category === 'Others') return product;
        return product.category.name === category;
      })
    );
  }, [category, setFilterProduct]);

  return (gi
    <section className="main-container">
      <div className="ProductList">
        {filterProduct.map((product) => (
          <ProductItem product={product} key={product.id} />
        ))}
      </div>
    </section>
  );
};

export default ProductList;
