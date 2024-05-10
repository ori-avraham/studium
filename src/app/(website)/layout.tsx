import Banner from "@/components/shared/banner";
import Footer from "@/components/website/footer";
import { Navbar } from "@/components/website/navbar";
import { type PropsWithChildren } from "react";

interface WebsiteLayoutProps extends PropsWithChildren {}

export default function WebsiteLayout({ children }: WebsiteLayoutProps) {
  return (
    <>
      <Banner />
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
