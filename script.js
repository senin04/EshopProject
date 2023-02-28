let smallPictures = document.querySelectorAll(".smallNormal a");
let smallParanormal = document.querySelectorAll(".smallParanormal a");
let piecesNumber = document.querySelector(".pieces input");
let fotoGallery = document.querySelector(".fotoGalerry");
let bigImg = document.querySelector(".bigImg");
const previous = document.querySelector(".previous");
const next = document.querySelector(".next");
let btnCheckout = document.querySelector(".btn-checkout");

// funkcia na menenie obrázkov po kliknutí na miniaturne obrazky na stránke
for (let i = 0; i < smallPictures.length; i++) {
    smallPictures[i].addEventListener("click", (event) => {
        event.preventDefault();
        for (const element of smallPictures) {
            element.classList.remove("hrefActive");
            element.firstChild.classList.remove("imgActive");
        }
        for (const element of smallParanormal) {
            element.classList.remove("hrefActive");
            element.firstChild.classList.remove("imgActive");
        }
        event.target.classList.add("imgActive");
        event.target.parentElement.classList.add("hrefActive");
        smallParanormal[i].firstChild.classList.add("imgActive");
        smallParanormal[i].classList.add("hrefActive");
        document.querySelector(
            ".normal"
        ).style.backgroundImage = `url(images/image-product-${i + 1}.jpg)`;
        document.querySelector(
            ".paranormal"
        ).style.backgroundImage = `url(images/image-product-${i + 1}.jpg)`;
    });
}

//funckie na menenie obrázkov po kliknutí na šípky v nízkom rozlišení
let previousSmall = document.querySelector(".previous-small");
let nextSmall = document.querySelector(".next-small");

nextSmall.addEventListener("click", () => {
    for (let i = smallPictures.length - 1; i >= 0; i--) {
        if (smallPictures[i].classList.contains("hrefActive")) {
            for (const element of smallParanormal) {
                element.classList.remove("hrefActive");
                element.firstChild.classList.remove("imgActive");
            }
            if (i + 1 === smallPictures.length) {
                smallPictures[i - (smallPictures.length - 1)].classList.add(
                    "hrefActive"
                );
                smallPictures[
                    i - (smallPictures.length - 1)
                ].firstChild.classList.add("imgActive");
                document.querySelector(
                    ".normal"
                ).style.backgroundImage = `url(images/image-product-1.jpg)`;
                smallParanormal[
                    i - (smallPictures.length - 1)
                ].firstChild.classList.add("imgActive");
                smallParanormal[i - (smallPictures.length - 1)].classList.add(
                    "hrefActive"
                );
                document.querySelector(
                    ".paranormal"
                ).style.backgroundImage = `url(images/image-product-1.jpg)`;
            } else {
                smallPictures[i + 1].classList.add("hrefActive");
                smallPictures[i + 1].firstChild.classList.add("imgActive");
                document.querySelector(
                    ".normal"
                ).style.backgroundImage = `url(images/image-product-${
                    i + 2
                }.jpg)`;
                smallParanormal[i + 1].firstChild.classList.add("imgActive");
                smallParanormal[i + 1].classList.add("hrefActive");
                document.querySelector(
                    ".paranormal"
                ).style.backgroundImage = `url(images/image-product-${
                    i + 2
                }.jpg)`;
            }
            smallPictures[i].firstChild.classList.remove("imgActive");
            smallPictures[i].classList.remove("hrefActive");
            break;
        }
    }
});

previousSmall.addEventListener("click", () => {
    for (let i = smallPictures.length - 1; i >= 0; i--) {
        if (smallPictures[i].classList.contains("hrefActive")) {
            for (const element of smallParanormal) {
                element.classList.remove("hrefActive");
                element.firstChild.classList.remove("imgActive");
            }
            if (i === 0) {
                smallPictures[smallPictures.length - 1].classList.add(
                    "hrefActive"
                );
                smallPictures[
                    smallPictures.length - 1
                ].firstChild.classList.add("imgActive");
                document.querySelector(
                    ".normal"
                ).style.backgroundImage = `url(images/image-product-${smallPictures.length}.jpg)`;
                smallParanormal[
                    smallPictures.length - 1
                ].firstChild.classList.add("imgActive");
                smallParanormal[smallPictures.length - 1].classList.add(
                    "hrefActive"
                );
                document.querySelector(
                    ".paranormal"
                ).style.backgroundImage = `url(images/image-product-${smallPictures.length}.jpg)`;
            } else {
                smallPictures[i - 1].classList.add("hrefActive");
                smallPictures[i - 1].firstChild.classList.add("imgActive");
                document.querySelector(
                    ".normal"
                ).style.backgroundImage = `url(images/image-product-${i}.jpg)`;
                smallParanormal[i - 1].firstChild.classList.add("imgActive");
                smallParanormal[i - 1].classList.add("hrefActive");
                document.querySelector(
                    ".paranormal"
                ).style.backgroundImage = `url(images/image-product-${i}.jpg)`;
            }
            smallPictures[i].firstChild.classList.remove("imgActive");
            smallPictures[i].classList.remove("hrefActive");
            break;
        }
    }
});

// funkcia na menenie obrázkov po kliknutí vo fotogalérií
for (let i = 0; i < smallParanormal.length; i++) {
    smallParanormal[i].addEventListener("click", (event) => {
        event.preventDefault();
        for (const element of smallParanormal) {
            element.classList.remove("hrefActive");
            element.firstChild.classList.remove("imgActive");
        }
        event.target.classList.add("imgActive");
        event.target.parentElement.classList.add("hrefActive");
        document.querySelector(
            ".paranormal"
        ).style.backgroundImage = `url(images/image-product-${i + 1}.jpg)`;
    });
}

//funkcia na menenie obrázkov po kliknutí na šípky vo fotogalerií
next.addEventListener("click", () => {
    for (let i = smallParanormal.length - 1; i >= 0; i--) {
        if (smallParanormal[i].classList.contains("hrefActive")) {
            if (i + 1 === smallParanormal.length) {
                smallParanormal[i - (smallParanormal.length - 1)].classList.add(
                    "hrefActive"
                );
                smallParanormal[
                    i - (smallParanormal.length - 1)
                ].firstChild.classList.add("imgActive");
                document.querySelector(
                    ".paranormal"
                ).style.backgroundImage = `url(images/image-product-1.jpg)`;
            } else {
                smallParanormal[i + 1].classList.add("hrefActive");
                smallParanormal[i + 1].firstChild.classList.add("imgActive");
                document.querySelector(
                    ".paranormal"
                ).style.backgroundImage = `url(images/image-product-${
                    i + 2
                }.jpg)`;
            }
            smallParanormal[i].firstChild.classList.remove("imgActive");
            smallParanormal[i].classList.remove("hrefActive");
            break;
        }
    }
});

previous.addEventListener("click", () => {
    for (let i = smallParanormal.length - 1; i >= 0; i--) {
        if (smallParanormal[i].classList.contains("hrefActive")) {
            if (i === 0) {
                smallParanormal[smallParanormal.length - 1].classList.add(
                    "hrefActive"
                );
                smallParanormal[
                    smallParanormal.length - 1
                ].firstChild.classList.add("imgActive");
                document.querySelector(
                    ".paranormal"
                ).style.backgroundImage = `url(images/image-product-${smallParanormal.length}.jpg)`;
            } else {
                smallParanormal[i - 1].classList.add("hrefActive");
                smallParanormal[i - 1].firstChild.classList.add("imgActive");
                document.querySelector(
                    ".paranormal"
                ).style.backgroundImage = `url(images/image-product-${i}.jpg)`;
            }
            smallParanormal[i].firstChild.classList.remove("imgActive");
            smallParanormal[i].classList.remove("hrefActive");
            break;
        }
    }
});

// funkcia na plus a mínus pridávanie do košíka
document.querySelector(".minus").addEventListener("click", () => {
    if (piecesNumber.value > 0) {
        piecesNumber.value--;
    }
});
document
    .querySelector(".plus")
    .addEventListener("click", () => piecesNumber.value++);

//funkcia na vyskočenie galerie
let media = window.matchMedia("(max-width: 900px)");

bigImg.addEventListener("click", () => {
    if (media.matches) {
        fotoGallery.style.display = "none";
    } else {
        fotoGallery.style.display = "flex";
    }
});

document.getElementById("close").addEventListener("click", () => {
    fotoGallery.style.display = "none";
});

/////////////////////////////////////////////

let openCart = document.querySelector(".open-cart");
let cart = document.querySelector("#cart");
let cartUl = document.querySelector(".cart-ul");
let cartArrayItems = [];
let addtocart = document.querySelector(".addtocart");
let actualPrice = document.querySelector(".actualPriceNumber").textContent;
let cartUlLi = document.querySelector(".cart-ul li");
let inCart = 0;
let trash;

//funkcia na prídavanie do košíka
addtocart.addEventListener("click", () => {
    if (piecesNumber.value > 0) {
        btnCheckout.style.display = "initial";
        let i = cartArrayItems.findIndex(
            (oneItem) =>
                oneItem.itemName === document.querySelector("h1").textContent
        );
        if (i > -1) {
            cartArrayItems[i].numberOfItems =
                parseInt(cartArrayItems[i].numberOfItems) +
                parseInt(piecesNumber.value);
            cartUl.innerHTML = "";
            for (newItem of cartArrayItems) {
                let newLi = document.createElement("li");
                newLi.classList.add("space-between");
                newLi.innerHTML = `<img class="cart-img" src="images/image-product-1-thumbnail.jpg" alt="" srcset="">
                <div class="text-price-cart">
                    <p>${newItem.itemName}</p>
                    <p>$${actualPrice} x ${newItem.numberOfItems} <span>$${(
                    parseFloat(actualPrice) * parseFloat(newItem.numberOfItems)
                ).toFixed(2)}</span></p>
                </div>
                <img id="${
                    newItem.itemName
                }" class="trash" src="images/icon-delete.svg" alt="" srcset="">`;
                cartUl.appendChild(newLi);
                inCart += parseFloat(piecesNumber.value);
            }
        } else {
            cartUl.innerHTML = "";
            cartUlLi.classList.remove("space-around");
            let newItem = {
                itemName: document.querySelector("h1").textContent,
                itemPrice: actualPrice,
                numberOfItems: piecesNumber.value,
                itemImg: "images/image-product-1-thumbnail.jpg",
            };
            cartArrayItems.push(newItem);
            let newLi = document.createElement("li");
            newLi.classList.add("space-between");
            newLi.innerHTML = `<img class="cart-img space-between" src="${
                newItem.itemImg
            }" alt="" srcset="">
            <div class="text-price-cart">
                <p>${newItem.itemName}</p>
                <p>$${actualPrice} x ${piecesNumber.value} <span>$${(
                parseFloat(actualPrice) * parseFloat(piecesNumber.value)
            ).toFixed(2)}</span></p>
            </div>
            <img id="${
                newItem.itemName
            }" class="trash" src="images/icon-delete.svg" alt="" srcset="">`;
            cartUl.appendChild(newLi);
            inCart += parseFloat(piecesNumber.value);
        }

        //funkcia na zobrazovanie kolko je v košíku
        let existed = document.querySelectorAll(".items-counter");
        if (existed.length > 0) {
            document.querySelector(".items-counter").innerHTML = inCart;
        } else {
            let newDiv = document.createElement("div");
            newDiv.classList.add("items-counter");
            cart.prepend(newDiv);
            newDiv.innerHTML = inCart;
        }
        piecesNumber.value = "0";

        //funkcia na vymazanie z košíka
        trash = document.querySelector(".trash");
        trash.addEventListener("click", (event) => {
            cartArrayItems.splice(
                cartArrayItems.indexOf(
                    (oneItem) => oneItem.itemName === event.target.id
                )
            );
            event.target.parentElement.remove();
            if (cartArrayItems.length === 0) {
                btnCheckout.style.display = "none";
                cartUlLi.style.marginTop = "30px";
                let newLi = document.createElement("li");
                newLi.classList.add("space-around");
                let newP = document.createElement("p");
                newP.textContent = "Your cart is empty";
                newLi.appendChild(newP);
                cartUl.appendChild(newLi);
                inCart = 0;
                document.querySelector(".items-counter").remove();
            } else {
                btnCheckout.style.display = "initial";
                cartUlLi.style.marginTop = "initial";
            }
        });
    }
});

///////////////////////////////////////////////////////////////

//funkcia na zobrazenie košíka po pri kliknutí
cart.addEventListener("click", (event) => {
    if (
        event.target === cart ||
        event.target === document.querySelector(".items-counter")
    ) {
        openCart.classList.toggle("hidden");
        if (cartArrayItems.length === 0) {
            btnCheckout.style.display = "none";
        }
    }
});

document.addEventListener("click", (event) => {
    // console.log(cart.classList)
    if (
        !openCart.classList.contains("hidden") &&
        !cart.contains(event.target) &&
        !trash.contains(event.target)
    ) {
        openCart.classList.add("hidden");
    }
});

///////////////////////////////////////////////////////////////

let hiddenMenu = document.querySelector(".hidden-menu");
let hamburger = document.querySelector("#hamburger");
let hiddenMenuList = document.querySelector(".hidden-menu-list");

//funkcia na otvorenie a zatvorenie hamburger menu
hamburger.addEventListener("click", () => {
    hiddenMenu.classList.toggle("hidden");
});

document.addEventListener("click", (event) => {
    if (
        !hiddenMenu.classList.contains("hidden") &&
        !hiddenMenuList.contains(event.target) &&
        !hamburger.contains(event.target)
    ) {
        console.log("somtu");
        hiddenMenu.classList.add("hidden");
    }
});

document.querySelector("#close-menu").addEventListener("click", () => {
    hiddenMenu.classList.toggle("hidden");
});
