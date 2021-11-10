var input = document.getElementById("input");
var output = document.getElementById("output");

var markdown = input.value;

function parseMarkdown(markdownText) {
  const htmlText = markdownText
    .replace(/^###### (.*$)/gim, '<h6 class="heading-6">$1</h6>')
    .replace(/^##### (.*$)/gim, '<h5 class="heading-5">$1</h5>')
    .replace(/^#### (.*$)/gim, '<h4 class="heading-4">$1</h4>')
    .replace(/^### (.*$)/gim, '<h3 class="heading-3">$1</h3>')
    .replace(/^## (.*$)/gim, '<h2 class="heading-2">$1</h2>')
    .replace(/^# (.*$)/gim, '<h1 class="heading-1">$1</h1><hr />')
    .replace(/^\> (.*$)/gim, '<blockquote class="md">$1</blockquote>')
    .replace(/\*\*(.*)\*\*/gim, '<span class="bold">$1</span>')
    .replace(/\*(.*)\*/gim, '<span class="italic">$1</span>')
    .replace(/!\[(.*?)\]\((.*?)\)/gim, '<img class="img" alt="$1" src="$2" />')
    .replace(/\[(.*?)\]\((.*?)\)/gim, '<a class="link" href="$2">$1</a>')
    .replace(/\n$|  /gim, "<br />")
    .replace(/^- (.*$)|^ - (.*$)/gim, "<li>$1$2</li>")
    .replace(/^\t(.*$)/gim, '<pre class="code-block">$1</pre>');

  return htmlText.trim();
}

input.addEventListener("keyup", () => {
  markdown = input.value;
  output.innerHTML = parseMarkdown(markdown);
});

// Make tabs typeable
input.addEventListener("keydown", function (e) {
  if (e.key === "Tab") {
    e.preventDefault();
    var start = this.selectionStart;
    var end = this.selectionEnd;

    // set textarea value to: text before caret + tab + text after caret
    this.value =
      this.value.substring(0, start) + "\t" + this.value.substring(end);

    // put caret at right position again
    this.selectionStart = this.selectionEnd = start + 1;
  }
});
