
import React from 'react';
import { ShoppingBasket, Sparkles, Coffee, Home } from 'lucide-react';
import { Category } from './types';

export const CATEGORIES: Category[] = [
  {
    id: 'food',
    title: 'Alimentos',
    icon: <ShoppingBasket className="w-6 h-6" />,
    products: [
      { id: 'f1', name: 'Arroz Mariana Supreme', price: 750, unit: '1 kg', imageUrl: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&q=80&w=600' },
      { id: 'f2', name: 'Arroz Extra Longo', price: 1450, unit: '10 kg', imageUrl: 'https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?auto=format&fit=crop&q=80&w=600' },
      { id: 'f3', name: 'Farinha de Milho', price: 420, unit: '5 kg', imageUrl: 'https://images.unsplash.com/photo-1626082896492-766af4eb6501?auto=format&fit=crop&q=80&w=600' },
      { id: 'f4', name: 'Farinha de Trigo', price: 550, unit: '5 kg', imageUrl: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=600' },
      { id: 'f5', name: 'Açúcar Branco', price: 95, unit: '1 kg', imageUrl: 'https://images.unsplash.com/photo-1622484211148-713289069695?auto=format&fit=crop&q=80&w=600' },
      { id: 'f6', name: 'Açúcar Castanho', price: 85, unit: '1 kg', imageUrl: 'https://images.unsplash.com/photo-1581448670546-93043869910c?auto=format&fit=crop&q=80&w=600' },
      { id: 'f7', name: 'Feijão Manteiga', price: 160, unit: '1 kg', imageUrl: 'https://images.unsplash.com/photo-1551462147-37885abb3e92?auto=format&fit=crop&q=80&w=600' },
      { id: 'f10', name: 'Óleo Alimentar', price: 290, unit: '1 L', imageUrl: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&q=80&w=600' },
      { id: 'f11', name: 'Massa Esparguete', price: 85, unit: '500 g', imageUrl: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&q=80&w=600' },
      { id: 'f12', name: 'Ovos Frescos', price: 520, unit: 'Bandeja 30 unid.', imageUrl: 'https://images.unsplash.com/photo-1587486914432-03d1fef4dd1e?auto=format&fit=crop&q=80&w=600' },
    ]
  },
  {
    id: 'hygiene',
    title: 'Higiene e Limpeza',
    icon: <Sparkles className="w-6 h-6" />,
    products: [
      { id: 'h1', name: 'Sabão Azul', price: 45, unit: 'Unid.', imageUrl: 'https://images.unsplash.com/photo-1605264964528-06403738d6dc?auto=format&fit=crop&q=80&w=600' },
      { id: 'h2', name: 'Detergente em Pó', price: 140, unit: '1 kg', imageUrl: 'https://images.unsplash.com/photo-1563453392212-326f5e854473?auto=format&fit=crop&q=80&w=600' },
      { id: 'h3', name: 'Detergente Líquido', price: 160, unit: '1 L', imageUrl: 'https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?auto=format&fit=crop&q=80&w=600' },
      { id: 'h5', name: 'Papel Higiénico', price: 160, unit: '4 rolos', imageUrl: 'https://images.unsplash.com/photo-1583947215259-38e31be8751f?auto=format&fit=crop&q=80&w=600' },
      { id: 'h6', name: 'Pasta de Dentes', price: 130, unit: 'Tubo', imageUrl: 'https://images.unsplash.com/photo-1559594482-7c2490e6604b?auto=format&fit=crop&q=80&w=600' },
    ]
  },
  {
    id: 'drinks',
    title: 'Bebidas',
    icon: <Coffee className="w-6 h-6" />,
    products: [
      { id: 'd4', name: 'Cerveja Nacional (2M/Laurentina/Manica)', price: 90, unit: 'Garrafa 550ml', imageUrl: 'https://images.unsplash.com/photo-1584225064785-c62a8b43d148?auto=format&fit=crop&q=80&w=600' },
      { id: 'd1', name: 'Água Mineral', price: 50, unit: '1.5 L', imageUrl: 'https://images.unsplash.com/photo-1560023907-5f339617ea30?auto=format&fit=crop&q=80&w=600' },
      { id: 'd2', name: 'Refrigerante', price: 140, unit: '2 L', imageUrl: 'https://images.unsplash.com/photo-1554866585-cd94860890b7?auto=format&fit=crop&q=80&w=600' },
      { id: 'd3', name: 'Sumo Natural', price: 120, unit: 'Unid.', imageUrl: 'https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?auto=format&fit=crop&q=80&w=600' },
    ]
  },
  {
    id: 'utilities',
    title: 'Utilidades',
    icon: <Home className="w-6 h-6" />,
    products: [
      { id: 'u1', name: 'Balde Reforçado Preto', price: 280, unit: 'Unid.', imageUrl: 'https://images.unsplash.com/photo-1584622781564-1d9876a13d1e?auto=format&fit=crop&q=80&w=600' },
      { id: 'u2', name: 'Vassoura de Palha', price: 190, unit: 'Unid.', imageUrl: 'https://images.unsplash.com/photo-1582139329536-e7284fece509?auto=format&fit=crop&q=80&w=600' },
      { id: 'u4', name: 'Conjunto de Pratos', price: 350, unit: '6 Unid.', imageUrl: 'https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&q=80&w=600' },
    ]
  }
];
