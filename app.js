// Scribe & Spoon - Application Logic

// Initial Default Recipes (for first load or reset)
const DEFAULT_RECIPES = [
  {
    "id": "vegetable-toast",
    "title": "Vegetable Toast",
    "titleMarathi": "व्हेजीटेबल टोस्ट",
    "author": "Sonali Divekar",
    "category": "Appetizers",
    "yield": "32 pieces",
    "prepTime": "25 mins",
    "cookTime": "20 mins",
    "totalTime": "45 mins",
    "description": "A crisp, savory, and popular Indian tea-time snack featuring a spiced, mashed vegetable mixture pressed onto bread slices, coated with arrowroot for crunch, and deep-fried to golden perfection.",
    "ingredients": [
      { "quantity": "16", "unit": "slices", "name": "White or Brown Bread", "nameMarathi": "ब्रेड", "notes": "Cut vertically into halves (to make 32 pieces)" },
      { "quantity": "100", "unit": "g", "name": "French Beans", "nameMarathi": "फरसबी", "notes": "Finely chopped (approx. 1 cup)" },
      { "quantity": "100", "unit": "g", "name": "Carrots", "nameMarathi": "गाजर", "notes": "Finely chopped into tiny square pieces" },
      { "quantity": "2", "unit": "medium", "name": "Onions", "nameMarathi": "कांदे", "notes": "Finely chopped" },
      { "quantity": "200", "unit": "g", "name": "Potato", "nameMarathi": "बटाटा", "notes": "1 large potato, boiled and mashed" },
      { "quantity": "6-8", "unit": "cloves", "name": "Garlic", "nameMarathi": "लसूण पाकळ्या", "notes": "4 large flakes" },
      { "quantity": "1", "unit": "inch", "name": "Ginger", "nameMarathi": "आले", "notes": "Peeled" },
      { "quantity": "8-10", "unit": "pieces", "name": "Green Chilies", "nameMarathi": "हिरव्या मिरच्या", "notes": "Adjust to heat preference" },
      { "quantity": "1", "unit": "cup", "name": "Coriander Leaves", "nameMarathi": "कोथिंबीर", "notes": "Finely chopped" },
      { "quantity": "1", "unit": "tbsp", "name": "Cooking Oil", "nameMarathi": "तेल", "notes": "For sautéing the masala" },
      { "quantity": "1", "unit": "tsp", "name": "Salt", "nameMarathi": "मीठ", "notes": "Or to taste" },
      { "quantity": "1", "unit": "tsp", "name": "Sugar", "nameMarathi": "साखर", "notes": "Balancing flavor" },
      { "quantity": "5", "unit": "tsp", "name": "Arrowroot Powder", "nameMarathi": "आरारोट", "notes": "Used as a binder and crisping agent" },
      { "quantity": "", "unit": "", "name": "Cooking Oil", "nameMarathi": "तेल", "notes": "For deep frying" }
    ],
    "instructions": [
      { "step": 1, "text": "Grind the garlic cloves, ginger, and green chilies together into a coarse paste.", "textMarathi": "लसूण पाकळ्या, आले आणि हिरव्या मिरच्या एकत्र करून जाडसर ग्राइंड (पेस्ट) करून घेणे." },
      { "step": 2, "text": "Heat 1 tablespoon of oil in a pan. Add the coarsely ground ginger-garlic-chili paste and sauté for about 2 minutes until aromatic.", "textMarathi": "१ स्पून तेल गरम करणे त्यावर आले लसूण मिरची पेस्ट २ मि. फ्राय करणे." },
      { "step": 3, "text": "Add the finely chopped onions, french beans, carrots, salt, and sugar to the pan. Sauté and cook the vegetables well on medium heat until the mixture dries completely and has no remaining moisture.", "textMarathi": "त्यावर कांदा घालणे, फरसबी, गाजर, मीठ, साखर घालून चांगले फ्राय करून सुकवून घेणे." },
      { "step": 4, "text": "Remove the cooked vegetables from heat and allow them to cool down to room temperature.", "textMarathi": "भाजी गॅसवरून उतरवून थंड होऊ देणे." },
      { "step": 5, "text": "Once cooled, add the mashed potatoes, finely chopped coriander leaves, and 5 teaspoons of arrowroot powder. Mix everything thoroughly to form a cohesive binding mixture.", "textMarathi": "थंड झाल्यावर त्यात स्मॅश केलेले बटाटे, कोथिंबीर व आरारोट घालून चांगले मिक्स करणे." },
      { "step": 6, "text": "Divide the prepared vegetable mixture into 32 equal portions.", "textMarathi": "त्या भाजीचे ३२ समान भाग करणे." },
      { "step": 7, "text": "Take the bread slices (16 slices cut vertically into halves to make 32 pieces). Take one portion of the vegetable mixture and press it evenly and firmly onto one side of a bread slice. Repeat for all 32 portions.", "textMarathi": "१ भाग एका ब्रेडच्या स्लाइस वर प्रेस करणे. असे सर्व ३२ भाग तयार करून घेणे." },
      { "step": 8, "text": "Heat oil in a deep frying pan. Carefully slide the prepared bread slices into the hot oil. CRITICAL: The side with the pressed vegetable mixture must face downwards when dropping it into the oil.", "textMarathi": "डीप फ्राय करण्यासाठी तेल गरम करून त्यात ब्रेड तळणे. तळताना (भाजी प्रेस केलेली बाजू खाली असावी) - हे महत्त्वाचे आहे." },
      { "step": 9, "text": "Deep fry until golden brown and crispy on both sides. Serve hot with tomato ketchup.", "textMarathi": "दोन्ही बाजूंनी सोनेरी व कुरकुरीत होईपर्यंत तळून घ्यावे. सर्व्ह करताना केचप बरोबर द्यावे." }
    ],
    "tips": [
      "Frying Technique (तळण्याची पद्धत): Always place the bread slice into the oil with the vegetable-coated side facing DOWN first. This seals the vegetables, prevents them from dispersing in the oil, and ensures a super crispy crust.",
      "Arrowroot Substitute: Cornstarch (corn flour) can be used if arrowroot powder is not available.",
      "Finely Chopped Vegetables: Ensure carrots and beans are cut extremely fine or pulsed in a food processor so they integrate easily with the mashed potato binder."
    ]
  },
  {
    "id": "spiced-masala-chai",
    "title": "Spiced Masala Chai",
    "titleMarathi": "मसाला चहा",
    "author": "Classic Indian",
    "category": "Beverages",
    "yield": "2 cups",
    "prepTime": "5 mins",
    "cookTime": "10 mins",
    "totalTime": "15 mins",
    "description": "The quintessential Indian tea, brewed with black tea leaves, milk, sugar, and a blend of aromatic spices like ginger, cardamom, and cloves.",
    "ingredients": [
      { "quantity": "1.5", "unit": "cups", "name": "Water", "nameMarathi": "पाणी", "notes": "" },
      { "quantity": "1", "unit": "cup", "name": "Milk", "nameMarathi": "दूध", "notes": "Whole milk preferred" },
      { "quantity": "2", "unit": "tsp", "name": "Black Tea Leaves", "nameMarathi": "चहाची पावडर", "notes": "Assam tea works best" },
      { "quantity": "2", "unit": "tsp", "name": "Sugar", "nameMarathi": "साखर", "notes": "Or to taste" },
      { "quantity": "1", "unit": "inch", "name": "Fresh Ginger", "nameMarathi": "आले", "notes": "Crushed" },
      { "quantity": "3-4", "unit": "pods", "name": "Green Cardamom", "nameMarathi": "वेलची", "notes": "Crushed" },
      { "quantity": "2", "unit": "pieces", "name": "Cloves", "nameMarathi": "लवंग", "notes": "Optional" },
      { "quantity": "1", "unit": "small piece", "name": "Cinnamon", "nameMarathi": "दालचिनी", "notes": "Optional" }
    ],
    "instructions": [
      { "step": 1, "text": "In a saucepan, bring the water to a boil. Add the crushed ginger, cardamom, cloves, and cinnamon. Boil for 2-3 minutes to infuse spices.", "textMarathi": "एक भांड्यात पाणी उकळायला ठेवावे. त्यात आले, वेलची, लवंग आणि दालचिनी घालून २-३ मिनिटे उकळू द्यावे." },
      { "step": 2, "text": "Add the black tea leaves and sugar. Simmer for 1-2 minutes until the tea releases a deep color.", "textMarathi": "चहा पावडर आणि साखर घालावी. चहाचा रंग गडद होईपर्यंत १-२ मिनिटे उकळू द्यावे." },
      { "step": 3, "text": "Pour in the milk. Bring the mixture to a rolling boil, letting it bubble up twice, then lower the heat and simmer for another 2 minutes.", "textMarathi": "दूध घालावे. चहाला चांगली उकळी येऊ द्यावी, नंतर गॅस बारीक करून आणखी २ मिनिटे उकळू द्यावे." },
      { "step": 4, "text": "Strain the piping hot tea through a sieve directly into cups. Serve immediately with snacks.", "textMarathi": "चहा गाळणीने गाळून घ्यावा व गरम गरम सर्व्ह करावा." }
    ],
    "tips": [
      "Aeration: Pouring the hot tea from a height between two cups (pulling tea) creates a lovely froth and enhances the flavor.",
      "Custom Masala: You can pre-grind dry spices (cardamom, cinnamon, black pepper, cloves, dried ginger) to make a ready-to-use tea masala powder."
    ]
  },
  {
    "id": "veg-kabab",
    "title": "Veg Kabab",
    "titleMarathi": "व्हेज कबाब",
    "author": "Sonali Divekar",
    "category": "Appetizers",
    "yield": "30-35 pieces",
    "prepTime": "20 mins",
    "cookTime": "20 mins",
    "totalTime": "40 mins",
    "description": "A flavorful and healthy Indian appetizer made with grated carrots, green peas, boiled potatoes, and fresh coriander, shaped into oblong patties, and deep-fried to a golden-crisp texture.",
    "ingredients": [
      { "quantity": "250", "unit": "g", "name": "Carrots", "nameMarathi": "गाजर", "notes": "Grated (approx. 1/2 pound)" },
      { "quantity": "250", "unit": "g", "name": "Potatoes", "nameMarathi": "बटाटे", "notes": "2 medium-sized, boiled and mashed" },
      { "quantity": "1", "unit": "cup", "name": "Green Peas", "nameMarathi": "हिरवे वाटाणे (ग्रीन पीस)", "notes": "" },
      { "quantity": "2", "unit": "medium", "name": "Onions", "nameMarathi": "कांदे", "notes": "Chopped" },
      { "quantity": "5-6", "unit": "pieces", "name": "Green Chilies", "nameMarathi": "हिरव्या मिरच्या", "notes": "Finely chopped" },
      { "quantity": "1", "unit": "tsp", "name": "Cooking Oil", "nameMarathi": "तेल", "notes": "For cooking the vegetables" },
      { "quantity": "1", "unit": "tsp", "name": "Salt", "nameMarathi": "मीठ", "notes": "Or to taste" },
      { "quantity": "3", "unit": "tbsp", "name": "Gram Flour (Besan)", "nameMarathi": "चणा पीठ", "notes": "Heaped tablespoons" },
      { "quantity": "1/2", "unit": "cup", "name": "Coriander Leaves", "nameMarathi": "कोथिंबीर", "notes": "Finely chopped" },
      { "quantity": "2", "unit": "tsp", "name": "Lemon Juice", "nameMarathi": "लिंबू रस", "notes": "" },
      { "quantity": "", "unit": "", "name": "Cooking Oil", "nameMarathi": "तेल", "notes": "For deep frying" }
    ],
    "instructions": [
      { "step": 1, "text": "Heat 1 teaspoon of oil in a pan. Add the chopped onion and green chilies, and sauté for 2 minutes.", "textMarathi": "१ स्पून तेल गरम करणे त्यावर कांदा मिरची २ मिनिट फ्राय करणे." },
      { "step": 2, "text": "Add the green peas and sauté for another 2 minutes.", "textMarathi": "त्यावर वाटाणा घालणे २ मि. फ्राय करणे." },
      { "step": 3, "text": "Add the grated carrots and stir cook on medium heat without covering the pan.", "textMarathi": "त्यावर किसलेले गाजर घालून झाकण न ठेवता स्टर करणे." },
      { "step": 4, "text": "Add 1 teaspoon of salt. Sauté until the mixture is completely dry, then remove from heat and let it cool.", "textMarathi": "मीठ घालणे संपूर्ण सुकले की खाली उतरून थंड करणे." },
      { "step": 5, "text": "Once cooled, add the mashed potatoes, gram flour (besan), chopped coriander leaves, and lemon juice. Mix all ingredients thoroughly until evenly combined.", "textMarathi": "त्यात स्मॅश केलेले बटाटे चणा पिठ कोथंबीर लिंबू रस घालून सारखे करणे." },
      { "step": 6, "text": "Shape the mixture into oblong kababs and deep fry in hot oil until golden brown.", "textMarathi": "लांबट आकाराचे कबाब करून डीप फ्राय तळणे." },
      { "step": 7, "text": "Serve hot with mint (pudina) chutney.", "textMarathi": "सर्व्ह करताना पुदीना चटणी." }
    ],
    "tips": [
      "Moisture Control (सुकवणे): Make sure the carrot and pea mixture is dried completely when cooking; any residual moisture will make it difficult to bind the kababs.",
      "Gram Flour Quantity: If the mixture feels too wet to shape after adding mashed potatoes, add an extra tablespoon of gram flour as a binder."
    ]
  },
  {
    "id": "kheema-cutlet",
    "title": "Kheema Cutlet",
    "titleMarathi": "खीमा कटलेट",
    "author": "Family Recipe",
    "category": "Appetizers",
    "yield": "12-15 cutlets",
    "prepTime": "2 hrs (soaking)",
    "cookTime": "25 mins",
    "totalTime": "2 hrs 25 mins",
    "description": "A rich, flavorful Shami-style minced goat meat cutlet cooked with chana dal and whole spices, ground, and mixed with fresh herbs and egg, then coated in breadcrumbs and deep-fried to crisp perfection.",
    "ingredients": [
      { "quantity": "500", "unit": "g", "name": "Mince (Kheema)", "nameMarathi": "खीमा", "notes": "Goat meat, washed thoroughly" },
      { "quantity": "1", "unit": "cup", "name": "Chana Dal", "nameMarathi": "चणा डाळ", "notes": "Soaked for 2 hours" },
      { "quantity": "1", "unit": "inch", "name": "Ginger", "nameMarathi": "आले", "notes": "" },
      { "quantity": "7-8", "unit": "cloves", "name": "Garlic", "nameMarathi": "लसूण", "notes": "" },
      { "quantity": "5", "unit": "pieces", "name": "Dry Red Chilies", "nameMarathi": "सुक्या लाल मिरच्या", "notes": "" },
      { "quantity": "1", "unit": "tsp", "name": "Cumin Seeds (Jeera)", "nameMarathi": "जीरे", "notes": "" },
      { "quantity": "2", "unit": "pieces", "name": "Green Cardamom", "nameMarathi": "वेलची", "notes": "" },
      { "quantity": "1", "unit": "inch", "name": "Cinnamon", "nameMarathi": "दालचिनी", "notes": "" },
      { "quantity": "5", "unit": "pieces", "name": "Cloves", "nameMarathi": "लवंग", "notes": "" },
      { "quantity": "6-8", "unit": "pieces", "name": "Whole Black Peppercorns", "nameMarathi": "काळी मिरी", "notes": "" },
      { "quantity": "1.5", "unit": "cups", "name": "Water", "nameMarathi": "पाणी", "notes": "For boiling the mixture" },
      { "quantity": "1", "unit": "medium", "name": "Onion", "nameMarathi": "कांदा", "notes": "Finely chopped" },
      { "quantity": "1/2", "unit": "cup", "name": "Coriander Leaves", "nameMarathi": "कोथिंबीर", "notes": "Fresh, finely chopped" },
      { "quantity": "1/4", "unit": "cup", "name": "Mint Leaves", "nameMarathi": "पुदीना", "notes": "Fresh, finely chopped" },
      { "quantity": "4-5", "unit": "pieces", "name": "Green Chilies", "nameMarathi": "हिरव्या मिरच्या", "notes": "Finely chopped" },
      { "quantity": "1", "unit": "tsp", "name": "Salt", "nameMarathi": "मीठ", "notes": "Or to taste" },
      { "quantity": "1", "unit": "piece", "name": "Egg", "nameMarathi": "अंडे", "notes": "For binding (see substitute tip for eggless)" },
      { "quantity": "", "unit": "", "name": "Breadcrumbs", "nameMarathi": "ब्रेड क्रम्ब्स", "notes": "For coating" },
      { "quantity": "", "unit": "", "name": "Cooking Oil", "nameMarathi": "तेल", "notes": "For deep frying" }
    ],
    "instructions": [
      { "step": 1, "text": "Thoroughly wash the ground meat (kheema). In a pot, combine the meat, soaked chana dal, ginger, garlic, dry red chilies, cumin seeds, cardamom, cinnamon, cloves, black peppercorns, and 1.5 cups of water.", "textMarathi": "खीमा स्वच्छ धुवून घेणे. चणा डाळ २ तास भिजवून घेणे. आले, लसूण, सुक्या लाल मिरच्या, जीरे, वेलची, दालचिनी, लवंग, काळी मिरी आणि १.५ कप पाणी घालून सर्व एकत्र शिजवून घेणे." },
      { "step": 2, "text": "Cook the mixture until the meat is tender and the water is completely dried out.", "textMarathi": "मिश्रण शिजवून कोरडे (dry) करणे." },
      { "step": 3, "text": "Once cooled, grind the mixture in a food processor. Note: Do not grind it too fine; the dal should be ground but still retain a bit of texture.", "textMarathi": "मिश्रण थंड झाल्यावर फूड प्रोसेसरमधून वाटून घेणे - जास्त बारीक करू नये (डाळ व्यवस्थित वाटली गेली पाहिजे पण एकदम पेस्ट करू नये)." },
      { "step": 4, "text": "Add the finely chopped onion, coriander, mint leaves, green chilies, salt, and the egg. Mix everything together very well.", "textMarathi": "त्यात बारीक चिरलेला कांदा, कोथिंबीर, पुदीना, हिरव्या मिरच्या, मीठ आणि अंड घालून चांगले एकत्र मळून घेणे." },
      { "step": 5, "text": "Shape the mixture into round or oblong patties (cutlets).", "textMarathi": "मिश्रणाचे गोल किंवा लांबट आकाराचे कटलेट (पॅटीज) बनवून घेणे." },
      { "step": 6, "text": "Dip each cutlet in dry breadcrumbs to coat it evenly, then deep fry in hot oil until golden brown and crispy.", "textMarathi": "कटलेट ब्रेड क्रम्ब्स मध्ये घोळवून गरम तेलात डीप फ्राय (तळून) घेणे." }
    ],
    "tips": [
      "Egg Substitute: If you don't want to use egg for binding, replace it with 1 slice of bread (soaked in water and squeezed dry) plus 2 tablespoons of cornstarch (corn flour).",
      "Herb Freshness: Finely chopping fresh mint and coriander right before adding preserves their aromatic oils, giving a vibrant flavor contrast to the spiced meat."
    ]
  },
  {
    "id": "malai-toast",
    "title": "Malai Toast",
    "titleMarathi": "मलाई टोस्ट",
    "author": "Family Recipe",
    "category": "Desserts",
    "yield": "20 pieces",
    "prepTime": "20 mins",
    "cookTime": "45 mins",
    "totalTime": "1 hr 5 mins (plus soaking)",
    "description": "A classic milk sweet where fresh paneer (chhena) is kneaded with flour, shaped, boiled in a cardamom, bay leaf, and cinnamon-spiced sugar syrup, and then filled with rich mawa cream.",
    "ingredients": [
      { "quantity": "1", "unit": "liter", "name": "Milk (for Paneer)", "nameMarathi": "दूध (पनीर बनवण्यासाठी)", "notes": "Yields fresh soft paneer" },
      { "quantity": "1/2", "unit": "tsp", "name": "Arrowroot Powder", "nameMarathi": "आरारोट", "notes": "" },
      { "quantity": "1/2", "unit": "tsp", "name": "All-Purpose Flour (Maida)", "nameMarathi": "मैदा", "notes": "" },
      { "quantity": "1", "unit": "pinch", "name": "Baking Powder", "nameMarathi": "बेकिंग पावडर", "notes": "" },
      { "quantity": "", "unit": "", "name": "Yellow or Pink Food Color", "nameMarathi": "पिवळा किंवा गुलाबी खायचा रंग", "notes": "A few drops" },
      { "quantity": "2.5", "unit": "cups", "name": "Sugar", "nameMarathi": "साखर", "notes": "Approx. 2.5 cups (वाटी)" },
      { "quantity": "10", "unit": "cups", "name": "Water", "nameMarathi": "पाणी", "notes": "For the sugar syrup" },
      { "quantity": "4-5", "unit": "pieces", "name": "Green Cardamoms", "nameMarathi": "वेलची", "notes": "Whole" },
      { "quantity": "3-4", "unit": "pieces", "name": "Bay Leaves (Tejpatta)", "nameMarathi": "तेजपत्ता", "notes": "" },
      { "quantity": "2", "unit": "pieces", "name": "Cloves", "nameMarathi": "लवंग", "notes": "" },
      { "quantity": "1", "unit": "small piece", "name": "Cinnamon", "nameMarathi": "दालचिनी", "notes": "" },
      { "quantity": "1", "unit": "cup", "name": "Rich Cream / Mawa Filling", "nameMarathi": "क्रीम / खवा सारण", "notes": "For stuffing" },
      { "quantity": "", "unit": "", "name": "Almonds and Pistachios", "nameMarathi": "बदाम पिस्ते", "notes": "Slivered, for garnishing" }
    ],
    "instructions": [
      { "step": 1, "text": "Prepare fresh paneer from 1 liter of milk and drain the whey. Add 1/2 teaspoon arrowroot, 1/2 teaspoon all-purpose flour, and a pinch of baking powder. Knead until extremely smooth. Add a few drops of yellow or pink food color and knead again to distribute the color evenly.", "textMarathi": "१ लीटर दुधाचे फ्रेश पनीर बनवून घेणे. त्यात १/२ टी स्पून आरारोट, १/२ स्पून मैदा आणि एक पिंच बेकींग पावडर घालून चांगले मळून स्मूथ करणे. नंतर पिवळा किंवा गुलाबी रंग घालून चांगले मळणे." },
      { "step": 2, "text": "Divide the dough into 10 equal portions. Shape each portion into an oblong, flat rectangular piece.", "textMarathi": "मिश्रणाचे १० समान भाग करणे. व त्याला लांबट चपटे चौकोन आकार देणे." },
      { "step": 3, "text": "Prepare a spice pouch (potli) by tying the cardamom, bay leaves, cloves, and cinnamon together in a thin muslin cloth. (Alternatively, you can add them directly if you prefer, or just use 2 whole cardamoms).", "textMarathi": "एका पातळ सुती कपड्यात ४/५ वेलची, ३/४ तेजपत्ता, २ लवंगा व १ छोटा तुकडा दालचिनीची पुरचुंडी बांधून घेणे. (किंवा २ वेलची अख्खी घालू शकता)." },
      { "step": 4, "text": "In a large pot, combine 2.5 cups of sugar and 10 cups of water, and bring to a boil. Add the spice pouch to the boiling water.", "textMarathi": "२.५ वाटी साखर व १० वाटी पाणी एकत्र करून उकळणे. उकळताना त्यात मसाल्याची पुरचुंडी घालणे." },
      { "step": 5, "text": "Once the syrup is boiling, carefully add the paneer pieces. Boil on high heat for 15 minutes without covering.", "textMarathi": "पाणी व साखर उकळले की त्यात तयार केलेले पनीरचे तुकडे सोडणे व १५ मिनिटे झाकण न ठेवता मोठ्या गॅसवर उकळणे." },
      { "step": 6, "text": "Partially cover the pot (half-lid) and boil for another 25 minutes. Turn off the heat.", "textMarathi": "त्यानंतर अर्धे झाकण ठेवून २५ मिनिटे उकळणे व गॅस बंद करणे." },
      { "step": 7, "text": "Allow the pieces to soak in the sugar syrup for 4 to 5 hours.", "textMarathi": "तुकडे सिरप (पाक) मध्ये ४/५ तास तसेच राहू देणे." },
      { "step": 8, "text": "Remove the pieces from the syrup, slice them horizontally in half. Spread rich cream (malai/mawa filling) between the halves to make 20 sandwiches, and decorate with chopped almonds and pistachios.", "textMarathi": "तुकडे पाकातून काढून मधोमध आडवे कट करणे, त्यावर क्रीम भरून (सँडविच करून २० पिस बनवणे) वरून बदाम पिस्ते घालून सजवणे." }
    ],
    "tips": [
      "Kneading is Key: Knead the paneer with the palm of your hand until it is completely smooth and grease starts to release slightly. If not kneaded well, the paneer blocks will break or dissolve in the boiling syrup.",
      "Aroma Infusion: The spice pouch allows the delicate earthy tones of bay leaf, clove, and cinnamon to flavor the paneer without leaving residue on the sweets."
    ]
  },
  {
    "id": "malai-sandwich",
    "title": "Malai Sandwich",
    "titleMarathi": "मलई सँडविच",
    "author": "Family Recipe",
    "category": "Desserts",
    "yield": "10 pieces",
    "prepTime": "20 mins",
    "cookTime": "50 mins",
    "totalTime": "1 hr 10 mins",
    "description": "A festive Bengali-style milk dessert where square paneer blocks are boiled in sugar syrup, sliced in half, and filled with rose-flavored, yellow-tinted cream, then decorated with silver foil.",
    "ingredients": [
      { "quantity": "1", "unit": "liter milk", "name": "Paneer (Chhena)", "nameMarathi": "दूध (पनीर बनवण्यासाठी)", "notes": "Softened" },
      { "quantity": "1/2", "unit": "tsp", "name": "All-Purpose Flour (Maida)", "nameMarathi": "मैदा", "notes": "" },
      { "quantity": "1/4", "unit": "tsp", "name": "Arrowroot Powder", "nameMarathi": "आरारोट पावडर", "notes": "" },
      { "quantity": "1", "unit": "pinch", "name": "Baking Powder", "nameMarathi": "बेकिंग पावडर", "notes": "" },
      { "quantity": "1", "unit": "tsp", "name": "Semolina (Rava)", "nameMarathi": "रवा", "notes": "" },
      { "quantity": "2.5", "unit": "cups", "name": "Sugar", "nameMarathi": "साखर", "notes": "" },
      { "quantity": "10", "unit": "cups", "name": "Water", "nameMarathi": "पाणी", "notes": "" },
      { "quantity": "50", "unit": "g", "name": "Rich Cream", "nameMarathi": "क्रीम", "notes": "For filling" },
      { "quantity": "1", "unit": "tbsp", "name": "Powdered Sugar", "nameMarathi": "दळलेली साखर", "notes": "" },
      { "quantity": "", "unit": "", "name": "Yellow Food Color", "nameMarathi": "पिवळा रंग", "notes": "A few drops" },
      { "quantity": "", "unit": "", "name": "Rose Essence", "nameMarathi": "रोज इसेन्स", "notes": "A few drops" },
      { "quantity": "", "unit": "", "name": "Silver Foil (Vark)", "nameMarathi": "चांदीचे वर्क", "notes": "For decoration" }
    ],
    "instructions": [
      { "step": 1, "text": "Prepare fresh, soft paneer from 1 liter of milk. Add 1/2 tsp all-purpose flour (maida), 1/4 tsp arrowroot powder, 1 pinch baking powder, and 1 tsp semolina (rava). Mix well and knead into a smooth dough.", "textMarathi": "१ लीटर दुधाचे पनीर सॉफ्ट करणे, त्यात ½ टी स्पून मैदा + ¼ आरारोट पावडर, १ पिंच बेकींग पावडर, १ टी स्पून रवा सर्व मिक्स करून मळून घेणे." },
      { "step": 2, "text": "Divide the dough into 10 equal parts. Knead each part well and shape into a square block. Press lightly on both sides (using no pressure) to make them slightly concave in the center.", "textMarathi": "त्याचे १० भाग करणे, प्रत्येक भागाला चांगले मळून चौकोनी आकार देणे. (to press lightly) no pressure. दोन्ही बाजूनी थोडेसे खोलगट करणे." },
      { "step": 3, "text": "In a pot, combine 2 1/2 cups of sugar and 10 cups of water, and bring to a boil.", "textMarathi": "२ ½ वाटी साखर व १० वाटी पाणी उकळायला ठेवणे." },
      { "step": 4, "text": "Once the sugar syrup starts boiling, add the square paneer pieces. Boil for 20 minutes without covering the pot.", "textMarathi": "पाणी व साखर उकळू लागले की त्यात वरील चौकोनी पिसेस घालणे व २० मिनिटे झाकण न ठेवता उकळणे." },
      { "step": 5, "text": "After 20 minutes, cover the pot halfway with a lid and boil for another 25 minutes.", "textMarathi": "नंतर २० मिनिटांनंतर अर्ध झाकण ठेवून २५ मिनिटे उकळणे." },
      { "step": 6, "text": "Remove the lid completely and boil for a final 5 minutes.", "textMarathi": "व नंतर ५ मिनिटे झाकण काढून उकळणे." },
      { "step": 7, "text": "Leave the paneer pieces to soak in the sugar syrup for 4 hours, or overnight if you prefer them sweeter.", "textMarathi": "नंतर ४ तास किंवा अधिक गोड हवे असल्यास रात्रभर सिरपमध्ये ठेवून देणे." },
      { "step": 8, "text": "In the morning (or after soaking), slice each piece horizontally in half.", "textMarathi": "सकाळी (किंवा सोकिंगनंतर) मध्ये कट करणे." },
      { "step": 9, "text": "Whip 50g of cream with 1 tbsp of powdered sugar, yellow food color, and rose essence. Spread this flavored cream mixture in the middle of each cut paneer sandwich piece, cover with the other half, and apply silver foil (vark) on top. Serve chilled.", "textMarathi": "५० ग्राम क्रीम त्यात १ टे. दळलेली साखर, पिवळा रंग व रोज इसेन्स घालून ते मध्ये सँडविचमध्ये भरणे व वरून वर्क लावणे. व थंड करून सर्व्ह करणे." }
    ],
    "tips": [
      "Shaping: Ensure that when shaping the square paneer blocks, you make a slight depression in the center. This helps with even cooking and holding the cream filling.",
      "Baking Powder: Do not add more than a pinch of baking powder, as excessive baking powder can cause the paneer to disintegrate in the boiling syrup.",
      "Soaking: Soaking overnight yields a much juicier and sweeter paneer base, resembling traditional sweet shop standards."
    ]
  },
  {
    "id": "banana-nut-bread",
    "title": "Banana Nut Bread",
    "titleMarathi": "बनाना नट ब्रेड",
    "author": "Family Recipe",
    "category": "Desserts",
    "yield": "1 loaf",
    "prepTime": "15 mins",
    "cookTime": "60 mins",
    "totalTime": "1 hr 15 mins",
    "description": "A delicious, soft, and healthy quick bread made with organic einkorn flour, overripe bananas, wheat germ, chopped nuts, and a touch of acid (orange juice, applesauce, or vinegar) to react with the baking soda for a perfect rise.",
    "ingredients": [
      { "quantity": "1/2", "unit": "cup", "name": "Cooking Oil", "nameMarathi": "तेल", "notes": "Vegetable or coconut oil" },
      { "quantity": "3/4", "unit": "cup", "name": "Sugar", "nameMarathi": "साखर", "notes": "Or to taste" },
      { "quantity": "2", "unit": "pieces", "name": "Eggs", "nameMarathi": "अंडी", "notes": "" },
      { "quantity": "5", "unit": "large", "name": "Overripe Bananas", "nameMarathi": "पिकलेली केळी", "notes": "Mashed" },
      { "quantity": "2", "unit": "cups", "name": "Einkorn Flour", "nameMarathi": "एकॉर्न पीठ", "notes": "100% organic" },
      { "quantity": "1", "unit": "tsp", "name": "Salt", "nameMarathi": "मीठ", "notes": "" },
      { "quantity": "1/2 to 3/4", "unit": "tsp", "name": "Baking Soda", "nameMarathi": "बेकिंग सोडा", "notes": "Fresh" },
      { "quantity": "4", "unit": "tbsp", "name": "Wheat Germ", "nameMarathi": "गव्हाचा कोंडा (Wheat Germ)", "notes": "" },
      { "quantity": "1", "unit": "cup", "name": "Chopped Nuts", "nameMarathi": "चिरलेले नट्स", "notes": "Walnuts or pecans work best" },
      { "quantity": "1", "unit": "tsp", "name": "Acid Component", "nameMarathi": "संत्र्याचा रस / सफरचंद सॉस / व्हिनेगर", "notes": "Orange juice, apple sauce, vinegar, or lemon juice" }
    ],
    "instructions": [
      { "step": 1, "text": "Whisk the Dry Base Thoroughly: In a large bowl, whisk together 2 cups of einkorn flour, 4 tablespoons of wheat germ, 1/2 teaspoon (to 3/4 teaspoon) of fresh baking soda, and 1 teaspoon of salt. Make sure that baking soda is completely distributed through the flour.", "textMarathi": "कोरडे मिश्रण एकत्र करणे: एका मोठ्या भांड्यात २ कप एकॉर्न पीठ, ४ मोठे चमचे गव्हाचा कोंडा (wheat germ), १/२ लहान चमचा बेकिंग सोडा आणि १ लहान चमचा मीठ एकत्र करून घ्यावे. बेकिंग सोडा पिठात व्यवस्थित मिसळला पाहिजे याची खात्री करा." },
      { "step": 2, "text": "Mix the Wet Base + Your Acid: In a separate bowl, completely mash the 5 bananas. Whisk in the 1/2 cup of oil, 2 eggs, and the sugar. Right before you combine everything, stir in exactly 1 teaspoon of orange juice, apple sauce, vinegar, or lemon juice into this wet mix.", "textMarathi": "ओले मिश्रण एकत्र करणे: दुसऱ्या भांड्यात ५ पिकलेली केळी पूर्णपणे मॅश (बारीक) करून घ्यावीत. त्यात १/२ कप तेल, २ अंडी आणि ३/४ कप साखर घालून चांगले फेटून घ्यावे. कोरड्या मिश्रणात मिसळण्यापूर्वी, या ओल्या मिश्रणात १ लहान चमचा संत्र्याचा रस, सफरचंद सॉस किंवा व्हिनेगर घालून मिक्स करावे." },
      { "step": 3, "text": "The Gentle Combine (Crucial Step!): Pour the wet mixture into the dry flour bowl. Using a spatula, fold the ingredients together very gently. Stop mixing the exact second you can no longer see raw flour patches. It is completely fine if the batter looks a bit lumpy. Gently fold in the 1 cup of chopped nuts at the very end.", "textMarathi": "मिश्रण हलके एकत्र करणे (महत्त्वाची पायरी): ओले मिश्रण कोरड्या पिठाच्या भांड्यात ओतावे. स्पॅटुलाच्या साहाय्याने सर्व साहित्य अतिशय हलक्या हाताने एकत्र (fold) करावे. कोरडे पीठ दिसणे बंद होताच ढवळणे थांबवावे (मिश्रण थोडे गुठळ्यांचे दिसले तरी चालेल). शेवटी १ कप चिरलेले नट्स हलक्या हाताने मिक्स करावेत." },
      { "step": 4, "text": "Pour, Rest, and Bake: Pour the batter into your greased standard metal loaf pan. Let it sit undisturbed on your counter for 15 minutes. This mandatory rest lets the slow-absorbing einkorn lock in the liquids so the bread stays soft. Bake at 350°F (175°C) for 55 to 65 minutes. Do not open the oven door for the first 45 minutes to avoid collapsing the delicate structure. Check the center with a toothpick at 55 minutes.", "textMarathi": "पॅनमध्ये ओतणे, विसावा देणे आणि बेक करणे: तयार पीठ (batter) ग्रीस केलेल्या नेहमीच्या लोफ पॅनमध्ये ओतावे. पिठाला १५ मिनिटे कट्ट्यावर तसेच स्थिर ठेवू द्यावे जेणेकरून एकॉर्न पीठ द्रव शोषून घेईल. ३५०°F (१७५°C) वर प्रीहीट केलेल्या ओव्हनमध्ये ५५ ते ६५ मिनिटे बेक करावे. पहिल्या ४५ मिनिटांत ओव्हनचे दार उघडू नये. ५५ मिनिटांनी टूथपिक घालून शिजले आहे का ते तपासावे." }
    ],
    "tips": [
      "Do Not Overmix (ढवळणे टाळा): Overmixing einkorn flour will result in a dense, gummy loaf. Mix only until the dry patches disappear.",
      "Baking Soda Freshness: Ensure your baking soda is fresh for a successful rise. Test it in a bit of vinegar before baking.",
      "Mandatory Rest (स्थिर ठेवणे): Letting the batter rest for 15 minutes before baking is crucial for einkorn flour, allowing it to fully absorb the liquids and yielding a soft texture."
    ]
  },
  {
    "id": "tomato-saar",
    "title": "Tomato Saar",
    "titleMarathi": "टोमॅटो सार",
    "author": "Saroj Maushi",
    "category": "Mains",
    "yield": "4-6 servings",
    "prepTime": "10 mins",
    "cookTime": "20 mins",
    "totalTime": "30 mins",
    "description": "A classic Maharashtrian tangy and sweet tomato soup, flavored with fresh coconut, roasted coriander and cumin seeds, black pepper, and tempered with mustard seeds, curry leaves, and asafoetida.",
    "ingredients": [
      { "quantity": "10", "unit": "pieces", "name": "Tomatoes", "nameMarathi": "टोमॅटो", "notes": "Medium-sized, ripe red" },
      { "quantity": "4", "unit": "tsp", "name": "Grated Coconut", "nameMarathi": "खवलेला नारळ (खोबरे)", "notes": "Fresh" },
      { "quantity": "1", "unit": "tsp", "name": "Cumin Seeds (Jeera)", "nameMarathi": "जीरे", "notes": "" },
      { "quantity": "2", "unit": "tsp", "name": "Coriander Seeds (Dhane)", "nameMarathi": "धणे", "notes": "" },
      { "quantity": "8", "unit": "pieces", "name": "Black Peppercorns (Miri)", "nameMarathi": "काळी मिरी", "notes": "" },
      { "quantity": "1", "unit": "tsp", "name": "Red Chili Powder", "nameMarathi": "मिरची पावडर", "notes": "Adjust to heat preference" },
      { "quantity": "3", "unit": "tbsp", "name": "Jaggery (Gul)", "nameMarathi": "गूळ", "notes": "Grated" },
      { "quantity": "1", "unit": "tsp", "name": "Salt", "nameMarathi": "मीठ", "notes": "Or to taste" },
      { "quantity": "1", "unit": "tbsp", "name": "Oil or Ghee", "nameMarathi": "तेल किंवा तूप", "notes": "For tempering (फोडणीसाठी)" },
      { "quantity": "1", "unit": "tsp", "name": "Mustard Seeds (Mohri)", "nameMarathi": "मोहरी", "notes": "" },
      { "quantity": "1/4", "unit": "tsp", "name": "Asafoetida (Hing)", "nameMarathi": "हिंग", "notes": "" },
      { "quantity": "8-10", "unit": "pieces", "name": "Curry Leaves (Kadhi patta)", "nameMarathi": "कढीपत्ता", "notes": "" }
    ],
    "instructions": [
      { "step": 1, "text": "Wash the tomatoes. Pressure cook them with a small amount of water for 4 whistles.", "textMarathi": "टोमॅटो स्वच्छ धुवून घेणे. कुकरमध्ये ४ शिट्ट्या (whistle) काढून उकडून घेणे." },
      { "step": 2, "text": "Once cooled, peel the skins off the tomatoes. Puree the pulp and strain it to remove seeds, yielding a smooth tomato juice. Keep the cooking water aside.", "textMarathi": "टोमॅटो थंड झाल्यावर त्याची साले काढून पल्प बारीक करून गाळून घेणे. टोमॅटोचे पाणी फेकून न देता बाजूला ठेवणे." },
      { "step": 3, "text": "Grind the grated fresh coconut, cumin seeds, coriander seeds, black peppercorns, and red chili powder together with a little water into a very smooth paste.", "textMarathi": "४ चमचे खोबरे, १ चमचा जीरे, २ चमचे धणे, ८ काळी मिरी, आणि १ चमचा मिरची पावडर पाणी घालून मिक्सरमध्ये बारीक वाटून (पेस्ट करून) घेणे." },
      { "step": 4, "text": "In a pot, combine the strained tomato juice, the ground coconut spice paste, and the saved tomato cooking water. Bring to a boil.", "textMarathi": "एका भांड्यात टोमॅटोचे पाणी आणि वाटलेला नारळ-मसाल्याचा पल्प एकत्र करून उकळायला ठेवणे." },
      { "step": 5, "text": "Add salt and 3 tablespoons of grated jaggery. Simmer on low heat for 5-7 minutes.", "textMarathi": "त्यात चवीनुसार मीठ आणि ३ चमचे गूळ घालून मंद आचेवर ५ ते ७ मिनिटे उकळू देणे." },
      { "step": 6, "text": "In a separate small pan, heat 1 tablespoon of oil or ghee. Add mustard seeds and let them splutter. Add asafoetida (hing) and curry leaves. Sauté for a few seconds.", "textMarathi": "तडका पॅनमध्ये तेल किंवा तूप गरम करणे. त्यात मोहरी घालून तडतडू देणे. नंतर हिंग आणि कढीपत्ता घालणे." },
      { "step": 7, "text": "Pour the hot tempering (tadka) over the boiling tomato saar. Mix well, garnish with fresh coriander if desired, and turn off the heat. Serve hot with steamed rice.", "textMarathi": "हा तडका (फोडणी) उकळत्या टोमॅटो सारवर ओतणे. व्यवस्थित मिक्स करून गरम गरम भातासोबत वाढणे." }
    ],
    "tips": [
      "Jaggery Balance: Maharashtrian Saar is traditionally tangy-sweet. Adjust the jaggery depending on how sour the tomatoes are.",
      "Straining: Straining the tomato pulp is highly recommended to get a clean, silky-smooth soup texture."
    ]
  },
  {
    "id": "bhuna-gosht",
    "title": "Bhuna Gosht",
    "titleMarathi": "भुना गोश्त",
    "author": "Sonali Divekar",
    "category": "Mains",
    "yield": "4 servings",
    "prepTime": "2 hrs (marination)",
    "cookTime": "45 mins",
    "totalTime": "2 hrs 45 mins",
    "description": "A rich and aromatic Indian mutton dish where goat meat is marinated in ginger-garlic paste, yogurt, and turmeric, then slow-cooked in a pressure pan with whole spices, tomatoes, and cashew powder until tender and semi-dry.",
    "ingredients": [
      { "quantity": "1/2", "unit": "kg", "name": "Mutton", "nameMarathi": "मटण", "notes": "Cut and washed pieces" },
      { "quantity": "2", "unit": "big", "name": "Onions", "nameMarathi": "कांदे", "notes": "Chopped" },
      { "quantity": "4", "unit": "tbsp", "name": "Cooking Oil", "nameMarathi": "तेल", "notes": "" },
      { "quantity": "1", "unit": "tbsp", "name": "Garlic and Ginger Paste", "nameMarathi": "आले-लसूण पेस्ट", "notes": "" },
      { "quantity": "1", "unit": "tsp", "name": "Salt", "nameMarathi": "मीठ", "notes": "Or to taste" },
      { "quantity": "1", "unit": "tsp", "name": "Red Chili Powder", "nameMarathi": "लाल तिखट", "notes": "Or to taste" },
      { "quantity": "1/2", "unit": "tsp", "name": "Turmeric (Haldi) Powder", "nameMarathi": "हळद", "notes": "" },
      { "quantity": "1/2", "unit": "cup", "name": "Thick Curds", "nameMarathi": "घट्ट दही", "notes": "" },
      { "quantity": "2", "unit": "pieces", "name": "Green Cardamom", "nameMarathi": "वेलची", "notes": "" },
      { "quantity": "3", "unit": "pieces", "name": "Cloves", "nameMarathi": "लवंग", "notes": "" },
      { "quantity": "1", "unit": "small piece", "name": "Cinnamon", "nameMarathi": "दालचिनी", "notes": "Approx. 2 inch piece" },
      { "quantity": "1/2", "unit": "cup", "name": "Tomato Puree", "nameMarathi": "टोमॅटो प्युरी", "notes": "" },
      { "quantity": "1/2", "unit": "tsp", "name": "Garam Masala", "nameMarathi": "गरम मसाला", "notes": "" },
      { "quantity": "1", "unit": "tsp", "name": "Coriander (Dhania) Powder", "nameMarathi": "धणे पूड", "notes": "" },
      { "quantity": "1/2", "unit": "tsp", "name": "Cumin (Jeera) Powder", "nameMarathi": "जिरे पूड", "notes": "" },
      { "quantity": "1/2", "unit": "tsp", "name": "Fennel (Saunf) Powder", "nameMarathi": "बडीशेप पूड", "notes": "Roasted and powdered" },
      { "quantity": "1", "unit": "tbsp", "name": "Cashew Nut Powder", "nameMarathi": "काजू पूड", "notes": "" },
      { "quantity": "1", "unit": "cup", "name": "Water", "nameMarathi": "पाणी", "notes": "" },
      { "quantity": "", "unit": "", "name": "Coriander Leaves", "nameMarathi": "चिरलेली कोथिंबीर", "notes": "For garnish" },
      { "quantity": "", "unit": "", "name": "Mint Leaves", "nameMarathi": "चिरलेला पुदिना", "notes": "For garnish" },
      { "quantity": "", "unit": "", "name": "Green Chillies", "nameMarathi": "हिरव्या मिरच्या", "notes": "Chopped, for garnish" }
    ],
    "instructions": [
      { "step": 1, "text": "Marinate the cut and washed mutton pieces with garlic and ginger paste, salt, curd, and haldi (turmeric) powder. Let it rest for 2 hours.", "textMarathi": "मटणाचे तुकडे कापून स्वच्छ धुवून घ्यावे. त्यात आले-लसूण पेस्ट, मीठ, दही आणि हळद घालून एकत्र करावे आणि २ तास मॅरीनेट करण्यासाठी ठेवावे." },
      { "step": 2, "text": "Heat 4 tablespoons of oil in a pressure pan. Fry cardamom, cloves, cinnamon, and chopped onion until the onions are golden brown and soft.", "textMarathi": "प्रेशर पॅनमध्ये ४ मोठे चमचे तेल गरम करावे. त्यात वेलची, लवंग, दालचिनी आणि चिरलेला कांदा घालून हलका मऊ (गोल्डन ब्राऊन) होईपर्यंत परतावे." },
      { "step": 3, "text": "Add the marinated mutton pieces to the pan and sauté/fry until the meat turns brown.", "textMarathi": "मॅरीनेट केलेले मटण घालून ते ब्राऊन (तपकिरी) होईपर्यंत चांगले परतावे." },
      { "step": 4, "text": "Add the red chili powder, dhania powder, jeera powder, saunf powder, and cashew powder. Fry the mixture for a couple of minutes.", "textMarathi": "त्यानंतर लाल तिखट, धणे पूड, जिरे पूड, बडीशेप पूड आणि काजू पूड घालून २ मिनिटे चांगले परतून घ्यावे." },
      { "step": 5, "text": "Add 1 cup of water and cook (under pressure) till the meat is 3/4 done.", "textMarathi": "१ कप पाणी घालावे आणि मटण ३/४ शिजेपर्यंत कुकरमध्ये शिजवून घ्यावे." },
      { "step": 6, "text": "Add the tomato puree and garam masala. Cook (with the pan uncovered) until the mutton is almost dry.", "textMarathi": "त्यानंतर टोमॅटो प्युरी आणि गरम मसाला घालावा. मटण संपूर्ण कोरडे (dry) होईपर्यंत मंद ते मध्यम आचेवर शिजवून घ्यावे." },
      { "step": 7, "text": "Garnish with fresh coriander leaves, mint leaves, and chopped green chillies. Serve hot.", "textMarathi": "चिरलेली कोथिंबीर, पुदिना आणि चिरलेल्या हिरव्या मिरच्या घालून सजवावे." }
    ],
    "tips": [
      "Pressure Pan Cooking (प्रेशर पॅन): Slow cooking in a pressure pan/cooker is highly recommended to tenderize the mutton while locking in the spices.",
      "Fennel Powder (बडीशेप): Dry roast the fennel seeds (saunf) before grinding them to release their aromatic oils.",
      "Cashew Powder (काजू पूड): Adding cashew powder thickens the gravy and adds a rich, nutty flavor that balances the heat."
    ]
  },
  {
    "id": "surti-kachori",
    "title": "Surti Kachori",
    "titleMarathi": "सुरती कचोरी",
    "author": "Family Recipe",
    "category": "Appetizers",
    "yield": "32 pieces",
    "prepTime": "30 mins",
    "cookTime": "30 mins",
    "totalTime": "1 hr",
    "description": "A delicious Surati snack where crispy pastry shells are stuffed with a sweet, tangy, and spicy filling made of crushed farsan (Bhavnagri sev & fried moong), tamarind pulp, raisins, green chilies, and spices.",
    "ingredients": [
      { "quantity": "250", "unit": "g", "name": "All-Purpose Flour (Maida)", "nameMarathi": "मैदा", "notes": "For the outer cover" },
      { "quantity": "1", "unit": "tsp", "name": "Salt (for Cover)", "nameMarathi": "मीठ (कव्हरसाठी)", "notes": "" },
      { "quantity": "75", "unit": "g", "name": "Cooking Oil (for Dough)", "nameMarathi": "तेल (मोहन म्हणून)", "notes": "Approx. 1/2 cup" },
      { "quantity": "", "unit": "", "name": "Water", "nameMarathi": "पाणी", "notes": "As needed to knead soft dough" },
      { "quantity": "250", "unit": "g", "name": "Mixed Farsan", "nameMarathi": "फरसाण", "notes": "Bhavnagri sev & fried green moong dal" },
      { "quantity": "1", "unit": "lemon-sized", "name": "Tamarind (Chinch)", "nameMarathi": "चिंच", "notes": "Soaked in 1/2 cup water" },
      { "quantity": "2", "unit": "tsp", "name": "Salt (for Stuffing)", "nameMarathi": "मीठ (सारणासाठी)", "notes": "" },
      { "quantity": "2", "unit": "tsp", "name": "Sugar", "nameMarathi": "साखर", "notes": "" },
      { "quantity": "1", "unit": "tsp", "name": "Red Chili Powder", "nameMarathi": "मिरची पावडर", "notes": "" },
      { "quantity": "1/2", "unit": "tsp", "name": "Garam Masala", "nameMarathi": "गरम मसाला", "notes": "" },
      { "quantity": "1", "unit": "tsp", "name": "Whole Coriander Seeds", "nameMarathi": "अख्खे धणे", "notes": "" },
      { "quantity": "1", "unit": "tsp", "name": "Whole Fennel Seeds (Badishep)", "nameMarathi": "अख्खी बडीशेप", "notes": "" },
      { "quantity": "2", "unit": "tsp", "name": "Sesame Seeds (Til)", "nameMarathi": "तीळ", "notes": "" },
      { "quantity": "1", "unit": "tsp", "name": "Poppy Seeds (Khaskhas)", "nameMarathi": "खसखस", "notes": "" },
      { "quantity": "2", "unit": "tsp", "name": "Coriander Powder", "nameMarathi": "धणा पावडर", "notes": "" },
      { "quantity": "25-30", "unit": "pieces", "name": "Raisins (Manuka)", "nameMarathi": "मनुका", "notes": "Finely chopped" },
      { "quantity": "4-5", "unit": "pieces", "name": "Green Chilies", "nameMarathi": "हिरव्या मिरच्या", "notes": "Finely chopped" },
      { "quantity": "1/2", "unit": "cup", "name": "Coriander Leaves", "nameMarathi": "कोथिंबीर", "notes": "Finely chopped" },
      { "quantity": "", "unit": "", "name": "Cooking Oil", "nameMarathi": "तेल", "notes": "For deep frying" }
    ],
    "instructions": [
      { "step": 1, "text": "For the outer cover: In a mixing bowl, combine the all-purpose flour (maida), 1 teaspoon salt, and 75 grams of oil. Add water gradually and knead into a soft dough. Let it rest covered for 1/2 hour.", "textMarathi": "कव्हर तयार करण्यासाठी: २५० ग्रॅम मैदा, १ टी स्पून मीठ, ७५ ग्रॅम (१/२ कप) तेल एकत्र करणे. अंदाजाने थोडे थोडे पाणी घालून पीठ सैल भिजवून १/२ तास झाकून ठेवणे." },
      { "step": 2, "text": "Soak a lemon-sized ball of tamarind in 1/2 cup of warm water.", "textMarathi": "लिंबा एवढी chiंच १/२ कप पाण्यात भिजत घालणे." },
      { "step": 3, "text": "Crush the farsan (Bhavnagri sev and fried moong dal) using your hands or pulse briefly in a food processor.", "textMarathi": "२५० ग्रॅम फरसाण (घाटी भावनगरी व मुग हिरवे तळलेले) हाताने बारीक चुरून घेणे." },
      { "step": 4, "text": "In a bowl, combine the crushed farsan, 2 teaspoons salt, 2 teaspoons sugar, 1 teaspoon chili powder, 1/2 teaspoon garam masala, 1 teaspoon whole coriander seeds, 1 teaspoon whole fennel seeds, 2 teaspoons sesame seeds, 1 teaspoon poppy seeds, 2 teaspoons coriander powder, chopped raisins, chopped green chilies, and 1/2 cup chopped coriander leaves. Mix well.", "textMarathi": "चुरलेल्या फरसाणमध्ये २ टी स्पून मीठ, २ टी स्पून साखर, १ टी स्पून मिरची पावडर, १/२ स्पून गरम मसाला, १ टी स्पून अख्खे धणे, १ टी स्पून अख्खी बडीशेप, २ टी स्पून तीळ, १ टी स्पून खसखस, २ टी स्पून धणा पावडर, २५/३० मनुके बारीक कट करून, ४/५ हिरव्या मिरच्या बारीक कट करून आणि १/२ कप बारीक चिरलेली कोथिंबीर एकत्र करणे." },
      { "step": 5, "text": "Mash the mixture with your hands, then add the tamarind water gradually. Stop adding tamarind water as soon as the mixture starts holding shape together as a ball.", "textMarathi": "वरील सर्व पदार्थ एकत्र करून हाताने चुरणे व मग त्यात चिंचेचे पाणी हळू हळू घालून त्या मिश्रणाचा गोळा बनतो का तो पहाणे. गोळा बनला की आणखी चिंचेचे पाणी घालू नये." },
      { "step": 6, "text": "Divide the stuffing mixture into 32 equal portions and roll them into small balls. Divide the rested dough into 32 equal portions and roll them into balls.", "textMarathi": "मिश्रणाचे ३२ समान गोळे (सारण बॉल्स) बनवून घेणे. तसेच मैद्याच्या पिठाचे पण ३२ गोळे बनवणे." },
      { "step": 7, "text": "Flatten a dough ball, place a stuffing ball in the center, wrap the dough around the stuffing, seal it completely, and roll it gently back into a smooth round kachori. Repeat for all 32 pieces.", "textMarathi": "मैद्याच्या पुरीमध्ये सारणाचा गोळा भरून तोंड पूर्ण बंद करणे व कडा व्यवस्थित दाबून कचोरीचा गोल आकार देणे. अशा ३२ कचोऱ्या तयार करणे." },
      { "step": 8, "text": "Heat oil in a pan. Fry the kachoris on low to medium-low heat until they are golden brown and crispy.", "textMarathi": "कढईत तेल गरम करून मंद ते मध्यम आचेवर कचोऱ्या सोनेरी (गोल्डन ब्राऊन) आणि कुरकुरीत होईपर्यंत तळणे." }
    ],
    "tips": [
      "Stuffing Consistency: The tamarind pulp acts as the glue. Do not add too much; the stuffing should be damp enough to form balls, but not wet or soggy.",
      "Frying Temperature: Always fry kachoris on low heat. If the oil is too hot, they will develop blisters and remain soft inside instead of becoming crispy."
    ]
  }
];

// App State variables
let recipes = [];
let activePage = 'dashboard';
let selectedRecipe = null;
let uploadedImageBase64 = null;
let currentEditingRecipeId = null; // Holds recipe ID if updating existing
let currentModalLangIngredients = 'eng';
let currentModalLangMethod = 'both';

// App State Extensions
let scaleFactor = 1;

// Cooking Timer State
let timerInterval = null;
let timerRemainingSeconds = 0;
let timerTotalSeconds = 0;
let timerIsPaused = true;

// DOM Elements
const pages = document.querySelectorAll('.page-section');
const navItems = document.querySelectorAll('.nav-item');
const themeToggleBtn = document.getElementById('themeToggleBtn');
const searchBar = document.getElementById('searchBar');
const themeIcon = themeToggleBtn ? themeToggleBtn.querySelector('.theme-icon') : null;
const themeText = themeToggleBtn ? themeToggleBtn.querySelector('.theme-text') : null;

// New 3-Pane DOM Elements
const libraryLayout = document.getElementById('libraryLayout');
const libraryCategoriesList = document.getElementById('libraryCategoriesList');
const recipeListContainer = document.getElementById('recipeListContainer');
const recipeDetailPane = document.getElementById('recipeDetailPane');
const sortSelect = document.getElementById('sortSelect');
const btnAddNewRecipe = document.getElementById('btnAddNewRecipe');

// Converter & Form Elements
const dropzone = document.getElementById('dropzone');
const fileInput = document.getElementById('fileInput');
const imagePreviewWrapper = document.getElementById('imagePreviewWrapper');
const imagePreview = document.getElementById('imagePreview');
const scanLaser = document.getElementById('scanLaser');
const btnRemoveImg = document.getElementById('btnRemoveImg');
const btnExtract = document.getElementById('btnExtract');
const btnLoadSample = document.getElementById('btnLoadSample');
const aiLoadingOverlay = document.getElementById('aiLoadingOverlay');
const aiLoadingText = document.getElementById('aiLoadingText');

const recipeForm = document.getElementById('recipeForm');
const recipeTitle = document.getElementById('recipeTitle');
const recipeTitleMarathi = document.getElementById('recipeTitleMarathi');
const recipeAuthor = document.getElementById('recipeAuthor');
const recipeCategory = document.getElementById('recipeCategory');
const recipeYield = document.getElementById('recipeYield');
const recipePrepTime = document.getElementById('recipePrepTime');
const recipeCookTime = document.getElementById('recipeCookTime');
const recipeTotalTime = document.getElementById('recipeTotalTime');
const recipeDesc = document.getElementById('recipeDesc');
const recipeTips = document.getElementById('recipeTips');
const ingredientsFormList = document.getElementById('ingredientsFormList');
const stepsFormList = document.getElementById('stepsFormList');
const btnAddIngredient = document.getElementById('btnAddIngredient');
const btnAddStep = document.getElementById('btnAddStep');
const btnCancelEdit = document.getElementById('btnCancelEdit');

// Settings Elements
const geminiApiKey = document.getElementById('geminiApiKey');
const btnSaveApiKey = document.getElementById('btnSaveApiKey');
const btnToggleApiKeyVisibility = document.getElementById('btnToggleApiKeyVisibility');
const apiStatusBadge = document.getElementById('apiStatusBadge');
const btnExportLib = document.getElementById('btnExportLib');
const btnImportLib = document.getElementById('btnImportLib');
const importFileInput = document.getElementById('importFileInput');
const btnResetLib = document.getElementById('btnResetLib');

// Toast Elements
const toastMsg = document.getElementById('toastMsg');
const toastText = document.getElementById('toastText');

/* -------------------------------------------------------------
   INITIALIZATION & DATA LOADING
   ------------------------------------------------------------- */

function init() {
  // 1. Load theme preference
  const savedTheme = localStorage.getItem('theme') || 'light';
  document.documentElement.setAttribute('data-theme', savedTheme);
  updateThemeButtonUI(savedTheme);

  // 2. Load recipes from localStorage
  const storedRecipes = localStorage.getItem('recipes_library');
  if (storedRecipes) {
    recipes = JSON.parse(storedRecipes);
    // Ensure all default recipes exist in the library
    let updated = false;
    DEFAULT_RECIPES.forEach(defaultRecipe => {
      if (!recipes.some(r => r.id === defaultRecipe.id)) {
        recipes.push(defaultRecipe);
        updated = true;
      }
    });
    if (updated) {
      localStorage.setItem('recipes_library', JSON.stringify(recipes));
    }
  } else {
    recipes = [...DEFAULT_RECIPES];
    localStorage.setItem('recipes_library', JSON.stringify(recipes));
  }



  // 4. Load API key
  const savedKey = localStorage.getItem('gemini_api_key');
  if (savedKey) {
    geminiApiKey.value = savedKey;
    updateApiStatusUI(true);
  } else {
    updateApiStatusUI(false);
  }

  // 5. Setup navigation
  setupNavigation();

  // 6. Setup search, filter, and sort
  searchBar.addEventListener('input', renderDashboard);
  if (sortSelect) sortSelect.addEventListener('change', renderDashboard);
  setupCategoriesPanel();

  // 7. Theme toggle
  themeToggleBtn.addEventListener('click', toggleTheme);

  // 8. Upload & Digitize setup
  setupUploadEvents();
  setupDynamicFormFields();

  // 9. Settings setup
  setupSettingsEvents();

  // 10. Dashboard additions
  if (btnAddNewRecipe) {
    btnAddNewRecipe.addEventListener('click', () => {
      resetEditorForm();
      navigateToPage('digitize');
    });
  }

  // 11. Timer listeners
  setupTimerEventListeners();



  // 14. Initial Dashboard Render
  updateCategoryCounts();
  renderDashboard();
}

/* -------------------------------------------------------------
   NAVIGATION & THEME
   ------------------------------------------------------------- */

function setupNavigation() {
  navItems.forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      const pageId = item.getAttribute('data-page');
      navigateToPage(pageId);
    });
  });

  // Handle browser hash navigation
  window.addEventListener('hashchange', () => {
    const hash = window.location.hash.substring(1);
    if (['dashboard', 'digitize', 'settings'].includes(hash)) {
      navigateToPage(hash);
    }
  });

  // Check initial hash
  const initialHash = window.location.hash.substring(1);
  if (initialHash && ['dashboard', 'digitize', 'settings'].includes(initialHash)) {
    navigateToPage(initialHash);
  } else {
    navigateToPage('dashboard');
  }
}

function navigateToPage(pageId) {
  activePage = pageId;
  
  // Update nav links styling
  navItems.forEach(item => {
    if (item.getAttribute('data-page') === pageId) {
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  });

  // Switch display sections
  pages.forEach(page => {
    if (page.id === pageId) {
      page.classList.add('active');
    } else {
      page.classList.remove('active');
    }
  });

  window.location.hash = pageId;
  window.scrollTo({ top: 0, behavior: 'smooth' });

  // Custom renders when page shifts
  if (pageId === 'dashboard') {
    renderDashboard();
  }
}

function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
  updateThemeButtonUI(newTheme);
  showToast(newTheme === 'dark' ? 'Dark mode enabled' : 'Light mode enabled', 'info');
}

function updateThemeButtonUI(theme) {
  if (!themeToggleBtn) return;
  const iconSpan = themeToggleBtn.querySelector('.theme-icon');
  const textSpan = themeToggleBtn.querySelector('.theme-text');
  if (theme === 'dark') {
    if (iconSpan) iconSpan.textContent = '☀️';
    if (textSpan) textSpan.textContent = 'Light Mode';
  } else {
    if (iconSpan) iconSpan.textContent = '🌙';
    if (textSpan) textSpan.textContent = 'Dark Mode';
  }
}

/* -------------------------------------------------------------
   DASHBOARD / 3-PANE MANAGEMENT
   ------------------------------------------------------------- */

function setupCategoriesPanel() {
  if (!libraryCategoriesList) return;
  const items = libraryCategoriesList.querySelectorAll('.category-item');
  items.forEach(item => {
    item.addEventListener('click', () => {
      items.forEach(i => i.classList.remove('active'));
      item.classList.add('active');
      renderDashboard();
    });
  });
}

function updateCategoryCounts() {
  const counts = {
    All: recipes.length,
    Starred: recipes.filter(r => r.starred).length,
    Appetizers: recipes.filter(r => r.category === 'Appetizers').length,
    Mains: recipes.filter(r => r.category === 'Mains').length,
    Desserts: recipes.filter(r => r.category === 'Desserts').length,
    Beverages: recipes.filter(r => r.category === 'Beverages').length,
    Other: recipes.filter(r => r.category === 'Other' || (!['Appetizers', 'Mains', 'Desserts', 'Beverages'].includes(r.category))).length
  };
  
  Object.keys(counts).forEach(cat => {
    const el = document.getElementById(`count-${cat}`);
    if (el) el.textContent = counts[cat];
  });
}

function parseTimeToMins(timeStr) {
  if (!timeStr) return 0;
  const str = timeStr.toLowerCase().trim();
  let mins = 0;
  
  const hrMatch = str.match(/(\d+(?:\.\d+)?)\s*(?:hrs?|hours?)/);
  if (hrMatch) {
    mins += parseFloat(hrMatch[1]) * 60;
  }
  
  const minMatch = str.match(/(\d+(?:\.\d+)?)\s*(?:mins?|minutes?)/);
  if (minMatch) {
    mins += parseFloat(minMatch[1]);
  }
  
  if (mins === 0 && !isNaN(str)) {
    mins = parseFloat(str);
  }
  return mins;
}

function renderDashboard() {
  const searchQuery = searchBar.value.toLowerCase().trim();
  const activeCatEl = libraryCategoriesList ? libraryCategoriesList.querySelector('.category-item.active') : null;
  const categoryFilter = activeCatEl ? activeCatEl.getAttribute('data-category') : 'All';

  if (!recipeListContainer) return;
  recipeListContainer.innerHTML = '';

  // Filter recipes
  const filteredRecipes = recipes.filter(recipe => {
    let matchesCategory = false;
    if (categoryFilter === 'All') {
      matchesCategory = true;
    } else if (categoryFilter === 'Starred') {
      matchesCategory = !!recipe.starred;
    } else if (categoryFilter === 'Other') {
      matchesCategory = recipe.category === 'Other' || (!['Appetizers', 'Mains', 'Desserts', 'Beverages'].includes(recipe.category));
    } else {
      matchesCategory = recipe.category === categoryFilter;
    }
    
    const matchesSearch = !searchQuery || 
      recipe.title.toLowerCase().includes(searchQuery) ||
      (recipe.titleMarathi && recipe.titleMarathi.toLowerCase().includes(searchQuery)) ||
      (recipe.author && recipe.author.toLowerCase().includes(searchQuery)) ||
      recipe.description.toLowerCase().includes(searchQuery) ||
      recipe.ingredients.some(ing => ing.name.toLowerCase().includes(searchQuery) || (ing.nameMarathi && ing.nameMarathi.toLowerCase().includes(searchQuery)));
      
    return matchesCategory && matchesSearch;
  });

  // Sort recipes
  const sortVal = sortSelect ? sortSelect.value : 'title-asc';
  filteredRecipes.sort((a, b) => {
    if (sortVal === 'title-asc') {
      return a.title.localeCompare(b.title);
    } else if (sortVal === 'title-desc') {
      return b.title.localeCompare(a.title);
    } else if (sortVal === 'time-asc') {
      const timeA = parseTimeToMins(a.totalTime || a.prepTime || '0');
      const timeB = parseTimeToMins(b.totalTime || b.prepTime || '0');
      return timeA - timeB;
    } else if (sortVal === 'time-desc') {
      const timeA = parseTimeToMins(a.totalTime || a.prepTime || '0');
      const timeB = parseTimeToMins(b.totalTime || b.prepTime || '0');
      return timeB - timeA;
    }
    return 0;
  });

  // Display empty state
  if (filteredRecipes.length === 0) {
    recipeListContainer.innerHTML = `
      <div style="text-align: center; padding: 40px 10px; color: var(--text-secondary); background: var(--bg-surface); border-radius: var(--radius-md); border: 1px dashed var(--border-color);">
        <p style="font-size: 1.1rem; font-weight: 600; margin-bottom: 6px;">No Recipes Found</p>
        <p style="font-size: 0.85rem; color: var(--text-muted);">Try a different search or add a recipe.</p>
      </div>
    `;
    // If no recipes are matching, reset active detail view if it wasn't already null
    if (selectedRecipe && !recipes.some(r => r.id === selectedRecipe.id)) {
      selectedRecipe = null;
      renderRecipeDetail();
    }
    return;
  }

  // Render list rows
  filteredRecipes.forEach(recipe => {
    const card = document.createElement('div');
    card.className = `recipe-list-item ${selectedRecipe && selectedRecipe.id === recipe.id ? 'active' : ''}`;
    card.setAttribute('data-id', recipe.id);
    
    let categoryEmoji = '🍲';
    if (recipe.category === 'Appetizers') categoryEmoji = '🥪';
    else if (recipe.category === 'Mains') categoryEmoji = '🍛';
    else if (recipe.category === 'Desserts') categoryEmoji = '🍰';
    else if (recipe.category === 'Beverages') categoryEmoji = '☕';
    
    const hasStarredBadge = recipe.starred ? '⭐' : '';

    card.innerHTML = `
      <div class="item-thumbnail">${categoryEmoji}</div>
      <div class="item-content">
        <div class="item-title">${recipe.title}</div>
        <div class="item-subtitle">${recipe.titleMarathi ? recipe.titleMarathi : recipe.category}</div>
        <div class="item-meta">
          <span>⏱️ ${recipe.prepTime || recipe.totalTime || 'N/A'}</span>
          <span>${hasStarredBadge}</span>
        </div>
      </div>
    `;
    
    card.addEventListener('click', () => selectRecipe(recipe));
    recipeListContainer.appendChild(card);
  });

  // Auto-select first recipe if nothing selected (desktop only)
  if (!selectedRecipe && filteredRecipes.length > 0 && window.innerWidth >= 1024) {
    selectRecipe(filteredRecipes[0]);
  } else {
    renderRecipeDetail();
  }
}

/* -------------------------------------------------------------
   RECIPE DETAILED VIEWER (RIGHT PANE)
   ------------------------------------------------------------- */

function selectRecipe(recipe) {
  selectedRecipe = recipe;
  scaleFactor = 1;

  // Highlight active row in middle pane
  if (recipeListContainer) {
    const cards = recipeListContainer.querySelectorAll('.recipe-list-item');
    cards.forEach(card => {
      card.classList.toggle('active', card.getAttribute('data-id') === recipe.id);
    });
  }

  // Slide-in on mobile
  if (window.innerWidth < 1024 && recipeDetailPane) {
    recipeDetailPane.classList.add('show-detail');
  }

  renderRecipeDetail();
}

function renderRecipeDetail() {
  if (!recipeDetailPane) return;
  
  if (!selectedRecipe) {
    recipeDetailPane.innerHTML = `
      <div class="detail-blank-state">
        <div class="blank-icon">🍳</div>
        <h3>Scribe & Spoon Organizer</h3>
        <p>Select a recipe from the list to view its details, scale servings, cross off ingredients, or highlight instructions.</p>
        <button class="btn btn-primary" id="btnDetailCreateNew">Digitize a Manuscript</button>
      </div>
    `;
    const btnNew = document.getElementById('btnDetailCreateNew');
    if (btnNew) {
      btnNew.addEventListener('click', () => {
        resetEditorForm();
        navigateToPage('digitize');
      });
    }
    return;
  }
  
  let categoryEmoji = '🍲';
  if (selectedRecipe.category === 'Appetizers') categoryEmoji = '🥪';
  else if (selectedRecipe.category === 'Mains') categoryEmoji = '🍛';
  else if (selectedRecipe.category === 'Desserts') categoryEmoji = '🍰';
  else if (selectedRecipe.category === 'Beverages') categoryEmoji = '☕';

  const isStarred = !!selectedRecipe.starred;

  recipeDetailPane.innerHTML = `
    <div class="recipe-detail-card">
      
      <button class="btn btn-secondary btn-sm mobile-only" id="btnDetailBack" style="align-self: flex-start; margin-bottom: -10px;">
        ← Back to List
      </button>

      <div class="detail-hero-banner">
        <div>${categoryEmoji}</div>
      </div>

      <div class="detail-header-meta">
        <h2>
          <span>${selectedRecipe.title}</span>
          ${selectedRecipe.titleMarathi ? `<span class="marathi-title">${selectedRecipe.titleMarathi}</span>` : ''}
        </h2>
        <p style="color: var(--text-secondary); margin-top: 4px; font-size: 0.9rem;">
          Recipe by <span style="font-weight: 600;">${selectedRecipe.author || 'Anonymous'}</span> • Category: <span style="font-weight: 600;">${selectedRecipe.category}</span>
        </p>

        <div class="detail-header-actions">
          <button class="btn btn-secondary btn-sm" id="btnDetailStar" title="${isStarred ? 'Unstar Recipe' : 'Star Recipe'}">
            ${isStarred ? '⭐ Starred' : '☆ Star'}
          </button>
          <button class="btn btn-secondary btn-sm" id="btnDetailEdit" title="Edit details">
            ✏️ Edit
          </button>
          <button class="btn btn-secondary btn-sm" id="btnDetailPrint" title="Print recipe">
            🖨️ Print
          </button>
          <button class="btn btn-secondary btn-sm" id="btnDetailDelete" style="color: var(--danger); border-color: rgba(220,38,38,0.15);" title="Delete recipe">
            🗑️ Delete
          </button>
        </div>
      </div>

      <!-- Quick Stats -->
      <div class="recipe-quick-stats">
        <div class="stat-box">
          <span class="stat-label">Prep Time</span>
          <span class="stat-val">${selectedRecipe.prepTime || 'N/A'}</span>
        </div>
        <div class="stat-box">
          <span class="stat-label">Cook Time</span>
          <span class="stat-val">${selectedRecipe.cookTime || 'N/A'}</span>
        </div>
        <div class="stat-box">
          <span class="stat-label">Total Time</span>
          <span class="stat-val">${selectedRecipe.totalTime || 'N/A'}</span>
        </div>
        <div class="stat-box">
          <span class="stat-label">Yield</span>
          <span class="stat-val">${selectedRecipe.yield || 'N/A'}</span>
        </div>
      </div>

      <!-- Servings Scaler -->
      <div class="scaler-controls">
        <span class="scaler-label">Scale Servings:</span>
        <button class="scaler-btn" id="btnScaleDown">-</button>
        <span class="scaler-factor">${scaleFactor}x</span>
        <button class="scaler-btn" id="btnScaleUp">+</button>
      </div>

      <!-- Split Grid -->
      <div class="recipe-detail-grid">
        
        <!-- Column 1: Ingredients -->
        <div class="ingredients-column">
          <div class="ingredients-header-row">
            <h3 class="detail-section-title">Ingredients</h3>
          </div>
          <div class="lang-toggle-bar" id="ingredientsLangToggle">
            <button class="lang-btn ${currentModalLangIngredients === 'eng' ? 'active' : ''}" data-lang="eng">English</button>
            <button class="lang-btn ${currentModalLangIngredients === 'mar' ? 'active' : ''}" data-lang="mar">मराठी</button>
          </div>
          
          <ul class="ingredients-list" id="detailIngredientsList">
            <!-- Populated dynamically -->
          </ul>
        </div>
        
        <!-- Column 2: Directions -->
        <div class="directions-column">
          <h3 class="detail-section-title">Method</h3>
          <div class="lang-toggle-bar" id="methodLangToggle">
            <button class="lang-btn ${currentModalLangMethod === 'eng' ? 'active' : ''}" data-lang="eng">English Only</button>
            <button class="lang-btn ${currentModalLangMethod === 'mar' ? 'active' : ''}" data-lang="mar">मराठी Only</button>
            <button class="lang-btn ${currentModalLangMethod === 'both' ? 'active' : ''}" data-lang="both">Bilingual</button>
          </div>
          
          <div class="method-list" id="detailMethodList">
            <!-- Populated dynamically -->
          </div>
        </div>

      </div>

      <!-- Tips Box -->
      <div class="tips-box" id="detailTipsBox" style="${selectedRecipe.tips && selectedRecipe.tips.length > 0 ? 'display: flex;' : 'display: none;'}">
        <div class="tips-title">
          <svg viewBox="0 0 24 24"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
          <span>Important Tips & Tricks</span>
        </div>
        <ul class="tips-content" id="detailTipsList">
          <!-- Populated dynamically -->
        </ul>
      </div>

    </div>
  `;

  // Attach detail pane event listeners
  document.getElementById('btnDetailStar').addEventListener('click', toggleStarred);
  document.getElementById('btnDetailEdit').addEventListener('click', () => {
    loadRecipeIntoEditor(selectedRecipe);
  });
  document.getElementById('btnDetailPrint').addEventListener('click', () => {
    window.print();
  });
  document.getElementById('btnDetailDelete').addEventListener('click', () => {
    if (confirm(`Are you sure you want to delete "${selectedRecipe.title}"?`)) {
      deleteRecipeById(selectedRecipe.id);
    }
  });

  const btnBack = document.getElementById('btnDetailBack');
  if (btnBack) {
    btnBack.addEventListener('click', () => {
      recipeDetailPane.classList.remove('show-detail');
    });
  }

  // Scale triggers
  document.getElementById('btnScaleDown').addEventListener('click', () => {
    if (scaleFactor > 0.5) {
      if (scaleFactor === 4) scaleFactor = 3;
      else if (scaleFactor === 3) scaleFactor = 2;
      else if (scaleFactor === 2) scaleFactor = 1.5;
      else if (scaleFactor === 1.5) scaleFactor = 1;
      else if (scaleFactor === 1) scaleFactor = 0.5;
      renderDetailIngredients();
    }
  });

  document.getElementById('btnScaleUp').addEventListener('click', () => {
    if (scaleFactor < 4) {
      if (scaleFactor === 0.5) scaleFactor = 1;
      else if (scaleFactor === 1) scaleFactor = 1.5;
      else if (scaleFactor === 1.5) scaleFactor = 2;
      else if (scaleFactor === 2) scaleFactor = 3;
      else if (scaleFactor === 3) scaleFactor = 4;
      renderDetailIngredients();
    }
  });



  // Ingredients language button listeners
  const ingToggle = document.getElementById('ingredientsLangToggle');
  const ingBtns = ingToggle ? ingToggle.querySelectorAll('.lang-btn') : [];
  ingBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      ingBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentModalLangIngredients = btn.getAttribute('data-lang');
      renderDetailIngredients();
    });
  });

  // Directions language button listeners
  const methToggle = document.getElementById('methodLangToggle');
  const methBtns = methToggle ? methToggle.querySelectorAll('.lang-btn') : [];
  methBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      methBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentModalLangMethod = btn.getAttribute('data-lang');
      renderDetailMethod();
    });
  });

  // Populate Lists
  renderDetailIngredients();
  renderDetailMethod();

  // Populate tips
  const detailTipsList = document.getElementById('detailTipsList');
  const detailTipsBox = document.getElementById('detailTipsBox');
  if (detailTipsList && selectedRecipe.tips && selectedRecipe.tips.length > 0) {
    detailTipsList.innerHTML = '';
    selectedRecipe.tips.forEach(tip => {
      const li = document.createElement('li');
      li.textContent = tip;
      detailTipsList.appendChild(li);
    });
    if (detailTipsBox) detailTipsBox.style.display = 'flex';
  } else {
    if (detailTipsBox) detailTipsBox.style.display = 'none';
  }
}

function renderDetailIngredients() {
  const list = document.getElementById('detailIngredientsList');
  if (!list || !selectedRecipe || !selectedRecipe.ingredients) return;
  list.innerHTML = '';
  
  const factorEl = document.querySelector('.scaler-factor');
  if (factorEl) factorEl.textContent = scaleFactor + 'x';
  
  selectedRecipe.ingredients.forEach(ing => {
    const item = document.createElement('li');
    item.className = 'ingredient-item';
    
    let dispName = ing.name;
    if (currentModalLangIngredients === 'mar' && ing.nameMarathi) {
      dispName = ing.nameMarathi;
    }
    
    const scaledQty = scaleQuantity(ing.quantity, scaleFactor);
    
    item.innerHTML = `
      <div class="checkbox-custom">
        <svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg>
      </div>
      <div class="ingredient-text">
        <span class="ingredient-qty">${scaledQty} ${ing.unit ? ing.unit : ''}</span>
        <span>${dispName}</span>
        ${ing.notes ? `<span class="ingredient-notes">${ing.notes}</span>` : ''}
      </div>
    `;
    
    // Checkbox toggle events
    item.querySelector('.checkbox-custom').addEventListener('click', (e) => {
      e.stopPropagation();
      item.classList.toggle('checked');
    });
    item.querySelector('.ingredient-text').addEventListener('click', () => {
      item.classList.toggle('checked');
    });
    
    list.appendChild(item);
  });
}

function renderDetailMethod() {
  const list = document.getElementById('detailMethodList');
  if (!list || !selectedRecipe || !selectedRecipe.instructions) return;
  list.innerHTML = '';
  
  selectedRecipe.instructions.forEach(step => {
    const card = document.createElement('div');
    card.className = 'step-card';
    
    let textHTML = '';
    const showEnglish = (currentModalLangMethod === 'eng' || currentModalLangMethod === 'both');
    const showMarathi = (currentModalLangMethod === 'mar' || currentModalLangMethod === 'both');
    
    let stepTextEnglish = step.text || '';
    let stepTextMarathi = step.textMarathi || '';
    
    // Timer extraction
    const durEng = extractDuration(stepTextEnglish);
    const durMar = extractDuration(stepTextMarathi);
    const dur = durEng || durMar;
    
    let timerBtnHTML = '';
    if (dur) {
      timerBtnHTML = `<button class="step-timer-btn" data-minutes="${dur.minutes}" data-step="${step.step}">⏳ Start Timer (${dur.display})</button>`;
    }
    
    if (showEnglish && stepTextEnglish) {
      textHTML += `<div class="step-text">${stepTextEnglish} ${timerBtnHTML}</div>`;
    }
    if (showMarathi && stepTextMarathi) {
      textHTML += `<div class="step-text-marathi">${stepTextMarathi} ${!showEnglish ? timerBtnHTML : ''}</div>`;
    }
    
    card.innerHTML = `
      <div class="step-number">${step.step}</div>
      <div class="step-content">
        ${textHTML}
      </div>
    `;
    
    // Highlight step click event
    card.addEventListener('click', (e) => {
      if (e.target.classList.contains('step-timer-btn')) return;
      card.classList.toggle('active-step');
    });
    
    // Trigger Timer click event
    const tBtn = card.querySelector('.step-timer-btn');
    if (tBtn) {
      tBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        const mins = parseInt(tBtn.getAttribute('data-minutes'));
        const stepNum = tBtn.getAttribute('data-step');
        startCookingTimer(`${selectedRecipe.title} — Step ${stepNum}`, mins);
      });
    }
    
    list.appendChild(card);
  });
}

function toggleStarred() {
  if (!selectedRecipe) return;
  selectedRecipe.starred = !selectedRecipe.starred;
  
  const idx = recipes.findIndex(r => r.id === selectedRecipe.id);
  if (idx !== -1) recipes[idx] = selectedRecipe;
  
  localStorage.setItem('recipes_library', JSON.stringify(recipes));
  showToast(selectedRecipe.starred ? `Starred "${selectedRecipe.title}"` : `Unstarred "${selectedRecipe.title}"`, 'success');
  
  updateCategoryCounts();
  renderDashboard();
  renderRecipeDetail();
}



function deleteRecipeById(recipeId) {
  recipes = recipes.filter(r => r.id !== recipeId);
  localStorage.setItem('recipes_library', JSON.stringify(recipes));
  
  if (selectedRecipe && selectedRecipe.id === recipeId) {
    selectedRecipe = null;
  }
  
  updateCategoryCounts();
  renderDashboard();
  renderRecipeDetail();
  showToast('Recipe deleted successfully', 'success');
}


/* -------------------------------------------------------------
   MANUSCRIPT CONVERTER WORKSPACE
   ------------------------------------------------------------- */

function setupUploadEvents() {
  // Clicking the dropzone triggers file input
  dropzone.addEventListener('click', () => fileInput.click());

  fileInput.addEventListener('change', (e) => {
    if (e.target.files.length > 0) {
      handleFileSelection(e.target.files[0]);
    }
  });

  // Drag and drop listeners
  dropzone.addEventListener('dragover', (e) => {
    e.preventDefault();
    dropzone.classList.add('dragover');
  });

  dropzone.addEventListener('dragleave', () => {
    dropzone.classList.remove('dragover');
  });

  dropzone.addEventListener('drop', (e) => {
    e.preventDefault();
    dropzone.classList.remove('dragover');
    if (e.dataTransfer.files.length > 0) {
      handleFileSelection(e.dataTransfer.files[0]);
    }
  });

  // Remove image preview
  btnRemoveImg.addEventListener('click', (e) => {
    e.stopPropagation();
    resetUploadedImageState();
  });

  // Load sample image
  btnLoadSample.addEventListener('click', () => {
    if (typeof SAMPLE_IMAGE_BASE64 !== 'undefined') {
      uploadedImageBase64 = SAMPLE_IMAGE_BASE64;
      imagePreview.src = SAMPLE_IMAGE_BASE64;
      dropzone.style.display = 'none';
      imagePreviewWrapper.style.display = 'block';
      btnExtract.disabled = false;
      showToast('Loaded sample manuscript image', 'info');
    } else {
      showToast('Sample manuscript image not found.', 'error');
    }
  });

  // OCR button action
  btnExtract.addEventListener('click', () => {
    if (uploadedImageBase64) {
      triggerOcrConversion(uploadedImageBase64);
    }
  });
}

function handleFileSelection(file) {
  if (!file.type.startsWith('image/')) {
    showToast('Please select a valid image file.', 'error');
    return;
  }

  const reader = new FileReader();
  reader.onload = (e) => {
    uploadedImageBase64 = e.target.result;
    imagePreview.src = e.target.result;
    dropzone.style.display = 'none';
    imagePreviewWrapper.style.display = 'block';
    btnExtract.disabled = false;
    showToast('Image loaded successfully', 'success');
  };
  reader.readAsDataURL(file);
}

function resetUploadedImageState() {
  uploadedImageBase64 = null;
  imagePreview.src = '#';
  imagePreviewWrapper.style.display = 'none';
  dropzone.style.display = 'flex';
  btnExtract.disabled = true;
  fileInput.value = ''; // Reset file input
}

function updateLoadingText(text, delay) {
  return new Promise(resolve => {
    setTimeout(() => {
      aiLoadingText.textContent = text;
      resolve();
    }, delay);
  });
}

async function triggerOcrConversion(imageBase64) {
  const savedKey = localStorage.getItem('gemini_api_key');
  const isSample = (typeof SAMPLE_IMAGE_BASE64 !== 'undefined' && imageBase64 === SAMPLE_IMAGE_BASE64);
  
  if (!savedKey && !isSample) {
    alert("Gemini API Key Required!\n\nTo digitize your own handwritten recipe, please get a free API key from Google AI Studio (aistudio.google.com) and save it in the Settings tab.\n\nOnly the pre-loaded 'Sample' recipe can be processed in Demo Mode without a key.");
    return;
  }

  // Show UI loading overlays
  imagePreviewWrapper.classList.add('scanning');
  aiLoadingOverlay.classList.add('active');
  
  if (savedKey) {
    // REAL OCR FLOW USING GEMINI API
    aiLoadingText.textContent = "Sending image to Gemini...";
    
    try {
      // Clean base64 encoding prefix
      const base64Data = imageBase64.split(',')[1];
      const mimeType = imageBase64.split(',')[0].split(':')[1].split(';')[0];
      
      const payload = {
        contents: [{
          parts: [
            {
              text: `You are a professional digital recipe archivist. Read the attached handwritten recipe manuscript.
It may be written in English, Marathi (Devanagari script), or a blend of both.
Perform high-accuracy transcription (extracting original text) and full translation.
Output your extraction strictly in the following JSON format. Ensure all strings are correctly formatted.

CRITICAL INSTRUCTIONS:
1. Translate Marathi terms to English for the English fields, but transcribe original Marathi text for any 'Marathi' fields.
2. Under "ingredients", match each item's quantity, unit, name, nameMarathi (if written/translatable), and notes (e.g. "finely cut", "chopped").
3. Under "instructions", translate and write the English instruction ('text') and transcribe the Marathi instruction ('textMarathi'). Match the step numbers.
4. Extract any critical notes, alerts, or steps into "tips" (array of strings). For example, special frying techniques.
5. If the author is written (e.g. "Sonali Divekar" at the top right), extract it. Otherwise use "Unknown".
6. Return ONLY the JSON object, absolutely no markdown formatting, no backticks, no explanatory text.

JSON Schema:
{
  "title": "Recipe Title in English",
  "titleMarathi": "Recipe Title in Marathi (if present/translatable)",
  "author": "Author Name",
  "category": "Appetizers | Mains | Desserts | Beverages | Other",
  "yield": "e.g. 32 pieces, 4 servings",
  "prepTime": "e.g. 20 mins",
  "cookTime": "e.g. 25 mins",
  "totalTime": "e.g. 45 mins",
  "description": "A brief attractive 1-2 sentence description summarizing the dish.",
  "ingredients": [
    {
      "quantity": "quantity",
      "unit": "unit",
      "name": "ingredient name in English",
      "nameMarathi": "ingredient name in Marathi",
      "notes": "extra details (e.g. finely chopped)"
    }
  ],
  "instructions": [
    {
      "step": 1,
      "text": "Instruction details in English",
      "textMarathi": "Instruction details in Marathi"
    }
  ],
  "tips": [
    "Tip 1...", "Tip 2..."
  ]
}`
            },
            {
              inlineData: {
                mimeType: mimeType,
                data: base64Data
              }
            }
          ]
        }]
      };

      const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${savedKey}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        let errDetail = `Status ${response.status}`;
        try {
          const errData = await response.json();
          if (errData && errData.error && errData.error.message) {
            errDetail = errData.error.message;
          }
        } catch (_) {}
        throw new Error(errDetail);
      }

      const resData = await response.json();
      const rawText = resData.candidates[0].content.parts[0].text;
      
      // Attempt to clean markdown wrapper if present
      let cleanJsonText = rawText.trim();
      if (cleanJsonText.startsWith('```')) {
        cleanJsonText = cleanJsonText.replace(/^```json/, '').replace(/^```/, '').replace(/```$/, '').trim();
      }
      
      const parsedRecipe = JSON.parse(cleanJsonText);
      populateEditorFields(parsedRecipe);
      
      showToast('Manuscript successfully processed by AI!', 'success');
      
    } catch (err) {
      console.error(err);
      alert(`AI Extraction Failed!\n\nError: ${err.message}\n\nPlease verify your Gemini API key in the Settings tab and check your internet connection.`);
    }
    
  } else {
    // DEMO SIMULATION FLOW (Only triggered for pre-loaded sample)
    await runMockExtractionSimulation();
  }

  // Turn off loading states
  imagePreviewWrapper.classList.remove('scanning');
  aiLoadingOverlay.classList.remove('active');
}

async function runMockExtractionSimulation() {
  aiLoadingText.textContent = "AI Model initializing...";
  await updateLoadingText("Reading manuscript structure...", 1000);
  await updateLoadingText("Transcribing Marathi Devanagari script...", 1200);
  await updateLoadingText("Translating ingredients & quantities...", 1000);
  await updateLoadingText("Formatting recipe card schema...", 800);
  
  // Default to vegetable toast data for the demo
  const vegetableToastMock = DEFAULT_RECIPES[0];
  populateEditorFields(vegetableToastMock);
  
  showToast('Demo Mode: Form populated with transcribed Vegetable Toast data.', 'info');
}

function populateEditorFields(recipeData) {
  recipeTitle.value = recipeData.title || '';
  recipeTitleMarathi.value = recipeData.titleMarathi || '';
  recipeAuthor.value = recipeData.author || '';
  recipeCategory.value = recipeData.category || 'Appetizers';
  recipeYield.value = recipeData.yield || '';
  recipePrepTime.value = recipeData.prepTime || '';
  recipeCookTime.value = recipeData.cookTime || '';
  recipeTotalTime.value = recipeData.totalTime || '';
  recipeDesc.value = recipeData.description || '';
  
  // Tips field: Join array back with newlines
  if (recipeData.tips && Array.isArray(recipeData.tips)) {
    recipeTips.value = recipeData.tips.join('\n');
  } else {
    recipeTips.value = '';
  }

  // Populate dynamic lists
  ingredientsFormList.innerHTML = '';
  if (recipeData.ingredients && recipeData.ingredients.length > 0) {
    recipeData.ingredients.forEach(ing => {
      addIngredientRowToForm(ing.quantity, ing.unit, ing.name, ing.nameMarathi, ing.notes);
    });
  } else {
    addIngredientRowToForm(); // Load at least one empty
  }

  stepsFormList.innerHTML = '';
  if (recipeData.instructions && recipeData.instructions.length > 0) {
    recipeData.instructions.forEach(step => {
      addStepRowToForm(step.step, step.text, step.textMarathi);
    });
  } else {
    addStepRowToForm(1); // Load at least one empty
  }
}

/* -------------------------------------------------------------
   DYNAMIC FORM WORKSPACE (INGREDIENTS & STEPS)
   ------------------------------------------------------------- */

function setupDynamicFormFields() {
  btnAddIngredient.addEventListener('click', () => addIngredientRowToForm());
  btnAddStep.addEventListener('click', () => {
    const stepCount = stepsFormList.children.length + 1;
    addStepRowToForm(stepCount);
  });

  // Save recipe button handles submission
  recipeForm.addEventListener('submit', handleRecipeSave);
  
  btnCancelEdit.addEventListener('click', () => {
    resetEditorForm();
    navigateToPage('dashboard');
  });
}

function addIngredientRowToForm(qty = '', unit = '', name = '', nameMar = '', notes = '') {
  const row = document.createElement('div');
  row.className = 'dynamic-list-row';
  
  row.innerHTML = `
    <input type="text" placeholder="Qty" class="ing-qty" value="${qty}" style="width: 70px;">
    <input type="text" placeholder="Unit (e.g. g, tsp)" class="ing-unit" value="${unit}" style="width: 90px;">
    <input type="text" placeholder="Ingredient Name (English)" class="ing-name" value="${name}" required>
    <input type="text" placeholder="नाव (मराठी)" class="ing-name-mar" value="${nameMar}">
    <input type="text" placeholder="Notes (e.g. finely cut)" class="ing-notes" value="${notes}">
    <button type="button" class="btn-icon delete" title="Delete ingredient">✕</button>
  `;
  
  // Attach delete action
  row.querySelector('.delete').addEventListener('click', () => {
    row.remove();
  });
  
  ingredientsFormList.appendChild(row);
}

function addStepRowToForm(stepNumber, text = '', textMar = '') {
  const row = document.createElement('div');
  row.className = 'dynamic-list-row';
  row.style.alignItems = 'flex-start';
  
  row.innerHTML = `
    <div class="step-number" style="margin-top: 8px;">${stepNumber}</div>
    <div style="flex: 1; display: flex; flex-direction: column; gap: 8px;">
      <textarea placeholder="Step instruction in English..." class="step-text" rows="2" required>${text}</textarea>
      <textarea placeholder="कृती मराठीत..." class="step-text-mar" rows="2">${textMar}</textarea>
    </div>
    <button type="button" class="btn-icon delete" title="Delete step" style="margin-top: 8px;">✕</button>
  `;
  
  // Attach delete action
  row.querySelector('.delete').addEventListener('click', () => {
    row.remove();
    recalculateFormStepNumbers();
  });
  
  stepsFormList.appendChild(row);
}

function recalculateFormStepNumbers() {
  const rows = stepsFormList.querySelectorAll('.dynamic-list-row');
  rows.forEach((row, index) => {
    row.querySelector('.step-number').textContent = index + 1;
  });
}

function loadRecipeIntoEditor(recipe) {
  currentEditingRecipeId = recipe.id;
  
  // Change form header and button titles
  document.querySelector('.form-title').textContent = `Edit Recipe: ${recipe.title}`;
  document.getElementById('btnSaveRecipe').textContent = "Update Recipe";
  
  populateEditorFields(recipe);
  navigateToPage('digitize');
}

function resetEditorForm() {
  currentEditingRecipeId = null;
  document.querySelector('.form-title').textContent = "2. Verify & Edit Recipe Details";
  document.getElementById('btnSaveRecipe').textContent = "Save to Recipe Book";
  
  recipeForm.reset();
  ingredientsFormList.innerHTML = '';
  stepsFormList.innerHTML = '';
  resetUploadedImageState();
  
  // Add initial empty rows
  addIngredientRowToForm();
  addStepRowToForm(1);
}

function handleRecipeSave(e) {
  e.preventDefault();
  
  // 1. Gather form fields
  const title = recipeTitle.value.trim();
  const titleMarathi = recipeTitleMarathi.value.trim();
  const author = recipeAuthor.value.trim();
  const category = recipeCategory.value;
  const yieldVal = recipeYield.value.trim();
  const prepTime = recipePrepTime.value.trim();
  const cookTime = recipeCookTime.value.trim();
  const totalTime = recipeTotalTime.value.trim();
  const description = recipeDesc.value.trim();
  
  // Gather ingredients list
  const ingredients = [];
  const ingRows = ingredientsFormList.querySelectorAll('.dynamic-list-row');
  ingRows.forEach(row => {
    const qty = row.querySelector('.ing-qty').value.trim();
    const unit = row.querySelector('.ing-unit').value.trim();
    const name = row.querySelector('.ing-name').value.trim();
    const nameMarathi = row.querySelector('.ing-name-mar').value.trim();
    const notes = row.querySelector('.ing-notes').value.trim();
    
    if (name) {
      ingredients.push({
        quantity: qty,
        unit: unit,
        name: name,
        nameMarathi: nameMarathi,
        notes: notes
      });
    }
  });
  
  // Gather cooking instructions steps
  const instructions = [];
  const stepRows = stepsFormList.querySelectorAll('.dynamic-list-row');
  stepRows.forEach((row, idx) => {
    const text = row.querySelector('.step-text').value.trim();
    const textMarathi = row.querySelector('.step-text-mar').value.trim();
    
    if (text || textMarathi) {
      instructions.push({
        step: idx + 1,
        text: text,
        textMarathi: textMarathi
      });
    }
  });
  
  // Gather tips
  const tips = recipeTips.value.split('\n').map(t => t.trim()).filter(t => t.length > 0);
  
  // 2. Build Recipe Object
  let recipeId = currentEditingRecipeId;
  if (!recipeId) {
    // Generate simple slug-based ID
    recipeId = title.toLowerCase().replace(/[^a-z0-9]+/g, '-') + '-' + Date.now().toString().substring(8);
  }
  
  const savedRecipeObj = {
    id: recipeId,
    title: title,
    titleMarathi: titleMarathi,
    author: author,
    category: category,
    yield: yieldVal,
    prepTime: prepTime,
    cookTime: cookTime,
    totalTime: totalTime,
    description: description || `Hand-crafted recipe for ${title}.`,
    ingredients: ingredients,
    instructions: instructions,
    tips: tips
  };
  
  // 3. Save / Update in array
  if (currentEditingRecipeId) {
    const index = recipes.findIndex(r => r.id === currentEditingRecipeId);
    if (index !== -1) {
      recipes[index] = savedRecipeObj;
    }
    showToast('Recipe updated successfully', 'success');
  } else {
    recipes.push(savedRecipeObj);
    showToast('New recipe saved to library', 'success');
  }
  
  // 4. Sync localStorage
  localStorage.setItem('recipes_library', JSON.stringify(recipes));
  
  // 5. Clean up editor form and redirect
  resetEditorForm();
  renderDashboard();
  navigateToPage('dashboard');
}

/* -------------------------------------------------------------
   SETTINGS PANEL & UTILITIES
   ------------------------------------------------------------- */

function setupSettingsEvents() {
  btnSaveApiKey.addEventListener('click', () => {
    const key = geminiApiKey.value.trim();
    if (key) {
      localStorage.setItem('gemini_api_key', key);
      updateApiStatusUI(true);
      showToast('Gemini API key saved securely', 'success');
    } else {
      localStorage.removeItem('gemini_api_key');
      updateApiStatusUI(false);
      showToast('API key removed. Running in Demo mode.', 'info');
    }
  });

  btnToggleApiKeyVisibility.addEventListener('click', () => {
    if (geminiApiKey.type === 'password') {
      geminiApiKey.type = 'text';
      btnToggleApiKeyVisibility.textContent = 'Hide';
    } else {
      geminiApiKey.type = 'password';
      btnToggleApiKeyVisibility.textContent = 'Show';
    }
  });

  // Export Library
  btnExportLib.addEventListener('click', () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(recipes, null, 2));
    const dlAnchorElem = document.createElement('a');
    dlAnchorElem.setAttribute("href", dataStr);
    dlAnchorElem.setAttribute("download", "recipes_library_backup.json");
    dlAnchorElem.click();
    showToast('Library database exported', 'success');
  });

  // Import Library
  btnImportLib.addEventListener('click', () => importFileInput.click());
  importFileInput.addEventListener('change', (e) => {
    if (e.target.files.length > 0) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onload = (event) => {
        try {
          const importedData = JSON.parse(event.target.result);
          if (Array.isArray(importedData)) {
            recipes = importedData;
            localStorage.setItem('recipes_library', JSON.stringify(recipes));
            renderDashboard();
            showToast('Library imported successfully!', 'success');
            navigateToPage('dashboard');
          } else {
            showToast('Invalid backup file format.', 'error');
          }
        } catch (err) {
          showToast('Failed to parse import file.', 'error');
        }
      };
      reader.readAsText(file);
    }
  });

  // Reset Library
  btnResetLib.addEventListener('click', () => {
    if (confirm('Are you sure you want to reset your library to default recipes? This will erase all custom added or edited recipes.')) {
      recipes = [...DEFAULT_RECIPES];
      localStorage.setItem('recipes_library', JSON.stringify(recipes));
      renderDashboard();
      showToast('Library reset to default values', 'info');
      navigateToPage('dashboard');
    }
  });
}

function updateApiStatusUI(hasKey) {
  if (hasKey) {
    apiStatusBadge.className = 'ai-status-badge active';
    apiStatusBadge.querySelector('.status-dot').textContent = '●';
    apiStatusBadge.querySelector('.status-label').textContent = 'Gemini AI Active';
  } else {
    apiStatusBadge.className = 'ai-status-badge inactive';
    apiStatusBadge.querySelector('.status-dot').textContent = '●';
    apiStatusBadge.querySelector('.status-label').textContent = 'Demo Mode Active';
  }
}

/* -------------------------------------------------------------
   TOAST NOTIFICATION UTILITY
   ------------------------------------------------------------- */

let toastTimeout = null;
function showToast(text, type = 'info') {
  // Clear any existing timeout
  if (toastTimeout) {
    clearTimeout(toastTimeout);
  }
  
  toastText.textContent = text;
  toastMsg.className = `toast-msg show toast-${type}`;
  
  // Set icon based on status type
  const iconSpan = toastMsg.querySelector('.toast-icon');
  if (type === 'success') iconSpan.textContent = '✅';
  else if (type === 'error') iconSpan.textContent = '❌';
  else iconSpan.textContent = 'ℹ️';

  toastTimeout = setTimeout(() => {
    toastMsg.classList.remove('show');
  }, 4000);
}

/* -------------------------------------------------------------
   PAPRIKA-STYLE UTILITY AND INTERACTIVE FUNCTIONS
   ------------------------------------------------------------- */

// 1. SERVINGS SCALER PARSER AND MULTIPLIER
function scaleQuantity(qtyStr, factor) {
  if (!qtyStr) return '';
  const str = qtyStr.trim();
  if (factor === 1) return str;

  function parseVal(s) {
    s = s.trim();
    if (!s) return 0;
    
    // Mixed number like "1 1/2"
    if (s.includes(' ')) {
      const parts = s.split(/\s+/);
      let sum = 0;
      for (const p of parts) {
        sum += parseVal(p);
      }
      return sum;
    }
    
    // Fraction like "1/2"
    if (s.includes('/')) {
      const [num, den] = s.split('/').map(Number);
      if (den) return num / den;
      return 0;
    }
    
    return Number(s);
  }

  function formatVal(v) {
    if (isNaN(v) || v <= 0) return '';
    
    const integer = Math.floor(v);
    const decimal = v - integer;
    
    if (Math.abs(decimal) < 0.01) return String(integer);
    if (Math.abs(decimal - 0.5) < 0.02) return (integer > 0 ? integer + ' ' : '') + '1/2';
    if (Math.abs(decimal - 0.25) < 0.02) return (integer > 0 ? integer + ' ' : '') + '1/4';
    if (Math.abs(decimal - 0.75) < 0.02) return (integer > 0 ? integer + ' ' : '') + '3/4';
    if (Math.abs(decimal - 0.333) < 0.03) return (integer > 0 ? integer + ' ' : '') + '1/3';
    if (Math.abs(decimal - 0.666) < 0.03) return (integer > 0 ? integer + ' ' : '') + '2/3';
    if (Math.abs(decimal - 0.125) < 0.02) return (integer > 0 ? integer + ' ' : '') + '1/8';
    
    return parseFloat(v.toFixed(2)).toString();
  }

  // Check for ranges like "6-8" or "6 to 8"
  const rangeRegex = /^(\d+(?:\s+\d+\/\d+|\/\d+|\.\d+)?)\s*(-|to)\s*(\d+(?:\s+\d+\/\d+|\/\d+|\.\d+)?)$/i;
  const match = str.match(rangeRegex);
  if (match) {
    const val1 = parseVal(match[1]);
    const val2 = parseVal(match[3]);
    return `${formatVal(val1 * factor)}${match[2]}${formatVal(val2 * factor)}`;
  }

  const single = parseVal(str);
  if (!isNaN(single) && single > 0) {
    return formatVal(single * factor);
  }

  return str;
}

// 2. DURATION DETECTOR IN STEPS
function extractDuration(stepText) {
  if (!stepText) return null;
  
  // Matches times like "20 mins", "15 minutes", "2 hours", "1.5 hrs", "5-7 minutes"
  const regex = /(\d+(?:\s*(?:-|to)\s*\d+)?)\s*(mins?|minutes?|hours?|hrs?|h)\b/i;
  const match = stepText.match(regex);
  if (!match) return null;
  
  const numStr = match[1];
  const unit = match[2].toLowerCase();
  
  let rawNum = 0;
  if (numStr.includes('-') || numStr.toLowerCase().includes('to')) {
    const parts = numStr.split(/-|to/i);
    rawNum = parseFloat(parts[parts.length - 1].trim());
  } else {
    rawNum = parseFloat(numStr.trim());
  }
  
  let minutes = rawNum;
  if (unit.startsWith('hour') || unit.startsWith('hr') || unit === 'h') {
    minutes = rawNum * 60;
  }
  
  return {
    display: match[0],
    minutes: Math.round(minutes)
  };
}

// 3. GLOBAL COOKING COUNTDOWN TIMER
function setupTimerEventListeners() {
  const btnPlay = document.getElementById('btnTimerPlayPause');
  const btnReset = document.getElementById('btnTimerReset');
  const btnClose = document.getElementById('btnTimerClose');
  
  if (btnPlay) {
    btnPlay.addEventListener('click', () => {
      timerIsPaused = !timerIsPaused;
      updateTimerButtonsUI();
    });
  }
  
  if (btnReset) {
    btnReset.addEventListener('click', () => {
      timerRemainingSeconds = timerTotalSeconds;
      updateTimerDisplay();
      timerIsPaused = true;
      updateTimerButtonsUI();
    });
  }
  
  if (btnClose) {
    btnClose.addEventListener('click', () => {
      if (timerInterval) {
        clearInterval(timerInterval);
        timerInterval = null;
      }
      const bar = document.getElementById('activeTimerBar');
      if (bar) bar.classList.remove('active');
    });
  }
}

function startCookingTimer(title, minutes) {
  if (timerInterval) clearInterval(timerInterval);
  
  timerTotalSeconds = minutes * 60;
  timerRemainingSeconds = timerTotalSeconds;
  timerIsPaused = false;
  
  document.getElementById('activeTimerTitle').textContent = title;
  updateTimerDisplay();
  
  const bar = document.getElementById('activeTimerBar');
  if (bar) bar.classList.add('active');
  
  timerInterval = setInterval(() => {
    if (!timerIsPaused) {
      timerRemainingSeconds--;
      updateTimerDisplay();
      
      if (timerRemainingSeconds <= 0) {
        clearInterval(timerInterval);
        timerInterval = null;
        playAlarmSound();
        showToast(`Timer finished: ${title}!`, 'success');
        document.getElementById('activeTimerTitle').textContent = "Timer Finished!";
      }
    }
  }, 1000);
  
  showToast(`Timer started for ${minutes} minutes.`, 'info');
  updateTimerButtonsUI();
}

function updateTimerDisplay() {
  const m = Math.floor(timerRemainingSeconds / 60);
  const s = timerRemainingSeconds % 60;
  const timerCountdown = document.getElementById('timerCountdown');
  if (timerCountdown) {
    timerCountdown.textContent = `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
  }
}

function updateTimerButtonsUI() {
  const btn = document.getElementById('btnTimerPlayPause');
  if (btn) btn.textContent = timerIsPaused ? '▶' : '⏸';
}

function playAlarmSound() {
  try {
    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
    let startTime = audioCtx.currentTime;
    notes.forEach((freq, index) => {
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.frequency.setValueAtTime(freq, startTime);
      gain.gain.setValueAtTime(0, startTime);
      gain.gain.linearRampToValueAtTime(0.35, startTime + 0.05);
      gain.gain.exponentialRampToValueAtTime(0.001, startTime + 0.4);
      osc.start(startTime);
      osc.stop(startTime + 0.45);
      startTime += 0.15;
    });
  } catch (err) {
    console.warn("Web Audio API blocked or not supported: ", err);
  }
}

// Start application when DOM is ready
document.addEventListener('DOMContentLoaded', init);
