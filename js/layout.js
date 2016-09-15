    function ln(ln) {
        /*for (i = 1; i < 5; i++) {
            document.getElementById("ln" + i).className = "mfsNavLeftDiv col-xs-3 col-md-12 col-sm-12 col-xs-12";
            //document.getElementById("rnln" + i).className = "displayNone";
			if (i == 5) {
            document.getElementById("ln" + i).className = "mfsNavLeftDiv mfsNavLeftDivLAST col-xs-3 col-md-12 col-sm-12 col-xs-12";
			}
        }
        document.getElementById(ln).className = "mfsNavLeftDivSELECTED col-xs-3 col-md-12 col-sm-12 col-xs-12";
        //document.getElementById("rn" + ln).className = "rnLIST";
		
		if (ln == "ln5") {
        	document.getElementById(ln).className = "mfsNavLeftDivSELECTED mfsNavLeftDivLAST col-xs-3 col-md-12 col-sm-12 col-xs-12";
		}*/

        resetContent();

        if (ln == "ln1") {
            document.getElementById("content_11").className = "content contentBox fullHeight row";
            //document.getElementById("nav2a").innerHTML = "Dashboard";
            //document.getElementById("nav2b").innerHTML = "&nbsp;";
            //document.getElementById("rnln").innerHTML = "<ul style='margin:8px 0;'><li>&nbsp;</li></ul>";
            showCTNT(11);
        } else if (ln == "ln2") {
            document.getElementById("content_21").className = "content contentBox fullHeight row";
            //document.getElementById("nav2a").innerHTML = "Accounts";
            //document.getElementById("nav2b").innerHTML = "<div class='row' ng-controller='repeatController'><input ng-model='searchBox' type='text' class='form-control mfsInput col-xs-10 col-sm-10 col-md-10 col-lg-10' placeholder='Search'></div>";
            //document.getElementById("rnln").innerHTML = "<ul><li><i class='glyphicon glyphicon-filter btn btn-primary' onclick='showCTNT(0);'></i></li><li><i class='glyphicon glyphicon-th-list btn btn-primary' onclick='showCTNT(22);'></i></li><li><i class='glyphicon glyphicon-th-large btn btn-primary' onclick='showCTNT(21);'></i></li><li><i class='fa fa-map-marker btn btn-primary' onclick='showCTNT(23);'></i></li><li><i class='glyphicon glyphicon-stats btn btn-primary' onclick='showCTNT(24);'></i></li></ul>";
            showCTNT(22);
        } else if (ln == "ln3") {
            document.getElementById("content_31").className = "content contentBox fullHeight row";
            //document.getElementById("nav2a").innerHTML = "Notes";
            //document.getElementById("nav2b").innerHTML = "<div class='row' ng-controller='repeatController'><input ng-model='searchBox' type='text' class='form-control mfsInput col-xs-10 col-sm-10 col-md-10 col-lg-10' placeholder='Search'></div>";
            //document.getElementById("rnln").innerHTML = "<ul><li><i class='glyphicon glyphicon-filter btn btn-primary' onclick='showCTNT(0);'></i></li><li><i class='glyphicon glyphicon-th-large btn btn-primary' onclick='showCTNT(31);'></i></li><li><i class='glyphicon glyphicon-th-list btn btn-primary' onclick='showCTNT(32);'></i></li><li><i class='glyphicon glyphicon-plus btn btn-primary' onclick='showCTNT(0);'></i></li></ul>";
            showCTNT(31);
        } else if (ln == "ln4") {
            document.getElementById("content_41").className = "content contentBox fullHeight row";
            //document.getElementById("nav2a").innerHTML = "My Presentations";
            //document.getElementById("nav2b").innerHTML = "&nbsp;";
            //document.getElementById("rnln").innerHTML = "<ul style='margin:8px 0;'><li onclick='showCTNT(41);'><span class='btn btn-primary mfsPresentationBTNS'>1</span></li><li onclick='showCTNT(42);'><span class='btn btn-primary mfsPresentationBTNS'>2</span></li><li onclick='showCTNT(43);'><span class='btn btn-primary mfsPresentationBTNS'>3</span></li></ul>";
            showCTNT(41);
        } else if (ln == "ln5") {
			console.log("PROFILE POPUP HAPPENS");
		}
    }

    function resetContent() {
        // Get all <p> elements in the document
        var x = document.querySelectorAll(".content");

        // Set the background color of the first <p> element
        for (i = 0; i < x.length; i++) {
            x[i].className = "content displayNone";
        }
    }

    function showCTNT(num) {
		/*if (num == 0) {
			//perform filter funtion
			console.log("ZERO!");
		} else*/ if (num > 0) {
			console.log(num);
			resetContent();
			document.getElementById("content_" + num).className = "content contentBox fullHeight";
		}
    }


function closePopup(popName) {
	document.getElementById(popName).className = "displayNone";
}

