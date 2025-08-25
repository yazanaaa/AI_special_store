import { useEffect } from "react";
import { motion } from "framer-motion";
import { STORE_URL, PHONE, WHATSAPP_LINK, TELEGRAM_LINK } from "./config";
import { fadeUp, stagger } from "./animations";
import { enableSmoothScrolling, smoothScrollToId, runSmokeTests as runSmokeTestsUtil } from "./utils";
import {
  BadgeCheck,
  Rocket,
  ShieldCheck,
  Sparkles,
  PhoneCall,
  ShoppingCart,
  Clock,
  Headphones,
  ArrowRight,
  ChevronDown,
  MessageSquare,
  Star,
  Send,
} from "lucide-react";

// =============================
// Landing Page (Arabic / RTL)
// =============================
// ملاحظات:
// - واجهة حديثة برسوميات، حركات ناعمة، و"زجاجية" معتمدة على Tailwind CSS + Framer Motion
// - كل الروابط المهمة موجودة أسفل وفي الأزرار (المتجر / واتساب / تيليجرام / اتصال)
// - لتغيير ألوان العلامة التجارية عدّل التدرجات في الطبقات ذات الـ bg-gradient

// =============================
// SMOKE TESTS (basic runtime checks)
// =============================

export default function LandingPage() {
  useEffect(() => {
    document.documentElement.dir = "rtl";
    document.title = "سبيشل ستور – اشتراكات رقمية أصلية";
    runSmokeTestsUtil({ STORE_URL, WHATSAPP_LINK, TELEGRAM_LINK, PHONE });

    const cleanupScroll = enableSmoothScrolling();
    return () => {
      cleanupScroll();
    };
  }, []);

  const handleSmoothScroll = (e, targetId) => {
    smoothScrollToId(e, targetId, 64);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white selection:bg-white/20">
      {/* خلفية تدرج + ضبابية */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(60%_40%_at_70%_20%,rgba(99,102,241,0.25),transparent_60%),radial-gradient(50%_35%_at_20%_60%,rgba(16,185,129,0.2),transparent_60%)]" />
        <div className="absolute inset-0 backdrop-blur-[2px]" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.12]" />
      </div>

      {/* شريط علوي */}
      <header className="sticky top-0 z-40 backdrop-blur border-b border-white/10 bg-slate-950/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <a href={STORE_URL} className="flex items-center gap-2 group">
                         <img
               src="/logo.webp"
               alt="شعار سبيشل ستور"
               className="h-9 w-9 rounded-2xl object-cover"
             />
            <span className="text-lg font-bold tracking-tight">سبيشل ستور</span>
          </a>

          <nav className="hidden md:flex items-center gap-6 text-sm text-white/80">
            <a 
              href="#features" 
              onClick={(e) => handleSmoothScroll(e, 'features')}
              className="hover:text-white transition cursor-pointer"
            >
              المزايا
            </a>
            
            <a 
              href="#whyus" 
              onClick={(e) => handleSmoothScroll(e, 'whyus')}
              className="hover:text-white transition cursor-pointer"
            >
              لماذا نحن؟
            </a>
            <a 
              href="#faq" 
              onClick={(e) => handleSmoothScroll(e, 'faq')}
              className="hover:text-white transition cursor-pointer"
            >
              الأسئلة الشائعة
            </a>
            <a 
              href="#contact" 
              onClick={(e) => handleSmoothScroll(e, 'contact')}
              className="hover:text-white transition cursor-pointer"
            >
              تواصل معنا
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={STORE_URL}
              className="inline-flex items-center gap-2 rounded-2xl bg-white/10 hover:bg-white/20 px-4 py-2 text-sm border border-white/15 transition"
            >
              <ShoppingCart className="size-4" />
              <span>تسوّق الآن</span>
            </a>
                         <a
               href={WHATSAPP_LINK}
               target="_blank"
               className="hidden sm:inline-flex items-center gap-2 rounded-2xl bg-gradient-to-br from-green-500 to-green-600 hover:brightness-110 px-4 py-2 text-sm font-semibold shadow-lg shadow-green-500/20"
             >
               <MessageSquare className="size-4" />
               <span>واتساب</span>
             </a>
          </div>
        </div>
      </header>

      {/* البطل */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
          <motion.div variants={stagger} initial="hidden" animate="show" className="grid lg:grid-cols-2 gap-10 items-center">
            <motion.div variants={fadeUp}>
              <span className="inline-flex items-center gap-2 text-xs font-medium px-3 py-1 rounded-full bg-white/10 border border-white/10 mb-4">
                <Rocket className="size-3.5" /> سبيشل ستور
              </span>
              <h1 className="text-3xl sm:text-5xl font-extrabold leading-tight">
                اشتراكات رقمية أصلية
                <br />
                <span className="bg-gradient-to-br from-indigo-400 via-fuchsia-300 to-emerald-300 bg-clip-text text-transparent">بأفضل الأسعار</span>
              </h1>
                             <p className="mt-5 text-white/80 max-w-xl leading-relaxed">
                                  <b>سبيشل ستور</b> يوفّر لك اشتراكات موثوقة لخدمات العمل والدراسة مثل
                                  Adobe و Freepik و Microsoft 365 و Canva وغيرها — بخطوات سهلة وسريعة، مع دعم متواصل يضمن راحتك.
               </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href={STORE_URL}
                  className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-br from-indigo-500 via-fuchsia-500 to-emerald-500 px-5 py-3 text-sm font-semibold shadow-lg hover:scale-[1.02] active:scale-[0.99] transition"
                >
                  <ShoppingCart className="size-4" />
                                     <span>اذهب إلى سبيشل ستور</span>
                  <ArrowRight className="size-4 -scale-x-100" />
                </a>
                                 <a
                   href={WHATSAPP_LINK}
                   target="_blank"
                   className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-br from-green-500 to-green-600 hover:brightness-110 px-5 py-3 text-sm font-semibold shadow-lg shadow-green-500/20"
                 >
                   <MessageSquare className="size-4" />
                   <span>تواصل عبر واتساب</span>
                 </a>
                                 <a
                   href={TELEGRAM_LINK}
                   target="_blank"
                   className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 hover:brightness-110 px-5 py-3 text-sm font-semibold shadow-lg shadow-blue-500/20"
                 >
                   <Send className="size-4" />
                   <span>تيليجرام: @special3_store</span>
                 </a>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-2 text-xs text-white/70">
                                 <ShieldCheck className="size-4" /> ضمان وموثوقية
                <span className="mx-2">•</span>
                <Headphones className="size-4" /> دعم سريع 24/7
              </div>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="relative mx-auto w-full max-w-xl"
            >
              <div className="relative rounded-3xl border border-white/10 bg-white/5 p-4 shadow-2xl">
                {/* كارد وهمي لعرض الاشتراكات */}
                <div className="rounded-2xl bg-slate-900/60 p-5 border border-white/10">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-white/70">الأكثر مبيعاً</p>
                                             <h3 className="text-xl font-bold">Adobe Creative Cloud</h3>
                    </div>
                                         <div className="text-right">
                                              <p className="text-sm text-emerald-300">متاح الآن</p>
                       <p className="text-xs text-white/60">خلال دقائق</p>
                       <a href="https://special3-store.com/ar/category/EdgBYA" className="text-xs text-indigo-300 hover:text-indigo-200 underline">تسوق هذا المنتج</a>
                     </div>
                  </div>
                                     <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
                                          {[
                        { name: "Freepik Premium", url: "https://special3-store.com/ar/category/vZQdwG" },
                        { name: "Microsoft 365", url: "https://special3-store.com/ar/category/rZWGnB" },
                        { name: "Canva", url: "https://special3-store.com/ar/category/ZAmzBp" },
                        { name: "Envato", url: "https://special3-store.com/ar/category/aZmYwn" },
                        { name: "ChatGPT", url: "https://special3-store.com/ar/category/bjmlyx" },
                        { name: "CapCut", url: "https://special3-store.com/ar/category/jnaqZe" },
                      ].map((p, i) => (
                       <div key={i} className="rounded-xl border border-white/10 bg-white/5 p-3 hover:bg-white/10 transition">
                         <div className="flex items-center justify-between">
                           <span>{p.name}</span>
                           <Star className="size-4 opacity-70" />
                         </div>
                         <a href={p.url} className="mt-2 inline-block text-xs text-indigo-300 hover:text-indigo-200">تسوّق هذا المنتج</a>
                       </div>
                     ))}
                  </div>
                </div>
                {/* توهج خلف الكارت */}
                <div className="absolute -inset-8 -z-10 bg-gradient-to-br from-indigo-500/20 via-fuchsia-500/20 to-emerald-500/20 blur-2xl rounded-[36px]" />
              </div>
            </motion.div>
          </motion.div>

          <div className="mt-16 flex flex-col items-center gap-2 text-white/70 text-sm">
            <ChevronDown className="animate-bounce size-5" />
            اسحب للأسفل لاكتشاف المزيد
          </div>
        </div>
      </section>

      {/* المزايا */}
      <section id="features" className="py-16 sm:py-24 border-t border-white/10 bg-slate-950/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={stagger}>
            <motion.h2 variants={fadeUp} className="text-2xl sm:text-3xl font-bold mb-8">ماذا نقدّم لك؟</motion.h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                                 { title: "سرعة في التوصيل", desc: "تصل بيانات الاشتراك إلى بريدك/واتساب خلال دقائق.", Icon: Clock },
                { title: "موثوقية وضمان", desc: "اشتراكات أصلية مع استبدال فوري عند أي مشكلة.", Icon: ShieldCheck },
                { title: "أسعار منافسة", desc: "عروض موسمية وحزم بأسعار استثنائية.", Icon: BadgeCheck },
                { title: "دعم عربي 24/7", desc: "نرد عليك في أي وقت عبر واتساب أو تيليجرام.", Icon: Headphones },
                { title: "سهولة الاستخدام", desc: "خطوات بسيطة – اختر، ادفع، استمتع فورًا.", Icon: Sparkles },
                { title: "سرعة وأمان", desc: "مدفوعات آمنة ومعالجة سريعة للطلبات.", Icon: Rocket },
              ].map(({ title, desc, Icon }, idx) => (
                <motion.div
                  key={idx}
                  variants={fadeUp}
                  className="rounded-2xl border border-white/10 bg-white/5 p-5 hover:bg-white/10 transition shadow-lg shadow-black/20"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="size-10 rounded-xl bg-gradient-to-br from-indigo-500/30 to-emerald-500/30 grid place-items-center">
                      <Icon className="size-5" />
                    </div>
                    <h3 className="text-lg font-semibold">{title}</h3>
                  </div>
                  <p className="text-white/75 text-sm leading-relaxed">{desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>


      {/* لماذا نحن */}
      <section id="whyus" className="py-16 sm:py-24 border-t border-white/10 bg-slate-950/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                             <h2 className="text-2xl sm:text-3xl font-bold">لماذا تختار سبيشل ستور؟</h2>
              <p className="mt-4 text-white/80 leading-relaxed">
                لأننا نركّز على السرعة والموثوقية وخدمة ما بعد البيع. هدفنا أن تحصل على اشتراكك
                بدون تعقيد وبأفضل قيمة مقابل السعر.
              </p>
              <ul className="mt-6 space-y-3 text-sm text-white/80">
                <li className="flex items-start gap-2">
                  <BadgeCheck className="size-5 text-emerald-300 mt-0.5" />
                  <span>اشتراكات أصلية مع سياسة استبدال في حال واجهتك مشكلة.</span>
                </li>
                <li className="flex items-start gap-2">
                  <BadgeCheck className="size-5 text-emerald-300 mt-0.5" />
                  <span>دعم عربي سريع عبر واتساب و تيليجرام على مدار الساعة.</span>
                </li>
                <li className="flex items-start gap-2">
                  <BadgeCheck className="size-5 text-emerald-300 mt-0.5" />
                  <span>عروض مستمرة وحزم خاصة للطلاب والشركات الصغيرة.</span>
                </li>
              </ul>
              <div className="mt-6 flex gap-3">
                <a href={STORE_URL} className="inline-flex items-center gap-2 rounded-2xl bg-white/10 hover:bg-white/20 px-5 py-3 text-sm border border-white/15 transition">
                  <ShoppingCart className="size-4" />
                                     <span>زيارة سبيشل ستور</span>
                </a>
                                 <a href="http://wa.me/966570921936" target="_blank" className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-br from-green-500 to-green-600 hover:brightness-110 px-5 py-3 text-sm font-semibold shadow-lg shadow-green-500/20">
                   <MessageSquare className="size-4" />
                   <span>تواصل واتساب</span>
                 </a>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-center">
                  {[
                    { k: "+50,000", v: "عنصر مبيع" },
                    { k: "دقائق", v: "متوسط التسليم" },
                    { k: "24/7", v: "دعم فني" },
                    { k: "+99%", v: "رضا العملاء" },
                    { k: "+20", v: "منصة اشتراك" },
                    { k: "آمن", v: "دفع مشفّر" },
                  ].map((s, i) => (
                    <div key={i} className="rounded-2xl bg-white/5 border border-white/10 p-5">
                      <div className="text-xl font-extrabold">{s.k}</div>
                      <div className="text-xs text-white/70">{s.v}</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* الأسئلة الشائعة */}
      <section id="faq" className="py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center">الأسئلة الشائعة</h2>
          <div className="space-y-4">
            {[
              {
                q: "كيف أستلم الاشتراك؟",
                                 a: "بعد إتمام الدفع عبر سبيشل ستور، نرسل لك بيانات الاشتراك فورًا إلى بريدك الإلكتروني أو عبر واتساب/تيليجرام حسب اختيارك.",
              },
              {
                q: "هل الاشتراك أصلي؟",
                a: "نعم، جميع الاشتراكات أصلية ومضمونة، مع سياسة استبدال في حال واجهتك أي مشكلة فنية خلال فترة الضمان.",
              },
              {
                q: "ما طرق الدفع المتاحة؟",
                a: "نوفر طرق دفع آمنة وشائعة. يمكنك التواصل معنا إذا رغبت بطريقة محددة.",
              },
              {
                q: "كم يستغرق التسليم؟",
                a: "في الغالب دقائق معدودة – يعتمد ذلك على نوع الاشتراك وحجم الطلبات في نفس الوقت.",
              },
            ].map((item, idx) => (
              <details key={idx} className="group rounded-2xl border border-white/10 bg-white/5 p-5 open:bg-white/10 transition">
                <summary className="flex cursor-pointer list-none items-center justify-between text-sm font-semibold">
                  {item.q}
                  <ChevronDown className="size-4 transition-transform group-open:rotate-180" />
                </summary>
                <p className="mt-3 text-sm text-white/80 leading-relaxed">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* تواصل معنا */}
      <section id="contact" className="py-16 sm:py-24 border-t border-white/10 bg-slate-950/40">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 md:p-10">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">تواصل معنا مباشرة</h2>
            <p className="text-white/80 text-sm mb-6">
              لأي استفسار أو مساعدة في اختيار الاشتراك المناسب، لا تتردد في مراسلتنا.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
                             <a href="https://instagram.com/special3_store" target="_blank" className="flex items-center justify-between rounded-2xl border border-pink-500/20 bg-pink-500/10 p-4 hover:bg-pink-500/20 transition">
                 <div>
                   <div className="text-sm font-semibold">انستغرام</div>
                   <div className="text-xs text-white/70">@special3_store</div>
                 </div>
                 <svg className="size-5 text-pink-400" fill="currentColor" viewBox="0 0 24 24">
                   <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                 </svg>
               </a>
                             <a href={WHATSAPP_LINK} target="_blank" className="flex items-center justify-between rounded-2xl border border-green-500/20 bg-green-500/10 p-4 hover:bg-green-500/20 transition">
                 <div>
                   <div className="text-sm font-semibold">واتساب</div>
                   <div className="text-xs text-white/70">افتح محادثة الآن</div>
                 </div>
                 <MessageSquare className="size-5 text-green-400" />
               </a>
                             <a href={TELEGRAM_LINK} target="_blank" className="flex items-center justify-between rounded-2xl border border-blue-500/20 bg-blue-500/10 p-4 hover:bg-blue-500/20 transition">
                 <div>
                   <div className="text-sm font-semibold">تيليجرام</div>
                   <div className="text-xs text-white/70">@special3_store</div>
                 </div>
                 <Send className="size-5 text-blue-400" />
               </a>
              <a href={STORE_URL} className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 p-4 hover:bg-white/10 transition">
                <div>
                                     <div className="text-sm font-semibold">سبيشل ستور</div>
                  <div className="text-xs text-white/70">special3-store.com</div>
                </div>
                <ShoppingCart className="size-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* فوتر */}
      <footer className="py-8 border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/60">
            © {new Date().getFullYear()} سبيشل ستور — جميع الحقوق محفوظة.
          </p>
          <div className="flex items-center gap-3">
            <a href={WHATSAPP_LINK} target="_blank" className="text-xs text-white/70 hover:text-white underline underline-offset-4">واتساب</a>
            <a href={TELEGRAM_LINK} target="_blank" className="text-xs text-white/70 hover:text-white underline underline-offset-4">تيليجرام</a>
                         <a href={STORE_URL} className="text-xs text-white/70 hover:text-white underline underline-offset-4">سبيشل ستور</a>
          </div>
        </div>
      </footer>

             {/* أزرار طافية */}
       <div className="fixed left-4 bottom-4 flex flex-col gap-2">
         <a
           href={WHATSAPP_LINK}
           target="_blank"
           className="rounded-full p-3 bg-green-500 shadow-xl hover:brightness-110 transition"
           aria-label="WhatsApp"
         >
           <MessageSquare className="size-5 text-white" />
         </a>
                   <a
            href={TELEGRAM_LINK}
            target="_blank"
            className="rounded-full p-3 bg-blue-500 shadow-xl hover:brightness-110 transition"
            aria-label="Telegram"
          >
            <Send className="size-5 text-white" />
          </a>
       </div>
    </div>
  );
}
