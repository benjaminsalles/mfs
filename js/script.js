    function ln(ln) {
        for (i = 1; i < 5; i++) {
            document.getElementById("ln" + i).className = "navLeftDiv col-md-12 col-sm-3 col-xs-3";
            document.getElementById("rnln" + i).className = "displayNone";
        }
        document.getElementById(ln).className = "navLeftDivSELECTED col-md-12 col-sm-3 col-xs-3";
        document.getElementById("rn" + ln).className = "rnLIST";

        resetContent();

        if (ln == "ln1") {
            document.getElementById("content_11").className = "content contentBox fullHeight row";
            document.getElementById("nav2a").innerHTML = "Dashboard";
            document.getElementById("nav2b").innerHTML = "keep up to date on the latest information";
        } else if (ln == "ln2") {
            document.getElementById("content_21").className = "content contentBox fullHeight row";
            document.getElementById("nav2a").innerHTML = "Accounts";
            document.getElementById("nav2b").innerHTML = "find the next opportunity";
        } else if (ln == "ln3") {
            document.getElementById("content_31").className = "content contentBox fullHeight row";
            document.getElementById("nav2a").innerHTML = "Notes";
            document.getElementById("nav2b").innerHTML = "&nbsp;";
        } else if (ln == "ln4") {
            document.getElementById("content_41").className = "content contentBox fullHeight row";
            document.getElementById("nav2a").innerHTML = "My Presentations";
            document.getElementById("nav2b").innerHTML = "&nbsp;";
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
        resetContent();
        document.getElementById("content_" + num).className = "content contentBox fullHeight row";
    }

    var companies = [
        ["Company Name", "Address 1", "Address 2", "Email", "Phone", "image"],
        ["Spearow Industries", "555 Johnsville St, Suite 3000", "New York, NY 11000", "johndoe@gmail.com", "415-222-1234", "logo1.jpg", "$1,000,000", "$600,000", "80", "<p>Reviewed performance with SW regional head. Discussed promo plan to improve performance in Q3.</p><p>Reviewed sales agreement with client and legal team. Awaiting final legal approval.</p>"],
        ["Paras", "555 Johnsville St, Suite 3000", "New York, NY 11000", "johndoe@gmail.com", "415-222-1234", "logo2.jpg", "$2,000,000", "$1,500,000", "75", "<p>Reviewed performance with SW regional head. Discussed promo plan to improve performance in Q3.</p><p>Reviewed sales agreement with client and legal team. Awaiting final legal approval.</p>"],
        ["Dratini Darts", "555 Johnsville St, Suite 3000", "New York, NY 11000", "johndoe@gmail.com", "415-222-1234", "logo3.jpg", "$800,000", "$725,000", "90", "<p>Reviewed performance with SW regional head. Discussed promo plan to improve performance in Q3.</p><p>Reviewed sales agreement with client and legal team. Awaiting final legal approval.</p>"],
        ["Global Learning", "555 Johnsville St, Suite 3000", "New York, NY 11000", "johndoe@gmail.com", "415-222-1234", "logo4.jpg", "$3,000,000", "$3,000,000", "100", "<p>Reviewed performance with SW regional head. Discussed promo plan to improve performance in Q3.</p><p>Reviewed sales agreement with client and legal team. Awaiting final legal approval.</p>"],
        ["Goldeen Coast, Inc.", "555 Johnsville St, Suite 3000", "New York, NY 11000", "johndoe@gmail.com", "415-222-1234", "logo5.jpg", "$125,000", "$95,000", "68", "<p>Reviewed performance with SW regional head. Discussed promo plan to improve performance in Q3.</p><p>Reviewed sales agreement with client and legal team. Awaiting final legal approval.</p>"],
        ["Genesee & Wyoming", "555 Johnsville St, Suite 3000", "New York, NY 11000", "johndoe@gmail.com", "415-222-1234", "logo6.jpg", "$180,000", "$140,000", "74", "<p>Reviewed performance with SW regional head. Discussed promo plan to improve performance in Q3.</p><p>Reviewed sales agreement with client and legal team. Awaiting final legal approval.</p>"],
        ["Sandshrew Grilled Cheese & Co.", "555 Johnsville St, Suite 3000", "New York, NY 11000", "johndoe@gmail.com", "415-222-1234", "logo7.jpg", "$500,000", "$100,000", "100", "<p>Reviewed performance with SW regional head. Discussed promo plan to improve performance in Q3.</p><p>Reviewed sales agreement with client and legal team. Awaiting final legal approval.</p>"],
        ["Nidoran Onix", "555 Johnsville St, Suite 3000", "New York, NY 11000", "johndoe@gmail.com", "415-222-1234", "logo8.jpg", "$200,000", "$220,000", "80", "<p>Reviewed performance with SW regional head. Discussed promo plan to improve performance in Q3.</p><p>Reviewed sales agreement with client and legal team. Awaiting final legal approval.</p>"],
        ["Aspen Holdings", "555 Johnsville St, Suite 3000", "New York, NY 11000", "johndoe@gmail.com", "415-222-1234", "logo9.jpg", "$900,000", "$90,000", "60", "<p>Reviewed performance with SW regional head. Discussed promo plan to improve performance in Q3.</p><p>Reviewed sales agreement with client and legal team. Awaiting final legal approval.</p>"],
        ["Finch Media", "555 Johnsville St, Suite 3000", "New York, NY 11000", "johndoe@gmail.com", "415-222-1234", "logo10.jpg", "$8,000,000", "$1,600,000", "38", "<p>Reviewed performance with SW regional head. Discussed promo plan to improve performance in Q3.</p><p>Reviewed sales agreement with client and legal team. Awaiting final legal approval.</p>"],
        ["Vulpix Film & Audio", "555 Johnsville St, Suite 3000", "New York, NY 11000", "johndoe@gmail.com", "415-222-1234", "logo11.jpg", "$3,000,000", "$6,000,000", "41", "<p>Reviewed performance with SW regional head. Discussed promo plan to improve performance in Q3.</p><p>Reviewed sales agreement with client and legal team. Awaiting final legal approval.</p>"],
        ["Arbok Ekans", "555 Johnsville St, Suite 3000", "New York, NY 11000", "johndoe@gmail.com", "415-222-1234", "logo12.jpg", "$10,000,000", "$7,500,000", "80", "<p>Reviewed performance with SW regional head. Discussed promo plan to improve performance in Q3.</p><p>Reviewed sales agreement with client and legal team. Awaiting final legal approval.</p>"]
    ];

    var notes = [
        ["Note Title", "Created By", "Created On", "Type", "Star", "Note copy goes in here."],
        ["Gothams", "John B. Day", "April 1, 1883", "Follow Up", "red", "The Giants began as the second baseball club founded by millionaire tobacconist John B. Day and veteran amateur baseball player Jim Mutrie. The Gothams, as the Giants were originally known, entered the National League in 1883, while their other club, the Metropolitans played in the American Association."],
        ["Gothams 2", "Jim Mutrie", "April 20, 1883", "Follow Up", "green", "Nearly half of the original Gotham players were members of the disbanded Troy Trojans, whose place in the National League the Gothams inherited."],
        ["Bridegrooms", "John McGraw", "January 9, 2007", "Follow Up", "green", "While the Metropolitans were initially the more successful club, Day and Mutrie began moving star players to the Gothams, and in 1888 the team won its first National League pennant, as well as a victory over the St. Louis Browns in a pre-modern-era World Series."],
        ["Bridegrooms", "John McGraw", "Septemer 22, 2007", "Follow Up", "red", "They repeated as champions the next year with a pennant and Championship victory over the Brooklyn 'Bridegrooms'."],
        ["Giants", "John McGraw", "August 9, 2007", "Follow Up", "yellow", "It is said that after one particularly satisfying victory over the Philadelphia Phillies, Mutrie (who was also the team's manager) stormed into the dressing room and exclaimed, 'My big fellows! My giants!' From then on, the club was known as the Giants."],
        ["Giants", "John McGraw", "September 26, 2007", "Follow Up", "green", "The Giants' original home stadium, the Polo Grounds, dates from this early era. It was originally located north of Central Park adjacent to 5th and 6th Avenues and 110th and 112th Streets, in Harlem in upper Manhattan. After their eviction from that first incarnation of the Polo Grounds after the 1888 season, they moved further uptown to various fields they also named the Polo Grounds located between 155th and 159th Streets in Harlem and Washington Heights, playing in the Washington Heights Polo Grounds until the end of the 1957 season, when they moved to San Francisco."],
        ["Giants", "Rogers Hornsby", "April 29, 2008", "Follow Up", "red", "The Giants were a powerhouse in the late 1880s, winning their first two National League Pennants and World Championships in 1888 and 1889."],
        ["Giants", "Mel Ott", "June 15, 2015", "Follow Up", "red", "But nearly all of the Giants' stars jumped to the upstart Players' League, whose New York franchise was also named the Giants, in 1890. The new team even built a stadium next door to the Polo Grounds."],
        ["Giants", "Bill Terry", "June 15, 2015", "Follow Up", "green", "With a decimated roster, the National League Giants finished a distant sixth. Attendance took a nosedive, and the financial strain affected Day's tobacco business as well. The Players' League dissolved after the season, and Day sold a minority interest in his NL Giants to the defunct PL Giants' principal backer, Edward Talcott."],
        ["Gigantes", "Casey Stengel", "June 15, 2015", "Follow Up", "blue", "As a condition of the sale, Day had to fire Mutrie as manager. Although the Giants rebounded to third in 1891, Day was forced to sell a controlling interest to Talcott at the end of the season."],
        ["Gigantes", "Jim Thorpe", "June 15, 2015", "Follow Up", "green", "Four years later, Talcott sold the Giants to Andrew Freedman, a real estate developer with ties to the Tammany Hall political machine running New York City. Freedman was one of the most detested owners in baseball history, getting into heated disputes with other owners, writers, and his own players, most famously with star pitcher Amos Rusie, author of the first Giants no-hitter."],
        ["Giants", "Ban Johnson", "June 15, 2015", "Follow Up", "green", "When Freedman offered Rusie only $2,500 to play in 1896, the disgruntled hurler sat out the entire season. Attendance fell off throughout the league without Rusie, prompting the other owners to chip in $50,000 to get him to return for 1897. Freedman hired former owner Day as manager for part of 1899."]
    ];




    for (i = 1; i <= companies.length; i++) {
        //alert(companies[i][5]);
        document.getElementById("content_21").innerHTML = document.getElementById("content_21").innerHTML + "<div class='companyGrid col-md-4'><div class='companyGrid_logo' style='background-image:url(img/" + companies[i][5] + ");'></div><div class='companyGrid_mid'>" + companies[i][6] + " and " + companies[i][7] + "</div><div class='companyGrid_info'><p>" + companies[i][0] + "</p><p>" + companies[i][1] + "<br>" + companies[i][2] + "<br>Email <a href=''>" + companies[i][3] + "</a><br>Phone " + companies[i][4] + "</p><p><a href=''>Contact Info</a></p></div></div>";

        document.getElementById("content_22").innerHTML = document.getElementById("content_22").innerHTML + "<div class='companyRow col-md-12'><div class='companyRow_icon' style='background-image:url(img/" + companies[i][5] + ");'></div><div class='companyRow_copy'>" + companies[i][0] + "<p>" + companies[i][1] + "<br>" + companies[i][2] + "<br>Email <a href=''>" + companies[i][3] + "</a><br>Phone " + companies[i][4] + "</p><p><a href=''>Contact Info</a></p></div><div class='companyRow_right'>Opportunity<div class='companyRow_bubble'>" + companies[i][8] + "</div></div><div class='companyRow_right'>Pipeline<div class='companyRow_bubble'>" + companies[i][7] + "<br><span>+15% vs. YAG</span></div></div><div class='companyRow_right'>Actual<div class='companyRow_bubble'>" + companies[i][6] + "<br><span>+15% vs. YAG</span></div></div><div class='companyRow_notes'>" + companies[i][9] + "</div></div>";
        document.getElementById("content_31").innerHTML = document.getElementById("content_31").innerHTML + "<div class='companyGrid col-md-4'><table><tr><td><span>" + notes[i][0] + "</span></td><td><i class='fa fa-star' style='color:" + notes[i][4] + "'></i></td></tr><tr><td colspan='2'> <span>Created by:</span> " + notes[i][1] + "<br> <span>Created on:</span> " + notes[i][2] + "<br> <span>Type:</span> " + notes[i][3] + "</td></tr><tr><td colspan='2'>" + notes[i][5] + "</td></tr></table></div>";
        document.getElementById("content_32").innerHTML = document.getElementById("content_32").innerHTML + "<div class='companyRow col-md-12'><span>" + notes[i][0] + "</span> <i class='fa fa-star' style='color:" + notes[i][4] + "'></i><p><span>Created by:</span> " + notes[i][1] + " | <span>Created on:</span> " + notes[i][2] + " | <span>Updated on:</span> " + notes[i][2] + " | <span>Most Recent Note:</span> " + notes[i][2] + " | <span>Type:</span> " + notes[i][3] + "</p><p>" + notes[i][5] + "</p></div>";
    }
