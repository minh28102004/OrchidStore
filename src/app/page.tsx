import { User, Leaf, Settings } from 'lucide-react';
import Image from 'next/image';
import './role-selection.css';

export default function RoleSelection() {
  return (
    <div className="min-h-screen bg-[#F3F4F6] flex items-center justify-center px-6 py-10">
      <div className="w-full max-w-[1200px] bg-white overflow-hidden border border-[#D9D9D9]">

        <div className="grid md:grid-cols-[500px_1fr]">

          {/* ================= LEFT IMAGE ================= */}
          <div className="relative h-[760px] hidden md:block">
            <Image
              src="/assets/images/hero-orchid.jpg"
              alt="LanCare Hub"
              fill
              priority
              className="object-cover"
            />
          </div>

          {/* ================= RIGHT CONTENT ================= */}
          <div className="bg-[#FAFAFA] px-[44px] py-[34px] flex justify-center">
            <div className="w-full max-w-[610px]">

              {/* HEADING */}
              <h1 className="text-[28px] leading-[34px] font-extrabold text-[#111827] tracking-[-0.4px]">
                Bạn muốn sử dụng LanCare
                <br />
                Hub với vai trò nào?
              </h1>

              <p className="mt-4 text-[13px] text-[#6B7280] leading-[20px]">
                Vui lòng chọn vai trò phù hợp để chúng tôi cá nhân hóa trải nghiệm của bạn.
              </p>

              {/* ROLE CARDS */}
              <div className="grid grid-cols-2 gap-4 mt-10">

                {/* CUSTOMER */}
                <div className="bg-white border border-[#DADDE5] rounded-[14px] p-5 min-h-[265px] flex flex-col">

                  <div className="w-10 h-10 rounded-[10px] bg-[#EEE9FF] flex items-center justify-center mb-5">
                    <User className="w-5 h-5 text-[#6D28D9]" />
                  </div>

                  <h3 className="text-[16px] font-semibold text-[#111827] mb-3">
                    Khách hàng
                  </h3>

                  <p className="text-[13px] leading-[22px] text-[#4B5563] flex-1">
                    Tìm và đặt dịch vụ chăm sóc hoa lan từ nhà vườn hoặc chuyên gia được xác minh.
                  </p>

                  <button className="mt-6 h-[46px] rounded-[8px] bg-[#6D28D9] hover:bg-[#5B21B6] text-white text-[13px] font-semibold transition">
                    Đăng ký Customer →
                  </button>
                </div>

                {/* PROVIDER */}
                <div className="bg-white border border-[#DADDE5] rounded-[14px] p-5 min-h-[265px] flex flex-col">

                  <div className="w-10 h-10 rounded-[10px] bg-[#E8F8EE] flex items-center justify-center mb-5">
                    <Leaf className="w-5 h-5 text-[#15803D]" />
                  </div>

                  <h3 className="text-[16px] font-semibold text-[#111827] mb-3">
                    Nhà vườn / Chuyên gia
                  </h3>

                  <p className="text-[13px] leading-[22px] text-[#4B5563] flex-1">
                    Tạo gói dịch vụ, nhận đơn chăm sóc, gửi báo cáo và quản lý khách hàng.
                  </p>

                  <button className="mt-6 h-[46px] rounded-[8px] border border-[#15803D] text-[#15803D] hover:bg-[#F0FDF4] text-[13px] font-semibold transition">
                    Đăng ký Provider →
                  </button>
                </div>
              </div>

              {/* ADMIN CARD */}
              <div className="mt-7 bg-[#F3F4FB] border border-[#DADDE5] rounded-[14px] px-6 py-5 flex items-center justify-between gap-5">

                <div className="flex items-center gap-4 min-w-0">

                  <div className="w-11 h-11 rounded-full bg-[#E9ECF5] flex items-center justify-center flex-shrink-0">
                    <Settings className="w-5 h-5 text-[#4B5563]" />
                  </div>

                  <div>
                    <h3 className="text-[16px] font-semibold text-[#111827]">
                      Quản trị viên
                    </h3>

                    <p className="text-[12px] text-[#6B7280] leading-[18px] mt-1">
                      Dành cho tài khoản quản trị được cấp quyền bởi hệ thống.
                    </p>
                  </div>
                </div>

                <a
                  href="#"
                  className="text-[13px] font-semibold text-[#4F46E5] underline underline-offset-2 whitespace-nowrap"
                >
                  Liên hệ quản trị hệ thống
                </a>
              </div>

              {/* LOGIN */}
              <div className="text-center mt-8 text-[13px] text-[#6B7280]">
                Đã có tài khoản?{' '}
                <a
                  href="#"
                  className="text-[#4F46E5] font-semibold hover:underline"
                >
                  Đăng nhập
                </a>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}