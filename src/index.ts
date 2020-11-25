import * as _ from 'lodash';
import diff from 'simple-text-diff'

document.addEventListener("DOMContentLoaded", function(event) {

    let elementsToDiff = document.getElementsByClassName("diff-highlight");

    [].forEach.call(elementsToDiff, function (item: { getElementsByClassName: (arg0: string) => any[]; }) {

        let string_old = item.getElementsByClassName("diff-highlight__old")[0];
        let string_new = item.getElementsByClassName("diff-highlight__new")[0];
        let string_display = item.getElementsByClassName("diff-highlight__display")[0];

        if(
            string_old != undefined &&
            string_new != undefined &&
            string_display != undefined)
        {
            let result = diff.diffPatch(string_old.textContent,string_new.textContent)
            string_display.innerHTML = result.after
        }

    });

    const sheet = document.createElement('style')
    sheet.innerHTML = "" +
        "div.diff-highlight__old    {   display:none !important;  }" +
        "div.diff-highlight__new    {   display:none !important;  }" +
        "div.diff-highlight__display ins{   color: green; background-color:lightgreen;    }"+
        "div.diff-highlight__display del{   color: red; background-color:lightred;   }";
    document.body.appendChild(sheet);

});
