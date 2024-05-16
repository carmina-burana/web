## numbered verses
```html
<tr>
    <td id="1_block">
        <ol class="clear_marpad verse_list" start="1">
            <li class="clear_marpad">
                latin_text
            </li>
        </ol>
    </td>
    <td>
        translated_text
    </td>
</tr>
```

## commentary
```html
<tr id="N_comment">
    <td><a class="backlink" href="#N_block">↑</a> NUMBER <i> QUOTE </i></td>
    <td>COMMENTARY</td>
</tr>
```

## commentary backlink
```html
<a href="#N_comment">TEXT</a>
```

## bibliography
```html
<p class="bibliography">
    placeholder 
</p>
```

## numbered every 5th line
```html
<table class="no-td-padding">
    <tr>
        <td id="n_line"><p class="line-any">latin</p></td>
        <td><p>trans</p></td>
    </tr>
    <tr>
        <td id="5_line"><p class="line-5">latin</p></td>
        <td><p>trans</p></td>
    </tr>
</table>
```

## illustration
```html
<h2>Иллюстрации</h2>
<div class="no-indent">
    <img src="../styles/img/illust/TEXT_NUM.jpg" alt="ALT" style="max-width: 100%;">
    <p>NUM.	DESC</p>
</div>
```