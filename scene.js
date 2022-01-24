const inputs = document.querySelectorAll("input")

function handleChange() {
    const unit = this.dataset.sizing || ''
    document.documentElement.style.setProperty(`--${this.name}`, this.value + unit)
}

inputs.forEach(input => input.addEventListener("change", handleChange))
inputs.forEach(input => input.addEventListener("mousemove", handleChange))