var replaceTextInNode = function(parentNode){
    for(var i = parentNode.childNodes.length-1; i >= 0; i--){
        var node = parentNode.childNodes[i];

        
        //  Make sure this is a text node
                     
                     
        
        if(node.nodeType == Element.TEXT_NODE){
            node.textContent = node.textContent.replace(/\bthe\b/i, 't h e');
            node.textContent = node.textContent.replace(/\band\b/i, '粗 シ テ');
            node.textContent = node.textContent.replace(/\bof\b/i, 'k e k');
            node.textContent = node.textContent.replace(/\bor\b/i, 'nornor');
            node.textContent = node.textContent.replace(/\baesthetic\b/i, 'a e s t h e t i c');
            node.textContent = node.textContent.replace(/\bis\b/i, 'MAYHAPS BE');
            node.textContent = node.textContent.replace(/\bbasic\b/i, 'p H 1 4');
            node.textContent = node.textContent.replace(/\ba\b/i, 'ァァ唖々ア');
            node.textContent = node.textContent.replace(/e/i, '3');
            node.textContent = node.textContent.replace(/o/i, '0');
            node.textContent = node.textContent.replace(/a/i, '4');
            node.textContent = node.textContent.replace(/\bi\b/i, 'ワ タ シ ');
            node.textContent = node.textContent.replace(/!/i, ' ！！');
            node.textContent = node.textContent.replace(/thing/i, 'boop');
        } else if(node.nodeType == Element.ELEMENT_NODE){
            //  Check this node's child nodes for text nodes to act on

            replaceTextInNode(node);
        }
    }
};

replaceTextInNode(document.body);