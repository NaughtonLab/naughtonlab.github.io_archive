var GoogleAnalyticsHelpers;window.ga=window.ga||function(){(ga.q=ga.q||[]).push(arguments)},ga.l=+new Date,ga("create","UA-42466615-1","auto"),ga("require","cleanUrlTracker",{trailingSlash:"remove"}),ga("require","maxScrollTracker"),ga("require","mediaQueryTracker",{definitions:[{name:"Breakpoint",dimensionIndex:1,items:[{name:"sm",media:"all"},{name:"md",media:"(min-width: 768px)"},{name:"lg",media:"(min-width: 1200px)"}]},{name:"Pixel Density",dimensionIndex:2,items:[{name:"1x",media:"all"},{name:"1.5x",media:"(min-resolution: 144dpi)"},{name:"2x",media:"(min-resolution: 192dpi)"}]},{name:"Orientation",dimensionIndex:3,items:[{name:"landscape",media:"(orientation: landscape)"},{name:"portrait",media:"(orientation: portrait)"}]}]}),ga("require","outboundLinkTracker",{events:["click","auxclick","contextmenu"]}),ga("require","pageVisibilityTracker",{sendInitialPageview:!0}),ga("send","pageview"),function(e){function n(e,n,t,a){var i=t.getAttribute("title")?t.getAttribute("title"):"",r=0===i.length?t.textContent.trim():i;ga("send",{hitType:"event",eventCategory:e,eventAction:n.trim(),eventLabel:r||null,eventValue:a||null})}e.sendEvent=n}(GoogleAnalyticsHelpers||(GoogleAnalyticsHelpers={})),$(".homepage").on("click",".btn",function(e){GoogleAnalyticsHelpers.sendEvent("Home",e.currentTarget.textContent,e.currentTarget)}),$(".navbar").on("click",".navbar-toggle",function(e){GoogleAnalyticsHelpers.sendEvent("Home","Toggle Navigation Menu",e.currentTarget)}),$(".navbar").on("click",".navbar-brand, .navbar-nav a",function(e){GoogleAnalyticsHelpers.sendEvent("Home","Navigate",e.currentTarget)}),function(e,n,t,a,i,r){e.hj=e.hj||function(){(e.hj.q=e.hj.q||[]).push(arguments)},e._hjSettings={hjid:669289,hjsv:6},i=n.getElementsByTagName("head")[0],(r=n.createElement("script")).async=1,r.src=t+e._hjSettings.hjid+a+e._hjSettings.hjsv,i.appendChild(r)}(window,document,"https://static.hotjar.com/c/hotjar-",".js?sv=");