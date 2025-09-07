"use client";
import { motion } from "framer-motion";

const familyServices = [
  {
    title: "Adoptions",
    description:
      "We handle adoptions by stepparents, grandparents, other relatives, independent adoptions, and agency adoptions. Adoption can be a wonderful way to grow your family, and we provide guidance throughout the entire process.",
  },
  {
    title: "Alimony",
    description:
      "Alimony (spousal support) and post-separation support may be an issue in your divorce. We will advise you regarding your rights and obligations, whether you are seeking support or may be required to pay it.",
  },
  {
    title: "Child Custody",
    description:
      "Custody of children is often one of the most emotional and difficult issues for parents. We represent parents in establishing or modifying custody arrangements, always keeping the child’s best interest at the center.",
  },
  {
    title: "Child Support",
    description:
      "Both parents are responsible for the financial support of their children. We assist in establishing child support, modifying existing orders, and ensuring compliance with North Carolina guidelines.",
  },
  {
    title: "Collaborative Law",
    description:
      "Collaborative divorce is a non-adversarial, out-of-court method of resolving disputes. It allows couples to maintain control, reduce conflict, and create customized agreements that best suit their family.",
  },
  {
    title: "Divorce",
    description:
      "We assist with divorce filings after one year of separation, and provide guidance on resolving all related issues, including property division, child custody, child support, and alimony.",
  },
  {
    title: "Domestic Violence",
    description:
      "If you are a victim of domestic violence, we can help you obtain a protective order (50-B restraining order). If you are accused, we also represent individuals defending against such claims.",
  },
  {
    title: "Property Division",
    description:
      "Dividing marital assets and debts can be complex. We will help identify marital versus separate property, and work toward an equitable distribution that protects your rights and financial future.",
  },
  {
    title: "Separation Agreements",
    description:
      "A separation agreement is a private contract between spouses resolving issues such as property division, custody, support, and alimony. We draft and review agreements tailored to your circumstances.",
  },
  {
    title: "Other Services",
    description:
      "We also provide representation for name changes, grandparent visitation rights, contempt actions, post-judgment modifications, and many other family law matters.",
  },
];

export default function FamilyLawPage() {
  return (
    <div className="flex flex-col font-sans text-gray-800">
      {/* Hero Section with Background Image */}
      <section className="relative h-[60vh] flex items-center justify-center text-center text-white">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1528747045269-390fe33c19d4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')",
          }}
        ></div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Hero Content */}
        <div className="relative z-10 px-6 max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            DIVORCE AND FAMILY LAW
          </h1>
          <p className="text-lg md:text-xl">
            Family law is the heart of our practice. Our mission is to minimize
            conflict, protect your rights, and help you move forward with dignity
            and confidence. We provide compassionate yet strong representation in
            all family law matters.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {familyServices.map((service, idx) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold mb-3 text-green-700">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Info Footer */}
      <footer className="py-12 bg-gray-100 text-center text-gray-700">
        <p className="font-semibold">ROLLER LAW, PLLC</p>
        <p>
          Email:{" "}
          <a
            href="mailto:Info@CourtneyRollerLaw.com"
            className="underline hover:text-green-700"
          >
            Info@CourtneyRollerLaw.com
          </a>
        </p>
        <p>
          Phone:{" "}
          <a
            href="tel:+13364750099"
            className="underline hover:text-green-700"
          >
            (336) 475-0099
          </a>
        </p>
        <p>Fax: (336) 475-9584</p>
        <p>48 Salem St, Thomasville, NC 27360</p>
      </footer>
    </div>
  );
}
