$(document).ready(function () {
    var word = []; // word array
    var meaning = []; // meaning array
    var total = [];
    var table = document.getElementsByTagName("td");
    var show_word_flag = true;
    var show_meaning_flag = true;
    // 0: show_both
    // 1: show_word
    // 2: show_meaning

    var page_index = 1;
    var total_index = 0;
    var txt_number = 1;

    const basePath = '../voca/page';
    const fileExtension = '.txt';
    function setSizeInRightArea() {
        var right_area = document.getElementById("right_area");
        var word_input_area = document.getElementById("word_input_area");
        var button_area = document.getElementById("button_area");
        var checkbox_area = document.getElementById("checkbox_area");
        var div_height = right_area.offsetHeight * 0.28;
        word_input_area.style.height = div_height + "px";
        button_area.style.height = div_height + "px";
        checkbox_area.style.height = div_height + "px";
    }
    setSizeInRightArea();

    function setSizeInLeftArea() {
        var left_area = document.getElementById("left_area");
        var left_area_head = document.getElementById("left_area_head");
        var left_area_table = document.getElementById("left_area_table");
        var div_width = left_area.offsetWidth * 0.9;
        left_area_head.style.width = div_width + "px";
        left_area_table.style.width = div_width + "px";
        left_area_table.style.height = (div_width * 297 / 210) + "px";

        var a4width = left_area_table.style.width;
        var a4height = left_area_table.style.height;
        left_area_table.style.padding = parseFloat(a4height.substring(0, a4height.length - 2)) * 30 / 297 + "px " + parseFloat(a4width.substring(0, a4width.length - 2)) * 20 / 210 + "px auto";
        //a4width = (parseFloat(a4height.substring(0, a4height.length - 2)) - parseFloat(left_area_table.style.padding.substring(0, left_area_table.style.padding.length - 2))) + "px";

        var a4 = document.getElementById("a4");
        a4.style.width = a4width;
        a4.style.height = parseFloat(a4width.substring(0, a4width.length - 2)) * 87 / 1686 + "px";

        var row1 = document.getElementById("row1");
        row1.style.width = a4width;
        row1.style.height = parseFloat(a4width.substring(0, a4width.length - 2)) * 87 / 1686 + "px";
        row1.style.fontSize = parseFloat(a4width.substring(0, a4width.length - 2)) * 26 / 1686 + "px";

        var row21 = document.getElementsByClassName("word");
        var row22 = document.getElementsByClassName("meaning");
        row21[0].style.width = parseFloat(row1.style.width.substring(0, row1.style.width.length - 2)) / 4 + "px";
        row21[0].style.height = parseFloat(row21[0].style.width.substring(0, row21[0].style.width.length - 2)) * 58.5 / 421.5 + "px";
        row21[0].style.fontSize = parseFloat(row21[0].style.height.substring(0, row21[0].style.height.length - 2)) * 24 / 58.5 + "px";

        row21[1].style.width = row21[0].style.width;
        row21[1].style.height = row21[0].style.height;
        row21[1].style.fontSize = row21[0].style.fontSize;

        row22[0].style.width = row21[0].style.width;
        row22[0].style.height = row21[0].style.height;
        row22[0].style.fontSize = row21[0].style.fontSize;

        row22[1].style.width = row21[0].style.width;
        row22[1].style.height = row21[0].style.height;
        row22[1].style.fontSize = row21[0].style.fontSize;
        var td = document.getElementsByTagName("td");
        for (var i = 5; i < td.length; i++) {
            td[i].style.width = row21[0].style.width;
            td[i].style.height = row21[0].style.height;
            td[i].style.fontSize = parseFloat(row21[0].style.fontSize.substring(0, row21[0].style.fontSize.lenght - 2)) * 30 / 24 + "px";
        }

        /*
        var a4width = left_area_table.offsetWidth
        var a4height = left_area_table.offsetHeight
        left_area_table.style.padding = a4height * 30 / 297 + "px " + a4width * 20 / 210 + "px auto";

        var a4 = document.getElementById("a4");
        a4.style.width = "100%";
        a4.style.height = a4.offsetWidth * 87 / 1686 + "%";

        var row1 = document.getElementById("row1");
        row1.style.width = a4.offsetWidth;
        row1.style.height = row1.offsetWidth * 87 / 1686 + "px";
        row1.style.fontSize = row1.offsetHeight * 26 / 87 + "px";
        
        var row21 = document.getElementsByClassName("word");
        var row22 = document.getElementsByClassName("meaning");
        row21[0].style.width = "25%";
        row21[0].style.height = row21[0].offsetWidth * 58.5 / 421.5 + "px";
        row21[0].style.fontSize = row21[0].offsetHeight * 24 / 58.5 + "px";

        row21[1].style.width = "25%";
        row21[1].style.height = row21[1].offsetWidth * 58.5 / 421.5 + "px";
        row21[1].style.fontSize = row21[1].offsetHeight * 24 / 58.5 + "px";

        row22[0].style.width = "25%";
        row22[0].style.height = row22[0].offsetWidth * 58.5 / 421.5 + "px";
        row22[0].style.fontSize = row22[0].offsetHeight * 24 / 58.5 + "px";

        row22[1].style.width = "25%";
        row22[1].style.height = row22[1].offsetWidth * 58.5 / 421.5 + "px";
        row22[1].style.fontSize = row22[1].offsetHeight * 24 / 58.5 + "px";
        var td = document.getElementsByTagName("td");
        for (var i = 5; i < td.length; i++)
            td[i].style.height = td[i].offsetWidth * 58.5 / 421.5 + "px";
        */
    }
    setSizeInLeftArea();

    var left_area_table = document.getElementById("left_area_table");
    function adjustZoom() {
        var right_area = document.getElementById("right_area");

        left_area_table.style.width = right_area.style.width * 0.8;
        left_area_table.style.height = left_area_table.style.width * 297 / 210;
    }

    // 화면을 리사이즈 할 때마다 호출
    //window.addEventListener('resize', adjustZoom);
    window.addEventListener('resize', setSizeInRightArea);
    window.addEventListener('resize', setSizeInLeftArea);

    function fetchFile(txt_number) {
        const filePath = `${basePath}${txt_number}${fileExtension}`;

        $.ajax({
            url: filePath,
            dataType: 'text',
            success: function (data) {
                var tmp_str = "";
                total.push(data);

                for (const index of data) {
                    if (index == '\t') {
                        word.push(tmp_str);
                        tmp_str = "";
                    } else if (index == '\n') {
                        tmp_str = tmp_str;
                        meaning.push(tmp_str);
                        tmp_str = "";
                    } else
                        tmp_str += index;
                }
                meaning.push(tmp_str);
                tmp_str = "";
                console.log(`Content of ${filePath}:`);
                // 다음 파일을 시도
                txt_number++;
                fetchFile(txt_number);
            },
            error: function (xhr, status, error) {
                console.error(`Error loading ${filePath}:`, error);
                // 파일이 존재하지 않으면 루프 중단
                if (xhr.status === 404) {
                    console.log('No more files to fetch.');
                    total_index = Math.ceil(word.length / 10);
                    updatePageNumber();
                    update_table();
                }
            }

        });

    }

    // initialize page, update page
    function updatePageNumber() {
        const page_number = document.getElementById("page_factor");
        var str = "";
        if (page_index < 10)
            str += "0" + page_index.toString();
        else
            str += page_index.toString();
        str += " / ";
        if (total_index < 10)
            str += "0" + total_index.toString();
        else
            str += total_index.toString();
        page_number.innerText = str;
    }

    // add event to button
    document.getElementById("right_arrow").addEventListener("click", page_up);
    document.getElementById("left_arrow").addEventListener("click", page_down);
    document.getElementById("show_word_button").addEventListener("click", change_word_flag);
    document.getElementById("show_meaning_button").addEventListener("click", change_meaning_flag);
    document.getElementById("refresh_button").addEventListener("click", refresh);
    for (var index = 0; index < table.length; index++) {
        if (index % 2 == 0) {
            table[index].addEventListener("click", addClickEvents(index));
        }
    }

    function page_up() {
        if (page_index < total_index)
            page_index++;
        else
            page_index = 1;
        updatePageNumber();
        update_table();
    }

    function page_down() {
        if (page_index > 1)
            page_index--;
        else
            page_index = total_index;
        updatePageNumber();
        update_table();
    }

    function update_table() {
        show_word();
        show_meaning();
    }
    /*
    function show_both() {
        show_index = 0;
        for (var index = 0; index < table.length; index++) {
            if (index % 2 == 0) {
                if ((page_index - 1) * 10 + index / 2 < word.length)
                    table[index].innerText = word[(page_index - 1) * 10 + index / 2];
                else
                    table[index].innerText = "";
            } else {
                if ((page_index - 1) * 10 + index / 2 < word.length)
                    table[index].innerText = meaning[(page_index - 1) * 10 + ((index - 1) / 2)];
                else
                    table[index].innerText = "";
            }
        }
    }
    */

    function show_word() {
        if (show_word_flag) {
            for (var index = 0; index < table.length; index++) {
                if (index % 2 == 0) {
                    if ((page_index - 1) * (table.length / 2) + index / 2 < word.length)
                        table[index].innerText = word[(page_index - 1) * (table.length / 2) + index / 2];
                    else
                        table[index].innerText = "";
                }
            }
        } else {
            for (var index = 0; index < table.length; index++) {
                if (index % 2 == 0)
                    table[index].innerText = "";
            }
        }
    }

    function show_meaning() {
        if (show_meaning_flag) {
            for (var index = 0; index < table.length; index++) {
                if (index % 2 == 1) {
                    if ((page_index - 1) * (table.length / 2) + index / 2 < word.length)
                        table[index].innerText = meaning[(page_index - 1) * (table.length / 2) + ((index - 1) / 2)];
                    else
                        table[index].innerText = "";
                }
            }
        } else {
            for (var index = 0; index < table.length; index++) {
                if (index % 2 == 1)
                    table[index].innerText = "";
            }
        }
    }

    function change_word_flag() {
        var btn = document.getElementById("show_word_button");
        if (show_word_flag) {
            show_word_flag = false;
            btn.innerText = "단어 보이기";
        } else {
            show_word_flag = true;
            btn.innerText = "단어 가리기";
        }
        show_word();
    }

    function change_meaning_flag() {
        var btn = document.getElementById("show_meaning_button");
        if (show_meaning_flag) {
            show_meaning_flag = false;
            btn.innerText = "뜻 보이기";
        }
        else {
            show_meaning_flag = true;
            btn.innerText = "뜻 가리기";
        }
        show_meaning();
    }

    function refresh() {
        window.location.reload();
    }

    function addClickEvents(i) {
        return function () {
            window.speechSynthesis.cancel();
            var msg = new SpeechSynthesisUtterance(table[i].innerText);
            msg.lang = 'en-US';
            window.speechSynthesis.speak(msg);
        }
    }

    // 첫 번째 파일부터 시작
    fetchFile(txt_number);
    //console.log(tt);
    //console.log(word);
    //console.log(meaning);
    window.print();
});