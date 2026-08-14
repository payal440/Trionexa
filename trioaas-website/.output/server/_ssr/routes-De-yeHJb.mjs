import { o as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { _ as Chromium, a as Share2, b as ArrowUpRight, c as Palette, d as MapPin, f as Mail, g as CircleAlert, h as CircleCheck, i as ShoppingBag, l as MessageCircle, m as CodeXml, n as TrendingUp, o as Search, p as LoaderCircle, r as Sparkles, s as Phone, t as X, u as Menu, v as ChevronDown, x as ArrowRight, y as Check } from "../_libs/lucide-react.mjs";
import { t as axios } from "../_libs/axios+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-De-yeHJb.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var logo1_default = "/assets/logo1-i9OMLQxP.png";
var nav = [
	{
		href: "#home",
		label: "Home"
	},
	{
		href: "#about",
		label: "About"
	},
	{
		href: "#why-us",
		label: "Why us"
	},
	{
		href: "#industries",
		label: "Industries"
	}
];
var services$1 = [
	{
		href: "#social",
		label: "Social Media Marketing"
	},
	{
		href: "#website",
		label: "Website Development"
	},
	{
		href: "#meta",
		label: "Meta Ads"
	},
	{
		href: "#google",
		label: "Google Ads"
	},
	{
		href: "#shopify",
		label: "Shopify Store"
	},
	{
		href: "#branding",
		label: "Branding & Design"
	}
];
function Navbar({ onOpenContact }) {
	const [open, setOpen] = (0, import_react.useState)(false);
	const [servicesOpen, setServicesOpen] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "sticky top-0 z-50 border-b border-border/60 bg-background/70 backdrop-blur-xl",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
			className: "mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: "#home",
					className: "flex items-center gap-2.5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: logo1_default,
						alt: "TrioAas",
						className: "h-9 w-9 rounded-lg object-contain"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "font-display text-lg font-bold tracking-tight",
						children: ["Trio", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-gradient-brand",
							children: "Aas"
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "hidden items-center gap-1 lg:flex",
					children: [nav.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: l.href,
						className: "rounded-full px-3.5 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground",
						children: l.label
					}) }, l.href)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "relative",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onMouseEnter: () => setServicesOpen(true),
							onMouseLeave: () => setServicesOpen(false),
							onClick: () => setServicesOpen((v) => !v),
							className: "flex items-center gap-1 rounded-full px-3.5 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground",
							children: ["Services ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "h-3.5 w-3.5" })]
						}), servicesOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							onMouseEnter: () => setServicesOpen(true),
							onMouseLeave: () => setServicesOpen(false),
							className: "absolute left-1/2 top-full z-50 w-64 -translate-x-1/2 pt-2 animate-in fade-in-0 zoom-in-95",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "rounded-2xl border border-border bg-popover p-2 shadow-card",
								children: services$1.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: s.href,
									className: "block rounded-xl px-3 py-2 text-sm text-popover-foreground transition-colors hover:bg-secondary",
									children: s.label
								}, s.href))
							})
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "hidden items-center gap-2 lg:flex",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: "tel:9669945040",
						className: "inline-flex items-center gap-2 rounded-full px-3.5 py-2 text-sm font-medium text-muted-foreground hover:text-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-4 w-4" }), " Call"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: onOpenContact,
						className: "inline-flex items-center rounded-full bg-gradient-brand px-4 py-2 text-sm font-semibold text-brand-foreground shadow-soft transition-transform hover:-translate-y-0.5",
						children: "Get in touch"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => setOpen((v) => !v),
					className: "inline-flex items-center justify-center rounded-lg p-2 lg:hidden",
					"aria-label": "Toggle menu",
					children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-5 w-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "h-5 w-5" })
				})
			]
		}), open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-t border-border bg-background lg:hidden",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4 sm:px-6",
				children: [
					nav.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: l.href,
						onClick: () => setOpen(false),
						className: "rounded-lg px-3 py-2 text-sm font-medium text-foreground/80 hover:bg-secondary",
						children: l.label
					}, l.href)),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("details", {
						className: "group",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("summary", {
							className: "flex cursor-pointer items-center justify-between rounded-lg px-3 py-2 text-sm font-medium text-foreground/80 hover:bg-secondary",
							children: ["Services ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "h-4 w-4 group-open:rotate-180 transition-transform" })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "ml-2 mt-1 flex flex-col gap-0.5 border-l border-border pl-3",
							children: services$1.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: s.href,
								onClick: () => setOpen(false),
								className: "rounded-lg px-3 py-1.5 text-sm text-muted-foreground hover:text-foreground",
								children: s.label
							}, s.href))
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							setOpen(false);
							onOpenContact();
						},
						className: "mt-2 inline-flex items-center justify-center rounded-full bg-gradient-brand px-4 py-2.5 text-sm font-semibold text-brand-foreground",
						children: "Get in touch"
					})
				]
			})
		})]
	});
}
function Hero({ onOpenContact }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "home",
		className: "relative overflow-hidden bg-gradient-hero",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-0 bg-grid opacity-60" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute -left-24 top-20 h-72 w-72 rounded-full bg-brand/25 blur-3xl animate-float-slow" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute -right-16 top-40 h-80 w-80 rounded-full bg-brand-purple/25 blur-3xl animate-float-slower" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:px-8 lg:py-28",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "animate-fade-up delay-1 inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-3 py-1 text-xs font-medium text-muted-foreground shadow-soft backdrop-blur",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-3.5 w-3.5 text-brand-purple animate-glow-pulse" }), "Digital Marketing · Web Dev · Ads"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						className: "animate-fade-up delay-2 mt-6 text-4xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-6xl",
						children: [
							"Grow your business with",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-gradient-brand-animated",
								children: "TrioAas"
							}),
							" — marketing, development & ads, working as one."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "animate-fade-up delay-3 mt-6 max-w-xl text-base text-muted-foreground sm:text-lg",
						children: "Digital marketing, website development, Meta & Google Ads, SEO and lead generation — built around one goal: measurable growth for your business."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "animate-fade-up delay-4 mt-8 flex flex-wrap items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: onOpenContact,
							className: "group sheen-on-hover inline-flex items-center gap-2 rounded-full bg-gradient-brand px-5 py-3 text-sm font-semibold text-brand-foreground shadow-glow transition-transform duration-300 hover:-translate-y-0.5 hover:scale-[1.02]",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "sheen-layer",
									"aria-hidden": "true"
								}),
								"Get Free Consultation",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4 transition-transform group-hover:translate-x-1" })
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "tel:9669945040",
							className: "inline-flex items-center gap-2 rounded-full border border-border bg-background px-5 py-3 text-sm font-semibold text-foreground shadow-soft transition-transform duration-300 hover:-translate-y-0.5 hover:bg-secondary",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-4 w-4" }), " Call Now"]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
						className: "animate-fade-up delay-5 mt-12 grid max-w-lg grid-cols-3 gap-4",
						children: [
							{
								k: "3-in-1",
								v: "Marketing · Dev · Ads"
							},
							{
								k: "8+",
								v: "Industries served"
							},
							{
								k: "100%",
								v: "Lead-focused"
							}
						].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-2xl border border-border bg-card/70 p-4 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-brand/50 hover:shadow-soft",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "text-gradient-brand text-2xl font-bold",
								children: s.k
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
								className: "mt-1 text-xs text-muted-foreground",
								children: s.v
							})]
						}, s.k))
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "relative animate-fade-up delay-3",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative mx-auto aspect-square w-full max-w-md",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 rounded-[2rem] bg-gradient-brand opacity-60 blur-2xl animate-glow-pulse" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative h-full w-full rounded-[2rem] border border-border bg-card/70 p-6 shadow-glow backdrop-blur-xl transition-transform duration-500 hover:-translate-y-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid h-full grid-cols-2 gap-3",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
										title: "ROAS",
										value: "4.8×",
										tone: "blue"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
										title: "Leads / mo",
										value: "+320",
										tone: "purple"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
										title: "CTR",
										value: "6.4%",
										tone: "purple"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
										title: "Sites shipped",
										value: "40+",
										tone: "blue"
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "pointer-events-none absolute -bottom-4 -right-4 hidden rounded-2xl border border-border bg-card p-3 shadow-card sm:block",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "grid h-8 w-8 place-items-center rounded-lg bg-gradient-brand text-brand-foreground",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-4 w-4" })
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-xs font-semibold",
										children: "Campaign live"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-[10px] text-muted-foreground",
										children: "All systems go"
									})] })]
								})
							})]
						})]
					})
				})]
			})
		]
	});
}
function StatCard({ title, value, tone }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "group relative overflow-hidden rounded-2xl border border-border bg-surface p-4 transition-all duration-300 hover:-translate-y-1 hover:border-brand/50 hover:shadow-soft",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: `absolute right-0 top-0 h-16 w-16 rounded-full blur-2xl transition-transform duration-500 group-hover:scale-150 ${tone === "blue" ? "bg-brand/40" : "bg-brand-purple/40"}` }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "text-xs font-medium text-muted-foreground",
				children: title
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-1 text-2xl font-bold text-foreground",
				children: value
			})]
		})]
	});
}
function useReveal(options = {}) {
	const ref = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const el = ref.current;
		if (!el) return;
		if (typeof IntersectionObserver === "undefined") {
			el.classList.add("in-view");
			return;
		}
		const observer = new IntersectionObserver(([entry]) => {
			if (entry.isIntersecting) {
				el.classList.add("in-view");
				observer.unobserve(el);
			}
		}, {
			threshold: options.threshold ?? .12,
			rootMargin: options.rootMargin ?? "0px 0px -8% 0px"
		});
		observer.observe(el);
		return () => observer.disconnect();
	}, [options.threshold, options.rootMargin]);
	return ref;
}
function About() {
	const ref = useReveal();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "about",
		className: "border-y border-border bg-surface",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			ref,
			className: "reveal mx-auto max-w-4xl px-4 py-24 text-center sm:px-6 lg:px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "inline-flex rounded-full border border-border bg-background px-3 py-1 text-xs font-medium text-muted-foreground",
					children: "About Us"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "mt-5 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl",
					children: [
						"A results-driven digital agency, built to",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-gradient-brand",
							children: "grow your business online"
						}),
						"."
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mx-auto mt-6 max-w-2xl text-base text-muted-foreground sm:text-lg",
					children: "TrioAas Tech provides web development and marketing solutions that not only look good, but attract and convert customers. Our team blends creativity and technology to deliver high-performance websites and powerful marketing campaigns — whether you're a startup or an established business, we strengthen your online presence and drive real, measurable growth."
				})
			]
		})
	});
}
var services = [
	{
		id: "social",
		Icon: Share2,
		title: "Social Media Marketing",
		text: "Instagram & Facebook marketing to grow your business online."
	},
	{
		id: "shopify",
		Icon: ShoppingBag,
		title: "Shopify Store",
		text: "High-converting Shopify stores that are fast, responsive, and sales-focused."
	},
	{
		id: "meta",
		Icon: TrendingUp,
		title: "Meta Ads",
		text: "Professional Facebook & Instagram ads for lead generation."
	},
	{
		id: "seo",
		Icon: Search,
		title: "SEO Optimization",
		text: "Improve Google ranking and get organic traffic."
	},
	{
		id: "website",
		Icon: CodeXml,
		title: "Website Development",
		text: "Professional business websites and landing pages."
	},
	{
		id: "google",
		Icon: Chromium,
		title: "Google Ads",
		text: "Reach more customers instantly through Google advertising."
	},
	{
		id: "branding",
		Icon: Palette,
		title: "Branding & Design",
		text: "Creative posters, banners and social media creatives."
	}
];
function Card({ s }) {
	const { Icon } = s;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		id: s.id,
		className: "group relative overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-card transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1.5 hover:border-brand/40 hover:shadow-glow",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-x-0 top-0 h-px bg-gradient-brand opacity-0 transition-opacity duration-500 group-hover:opacity-100" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full bg-gradient-brand opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-30" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative flex items-center justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "inline-grid h-11 w-11 place-items-center rounded-xl bg-gradient-brand text-brand-foreground shadow-soft transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-5 w-5" })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-4 w-4 text-muted-foreground opacity-0 transition-all duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:opacity-100" })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "relative mt-5 text-lg font-semibold tracking-tight",
				children: s.title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "relative mt-2 text-sm leading-relaxed text-muted-foreground",
				children: s.text
			})
		]
	});
}
function Services() {
	const head = useReveal();
	const grid = useReveal();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "services",
		className: "relative",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				ref: head,
				className: "reveal mx-auto max-w-2xl text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "inline-flex rounded-full border border-border bg-background px-3 py-1 text-xs font-medium text-muted-foreground",
						children: "What We Do"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "mt-5 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl",
						children: [
							"Everything you need to ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-gradient-brand",
								children: "go to market"
							}),
							"."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-muted-foreground",
						children: "One team. One roadmap. Marketing, development, and paid ads under a single roof."
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				ref: grid,
				className: "reveal stagger mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3",
				children: services.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, { s }, s.id))
			})]
		})
	});
}
var reasons = [
	"Professional Design",
	"Affordable Pricing",
	"Fast Delivery",
	"Lead Focused Strategy",
	"Dedicated Support",
	"Result Oriented Work"
];
function WhyChooseUs() {
	const head = useReveal();
	const grid = useReveal();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "why-us",
		className: "border-y border-border bg-gradient-soft",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				ref: head,
				className: "reveal mx-auto max-w-2xl text-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "inline-flex rounded-full border border-border bg-background px-3 py-1 text-xs font-medium text-muted-foreground",
					children: "Why TrioAas"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "mt-5 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl",
					children: [
						"Built for teams that want ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-gradient-brand",
							children: "results"
						}),
						"."
					]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				ref: grid,
				className: "reveal stagger mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3",
				children: reasons.map((r, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "group flex items-center gap-4 rounded-2xl border border-border bg-card p-5 shadow-card transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:border-brand/40 hover:shadow-glow",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-display text-2xl font-bold text-muted-foreground/50 tabular-nums transition-colors group-hover:text-brand",
							children: String(i + 1).padStart(2, "0")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-base font-medium",
							children: r
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "ml-auto inline-grid h-8 w-8 place-items-center rounded-full bg-gradient-brand text-brand-foreground opacity-90 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-4 w-4" })
						})
					]
				}, r))
			})]
		})
	});
}
var industries = [
	"Schools & Coaching",
	"Gyms & Fitness",
	"Restaurants",
	"Real Estate",
	"Solar Companies",
	"Agriculture Businesses",
	"Tent & Event Businesses",
	"Local Shops & Startups"
];
function Industries() {
	const head = useReveal();
	const grid = useReveal();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "industries",
		className: "relative",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				ref: head,
				className: "reveal mx-auto max-w-2xl text-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "inline-flex rounded-full border border-border bg-background px-3 py-1 text-xs font-medium text-muted-foreground",
					children: "Who We Work With"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "mt-5 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl",
					children: [
						"Industries we ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-gradient-brand",
							children: "serve"
						}),
						"."
					]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				ref: grid,
				className: "reveal stagger mt-12 flex flex-wrap justify-center gap-3",
				children: industries.map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-foreground/80 shadow-soft transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:border-brand/50 hover:text-foreground hover:shadow-glow",
					children: i
				}, i))
			})]
		})
	});
}
function ContactSection({ onOpenContact }) {
	const ref = useReveal();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "contact",
		className: "relative overflow-hidden",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				ref,
				className: "reveal relative overflow-hidden rounded-3xl border border-border bg-gradient-brand animate-gradient-x p-10 text-center shadow-glow sm:p-16",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-grid opacity-20" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute -top-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-white/20 blur-3xl animate-glow-pulse" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "inline-flex rounded-full border border-white/30 bg-white/10 px-3 py-1 text-xs font-medium text-white backdrop-blur",
								children: "Let's Talk"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-5 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl",
								children: "Ready to get started?"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mx-auto mt-4 max-w-xl text-white/80",
								children: "Book a free consultation and we'll map a lead-focused plan for your business — no obligations."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-8 flex flex-wrap justify-center gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									onClick: onOpenContact,
									className: "group sheen-on-hover inline-flex items-center gap-2 rounded-full bg-background px-5 py-3 text-sm font-semibold text-foreground shadow-soft transition-transform duration-300 hover:-translate-y-0.5 hover:scale-[1.02]",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "sheen-layer",
											"aria-hidden": "true"
										}),
										"Get Free Consultation",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4 transition-transform group-hover:translate-x-1" })
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: "https://wa.me/919669945040?text=Hello%20Trioaas%20Digital%20Marketing",
									target: "_blank",
									rel: "noreferrer",
									className: "inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/20",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "h-4 w-4" }), " Chat on WhatsApp"]
								})]
							})
						]
					})
				]
			})
		})
	});
}
var cols = [
	{
		title: "Quick Links",
		items: [
			{
				href: "#home",
				label: "Home"
			},
			{
				href: "#about",
				label: "About Us"
			},
			{
				href: "#contact",
				label: "Contact"
			}
		]
	},
	{
		title: "Back Office",
		items: [
			{
				href: "#services",
				label: "Ecommerce Management"
			},
			{
				href: "#services",
				label: "Amazon Account Management"
			},
			{
				href: "#services",
				label: "Data Entry Management"
			},
			{
				href: "#services",
				label: "Customer Support"
			}
		]
	},
	{
		title: "Development",
		items: [
			{
				href: "#website",
				label: "Website"
			},
			{
				href: "#shopify",
				label: "Shopify Website"
			},
			{
				href: "#services",
				label: "Wordpress Website"
			}
		]
	},
	{
		title: "Digital Marketing",
		items: [
			{
				href: "#social",
				label: "Social Media Marketing"
			},
			{
				href: "#services",
				label: "Email Marketing"
			},
			{
				href: "#services",
				label: "Content Marketing"
			}
		]
	}
];
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "border-t border-border bg-surface",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-2 gap-10 md:grid-cols-3 lg:grid-cols-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "col-span-2 lg:col-span-1",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: logo1_default,
								alt: "TrioAas",
								className: "h-10 w-10 rounded-lg object-contain"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "font-display text-lg font-bold",
								children: ["Trio", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-gradient-brand",
									children: "Aas"
								})]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 max-w-xs text-sm text-muted-foreground",
							children: "A results-driven digital agency — marketing, development & ads working as one."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
							className: "mt-6 space-y-2 text-sm text-muted-foreground",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-4 w-4 text-brand" }), " +91 96699 45040"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "h-4 w-4 text-brand" }), " trioaasinfotech@gmail.com"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-4 w-4 text-brand" }), " Bus Stop Multhan, Khargone, MP"]
								})
							]
						})
					]
				}), cols.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h5", {
					className: "text-sm font-semibold text-foreground",
					children: c.title
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-4 space-y-2.5",
					children: c.items.map((it) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: it.href,
						className: "text-sm text-muted-foreground transition-colors hover:text-foreground",
						children: it.label
					}) }, it.label))
				})] }, c.title))]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-12 flex flex-col items-start justify-between gap-3 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" TrioAas Tech. All rights reserved."
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Crafted with care · Marketing · Development · Ads" })]
			})]
		})
	});
}
var CONTACT_API_URL = "https://trionexa-1.onrender.com/api/contact";
async function submitContact(form) {
	return (await axios.post(CONTACT_API_URL, form)).data;
}
var initialForm = {
	name: "",
	phone: "",
	email: "",
	address: "",
	message: ""
};
function ContactModal({ isOpen, onClose }) {
	const [form, setForm] = (0, import_react.useState)(initialForm);
	const [status, setStatus] = (0, import_react.useState)({
		type: "",
		message: ""
	});
	const [loading, setLoading] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		if (!isOpen) return;
		const onKey = (e) => e.key === "Escape" && onClose();
		document.addEventListener("keydown", onKey);
		document.body.style.overflow = "hidden";
		return () => {
			document.removeEventListener("keydown", onKey);
			document.body.style.overflow = "";
		};
	}, [isOpen, onClose]);
	if (!isOpen) return null;
	const handleChange = (e) => setForm({
		...form,
		[e.target.name]: e.target.value
	});
	const handleSubmit = async (e) => {
		e.preventDefault();
		setLoading(true);
		setStatus({
			type: "",
			message: ""
		});
		try {
			const data = await submitContact(form);
			setStatus({
				type: "success",
				message: data.message || "Message Sent Successfully"
			});
			setForm(initialForm);
		} catch (err) {
			const msg = err?.response?.data?.errors?.[0]?.msg || err?.response?.data?.message || "Failed to send message. Please try again.";
			setStatus({
				type: "error",
				message: msg
			});
		} finally {
			setLoading(false);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		onClick: onClose,
		className: "fixed inset-0 z-[100] flex items-center justify-center bg-foreground/40 p-4 backdrop-blur-sm animate-in fade-in-0",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			onClick: (e) => e.stopPropagation(),
			className: "grid w-full max-w-4xl grid-cols-1 overflow-hidden rounded-3xl border border-border bg-card shadow-glow animate-in zoom-in-95 md:grid-cols-[1fr_1.2fr]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative hidden overflow-hidden bg-gradient-brand p-8 text-white md:block",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-grid opacity-20" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-2xl font-bold",
							children: "Get in Touch"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-white/80",
							children: "Tell us a little about your business — we'll get back within 24 hours."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
							className: "mt-8 space-y-4 text-sm",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex items-start gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "grid h-9 w-9 place-items-center rounded-xl bg-white/15 backdrop-blur",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-4 w-4" })
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-xs text-white/70",
										children: "Call us"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "font-medium",
										children: "+91 96699 45040"
									})] })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex items-start gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "grid h-9 w-9 place-items-center rounded-xl bg-white/15 backdrop-blur",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "h-4 w-4" })
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-xs text-white/70",
										children: "Email"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "font-medium",
										children: "trioaasinfotech@gmail.com"
									})] })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex items-start gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "grid h-9 w-9 place-items-center rounded-xl bg-white/15 backdrop-blur",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-4 w-4" })
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-xs text-white/70",
										children: "Address"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "font-medium",
										children: "Bus Stop Multhan, Khargone, MP"
									})] })]
								})
							]
						})
					]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative p-6 sm:p-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: onClose,
						"aria-label": "Close",
						className: "absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full border border-border bg-background text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-display text-2xl font-bold",
						children: "Contact Us"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm text-muted-foreground",
						children: "We'd love to hear about your project."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						onSubmit: handleSubmit,
						className: "mt-6 space-y-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Full Name",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "text",
									name: "name",
									value: form.name,
									onChange: handleChange,
									required: true,
									pattern: "[A-Za-z\\s]+",
									title: "Please enter a valid name",
									className: inputCls
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid grid-cols-1 gap-4 sm:grid-cols-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Phone",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "text",
										name: "phone",
										value: form.phone,
										onChange: handleChange,
										required: true,
										pattern: "[0-9]{10}",
										title: "Please enter a valid 10-digit phone number",
										className: inputCls
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Email",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "email",
										name: "email",
										value: form.email,
										onChange: handleChange,
										required: true,
										title: "Please enter a valid email address",
										className: inputCls
									})
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Address",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "text",
									name: "address",
									value: form.address,
									onChange: handleChange,
									required: true,
									title: "Please enter a valid address",
									className: inputCls
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Message",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
									rows: 4,
									name: "message",
									value: form.message,
									onChange: handleChange,
									required: true,
									title: "Please enter your message",
									className: inputCls + " resize-none"
								})
							}),
							status.message && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: `flex items-start gap-2 rounded-xl border p-3 text-sm ${status.type === "success" ? "border-emerald-200 bg-emerald-50 text-emerald-800" : "border-destructive/20 bg-destructive/10 text-destructive"}`,
								children: [status.type === "success" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "mt-0.5 h-4 w-4 shrink-0" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleAlert, { className: "mt-0.5 h-4 w-4 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: status.message })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "submit",
								disabled: loading,
								className: "inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-brand px-5 py-3 text-sm font-semibold text-brand-foreground shadow-soft transition-transform hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0",
								children: loading ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-4 w-4 animate-spin" }), " Sending..."] }) : "Send Message"
							})
						]
					})
				]
			})]
		})
	});
}
var inputCls = "w-full rounded-xl border border-input bg-background px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/60 outline-none transition-all focus:border-brand focus:ring-4 focus:ring-brand/15";
function Field({ label, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "block",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "mb-1.5 block text-xs font-medium text-foreground/80",
			children: label
		}), children]
	});
}
function Home() {
	const [contactOpen, setContactOpen] = (0, import_react.useState)(false);
	const open = () => setContactOpen(true);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navbar, { onOpenContact: open }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, { onOpenContact: open }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(About, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Services, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhyChooseUs, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Industries, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactSection, { onOpenContact: open })
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactModal, {
				isOpen: contactOpen,
				onClose: () => setContactOpen(false)
			})
		]
	});
}
//#endregion
export { Home as component };
