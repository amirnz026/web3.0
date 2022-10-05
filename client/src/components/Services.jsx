import React from "react";
import { BsShieldFillCheck } from "react-icons/bs";
import { BiSearchAlt } from "react-icons/bi";
import { RiHeart2Fill } from "react-icons/ri";

const ServiceCard = ({ color, title, icon, subtitle }) => (
  <div className="flex flex-row justify-start items-start white-glassmorphism p-3 m-2 cursor-pointer hover:shadow-xl">
    <div
      className={`w-10 h-10 rounded-full flex justify-center items-center ${color}`}
    >
      {icon}
    </div>
    <div className="ml-5 flex flex-col flex-1">
      <h3 className="mt-2 ms-2 text-white text-lg">{title}</h3>
      <p className="mt-1 text-white text-sm md:w-12/12">{subtitle}</p>
    </div>
  </div>
);

const Services = () => (
  <div className="flex w-full justify-center items-center gradient-bg-services">
    <div className="flex mf:flex-row flex-col items-center justify-between md:p-20 py-12 px-4">
      <div className="flex-1 flex flex-col justify-center items-center md:justify-start md:items-start">
        <h1 className="text-white text-3xl sm:text-5xl py-2 text-gradient font-semibold ">
          خدماتی که همواره در حال
        </h1>
        <h1 className="text-white text-3xl sm:text-5xl py-2 text-gradient font-semibold">
          بهبود کیفیت آن‌ها هستیم.
        </h1>

        <p className="text-center md:text-start my-2 text-white font-light md:w-9/12 w-11/12 text-base">
          بهترین انتخاب برای خرید و. فروش ارزدیجیتال، با خدمات کاربر پسندی که ما
          ارائه می‌دهیم.
        </p>
      </div>

      <div className="flex-1 flex flex-col justify-start items-center ">
        <ServiceCard
          color="bg-[#2952E3]"
          title="تضمین امنیت"
          icon={<BsShieldFillCheck fontSize={21} className="text-white" />}
          subtitle="امنیت و کیفیت سرویس‌های ما تضمین شده هستند. همواره اصل راهبردی ما، حفظ حریم خصوصی کاربران است."
        />
        <ServiceCard
          color="bg-[#8945F8]"
          title="کمترین کارمزد"
          icon={<BiSearchAlt fontSize={21} className="text-white" />}
          subtitle="با استفاده از الگوریتم‌های بهینه، خیالتان از پرداخت کمترین کارمزد در هنگام ثبت تراکنش راحت خواهد بود ."
        />
        <ServiceCard
          color="bg-[#F84550]"
          title="بالاترین سرعت تراکنش ها"
          icon={<RiHeart2Fill fontSize={21} className="text-white" />}
          subtitle="سرویس‌های ما با استفاده از پیشرفته‌ترین تکنولوژی‌های بلاک‌چین، میانگین سرعت ثبت تراکنش ۳۰ ثانیه را به شما می‌دهید."
        />
      </div>
    </div>
  </div>
);

export default Services;
