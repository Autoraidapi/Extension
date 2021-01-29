chrome.browserAction.onClicked.addListener(function () {
    var self = this;
    if(self.cid) {
        self.cid.close(); 
        self.cid = '';
    }
    else {        
        self.cid = window.open('index.html', self.cid, 'width=600,height=500');
    }    
});
