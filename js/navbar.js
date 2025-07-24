const NAVBAR = document.querySelector("nav");
let activePage;
let homepage;
let icon;
let mainMenu;

let menuNatFlags;
let subMenuNatFlags;
let itemNatFlags1;
let itemNatFlags1link;
let itemNatFlags2;
let itemNatFlags2link;

let menuFlagColours;
let subMenuFlagColours;
let FlagColoursRed;
let FlagColoursRedlink;
let FlagColoursOrange;
let FlagColoursOrangelink;
let FlagColoursYellow;
let FlagColoursYellowlink;
let FlagColoursGreen;
let FlagColoursGreenlink;
let FlagColoursCyan;
let FlagColoursCyanlink;
let FlagColoursBlue;
let FlagColoursBluelink;
let FlagColoursViolet;
let FlagColoursVioletlink;
let FlagColoursWhite;
let FlagColoursWhitelink;
let FlagColoursBlack;
let FlagColoursBlacklink;
let FlagColoursElse;
let FlagColoursElselink;

let searchBar;
let searchInput;
let searchSend;
let searchLabel;


// link to homepage via clickable image
homepage = document.createElement("a");
homepage.setAttribute("href", "../master/homepage.html");
homepage.setAttribute("id", "homepage");
NAVBAR.appendChild(homepage);
icon = document.createElement("img");
icon.setAttribute("src","../gwazau/hata/icon.svg");
homepage.appendChild(icon);

// navbar menu

mainMenu = document.createElement("div");
NAVBAR.appendChild(mainMenu);

// in page navigation



// submenu 1
menuNatFlags = document.createElement("div");
menuNatFlags.setAttribute("class", "submenu");
menuNatFlags.innerHTML = "国旗";
mainMenu.appendChild(menuNatFlags);

subMenuNatFlags = document.createElement("ul");
subMenuNatFlags.setAttribute("class", "blur");
menuNatFlags.appendChild(subMenuNatFlags);

	itemNatFlags1 = document.createElement("li");
	subMenuNatFlags.appendChild(itemNatFlags1);

	itemNatFlags1link = document.createElement("a");
	itemNatFlags1link.setAttribute("href", "../master/kokki-ichiran.html");
	itemNatFlags1link.innerHTML = "一覧";
	itemNatFlags1.appendChild(itemNatFlags1link);

	itemNatFlags2 = document.createElement("li");
	subMenuNatFlags.appendChild(itemNatFlags2);

	itemNatFlags2link = document.createElement("a");
	itemNatFlags2link.setAttribute("href", "../master/tairiku.html");
	itemNatFlags2link.innerHTML = "大陸";
	itemNatFlags2.appendChild(itemNatFlags2link);

// submenu 2
menuFlagColours = document.createElement("div");
menuFlagColours.setAttribute("class", "submenu");
menuFlagColours.innerHTML = "色";
mainMenu.appendChild(menuFlagColours);

subMenuFlagColours = document.createElement("ul");
subMenuFlagColours.setAttribute("class", "blur");
menuFlagColours.appendChild(subMenuFlagColours);

	FlagColoursRed = document.createElement("li");
	subMenuFlagColours.appendChild(FlagColoursRed);

	FlagColoursRedlink = document.createElement("a");
	FlagColoursRedlink.setAttribute("href", "../iro/aka.html");
	FlagColoursRedlink.innerHTML = "赤";
	FlagColoursRed.appendChild(FlagColoursRedlink);

	FlagColoursOrange = document.createElement("li");
	subMenuFlagColours.appendChild(FlagColoursOrange);

	FlagColoursOrangelink = document.createElement("a");
	FlagColoursOrangelink.setAttribute("href", "../iro/daidaiiro.html");
	FlagColoursOrangelink.innerHTML = "橙色";
	FlagColoursOrange.appendChild(FlagColoursOrangelink);

	FlagColoursYellow = document.createElement("li");
	subMenuFlagColours.appendChild(FlagColoursYellow);

	FlagColoursYellowlink = document.createElement("a");
	FlagColoursYellowlink.setAttribute("href", "../iro/kiiro.html");
	FlagColoursYellowlink.innerHTML = "黄色";
	FlagColoursYellow.appendChild(FlagColoursYellowlink);

	FlagColoursGreen = document.createElement("li");
	subMenuFlagColours.appendChild(FlagColoursGreen);

	FlagColoursGreenlink = document.createElement("a");
	FlagColoursGreenlink.setAttribute("href", "../iro/midori.html");
	FlagColoursGreenlink.innerHTML = "緑";
	FlagColoursGreen.appendChild(FlagColoursGreenlink);

	FlagColoursCyan = document.createElement("li");
	subMenuFlagColours.appendChild(FlagColoursCyan);

	FlagColoursCyanlink = document.createElement("a");
	FlagColoursCyanlink.setAttribute("href", "../iro/ao.html");
	FlagColoursCyanlink.innerHTML = "靑";
	FlagColoursCyan.appendChild(FlagColoursCyanlink);

	FlagColoursBlue = document.createElement("li");
	subMenuFlagColours.appendChild(FlagColoursBlue);

	FlagColoursBluelink = document.createElement("a");
	FlagColoursBluelink.setAttribute("href", "../iro/ai.html");
	FlagColoursBluelink.innerHTML = "藍";
	FlagColoursBlue.appendChild(FlagColoursBluelink);

	FlagColoursViolet = document.createElement("li");
	subMenuFlagColours.appendChild(FlagColoursViolet);

	FlagColoursVioletlink = document.createElement("a");
	FlagColoursVioletlink.setAttribute("href", "../iro/murasaki.html");
	FlagColoursVioletlink.innerHTML = "紫";
	FlagColoursViolet.appendChild(FlagColoursVioletlink);

	FlagColoursWhite = document.createElement("li");
	subMenuFlagColours.appendChild(FlagColoursWhite);

	FlagColoursWhitelink = document.createElement("a");
	FlagColoursWhitelink.setAttribute("href", "../iro/shiro.html");
	FlagColoursWhitelink.innerHTML = "白";
	FlagColoursWhite.appendChild(FlagColoursWhitelink);

	FlagColoursBlack = document.createElement("li");
	subMenuFlagColours.appendChild(FlagColoursBlack);

	FlagColoursBlacklink = document.createElement("a");
	FlagColoursBlacklink.setAttribute("href", "../iro/kuro.html");
	FlagColoursBlacklink.innerHTML = "黒";
	FlagColoursBlack.appendChild(FlagColoursBlacklink);

	FlagColoursElse = document.createElement("li");
	subMenuFlagColours.appendChild(FlagColoursElse);

	FlagColoursElselink = document.createElement("a");
	FlagColoursElselink.setAttribute("href", "../iro/betsu-no_iro.html");
	FlagColoursElselink.innerHTML = "別の色";
	FlagColoursElse.appendChild(FlagColoursElselink);

searchBar = document.createElement("form");
searchBar.setAttribute("class", "blur");
mainMenu.appendChild(searchBar);

	searchInput = document.createElement("input");
	searchInput.setAttribute("type", "search");
	searchInput.setAttribute("name", "q");
	searchInput.setAttribute("placeholder", "検索｡｡｡");
	searchBar.appendChild(searchInput);

	searchSend = document.createElement("input");
	searchSend.setAttribute("type", "sumbit");
	searchSend.setAttribute("id", "send");
	searchSend.setAttribute("name", "send");
	searchInput.setAttribute("method", "get");
	searchBar.appendChild(searchSend);

	searchLabel = document.createElement("label");
	searchLabel.innerHTML = "検索";
	searchLabel.setAttribute("for", "send");
	searchBar.appendChild(searchLabel);