const fontSelection=document.getElementById("fontSelect");
fontSelection.addEventListener("change",()=>{
    const selectedFont=fontSelection.value;
    chrome.tabs.query({active:true,currentWindow:true},(tabs)=>{
        chrome.tabs.sendMessage(tabs[0].id,{font:selectedFont})
    })
})
