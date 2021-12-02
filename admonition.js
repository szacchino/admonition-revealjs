window.RevealAdmonition = {
    id: 'admonition',
    init: function (deck) {
        var headings = document.evaluate("//p[starts-with(., '!!!')]", document, null, XPathResult.ANY_TYPE, null );
        var replacements = [];
        if (headings) {
            var oldNode = headings.iterateNext();
            while(oldNode) {
                var rows = oldNode.textContent.split("\n");
                if (rows.length) {
                    var titles = /(?:!!!)([\w]+)(?:[\s])?(.*)/.exec(rows[0]);
                    var text = rows[1].trim();
                    var newNode = document.createElement('div');
                    newNode.classList.add("admonition", titles[1]);
                    if (titles[2] !== '""') {
                        var newNodeTitle = document.createElement('p');
                        newNodeTitle.classList.add('admonition-title');
                        newNodeTitle.innerText = titles[2] || titles[1].replace(/^\w/, (c) => c.toUpperCase());;
                        newNode.appendChild(newNodeTitle);
                    }                    
                    var newNodePar = document.createElement('p');
                    newNodePar.innerText = text;
                    newNode.appendChild(newNodePar);
                    replacements.push({oldNode, newNode});
                }
                oldNode = headings.iterateNext();
            }
        }
        replacements.forEach(x => {
            x.oldNode.parentNode.replaceChild(x.newNode, x.oldNode);
        }); 
    }
  }
