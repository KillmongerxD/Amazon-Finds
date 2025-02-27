// Toggle Sidebar
function toggleSidebar() {
    let sidebar = document.getElementById("categorySidebar");
    let content = document.querySelector(".content");

    if (sidebar.classList.contains("show")) {
        sidebar.classList.remove("show");
        content.style.marginLeft = "0";
    } else {
        sidebar.classList.add("show");
        content.style.marginLeft = "220px";
    }
}

// Show Selected Category
function showCategory(categoryId) {
    let categories = {
        "category1": [
            { name: "Product 1A", img: "https://via.placeholder.com/200", link: "#" },
            { name: "Product 1B", img: "https://via.placeholder.com/200", link: "#" }
        ],
        "category2": [
            { name: "Product 2A", img: "https://via.placeholder.com/200", link: "#" },
            { name: "Product 2B", img: "https://via.placeholder.com/200", link: "#" }
        ],
        "category3": [
            { name: "Product 3A", img: "https://via.placeholder.com/200", link: "#" },
            { name: "Product 3B", img: "https://via.placeholder.com/200", link: "#" }
        ],
        "category4": [
            { name: "Product 4A", img: "https://via.placeholder.com/200", link: "#" },
            { name: "Product 4B", img: "https://via.placeholder.com/200", link: "#" }
        ],
        "category5": [
            { name: "Product 5A", img: "https://via.placeholder.com/200", link: "#" },
            { name: "Product 5B", img: "https://via.placeholder.com/200", link: "#" }
        ]
    };

    document.getElementById("topProducts").style.display = "none";
    document.getElementById("categories").style.display = "block";
    document.getElementById("categoryTitle").innerText = categoryId.replace("category", "Category ");
    
    let categoryContent = document.getElementById("categoryContent");
    categoryContent.innerHTML = categories[categoryId].map(product => 
        `<div class="product"><img src="${product.img}" alt="${product.name}"><h3>${product.name}</h3><a href="${product.link}">Buy Now</a></div>`
    ).join('');
}
