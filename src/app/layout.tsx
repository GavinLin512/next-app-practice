"use client"; // only needed if you choose App Router
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import { Admin, Resource, ListGuesser, EditGuesser, useAuthenticated, CustomRoutes } from "react-admin";
import jsonServerProvider from "ra-data-json-server";
import {MyLayout} from "@/components/MyLayout";
import MyLoginPage from "@/components/MyLoginPage";
import authProvider from "@/auth/authProvider";
import {MyTheme} from "@/components/MyTheme";
import {BrowserRouter, Route} from 'react-router-dom';
import {Applicant} from "@/client/applicant/Applicant";
import AdminApp from "@/components/AdminApp";

const dataProvider = jsonServerProvider("https://jsonplaceholder.typicode.com");

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '和德昌應商盡職調查平台',
  description: '和德昌應商盡職調查平台',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
