"use client";
import axios from "axios";

const kBaseUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";

export const api = axios.create({
  baseURL: kBaseUrl,
});

const configHeaders = {
  headers: {
    "Content-Type": "application/json",
  },
};

export { kBaseUrl, configHeaders };
