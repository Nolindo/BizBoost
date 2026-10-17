
const businesses = [
    {
        name: "Mama's Kitchen",
        category: "Food",
        icon: "🍲",
        description: "Homemade meals and traditional South African dishes.",
        location: "Durban, KwaZulu-Natal"
    },
    {
        name: "Urban Threads",
        category: "Fashion",
        icon: "👗",
        description: "Affordable clothing and fashion accessories.",
        location: "Durban, KwaZulu-Natal"
    },
    {
        name: "Glow Beauty Studio",
        category: "Beauty",
        icon: "✨",
        description: "Beauty treatments and personal care services.",
        location: "Durban, KwaZulu-Natal"
    },
    {
        name: "TechFix Solutions",
        category: "Technology",
        icon: "💻",
        description: "Basic computer support and troubleshooting.",
        location: "Durban, KwaZulu-Natal"
    },
    {
        name: "Fresh Blooms",
        category: "Services",
        icon: "💐",
        description: "Flower arrangements and gifts for special occasions.",
        location: "Durban, KwaZulu-Natal"
    },
    {
        name: "Sweet Treats",
        category: "Food",
        icon: "🧁",
        description: "Cakes, cupcakes, and treats for celebrations.",
        location: "Durban, KwaZulu-Natal"
    },    
    {
    name: "Durban Runner",
    category: "Delivery & Errands",
    icon: "🛵",
    description: "Reliable shopping and delivery services, parcel collection and drop-off, and personal errands in Durban.",
    location: "Durban Central, KwaZulu-Natal",
    whatsapp: "27730569708"
    }
    
];

const businessList = document.getElementById("businessList");
const searchInput = document.getElementById("searchInput");
const categoryFilters = document.getElementById("categoryFilters");
const resultCount = document.getElementById("resultCount");
const emptyMessage = document.getElementById("emptyMessage");

let selectedCategory = "All";

function displayBusinesses() {
    const searchTerm = searchInput.value.trim().toLowerCase();

    const filteredBusinesses = businesses.filter(function (business) {
        const matchesSearch =
            business.name.toLowerCase().includes(searchTerm) ||
            business.category.toLowerCase().includes(searchTerm) ||
            business.description.toLowerCase().includes(searchTerm) ||
            business.location.toLowerCase().includes(searchTerm);

        const matchesCategory =
            selectedCategory === "All" ||
            business.category === selectedCategory;

        return matchesSearch && matchesCategory;
    });

    businessList.replaceChildren();

    filteredBusinesses.forEach(function (business) {
        const card = document.createElement("article");
        card.className = "business-card";
        card.dataset.businessId = business.id;

        const icon = document.createElement("div");
        icon.className = "business-icon";
        icon.textContent = business.icon;

        const category = document.createElement("span");
        category.className = "business-category";
        category.textContent = business.category;

        const title = document.createElement("h3");
        title.textContent = business.name;

        const description = document.createElement("p");
        description.textContent = business.description;

        const location = document.createElement("div");
        location.className = "business-location";
        location.textContent = "📍 " + business.location;

        const contactButton = document.createElement("a");
              contactButton.className = "contact-button";
              contactButton.textContent = "💬 Contact on WhatsApp";
              contactButton.target = "_blank";
              contactButton.rel = "noopener noreferrer";

if (business.whatsapp) {
    contactButton.href =
        "https://wa.me/" + business.whatsapp +
        "?text=" + encodeURIComponent(
            "Hello " + business.name +
            ", I found your business on BizBoost and would like to know more."
        );
} else {
    contactButton.href = "#";
    contactButton.addEventListener("click", function (event) {
        event.preventDefault();
        alert("WhatsApp contact details are not available for this business yet.");
    });
}

        contactButton.addEventListener("click", function () {
            alert(
                "You selected " + business.name +
                ". Contact details will be available when business " +
                "registration and contact features are implemented."
            );
        });
        
const contactSection = document.createElement("div");
contactSection.className = "contact-section";
contactSection.appendChild(contactButton);

const actions = document.createElement("div");
actions.className = "business-actions";

const editButton = document.createElement("button");
editButton.className = "contact-button";
editButton.textContent = "Edit";


editButton.addEventListener("click", function () {
    
    document.getElementById("businessName").value =
        business.name;

    document.getElementById("businessCategory").value =
        business.category;

    document.getElementById("businessDescription").value =
        business.description;

    document.getElementById("businessLocation").value =
        business.location;

    document.getElementById("businessWhatsApp").value =
        business.whatsapp || "";

        businessForm.hidden = false;
        showFormButton.hidden = true;


    businessForm.scrollIntoView({
    behavior: "smooth",
    block: "center"
});
});


const deleteButton = document.createElement("button");
deleteButton.className = "delete-button";
deleteButton.textContent = "Delete";

deleteButton.addEventListener("click", function () {
    alert("Delete feature coming next!");
});

actions.append(editButton, deleteButton);

card.append(
    icon,
    category,
    title,
    description,
    location,
    contactSection,
    actions
);

        businessList.appendChild(card);
    });

    resultCount.textContent =
        "Showing " + filteredBusinesses.length +
        " of " + businesses.length + " businesses";

    emptyMessage.hidden = filteredBusinesses.length !== 0;
}

searchInput.addEventListener("input", displayBusinesses);

categoryFilters.addEventListener("click", function (event) {
    const button = event.target.closest(".category-btn");

    if (!button) return;

    selectedCategory = button.dataset.category;

    document.querySelectorAll(".category-btn").forEach(function (item) {
        item.classList.toggle("active", item === button);
    });

    displayBusinesses();
});

displayBusinesses();

console.log("BizBoost business directory is ready!");


const businessForm = document.getElementById("businessForm");
const showFormButton = document.getElementById("showFormButton");
const cancelFormButton = document.getElementById("cancelFormButton");
const formMessage = document.getElementById("formMessage");

try {
    const savedBusinesses = JSON.parse(
        localStorage.getItem("bizboostBusinesses") || "[]"
    );

    if (Array.isArray(savedBusinesses)) {
        savedBusinesses.forEach(function (business) {
            if (
                business &&
                typeof business.name === "string" &&
                typeof business.category === "string" &&
                typeof business.description === "string" &&
                typeof business.location === "string" &&
                
   [
    "Food",    "Fashion",    "Beauty",    "Technology",    "Services",    "Delivery & Errands"   ]
    .includes(business.category)

            ) {
                businesses.push(business);
            }
        });
    }
} catch (error) {
    console.warn("Could not load saved demo businesses.", error);
}

displayBusinesses();

showFormButton.addEventListener("click", function () {
    businessForm.hidden = false;
    showFormButton.hidden = true;
    document.getElementById("businessName").focus();
});

cancelFormButton.addEventListener("click", function () {
    businessForm.reset();
    businessForm.hidden = true;
    showFormButton.hidden = false;
    formMessage.textContent = "";
    formMessage.className = "";
});

businessForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("businessName").value.trim();
    const category = document.getElementById("businessCategory").value;
    const description = document
        .getElementById("businessDescription").value.trim();
    const location = document
        .getElementById("businessLocation").value.trim();
    const whatsapp = document
    .getElementById("businessWhatsApp").value.trim();

    if (!name || !category || !description || !location) {
        formMessage.textContent = "Please complete all fields.";
        formMessage.className = "error";
        return;
    }

    const newBusiness = {
        id: crypto.randomUUID(),
        name: name,
        category: category,
        description: description,
        location: location,
         whatsapp: whatsapp,
        icon: {
            Food: "🍲",
            Fashion: "👗",
            Beauty: "✨",
            Technology: "💻",
            Services: "🏪",
            "Delivery & Errands": "🛵"
        }[category]
    };

    let savedBusinesses = [];

    try {
        const existing = JSON.parse(
            localStorage.getItem("bizboostBusinesses") || "[]"
        );

        if (Array.isArray(existing)) {
            savedBusinesses = existing;
        }

        localStorage.setItem(
            "bizboostBusinesses",
            JSON.stringify([...savedBusinesses, newBusiness])
        );
    } catch (error) {
        formMessage.textContent =
            "Could not save this listing in your browser. " +
            "Check browser storage and try again.";
        formMessage.className = "error";
        return;
    }

    businesses.push(newBusiness);
    displayBusinesses();

    businessForm.reset();
    businessForm.hidden = true;
    showFormButton.hidden = false;

    formMessage.textContent = "";
    formMessage.className = "";

    document.getElementById("directory").scrollIntoView({
        behavior: "smooth"
    });
});

