<div class="content" id="formular_Ersthelfer">
    <h2>War ein Erstehelfer anwesend?</h2>
    <form id="radiogroup">
        <input type="radio" id="radiobutton1" name="anwensenheitErsthelfer" value="Ja"><span
            id="radiobuttontext">Ja</span>
        <input type="radio" id="radiobutton2" name="anwensenheitErsthelfer" value="Nein"><span
            id="radiobuttontext">Nein</span>
    </form>

    <div id="ersthelfercontent">

    <label for="inp2" class="inp">
        <span class="label">Ersthelfer</span>
        <br>
    </label>
    <form id="auswahlErsthelfer">
        <select id="ersthelferListe" name="ersthelfer" size="1">
            <option>Herr Mustermann 1</option>
            <option>Herr Mustermann 2</option>
            <option>Herr Mustermann 3</option>
            <option>Herr Mustermann 4</option>
            <option>Herr Mustermann 5</option>
        </select>
        </label>
    </form>


    <label for="inp2" class="inp">
        <input type="text" id="ersthelfer_artUmfang" placeholder="&nbsp;">
        <span class="label">Art und Weise der Versorgung</span>
        <span class="border"></span>
    </label>

    <label for="inp2" class="inp">
        <input type="text" id="ersthelfer_datum" placeholder="&nbsp;">
        <span class="label">Datum</span>
        <span class="border"></span>
    </label>

    </div>

    
    <div class="button">
        <a href="index.php?page=material" class="buttontext" id="next_ersthelfer">Weiter</a>
    </div>
</div>