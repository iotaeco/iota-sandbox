export function clearOutput() {
    const outputWindow = document.querySelector(".output-window");
    outputWindow.innerHTML = "";
}

export function logOutput(message) {
    const outputWindow = document.querySelector(".output-window");
    outputWindow.innerHTML += `${message.replace(/\n/g, "<br/>").replace(/\t/g, "&nbsp;&nbsp;&nbsp;")}<br/><br/>`;
    outputWindow.scrollTop = outputWindow.scrollHeight;
}

export function logError(message, err) {
    let e = `<span class="error">${message}</span>`;
    if (err) {
        e += `<span class="error">\n${err.toString()}</span>`;
    }
    logOutput(e);
}

export function logLink(link) {
    const outputWindow = document.querySelector(".output-window");
    let output = `<a href="${link}" target="_blank" rel="noreferrer noopener">${link}</a><br/><br/>`;
    outputWindow.innerHTML += output;
    outputWindow.scrollTop = outputWindow.scrollHeight;
}