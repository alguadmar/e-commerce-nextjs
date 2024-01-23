import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

import prismadb from "@/lib/prismadb";
import Navbar from '@/components/navbar'

async function DashboardLayout({
    children,
    params
}: {
    children: React.ReactNode;
    params: { storeId: string }
}) {

  //Revisar si el usuario esta ingresado 
  const { userId } = auth();
  
  //Si no, redirigir al sign in
  if(!userId) {
    redirect('/sign-in')
  }

  //Hacer fecth de la tienda desde la db
  const store = await prismadb.store.findFirst({
    where: {
        id: params.storeId,
        userId,
    }
  });

  //Si no existe la tienda, volver al inicio
  if(!store) {
    redirect('/')
  }

  return (
    <>
        <Navbar/>
        { children }
    </>
  )
}

export default DashboardLayout