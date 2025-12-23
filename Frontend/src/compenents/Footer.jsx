import { BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer class="px-6 md:px-16 lg:px-24 xl:px-32 pt-8 w-full text-gray-300 bg-[#0F172A]">
    <div class="flex flex-row justify-between w-full gap-10 border-b border-gray-500/30 pb-6">
        <div class="md:max-w-96">
            <div className="flex items-center gap-2">
                  <div className="bg-[#fff] p-1.5 rounded-lg">
                    <BookOpen className="text-[#800020] w-5 h-5" />
                  </div>
                  <Link to="/">
                  <span className="font-bold text-xl text-[#fff]">MyBooks</span>
                  </Link>
                </div>
            <p class="mt-6 text-sm">
                Become part of the MyBooks community and share your literary experiences with us.
            </p>
        </div>
        <div class="flex-1 flex items-start md:justify-end gap-20">
            <div>
                <h2 class="font-semibold mb-5 text-gray-400">Company</h2>
                <ul class="text-sm space-y-2">
                  
                    <li><a href="#">Home</a></li>
                   
                    <li><a href="#">About us</a></li>
                    <li><a href="#">How it works</a></li>
                </ul>
            </div>
            <div>
                <h2 class="font-semibold mb-5 text-gray-400">Get in touch</h2>
                <div class="text-sm space-y-2">
                    <p>+1-212-456-7890</p>
                    <p>contact@example.com</p>
                </div>
            </div>
        </div>
    </div>
    <p class="pt-4 text-center text-xs md:text-sm pb-5">
        Copyright 2025 © <a href="https://prebuiltui.com">PrebuiltUI</a>. All Right Reserved.
    </p>
</footer>
  );
}
