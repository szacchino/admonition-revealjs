window.RevealAdmonition = {
    id: 'admonition',
    init: function (deck) {
        // console.log(deck);
        var headings = document.evaluate("//p[starts-with(., '!!!')]", document, null, XPathResult.ANY_TYPE, null );
        var replacements = [];
        if (headings) {
            var oldNode = headings.iterateNext();
            while(oldNode) {
                var rows = oldNode.textContent.split("\n");
                console.log("rows",rows);
                if (rows.length) {
                    var titles = /(?:!!!)([\w]+)(?:[\s])?(.*)/.exec(rows[0]);
                    // var titles = rows[0].split('!!!')[1].split(' ');
                    var text = rows[1].trim();
                    // console.log(titles);
                    // console.log(text);
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
                    // oldNode.parentNode.replaceChild(newNode, oldNode);
                }
                oldNode = headings.iterateNext();
            }
        }
        replacements.forEach(x => {
            x.oldNode.parentNode.replaceChild(x.newNode, x.oldNode);
        }); 
    }
  }
