const counters = document.querySelectorAll(".skills__intor-interest"),
    lines = document.querySelectorAll(".skills__line span");

counters.forEach((item, i) => {
    lines[i].style.width = item.innerHTML;
})
