//TODO: We may need to set pointer coordinates and all so they correspond with the element we are clicking.

function clickElement(elem) {
	
	//Mobile event dispatch order
	let events = ["touchstart", "touchend", "mouseover", "mousemove", "mousedown", "mouseup", "click"]
	
	events.forEach((event) => {
		if (event.includes("touch")) {
			elem.dispatchEvent(new TouchEvent(event))
		}
		else if (event.includes("mouse")) {
			elem.dispatchEvent(new MouseEvent(event))
		}
		else if (event === "click") {
			elem.click()
		}
	})
}
