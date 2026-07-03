import type { Service } from "@/types";
import portfolioData from "./portfolio.json";

export const services = portfolioData.services as Service[];
