"use client";
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { FaFacebookSquare, FaTwitterSquare, FaLinkedin } from "react-icons/fa";
import { LuSlidersHorizontal } from "react-icons/lu";
import { SlArrowRight } from "react-icons/sl";
import { client } from "@/sanity/lib/client";

interface Product {
    _id: string;
    title: string;
    description: string;
    price: number;
    imageUrl: string;
}

const Product = () => {
    const { id } = useParams(); // ✅ Directly get `id`
    const [product, setProduct] = useState<Product | null>(null);
    const [loading, setLoading] = useState(true);
    const [mainImage, setMainImage] = useState<string>("/placeholder.png");
    const [products, setProducts] = useState<Product[]>([]);
    useEffect(() => {
        const fetchProducts = async () => {
            const query = `*[_type == "product"][0..3] {
            _id,
            title,
            price,
            "imageUrl": image.asset->url
          }`;
            const data: Product[] = await client.fetch(query);
            setProducts(data);
        };

        fetchProducts();
    }, []);

    useEffect(() => {
        if (id) {
            const fetchProduct = async () => {
                try {
                    const productDetail = await client.fetch(
                        `*[_type == "product" && _id == $id][0]{
              _id,
              title,
              description,
              price,
              "imageUrl": image.asset->url
            }`,
                        { id }
                    );
                    if (productDetail) {
                        setProduct(productDetail);
                        setMainImage(productDetail.imageUrl || "/placeholder.png");
                    }
                } catch (error) {
                    console.error("Error fetching product:", error);
                } finally {
                    setLoading(false);
                }
            };

            fetchProduct();
        }
    }, [id]); // ✅ Only depends on `id`




    const addToCart = () => {
        const savedCart = JSON.parse(localStorage.getItem("cart") || "[]");
        const updatedCart = [...savedCart, product?._id];
        localStorage.setItem("cart", JSON.stringify(updatedCart));
        alert("Product added to cart!");
    };

    if (loading) {
        return (
            <div className="flex items-center justify-center h-[300px]">
                <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-yellow-950"></div>
            </div>
        );
    }

    if (!product) {
        return (
            <div className="flex justify-center items-center h-screen">
                <p className="text-xl">Product not found</p>
            </div>
        );
    }


    return (
        <div className="min-h-screen flex flex-col">
            {/* Breadcrumb */}
            <div className="py-8 px-6 lg:px-10 bg-pink-100 text-gray-500 text-xl flex items-center justify-between mt-20">
                {/* Left Section */}
                <div className="flex items-center">
                    <Link href={"/"}>
                        <span>Home</span>
                    </Link>
                    <SlArrowRight className="mx-4 text-black" />
                    <Link href={"/shop"}>
                        <span>Shop</span>
                    </Link>
                    <span className="text-black mx-4">|</span>
                    <span className="text-black">{product.title}</span>
                </div>
                <LuSlidersHorizontal />
            </div>

            {/* Product Section */}
            <div className="container mx-auto p-6 bg-white shadow-md rounded-lg flex flex-col lg:flex-row gap-8">
                {/* Product Images Section */}
                <div className="flex flex-wrap lg:flex-nowrap gap-4">
                    {/* Category Thumbnails */}
                    <div className="flex flex-wrap lg:flex-col gap-4">
                        {[30, 31, 29, 33,].map((item) => (
                            <Image
                                key={item}
                                src={product.imageUrl}
                                alt={product.title}
                                width={100}
                                height={100}
                                className="rounded-lg object-cover h-[100px] cursor-pointer bg-pink-100 hover:opacity-75"
                                onClick={(event) => {
                                    const target = event.target as HTMLImageElement;
                                    console.log(target.src); // Access the image src safely
                                }}
                            />
                        ))}
                    </div>

                    {/* Main Product Image */}
                    <div className="flex-1">
                        <Image
                            src={mainImage}
                            alt={product.title}
                            width={500}
                            height={400}
                            className="rounded-lg object-cover h-[500px] bg-pink-50"
                        />
                    </div>
                </div>

                {/* Product Details */}
                <div className="flex-1 flex flex-col space-y-6">
                    <h1 className="text-3xl font-bold">{product.title}</h1>
                    <p className="text-yellow-600 text-2xl font-semibold">${product.price}</p>
                    <div className="flex items-center space-x-4 text-gray-500">
                        <span className="text-yellow-500 text-lg">★★★★★</span>
                        <span>|</span>
                        <span>5 Custom Reviews</span>
                    </div>

                    <p className="text-gray-600 leading-relaxed line-clamp-4">
                        {product.description}
                    </p>

                    {/* Size Selector */}
                    <div>
                        <h2 className="text-xl text-gray-500">Size</h2>
                        <div className="mt-4 flex space-x-4 ">
                            {["L", "XL", "XS"].map((size) => (
                                <Button
                                    key={size}
                                    className={`py-2 px-4 rounded-md ${size === "L"
                                        ? "bg-yellow-600 text-black"
                                        : "bg-pink-100 text-black hover:bg-pink-400"
                                        }`}
                                    aria-label={`Select size ${size}`}
                                >
                                    {size}
                                </Button>
                            ))}
                        </div>
                    </div>

                    {/* Color Selector */}
                    <div>
                        <h2 className="text-lg font-medium text-gray-700">Color</h2>
                        <div className="mt-4 flex space-x-4">
                            {["yellow", "gray", "purple"].map((color) => (
                                <Button
                                    key={color}
                                    className={`w-8 h-8 rounded-full border ${color === "yellow"
                                        ? "bg-yellow-500"
                                        : color === "gray"
                                            ? "bg-gray-500"
                                            : "bg-purple-500"
                                        }`}
                                    aria-label={`Select color ${color}`}
                                ></Button>
                            ))}
                        </div>
                    </div>

                    {/* Counter and Action Buttons */}
                    <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
                        {/* Counter Section */}
                        <div className="inline-flex items-center border  rounded-md">
                            <Button
                                className="px-4 py-2 text-gray-700 bg-white hover:bg-gray-100 disabled:opacity-50"
                                aria-label="Decrease quantity"
                            >
                                -
                            </Button>
                            <span className="px-6 py-2 text-lg  bg-white">1</span>
                            <Button
                                className="px-4 py-2 text-gray-700 bg-white hover:bg-gray-100"
                                aria-label="Increase quantity"
                            >
                                +
                            </Button>
                        </div>

                        {/* Actions */}
                        <div className="flex flex-col sm:flex-row items-center gap-3 mt-6">
                            <Button
                                onClick={addToCart}
                                className="w-full md:w-auto text-white py-2 px-6 rounded-md shadow hover:bg-yellow-700 focus:ring-2 focus:ring-yellow-400"
                            >
                                Add To Cart
                            </Button>
                        </div>

                        {/* Compare Button */}
                        <Link href={"/comperison"} className="w-full md:w-auto">
                            <Button className="w-full md:w-auto text-white py-2 px-6 rounded-md shadow hover:bg-yellow-700 focus:ring-2 focus:ring-yellow-400">
                                + Compare
                            </Button>
                        </Link>
                    </div>

                    {/* SKU, Category, Tags, and Share */}
                    <ul className="space-y-4 pt-4 border-t">
                        <li className="flex items-center">
                            <span className="text-gray-600 w-28">SKU:</span>
                            <span className="font-semibold">SS001</span>
                        </li>
                        <li className="flex items-center">
                            <span className="text-gray-600 w-28">Category:</span>
                            <span className="font-semibold">Sofas</span>
                        </li>
                        <li className="flex items-center">
                            <span className="text-gray-600 w-28">Tags:</span>
                            <span>Sofa, Chair, Home, Shop</span>
                        </li>
                        <li className="flex items-center">
                            <span className="text-gray-600 w-28">Share:</span>
                            <div className="flex space-x-4">
                                {[FaFacebookSquare, FaLinkedin, FaTwitterSquare].map(
                                    (Icon, index) => (
                                        <Link
                                            key={index} // Use index or a unique identifier
                                            href="#"
                                            className="text-lg text-blue-700 hover:text-blue-900"
                                        >
                                            <Icon />
                                        </Link>
                                    )
                                )}
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Description */}
            <div className="container mx-auto px-6 py-16 text-center">
                <h2 className="text-3xl font-bold mb-6">
                    Description
                    <span className="text-gray-400 font-medium ml-4">
                        Additional Information
                    </span>
                    <span className="text-gray-400 font-medium ml-4">Review [5]</span>
                </h2>
                <p className="text-gray-600 leading-relaxed line-clamp-4">{product.description}</p>

                <div className="grid gap-8 sm:grid-cols-2 mt-8">
                    {[34, 35].map((item) => (
                        <Image
                            key={item}
                            src={`${product.imageUrl}/img-${item}.png`}
                            alt="Additional Information Image"
                            width={605} // Set width to 605px
                            height={348} // Set height to 348px
                            className="rounded-lg shadow-md bg-pink-100 h-[348px] w-[605]"
                        />
                    ))}
                </div>
            </div>

            {/* Related Products */}
            <div className="container mx-auto px-6 py-16 border-t-4">
                <h2 className="text-2xl font-bold text-center mb-8">Related Products</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {products.map((product) => (
                        <div
                            key={product._id}
                            className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition"
                        >
                            <div className="relative w-full h-72">
                                <Image
                                    src={product.imageUrl}
                                    alt={product.title}
                                    layout="fill"
                                    className="rounded-lg object-cover"
                                />
                            </div>
                            <h3 className="text-gray-700 font-medium mt-2">{product.title}</h3>
                            <p className="text-yellow-600 font-bold mt-1">
                                ${product.price}
                            </p>
                            <Link href={`/shop/product/${product._id}`} passHref>
                                <button className="mt-4 w-full bg-black text-white py-2 rounded-md hover:bg-gray-800 transition-all">
                                    View Product Detail
                                </button>
                            </Link>
                        </div>
                    ))}
                </div>
                <div className="flex justify-center items-center w-full mt-16">
                    <Button className="flex items-center justify-center">Show more</Button>
                </div>

            </div>
        </div>
    );
};

export default Product;
