const arg = new URL(document.location.href)
const galery = arg.searchParams.get("g")

const title = document.querySelector("#title")

const galeries = {
    city: {
        title: "City",
        path: "city",
        start: 1,
        end: 37
    },
    countryside: {
        title: "Country side",
        path: "country-side",
        start: 1,
        end: 11
    },
    flowers: {
        title: "Flowers",
        path: "flowers",
        start: 1,
        end: 10
    },
    forest: {
        title: "Forest",
        path: "forest",
        start: 1,
        end: 15
    },
    macro: {
        title: "Macro photography",
        path: "macro",
        start: 1,
        end: 12
    },
    mountain: {
        title: "Mountain",
        path: "mountain",
        start: 1,
        end: 48
    },
    other: {
        title: "Mountain",
        path: "other",
        start: 1,
        end: 6
    },
    sea: {
        title: "Sea",
        path: "sea",
        start: 1,
        end: 6
    },

}

const selected = galeries[galery]

if (!selected) {
    title.innerHTML = "Galery not found"
} else {
    title.innerHTML = selected.title
    displayPhotos(selected)
}

// if (galery.toLowerCase() == "forest") {
//     document.querySelector("body").style.background = "center no-repeat url('./img/forest/16.webp')"
//     document.querySelector("body").style.backgroundSize = "cover"
// }

function displayPhotos(selected) {
    const phContainer = document.querySelector("#photos-container")

    for (let i = selected.start; i < selected.end+1; i++) {
        const img = document.createElement("img")
        const imgUrl = `./img/${selected.path}/${i}.webp`
        img.src = imgUrl

        const aLink = document.createElement("a")
        aLink.href = `./show.html?source=${galery}&photo=${imgUrl}`
        aLink.appendChild(img)
        
        const li = document.createElement("li")
        li.appendChild(aLink)

        phContainer.appendChild(li)
    }
}