export function getCaretCoordinates() {
    const caretPosition = { x: 0, y: 0 };
    // Placeholder implementation - Replace with your actual logic to get caret coordinates
  
    // Example logic to get caret coordinates
    const selection = window.getSelection();
    if (selection.rangeCount > 0) {
      const range = selection.getRangeAt(0);
      const boundingRect = range.getBoundingClientRect();
      caretPosition.x = boundingRect.left;
      caretPosition.y = boundingRect.top;
    }
  
    return caretPosition;
  }
  
  export function setCaretToEnd(element) {
    // Placeholder implementation - Replace with your actual logic to set caret to the end
  
    // Example logic to set caret to the end
    const range = document.createRange();
    const selection = window.getSelection();
    range.selectNodeContents(element);
    range.collapse(false);
    selection.removeAllRanges();
    selection.addRange(range);
  }
  
  // You can add additional utility functions if needed
  