// Base de datos de productos con campo 'stock' asignado de forma realista y variada (0 = agotado, de 1 a 3 = stock crítico, > 3 = disponible)
const productsDatabase = [
            // CÁMARAS - PRINCIPIANTES
            { 
                id: 1, 
                title: "Sony ZV-E10 (Cuerpo)", 
                category: "Cámaras", 
                price: 699.00, 
                tag: "POPULAR", 
                stock: 18,
                img: "https://grupo2.miuni.kids/wp/wp-content/uploads/2026/07/Sony_ZVE10.png",
                description: "La cámara ideal para vloggers y creadores de contenido que se inician. Sensor APS-C de 24.2 MP, video 4K sin recortes y pantalla táctil abatible.",
                specs: ["Categoría: Principiantes", "Sensor APS-C de 24.2 megapíxeles", "Pantalla táctil abatible 180°", "Enfoque automático híbrido rápido"]
            },
            { 
                id: 2, 
                title: "Sony a6100 (Cuerpo)", 
                category: "Cámaras", 
                price: 599.00, 
                tag: "", 
                stock: 13,
                img: "https://grupo2.miuni.kids/wp/wp-content/uploads/2026/07/Sony_A6100.png",
                description: "Perfecta para aficionados a la fotografía de viajes y retratos cotidianos. Enfoque automático al ojo en tiempo real ultrarrápido.",
                specs: ["Categoría: Principiantes", "Enfoque automático al ojo en tiempo real", "Video 4K interno", "Sensor CMOS Exmor de 24.2 MP"]
            },
            { 
                id: 3, 
                title: "Canon EOS R50", 
                category: "Cámaras", 
                price: 579.00, 
                tag: "NUEVO", 
                stock: 21,
                img: "https://grupo2.miuni.kids/wp/wp-content/uploads/2026/07/Canon_R50.png",
                description: "Cámara compacta de lentes intercambiables con manejo intuitivo. Excelente para creadores de contenido híbridos.",
                specs: ["Categoría: Principiantes", "Sensor APS-C de 24.2 MP", "Video 4K a 30fps sobremuestreado", "Detección automática de sujetos"]
            },
            { 
                id: 4, 
                title: "Canon EOS R100", 
                category: "Cámaras", 
                price: 479.00, 
                tag: "SALE", 
                stock: 14,
                img: "https://grupo2.miuni.kids/wp/wp-content/uploads/2026/07/Canon_R100.png",
                description: "La opción de entrada más económica del sistema EOS R de Canon. Compacta, ligera y fácil de transportar.",
                specs: ["Categoría: Principiantes", "Sensor CMOS de 24.1 megapíxeles", "Modo ráfaga de hasta 6.5 fps", "Conectividad Wi-Fi y Bluetooth"]
            },
            { 
                id: 5, 
                title: "Nikon Z50 II", 
                category: "Cámaras", 
                price: 849.00, 
                tag: "NUEVO", 
                stock: 16,
                img: "https://grupo2.miuni.kids/wp/wp-content/uploads/2026/07/Nikon_Z50II.png",
                description: "La evolución de la cámara sin espejo compacta de Nikon. Increíble rendimiento con poca luz y ergonomía sobresaliente.",
                specs: ["Procesador de imagen EXPEED 7", "Video 4K UHD sin recorte", "Enfoque inteligente de sujetos"]
            },
            { 
                id: 6, 
                title: "Nikon D3500 (Kit 18-55mm)", 
                category: "Cámaras", 
                price: 449.00, 
                tag: "", 
                stock: 12,
                img: "https://grupo2.miuni.kids/wp/wp-content/uploads/2026/07/Nikon_D3500.png",
                description: "La legendaria cámara réflex para estudiantes. Autonomía de batería sin rival y una curva de aprendizaje sumamente didáctica.",
                specs: ["Sensor DX de 24.2 MP sin filtro OLPF", "Hasta 1550 disparos por carga", "Modo guía para principiantes incorporado"]
            },
            { 
                id: 7, 
                title: "Fujifilm X-M5", 
                category: "Cámaras", 
                price: 799.00, 
                tag: "NUEVO", 
                stock: 14,
                img: "https://grupo2.miuni.kids/wp/wp-content/uploads/2026/07/Fujifilm_XM5.png",
                description: "Cámara ultraligera con un exquisito diseño retro. Incorpora las famosas simulaciones de película analógica de Fujifilm.",
                specs: ["Sensor X-Trans CMOS 4", "Dial dedicado de simulación de película", "Cuerpo compacto estilo telémetro"]
            },

            // CÁMARAS - ENTUSIASTAS
            { 
                id: 8, 
                title: "Sony a6400 (Cuerpo)", 
                category: "Cámaras", 
                price: 749.00, 
                tag: "POPULAR", 
                stock: 19,
                img: "https://grupo2.miuni.kids/wp/wp-content/uploads/2026/07/Sony_A6400.png",
                description: "La cámara de referencia para fotógrafos aficionados avanzados. Construcción de aleación de magnesio y sellado parcial.",
                specs: ["Enfoque en 0.02 segundos", "Pantalla LCD inclinable 180°", "Excelente rendimiento ISO"]
            },
            { 
                id: 9, 
                title: "Canon EOS R10", 
                category: "Cámaras", 
                price: 879.00, 
                tag: "", 
                stock: 11,
                img: "https://grupo2.miuni.kids/wp/wp-content/uploads/2026/07/Canon_R10.png",
                description: "Un demonio de la velocidad para fotógrafos de acción y naturaleza en formato recortado APS-C.",
                specs: ["Ráfaga mecánica de hasta 15 fps", "Video 4K UHD a 60p", "AF Dual Pixel CMOS II avanzado"]
            },
            { 
                id: 10, 
                title: "Nikon Z5 II", 
                category: "Cámaras", 
                price: 1199.00, 
                tag: "NUEVO", 
                stock: 15,
                img: "https://grupo2.miuni.kids/wp/wp-content/uploads/2026/07/Nikon_Z5II.png",
                description: "La puerta de entrada ideal al formato Full Frame. Estabilización en el cuerpo y doble ranura para tarjetas.",
                specs: ["Sensor Full Frame de 24.3 MP", "Estabilización de imagen VR de 5 ejes", "Visor electrónico ultranítido"]
            },
            { 
                id: 11, 
                title: "Fujifilm X-S20", 
                category: "Cámaras", 
                price: 1299.00, 
                tag: "NUEVO", 
                stock: 13,
                img: "https://grupo2.miuni.kids/wp/wp-content/uploads/2026/07/Fujifilm_XS20.png",
                description: "La híbrida perfecta con un gran agarre, batería de larga duración y estabilización integrada de hasta 7 pasos.",
                specs: ["Grabación de video interna en 6.2K", "Batería NP-W235 de alta duración", "Estabilización IBIS de 7 pasos"]
            },
            { 
                id: 12, 
                title: "Fujifilm X-T50", 
                category: "Cámaras", 
                price: 1399.00, 
                tag: "NUEVO", 
                stock: 10,
                img: "https://grupo2.miuni.kids/wp/wp-content/uploads/2026/07/Fujifilm_XT50.png",
                description: "La combinación perfecta de sensor de alta resolución (40 MP) y diales mecánicos tradicionales en un cuerpo compacto.",
                specs: ["Sensor X-Trans CMOS 5 HR de 40 MP", "Dial físico de simulación de película", "Procesamiento de IA para autoenfoque"]
            },

            // CÁMARAS - AVANZADO / PROFESIONAL
            { 
                id: 13, 
                title: "Sony a6700 (Cuerpo)", 
                category: "Cámaras", 
                price: 1399.00, 
                tag: "POPULAR", 
                stock: 17,
                img: "https://grupo2.miuni.kids/wp/wp-content/uploads/2026/07/Sony_A6700.png",
                description: "La reina de la línea APS-C de Sony, equipada con chip dedicado de Inteligencia Actor para el autoenfoque.",
                specs: ["Sensor de 26 megapíxeles retroiluminado", "Procesador de IA dedicado para AF", "Video 4K a 120fps"]
            },
            { 
                id: 14, 
                title: "Sony FX3 (Cinema Line)", 
                category: "Cámaras", 
                price: 3899.00, 
                tag: "POPULAR", 
                stock: 12,
                img: "https://grupo2.miuni.kids/wp/wp-content/uploads/2026/07/Sony_FX3.png",
                description: "La cámara de cine de bolsillo aprobada por Netflix. Cuenta con ventilador activo integrado para grabaciones ilimitadas.",
                specs: ["Grabación de video en 4K 120p de 10 bits", "Ventilador de refrigeración integrado", "S-Cinetone para un look cinematográfico"]
            },
            { 
                id: 15, 
                title: "Sony Alpha 7 IV (Cuerpo)", 
                category: "Cámaras", 
                price: 2450.00, 
                tag: "SALE", 
                stock: 22,
                img: "https://grupo2.miuni.kids/wp/wp-content/uploads/2026/07/Sony_A7IV.png",
                description: "La cámara mirrorless todoterreno por excelencia de fotógrafos de bodas y eventos comerciales.",
                specs: ["Sensor Full-Frame de 33 MP", "Grabación 4K a 60p de 10 bits", "Estabilización de imagen de 5 ejes"]
            },
            { 
                id: 16, 
                title: "Canon EOS R8", 
                category: "Cámaras", 
                price: 1499.00, 
                tag: "POPULAR", 
                stock: 14,
                img: "https://grupo2.miuni.kids/wp/wp-content/uploads/2026/07/Canon_R8.png",
                description: "La cámara Full-Frame profesional más ligera y accesible, con un rendimiento de enfoque asombroso.",
                specs: ["Sensor Full-Frame de 24.2 MP", "Video 4K 60p sin recorte", "AF inteligente con detección de personas"]
            },
            { 
                id: 17, 
                title: "Canon EOS R5 Mk II", 
                category: "Cámaras", 
                price: 4299.00, 
                tag: "NUEVO", 
                stock: 11,
                img: "https://grupo2.miuni.kids/wp/wp-content/uploads/2026/07/Canon_R5MKII.png",
                description: "La bestia de resolución y velocidad de Canon. Sensor apilado retroiluminado y enfoque controlado por el ojo del fotógrafo.",
                specs: ["Sensor Full-Frame de 45 MP", "Video interno RAW de 8K a 60p", "Enfoque controlado por el movimiento del ojo"]
            },
            { 
                id: 18, 
                title: "Canon EOS R6 Mk II", 
                category: "Cámaras", 
                price: 2299.00, 
                tag: "", 
                stock: 18,
                img: "https://grupo2.miuni.kids/wp/wp-content/uploads/2026/07/Canon_R6MKII.png",
                description: "La cámara de bodas e híbrida comercial definitiva para Canonistas, equilibrada y sumamente veloz.",
                specs: ["Ráfaga electrónica de hasta 40 fps", "Video 4K 60p sin límite de tiempo", "Estabilización IBIS de hasta 8 pasos"]
            },
            { 
                id: 19, 
                title: "Nikon Z6 III", 
                category: "Cámaras", 
                price: 2499.00, 
                tag: "NUEVO", 
                stock: 15,
                img: "https://grupo2.miuni.kids/wp/wp-content/uploads/2026/07/Nikon_Z6III.png",
                description: "Primer sensor parcialmente apilado del mercado, ofreciendo un visor ultra brillante y enfoque instantáneo.",
                specs: ["Sensor parcialmente apilado de 24.5 MP", "Video interno RAW de 6K", "Visor HDR ultra brillante de 4000 nits"]
            },
            { 
                id: 20, 
                title: "Nikon Z8", 
                category: "Cámaras", 
                price: 3799.00, 
                tag: "POPULAR", 
                stock: 12,
                img: "https://grupo2.miuni.kids/wp/wp-content/uploads/2026/07/Nikon_Z8.png",
                description: "La cámara híbrida profesional definitiva del sistema Z. Sin obturador mecánico para ráfagas silenciosas.",
                specs: ["Sensor apilado de 45.7 megapíxeles", "Video interno 8.3K N-RAW a 60p", "Detección inteligente de 9 sujetos en escena"]
            },
            { 
                id: 21, 
                title: "Fujifilm X-T5", 
                category: "Cámaras", 
                price: 1699.00, 
                tag: "POPULAR", 
                stock: 14,
                img: "https://grupo2.miuni.kids/wp/wp-content/uploads/2026/07/Fujifilm_XT5.png",
                description: "Cámara centrada en la fotografía pura con un imponente sensor de 40.2 megapíxeles y controles mecánicos de antaño.",
                specs: ["Sensor X-Trans CMOS 5 HR de 40.2 MP", "Simulaciones de película analógica", "Pantalla inclinable en tres direcciones"]
            },
            { 
                id: 22, 
                title: "Fujifilm X-H2", 
                category: "Cámaras", 
                price: 1999.00, 
                tag: "", 
                stock: 10,
                img: "https://grupo2.miuni.kids/wp/wp-content/uploads/2026/07/Fujifilm_XH2.png",
                description: "El buque insignia híbrido de Fujifilm optimizado para flujos de trabajo de alta resolución y video profesional.",
                specs: ["Video nativo interno en 8K a 30fps", "Soporte ProRes integrado", "Sensor APS-C de 40 megapíxeles"]
            },

            // LENTES - SONY
            { 
                id: 23, 
                title: "Sony E 11mm f/1.8", 
                category: "Lentes", 
                price: 499.00, 
                tag: "POPULAR", 
                stock: 18,
                img: "https://grupo2.miuni.kids/wp/wp-content/uploads/2026/07/Sony_11mm_f1_8.png",
                description: "El rey del vlogging. Un lente ultra gran angular, sumamente ligero y con una apertura muy luminosa.",
                specs: ["Para sensores APS-C de Sony", "Apertura máxima brillante f/1.8", "Doble motor lineal para enfoque silencioso"]
            },
            { 
                id: 24, 
                title: "Sony E 35mm f/1.8 OSS", 
                category: "Lentes", 
                price: 349.00, 
                tag: "", 
                stock: 13,
                img: "https://grupo2.miuni.kids/wp/wp-content/uploads/2026/07/Sony_35mm_1_8.png",
                description: "El equivalente al lente normal para viajar. Compacto, nítido y dotado de estabilizador de imagen integrado.",
                specs: ["Estabilización óptica de imagen OSS", "Ideal para fotografía de viajes y retratos", "Distancia focal equivalente de 52.5mm"]
            },
            { 
                id: 25, 
                title: "Sony FE 24-105mm f/4 G OSS", 
                category: "Lentes", 
                price: 1099.00, 
                tag: "", 
                stock: 15,
                img: "https://grupo2.miuni.kids/wp/wp-content/uploads/2026/07/Sony_24-105mm_4.png",
                description: "El lente todo-terreno definitivo para la Sony a7 IV. Rango focal versátil que cubre desde paisajes a retratos.",
                specs: ["Línea profesional G de Sony", "Apertura constante f/4", "Estabilización óptica Optical SteadyShot"]
            },
            { 
                id: 26, 
                title: "Sony FE 24-70mm f/2.8 GM II", 
                category: "Lentes", 
                price: 2299.00, 
                tag: "POPULAR", 
                stock: 13,
                img: "https://grupo2.miuni.kids/wp/wp-content/uploads/2026/07/Sony_24-70mm_2.8.png",
                description: "El lente profesional indispensable de eventos y bodas. Nitidez extrema, cuerpo liviano y enfoque instantáneo.",
                specs: ["Gama insignia G Master II", "Enfoque de motor XD lineal cuádruple", "Anillo de apertura física desactivable"]
            },
            { 
                id: 27, 
                title: "Sony FE 70-200mm f/2.8 GM OSS II", 
                category: "Lentes", 
                price: 2799.00, 
                tag: "", 
                stock: 12,
                img: "https://grupo2.miuni.kids/wp/wp-content/uploads/2026/07/Sony_70-200mm_2.8.png",
                description: "El teleobjetivo estándar para prensa, deportes de acción y retratos comerciales premium de alta calidad.",
                specs: ["Distancia focal de 70-200mm f/2.8", "Doble grupo de enfoque flotante lineal XD", "Reducción dramática de peso"]
            },

            // LENTES - CANON
            { 
                id: 28, 
                title: "Canon RF 50mm f/1.8 STM", 
                category: "Lentes", 
                price: 195.00, 
                tag: "NUEVO", 
                stock: 24,
                img: "https://grupo2.miuni.kids/wp/wp-content/uploads/2026/07/Canon_50mm.webp",
                description: "El lente más vendido de Canon por ser el más accesible y ofrecer retratos espectaculares por una fracción del costo habitual.",
                specs: ["Montura nativa Canon RF", "Motor de enfoque paso a paso STM", "Anillo de control configurable"]
            },
            { 
                id: 29, 
                title: "Canon RF-S 18-45mm f/4.5-6.3 IS STM", 
                category: "Lentes", 
                price: 149.00, 
                tag: "SALE", 
                stock: 10,
                img: "https://grupo2.miuni.kids/wp/wp-content/uploads/2026/07/Canon_18-45mm.png",
                description: "El lente zoom básico de inicio para mantener el peso y el presupuesto de tu equipo al mínimo absoluto.",
                specs: ["Diseño ultra compacto retráctil", "Estabilizador óptico de 4 pasos integrado", "Ideal para viajes e iniciación"]
            },
            { 
                id: 30, 
                title: "Canon RF 35mm f/1.8 Macro IS STM", 
                category: "Lentes", 
                price: 479.00, 
                tag: "", 
                stock: 16,
                img: "https://grupo2.miuni.kids/wp/wp-content/uploads/2026/07/Canon_35mm.png",
                description: "Excelente para fotografía callejera, video vloggers y macrofotografía de producto.",
                specs: ["Ampliación macro real de 1:2", "Estabilización de imagen híbrida", "Excelente rendimiento en baja luz"]
            },
            { 
                id: 31, 
                title: "Canon RF 24-105mm f/4 L IS USM", 
                category: "Lentes", 
                price: 1299.00, 
                tag: "POPULAR", 
                stock: 15,
                img: "https://grupo2.miuni.kids/wp/wp-content/uploads/2026/07/Canon_24-105mm.png",
                description: "La puerta de entrada a la mítica serie L profesional con anillo rojo. Fiable en cualquier situación.",
                specs: ["Perteneciente a la línea profesional L", "Apertura constante f/4", "Sellado avanzado contra la intemperie"]
            },
            { 
                id: 32, 
                title: "Canon RF 24-70mm f/2.8 L IS USM", 
                category: "Lentes", 
                price: 2399.00, 
                tag: "", 
                stock: 13,
                img: "https://grupo2.miuni.kids/wp/wp-content/uploads/2026/07/Canon_24-70mm.png",
                description: "El caballo de batalla indispensable para el fotógrafo comercial serio que trabaja en prensa y bodas.",
                specs: ["Apertura máxima de f/2.8", "Estabilizador de imagen de hasta 5 pasos", "Revestimiento de flúor contra suciedad"]
            },
            { 
                id: 33, 
                title: "Canon RF 85mm f/1.2 L USM", 
                category: "Lentes", 
                price: 2799.00, 
                tag: "POPULAR", 
                stock: 12,
                img: "https://grupo2.miuni.kids/wp/wp-content/uploads/2026/07/Canon_85mm.png",
                description: "El rey indiscutible de los retratos a nivel mundial, ofreciendo una nitidez brutal y un desenfoque cremoso.",
                specs: ["Apertura récord de f/1.2", "Óptica de espectro azul (BR)", "Calidad soberbia desde máxima apertura"]
            },

            // LENTES - NIKON
            { 
                id: 34, 
                title: "Nikon AF-S 50mm f/1.8G (Montura F)", 
                category: "Lentes", 
                price: 219.00, 
                tag: "", 
                stock: 19,
                img: "https://grupo2.miuni.kids/wp/wp-content/uploads/2026/07/Nikon_50mm.png",
                description: "El legendario lente de retratos que todo estudiante con cámara réflex DSLR busca para dar el salto de calidad.",
                specs: ["Para cámaras Réflex montura F", "Óptica nítida y ligera de 50mm", "Perfecto para retratos de personas"]
            },
            { 
                id: 35, 
                title: "Nikon Z DX 16-50mm f/3.5-6.3 VR", 
                category: "Lentes", 
                price: 299.00, 
                tag: "", 
                stock: 14,
                img: "https://grupo2.miuni.kids/wp/wp-content/uploads/2026/07/Nikon_16-50mm.png",
                description: "Lente zoom tipo pancake extremadamente plano, ideal para llevar tu cámara Z50 II a cualquier viaje.",
                specs: ["Lente estilo pancake ultra plano", "Estabilización por reducción de vibración (VR)", "Diseño retráctil muy ligero"]
            },
            { 
                id: 36, 
                title: "Nikon Z 40mm f/2", 
                category: "Lentes", 
                price: 299.00, 
                tag: "POPULAR", 
                stock: 17,
                img: "https://grupo2.miuni.kids/wp/wp-content/uploads/2026/07/Nikon_40mm.png",
                description: "Lente compacto con estética retro y bokeh sumamente artístico. Gran definición en un tamaño de bolsillo.",
                specs: ["Apertura rápida f/2", "Diseño compacto resistente a salpicaduras", "Perfecto para fotografía urbana"]
            },
            { 
                id: 37, 
                title: "Nikon Z 24-70mm f/4 S", 
                category: "Lentes", 
                price: 999.00, 
                tag: "", 
                stock: 12,
                img: "https://grupo2.miuni.kids/wp/wp-content/uploads/2026/07/Nikon_24-70mm.png",
                description: "Lente perteneciente a la 'Línea S' premium de Nikon. Ofrece una nitidez increíble en un cuerpo compacto.",
                specs: ["Perteneciente a la prestigiosa Línea S", "Apertura constante f/4", "Revestimiento de nanocristal"]
            },
            { 
                id: 38, 
                title: "Nikon Z 24-120mm f/4 S", 
                category: "Lentes", 
                price: 1099.00, 
                tag: "POPULAR", 
                stock: 16,
                img: "https://grupo2.miuni.kids/wp/wp-content/uploads/2026/07/Nikon_24-120mm.png",
                description: "El lente favorito de fotógrafos de eventos y paisajistas por su versatilidad inigualable y nitidez excepcional.",
                specs: ["Rango focal ampliado versátil", "Relación de reproducción de 0.39x", "Enfoque rápido por motores duales"]
            },
            { 
                id: 39, 
                title: "Nikon Z 70-200mm f/2.8 VR S", 
                category: "Lentes", 
                price: 2599.00, 
                tag: "POPULAR", 
                stock: 11,
                img: "https://grupo2.miuni.kids/wp/wp-content/uploads/2026/07/Nikkon_70-200mm.png",
                description: "El teleobjetivo profesional imprescindible de Nikon para trabajar sin esfuerzo en condiciones adversas de iluminación.",
                specs: ["Apertura constante f/2.8", "Panel de información OLED integrado", "Estabilización VR de alto rendimiento"]
            },

            // LENTES - FUJIFILM
            { 
                id: 40, 
                title: "Fujifilm XF 27mm f/2.8 R WR", 
                category: "Lentes", 
                price: 399.00, 
                tag: "", 
                stock: 15,
                img: "https://grupo2.miuni.kids/wp/wp-content/uploads/2026/07/Fujifilm_27mm.png",
                description: "Lente ultraplano tipo pancake. Convierte a cualquier cámara Fuji en una compacta de bolsillo para fotografía callejera.",
                specs: ["Grosor de solo 23 mm", "Anillo de control de apertura física", "Sellado contra el clima"]
            },
            { 
                id: 41, 
                title: "Fujifilm XF 35mm f/2 R WR", 
                category: "Lentes", 
                price: 399.00, 
                tag: "", 
                stock: 10,
                img: "https://grupo2.miuni.kids/wp/wp-content/uploads/2026/07/Fujifilm_35mm.png",
                description: "Lente de distancia normal muy nítido y rápido, sellado para soportar climas adversos en exteriores.",
                specs: ["Equivalente a 53mm en Full Frame", "Enfoque ultra veloz en 0.08s", "Diseño compacto y elegante de metal"]
            },
            { 
                id: 42, 
                title: "Fujifilm XF 16-80mm f/4 R OIS WR", 
                category: "Lentes", 
                price: 799.00, 
                tag: "", 
                stock: 14,
                img: "https://grupo2.miuni.kids/wp/wp-content/uploads/2026/07/Fujifilm_16-80mm.png",
                description: "El todo-terreno para viajes por excelencia en Fuji. Rango muy versátil acompañado de gran estabilización.",
                specs: ["Estabilización óptica de 6 pasos", "Rango zoom equivalente a 24-122mm", "Apertura constante f/4"]
            },
            { 
                id: 43, 
                title: "Fujifilm XF 16-55mm f/2.8 R LM WR II", 
                category: "Lentes", 
                price: 1199.00, 
                tag: "NUEVO", 
                stock: 13,
                img: "https://grupo2.miuni.kids/wp/wp-content/uploads/2026/07/Fujifilm_16-55mm.png",
                description: "La nueva generación del zoom estándar profesional de Fuji. Mucho más ligero y optimizado para sensores de 40 megapíxeles.",
                specs: ["Más ligero y compacto que la V1", "Apertura f/2.8 constante", "Motor lineal de enfoque silencioso"]
            },
            { 
                id: 44, 
                title: "Fujifilm XF 56mm f/1.2 R WR", 
                category: "Lentes", 
                price: 999.00, 
                tag: "POPULAR", 
                stock: 12,
                img: "https://grupo2.miuni.kids/wp/wp-content/uploads/2026/07/Fujifilm_56mm.png",
                description: "La óptica de retratos por excelencia en Fuji. Destaca por su desenfoque (bokeh) sumamente artístico y nitidez brutal.",
                specs: ["Apertura extrema f/1.2", "Fórmula óptica avanzada resistente al clima", "Desenfoque artístico de 11 láminas"]
            },

            // LENTES - SIGMA
            { 
                id: 45, 
                title: "Sigma 24-70mm f/2.8 DG DN Art", 
                category: "Lentes", 
                price: 1099.00, 
                tag: "POPULAR", 
                stock: 17,
                img: "https://grupo2.miuni.kids/wp/wp-content/uploads/2026/07/Sigma_24-70mm.png",
                description: "La alternativa profesional número uno a los lentes nativos. Nitidez extrema a un precio muy competitivo.",
                specs: ["Línea prestigiosa Sigma Art", "Disponible para Sony E y Nikon Z", "Apertura constante de f/2.8"]
            },
            { 
                id: 46, 
                title: "Sigma 18-50mm f/2.8 DC DN Contemporary", 
                category: "Lentes", 
                price: 549.00, 
                tag: "NUEVO", 
                stock: 15,
                img: "https://grupo2.miuni.kids/wp/wp-content/uploads/2026/07/Sigma_18-50mm.png",
                description: "Zoom f/2.8 ultra compacto y liviano, ideal para mejorar instantáneamente el lente básico de kit.",
                specs: ["Solo pesa 290 gramos", "Para sensores APS-C", "Distancia de enfoque de solo 12cm"]
            },
            { 
                id: 47, 
                title: "Sigma 16mm f/1.4 DC DN Contemporary", 
                category: "Lentes", 
                price: 399.00, 
                tag: "POPULAR", 
                stock: 18,
                img: "https://grupo2.miuni.kids/wp/wp-content/uploads/2026/07/Sigma_16mm.png",
                description: "El favorito de streamers, youtubers y vloggers por su imponente ángulo de visión y gran luminosidad.",
                specs: ["Apertura extrema f/1.4", "Ángulo amplio ideal para interiores", "Enfoque rápido para video"]
            },
            { 
                id: 48, 
                title: "Sigma 30mm f/1.4 DC DN Contemporary", 
                category: "Lentes", 
                price: 329.00, 
                tag: "", 
                stock: 13,
                img: "https://grupo2.miuni.kids/wp/wp-content/uploads/2026/07/Sigma_30mm.png",
                description: "Perspectiva clásica y natural similar a la del ojo humano. Excelente para fotografía de calle o documental.",
                specs: ["Apertura brillante f/1.4", "Cuerpo sumamente compacto", "Excelente bokeh y nitidez a f/1.4"]
            },
            { 
                id: 49, 
                title: "Sigma 56mm f/1.4 DC DN Contemporary", 
                category: "Lentes", 
                price: 429.00, 
                tag: "",
                stock: 14,
                img: "https://grupo2.miuni.kids/wp/wp-content/uploads/2026/07/Sigma_56mm.png",
                description: "Teleobjetivo corto para retratos, famoso por su nitidez sobresaliente y precio accesible en formato APS-C.",
                specs: ["Lente de retrato económico", "Apertura f/1.4 de alta luminosidad", "Compatible con AF de seguimiento ocular"]
            },

            // LENTES - TAMRON
            { 
                id: 50, 
                title: "Tamron 17-28mm f/2.8 Di III RXD", 
                category: "Lentes", 
                price: 799.00, 
                tag: "", 
                stock: 12,
                img: "https://grupo2.miuni.kids/wp/wp-content/uploads/2026/07/Tamron_28-70mm.png",
                description: "Gran angular ultra compacto con enfoque interno rápido, ideal para su uso en estabilizadores gimbal.",
                specs: ["Excelente para video en gimbals", "Apertura constante f/2.8", "Disponible para Sony E y Nikon Z"]
            },
            { 
                id: 51, 
                title: "Tamron 70-180mm f/2.8 Di III VC VXD G2", 
                category: "Lentes", 
                price: 1299.00, 
                tag: "NUEVO", 
                stock: 14,
                img: "https://grupo2.miuni.kids/wp/wp-content/uploads/2026/07/Tamron_70-180mm.png",
                description: "Teleobjetivo profesional estabilizado, un 40% más ligero y compacto que los lentes tradicionales 70-200mm.",
                specs: ["Estabilizador de imagen VC integrado", "Tamaño extremadamente recortado", "Nitidez soberbia de borde a borde"]
            },
            { 
                id: 52, 
                title: "Tamron 17-70mm f/2.8 Di III-A VC RXD", 
                category: "Lentes", 
                price: 699.00, 
                tag: "", 
                stock: 11,
                img: "https://grupo2.miuni.kids/wp/wp-content/uploads/2026/07/Tamron_17-70mm.png",
                description: "El zoom todoterreno de gran apertura con estabilizador para cámaras APS-C de Sony y Fujifilm.",
                specs: ["Estabilizador óptico VC integrado", "Apertura f/2.8 constante", "Rango focal ideal para video y bodas"]
            },

            // FLASHES
            { 
                id: 53, 
                title: "Godox TT350 (Mini Flash)", 
                category: "Flashes", 
                price: 85.00, 
                tag: "", 
                stock: 25,
                img: "https://grupo2.miuni.kids/wp/wp-content/uploads/2026/07/Godox_TT350.png",
                description: "Flash de mano de tamaño mini, sumamente ligero. Perfecto para cámaras sin espejo compactas y principiantes.",
                specs: ["Alimentado por 2 baterías AA", "Sincronización de alta velocidad HSS", "Soporte TTL completo para todas las marcas"]
            },
            { 
                id: 54, 
                title: "Flash Godox V860III TTL", 
                category: "Flashes", 
                price: 220.00, 
                tag: "SALE", 
                stock: 16,
                img: "https://grupo2.miuni.kids/wp/wp-content/uploads/2026/07/Godox_V860III.png",
                description: "El flash estándar para eventos profesionales y bodas. Batería de litio que recicla en tiempo récord de 1.5s.",
                specs: ["Batería de litio de gran autonomía", "Luz de modelado LED integrada", "Cambio rápido manual/TTL físico"]
            },
            { 
                id: 55, 
                title: "Godox V1 (Cabezal Redondo)", 
                category: "Flashes", 
                price: 259.00, 
                tag: "POPULAR", 
                stock: 10,
                img: "https://grupo2.miuni.kids/wp/wp-content/uploads/2026/07/Godox_V1S.png",
                description: "Flash premium con cabezal redondo magnético, que brinda un degradado de luz mucho más suave y natural.",
                specs: ["Cabezal de rebote redondo magnético", "Puerto para accesorios AK-R1", "Batería de litio de alta capacidad"]
            },
            { 
                id: 56, 
                title: "Godox AD200Pro (Flash de Bolsillo)", 
                category: "Flashes", 
                price: 349.00, 
                tag: "POPULAR", 
                stock: 14,
                img: "https://grupo2.miuni.kids/wp/wp-content/uploads/2026/07/Godox_AD200Pro.png",
                description: "Flash autónomo con el triple de potencia que uno convencional. El preferido para sesiones de retrato en exteriores.",
                specs: ["Potencia de 200W/s", "Cabezales intercambiables", "Batería de litio de larga duración"]
            },
            { 
                id: 57, 
                title: "Godox AD400Pro (Strobe de Estudio)", 
                category: "Flashes", 
                price: 649.00, 
                tag: "", 
                stock: 12,
                img: "https://grupo2.miuni.kids/wp/wp-content/uploads/2026/07/Godox_AD400Pro.png",
                description: "Flash de estudio portátil de alta potencia, ideal para fotografía de moda comercial y dominar la luz del sol.",
                specs: ["Potencia contundente de 400W/s", "Sincronización HSS hasta 1/8000s", "Sistema inalámbrico Godox X"]
            },
            { 
                id: 58, 
                title: "Disparador Godox X3 (Xnano)", 
                category: "Flashes", 
                price: 89.00, 
                tag: "NUEVO", 
                stock: 18,
                img: "https://grupo2.miuni.kids/wp/wp-content/uploads/2026/07/Godox_X3.png",
                description: "El transmisor de flash táctil más pequeño y avanzado. Pantalla OLED a color y batería recargable por USB-C.",
                specs: ["Pantalla táctil OLED de última generación", "Batería de litio recargable", "Diseño minimalista ultracompacto"]
            },

            // DRONES
            { 
                id: 59, 
                title: "DJI Mini 2 SE", 
                category: "Drones", 
                price: 339.00, 
                tag: "", 
                stock: 15,
                img: "https://grupo2.miuni.kids/wp/wp-content/uploads/2026/07/DJI_Mini2SE.png",
                description: "El dron de iniciación por excelencia. Pesa menos de 249 gramos, evitando complicaciones de registro en la mayoría de países.",
                specs: ["Peso de menos de 249g", "Grabación fluida a 2.7K", "Hasta 31 minutos de tiempo de vuelo"]
            },
            { 
                id: 60, 
                title: "DJI Mini 4 Pro Fly More", 
                category: "Drones", 
                price: 1100.00, 
                tag: "NUEVO", 
                stock: 12,
                img: "https://grupo2.miuni.kids/wp/wp-content/uploads/2026/07/DJI_Mini4ProFlyMore.png",
                description: "Dron profesional ultraportátil con detección omnidireccional de obstáculos y video vertical nativo para redes.",
                specs: ["Sensores de obstáculos omnidireccionales", "Grabación en 4K 60p HDR nativo vertical", "Vuelo extendido de hasta 34 min"]
            },
            { 
                id: 61, 
                title: "DJI Air 3S", 
                category: "Drones", 
                price: 1099.00, 
                tag: "NUEVO", 
                stock: 10,
                img: "https://grupo2.miuni.kids/wp/wp-content/uploads/2026/07/DJI_Air3S.png",
                description: "La herramienta perfecta para creadores de contenido avanzados. Doble cámara para retratos y paisajes espectaculares.",
                specs: ["Doble cámara (Angular 1\" + Teleobjetivo 3x)", "Transmisión de largo alcance", "Resistencia al viento de nivel 6"]
            },
            { 
                id: 62, 
                title: "DJI Mavic 3 Pro", 
                category: "Drones", 
                price: 2199.00, 
                tag: "POPULAR", 
                stock: 11,
                img: "https://grupo2.miuni.kids/wp/wp-content/uploads/2026/07/DJI_Mavic3Pro.png",
                description: "Dron cinematográfico profesional con imponente triple cámara firmada por Hasselblad. El estándar de la industria.",
                specs: ["Tres cámaras integradas (Hasselblad + Zoom)", "Soporte de video Apple ProRes", "Hasta 43 minutos de tiempo de vuelo"]
            },
            { 
                id: 63, 
                title: "DJI Avata 2 (FPV)", 
                category: "Drones", 
                price: 489.00, 
                tag: "NUEVO", 
                stock: 14,
                img: "https://grupo2.miuni.kids/wp/wp-content/uploads/2026/07/DJI_Avata2.png",
                description: "Dron cinematográfico estilo FPV (vista en primera persona). Manéjalo de forma inmersiva con gafas virtuales.",
                specs: ["Vuelo con Goggles 3 y Motion Controller", "Sensor de 1/1.3 pulgadas", "Protector de hélices integrado"]
            },

            // ACCESORIOS
            { 
                id: 64, 
                title: "Mochila Peak Design Everyday (20L)", 
                category: "Accesorios", 
                price: 259.00, 
                tag: "POPULAR", 
                stock: 16,
                img: "https://grupo2.miuni.kids/wp/wp-content/uploads/2026/07/Mochila_Peak_Design_Everyday.png",
                description: "La mochila premium definitiva para fotógrafos. Acceso lateral rápido y divisores internos configurables.",
                specs: ["Divisores FlexFold patentados", "Nailon impermeable ultrarresistente", "Fijación dedicada para trípodes"]
            },
            { 
                id: 65, 
                title: "Estuche Case Logic DCB-304", 
                category: "Accesorios", 
                price: 29.00, 
                tag: "", 
                stock: 22,
                img: "https://grupo2.miuni.kids/wp/wp-content/uploads/2026/07/Estuche_Case_Logic_DCB-304.png",
                description: "Práctico estuche compacto tipo bandolera para cámaras reflex o sin espejo pequeñas con su lente básico.",
                specs: ["Compartimento separado para accesorios", "Pared de separación acolchada", "Correa ajustable para hombro"]
            },
            { 
                id: 66, 
                title: "SanDisk Extreme Pro 128GB (UHS-I)", 
                category: "Accesorios", 
                price: 35.00, 
                tag: "POPULAR", 
                stock: 35,
                img: "https://grupo2.miuni.kids/wp/wp-content/uploads/2026/07/SanDisk_Extreme_Pro_128GB.png",
                description: "Tarjeta de gran velocidad para ráfagas continuas de fotos de acción y grabación de video 4K UHD sin cortes.",
                specs: ["Velocidad de hasta 170 MB/s", "Clase de velocidad de video V30 / UHS-I", "A prueba de agua y golpes"]
            },
            { 
                id: 67, 
                title: "Sony Tough SF-G Series 128GB (UHS-II)", 
                category: "Accesorios", 
                price: 199.00, 
                tag: "NUEVO", 
                stock: 20,
                img: "https://grupo2.miuni.kids/wp/wp-content/uploads/2026/07/Sony_Tough_SF-G_Series_128GB.png",
                description: "La tarjeta SD profesional más rápida y resistente del mundo. Sumergible, a prueba de polvo y dobleces.",
                specs: ["Velocidad de escritura de 299 MB/s", "Estructura monolítica sumamente rígida", "Soporta caídas de hasta 5 metros"]
            },
            { 
                id: 68, 
                title: "Kit de Limpieza VSGO Black Snipe", 
                category: "Accesorios", 
                price: 25.00, 
                tag: "", 
                stock: 10,
                img: "https://grupo2.miuni.kids/wp/wp-content/uploads/2026/07/Kit_Limpieza_VSGO_Black_Snipe.png",
                description: "Set esencial para mantener tus sensores y cristales totalmente libres de polvo sin riesgo de arañazos.",
                specs: ["Soplador de aire con filtro integrado", "Líquido especializado de secado rápido", "Paños de microfibra envasados al vacío"]
            },
            { 
                id: 69, 
                title: "Adaptador Sigma MC-11 (EF a Sony E)", 
                category: "Accesorios", 
                price: 249.00, 
                tag: "", 
                stock: 3,
                img: "https://grupo2.miuni.kids/wp/wp-content/uploads/2026/07/Adaptador_Sigma_MC-11.png",
                description: "Utiliza tus lentes reflex de montura Canon EF en tu cámara mirrorless de Sony manteniendo un AF excelente.",
                specs: ["Conversión electrónica integrada", "Mantiene estabilización e info EXIF", "Compatible con AF ocular nativo"]
            },
            { 
                id: 70, 
                title: "Adaptador Canon Mount Adapter EF-EOS R", 
                category: "Accesorios", 
                price: 99.00, 
                tag: "POPULAR", 
                stock: 0,
                img: "https://grupo2.miuni.kids/wp/wp-content/uploads/2026/07/Adaptador_Canon_Mount_Adapter.png",
                description: "Adaptador oficial para acoplar la enorme y económica gama de lentes reflex EF en los nuevos cuerpos EOS R sin pérdida.",
                specs: ["Adaptador oficial desarrollado por Canon", "Sellado total contra agua y polvo", "Cero latencia de comunicación o AF"]
            },
            { 
                id: 71, 
                title: "Trípode Manfrotto Element MII", 
                category: "Accesorios", 
                price: 149.00, 
                tag: "", 
                stock: 5,
                img: "https://grupo2.miuni.kids/wp/wp-content/uploads/2026/07/Tripode_Manfrotto_Element_MII.png",
                description: "Trípode de aluminio ultra ligero y compacto, la elección más cómoda para fotógrafos excursionistas y de paisajes.",
                specs: ["Soporta una carga útil de hasta 8 kg", "Construido en aluminio ligero", "Cabezal de bola ajustable incorporado"]
            },
            { 
                id: 72, 
                title: "Trípode Benro Tortoise Carbon Fiber", 
                category: "Accesorios", 
                price: 349.00, 
                tag: "POPULAR", 
                stock: 3,
                img: "https://grupo2.miuni.kids/wp/wp-content/uploads/2026/07/Tripode_Benro_Tortoise_Carbon_Fiber.png",
                description: "Trípode profesional de fibra de carbono sin columna central para obtener la máxima estabilidad en climas de ráfagas fuertes.",
                specs: ["Fibra de carbono de grado aeronáutico", "Sin columna central para tomas a ras", "Roscas para accesorios integradas"]
            },
            { 
                id: 73, 
                title: "Batería Newmowa NP-FZ100 (Sony)", 
                category: "Accesorios", 
                price: 29.00, 
                tag: "SALE", 
                stock: 14,
                img: "https://grupo2.miuni.kids/wp/wp-content/uploads/2026/07/Bateria_Newmowa_NP-FZ100.png",
                description: "Batería de repuesto económica y segura de alta calidad para modelos populares de cámaras Sony Alpha.",
                specs: ["Capacidad de 2280 mAh sin efecto memoria", "Muestra nivel de porcentaje real", "Celdas seguras contra cortocircuitos"]
            },
            { 
                id: 74, 
                title: "Filtro Protector UV Hoya Fusion", 
                category: "Accesorios", 
                price: 59.00, 
                tag: "", 
                stock: 10,
                img: "https://grupo2.miuni.kids/wp/wp-content/uploads/2026/07/Filtro_Protector_UV_Hoya_Fusion.png",
                description: "Cristal premium ultra transparente que protege tu lente contra golpes cotidianos, polvo y arañazos sin desviar los colores.",
                specs: ["Tratamiento antiestático de Hoya", "Fácil de limpiar contra grasa y agua", "Perfil de aluminio ultra delgado"]
            },
            { 
                id: 75, 
                title: "Filtro Variable ND K&F Concept Nano-X", 
                category: "Accesorios", 
                price: 79.00, 
                tag: "POPULAR", 
                stock: 6,
                img: "https://grupo2.miuni.kids/wp/wp-content/uploads/2026/07/Filtro_Variable_ND_KF_Concept_Nano-X.png",
                description: "Filtro de densidad neutra variable para realizar exposiciones largas bajo luz solar intensa o conseguir un look cinematográfico.",
                specs: ["Densidad ajustable ND2 a ND32", "Cristal óptico japonés multicapa", "Evita la cruz en 'X' típica"]
            }
        ];