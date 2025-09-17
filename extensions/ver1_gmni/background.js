// Listen for messages from your website (external pages).
chrome.runtime.onMessageExternal.addListener(
  (request, sender, sendResponse) => {
    // Check if the message is the one you're looking for.
    if (request.action === "checkAccess") {
      // Respond to the website, granting access.
      sendResponse({ accessGranted: true });
      // Return true to indicate you will send an asynchronous response.
      return true;
    }

    // For any other messages or senders, don't respond.
  }
);
