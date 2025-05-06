// import delivery type 
import { DeliveryType } from "@/types";
import { 
    FaUtensils, FaBirthdayCake, FaHotel, FaHamburger, FaStore, FaSpa, 
    FaBreadSlice, FaConciergeBell, FaShoppingBag, FaClinicMedical 
} from "react-icons/fa";

export const DeliveryInfo: DeliveryType[] = [
    {
        id: 1,
        title: "Рестораны",
        icon: FaUtensils
    },
    {
        id: 2,
        title: "Кондитерские",
        icon: FaBirthdayCake
    },
    {
        id: 3,
        title: "Дома отдыха",
        icon: FaHotel
    },
    {
        id: 4,
        title: "Фаст фуды",
        icon: FaHamburger
    },
    {
        id: 5,
        title: "Гостиницы",
        icon: FaHotel
    },
    {
        id: 6,
        title: "Курортные зони",
        icon: FaSpa
    },
    {
        id: 7,
        title: "Пекарни",
        icon: FaBreadSlice
    },
    {
        id: 8,
        title: "Кейтеринг",
        icon: FaConciergeBell
    },
    {
        id: 9,
        title: "Магазины",
        icon: FaShoppingBag
    },
    {
        id: 10,
        title: "Санатории",
        icon: FaClinicMedical
    }
];