// This script runs in the context of your blog pages
console.log("Premium Blog Access extension is active on this page");

// You can also add custom styling or other indicators for premium users
const style = document.createElement("style");
style.textContent = `
  .premium-content {
    border-left: 3px solid #3498db;
    padding-left: 15px;
  }
  .premium-badge {
    background-color: #3498db;
    color: white;
    padding: 2px 8px;
    border-radius: 4px;
    font-size: 12px;
    margin-left: 5px;
  }
`;
document.head.appendChild(style);
