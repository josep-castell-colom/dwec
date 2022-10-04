<?php
function customError($errno, $errstr) {
  echo "<pre class='error'><b>Error:</b> [$errno] $errstr</pre>";
}

set_error_handler("customError");

function add_tags($tag, $content){
  return "<$tag>$content</$tag>";
}

function is_set($var){
  return isset($var);
}

function is_empty($var){
  return empty($var);
}

function to_bool($var){
  return (bool)$var;
}

function print_table(){
  try {
    $lista = [null, 0, true, false, "0", "", "foo", array(), "hola"];
    unset($lista[8]);
    $str_lista = [
      "\$var = null",
      "\$var = 0",
      "\$var = true",
      "\$var = false",
      "\$var = \"0\"",
      "\$var = \"\"",
      "\$var = \"foo\"",
      "\$var = array()",
      "unset(\$var)
    "];
    $func = ["is_set", "is_empty", "to_bool", "is_null"];
    $output = <<<TEXT
      <table id='var-table'>
        <thead>
          <tr>
            <th>Num. de fila</th>
            <th>Contenido de <code>\$var</code></th>
            <th><code>isset(\$var)</code></th>
            <th><code>empty(\$var)</code></th>
            <th><code>(bool)\$var</code></th>
            <th><code>is_null(\$var)</code></th>
          </tr>
        </thead>
        <tbody>
    TEXT;
  
    for ($i = 0; $i < 9; $i++) {
      $output .= "<tr>" . add_tags("td", $i + 1);
      $output .= add_tags("td", add_tags("code", "$str_lista[$i]"));
      for ($j = 0; $j < 4; $j++){
        $temp_var = $func[$j]($lista[$i]) ? "true" : "false";
        $output .= add_tags("td", $temp_var);
      }
      $output .= "</tr>";
    }
    
    $output .= "</tbody></table>";
    echo $output;
  } catch (Exception $e) {
    echo "hola";
    echo $e->getMessage();
  }
}

function tablas_multiplicar($multiplicando, $multiplicador){
  $output = "<table id='multiply-table'><thead><th style='background-color: var(--table-secondary-color)'>*</th>";
  for ($x = 0; $x <= $multiplicando; $x++){
    $output .= "<th id='x$x'>$x</th>";
  }

  $output .= "</thead><tbody>";

  for ($y = 0; $y <= $multiplicando; $y++){
    $output .= "<tr id='row-y$y'><th id='y$y'>$y</th>";
    for ($x = 0; $x <= $multiplicador; $x++){
      $output .= "<td id='x$x-y$y' data-x='$x' data-y='$y'>" . $x * $y . "</td>";
    }
    $output .= "</tr>";
  }
  
  $output .= "</tbody></table>";
  echo $output;
}



require './index.view.php';