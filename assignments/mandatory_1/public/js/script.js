$().ready(init);

var $syntax,
  tokens = [],
  token_colors = {},
  refresh_timer,
  // Characters that separate tokens
  rx_splitters = /[\s\+\-=\*\(\)\{\}\[\]\.;\|,\!]/g,
  rx_splitters_string = "([\\s\\+\\-=\\*\\(\\)\\{\\}\\[\\]\\.;\\|,\\!])",
  // Match comments
  rx_comments = /(\/\/(.*))\r?\n|\r/g,
  // Match "strings", 'strings', and /regexes/
  rx_strings = /("(.*?)")|('(.*?)')|(\/([^\s]+?)[^\\]\/[a-z]*)/g,
  // Match #hex colors
  rx_colors = /(#[0-9a-fA-F]{6})/g,
  // Match numbers
  rx_numbers = /([\s\+\-=\*\(\)\{\}\[\]\.;\|,\!])([0-9]+)([\s\+\-=\*\(\)\{\}\[\]\.;\|,\!])/g,
  // Match valid characters: letters, numbers, _underscore, $
  // but don't let first character be a number
  rx_allowed = /(^[a-zA-Z_\$][a-zA-Z0-9_\$]*)/;
function init() {
  // Get selectors
  $syntax = $(".syntax");
  //
  init_theme();
  init_keywords();
  //
  update();
}

function update() {
  $syntax.each(function () {
    // Insert cursor placeholder
    //insertTextAtCursor("@" + "@");
    //
    var text = $(this).text();
    // Process text
    text = process(text);
    $(this).html(text);
  });
}

function process(string) {
  var html = string;

  assign_colors(string);

  var rx_tokens = make_regex(tokens, "g");

  html = htmlify(html);

  html = html
    .replace(rx_strings, replace_rx_strings)
    .replace(rx_tokens, replace_tokens)
    .replace(rx_comments, replace_rx_comments)
    .replace(rx_numbers, replace_rx_numbers)
    .replace(rx_colors, replace_rx_colors);
  html = applyLineNumbers(html);
  return html;
}

// ==============================
function applyLineNumbers(string) {
  string = string.split(/\n/);
  string = string.join("</span>\n<span>");
  string = "<span>" + string + "</span>";
  return string;
}

function assign_colors(string) {
  var split = string.split(rx_splitters);

  var old_colors = token_colors;
  token_colors = get_uniques(split);
  tokens = Object.keys(token_colors).sort();

  var len = tokens.length;

  for (var i = 0; i < len; i++) {
    var percent = i / len;
    var index = parseInt(percent * 132 + Math.random() * 0);

    if (index < 0) index = 0;
    else if (index > 99) index = index - 99;
    else if (index > 66) index = index - 66;
    else if (index > 33) index = index - 33;

    var color = "var" + index;
    token_colors[tokens[i]] = color;
  }
}

// ==============================

function get_uniques(arr) {
  var uniques = {};
  for (var i = arr.length - 1; i >= 0; i--) {
    if (arr[i].length > 0 && rx_allowed.test(arr[i]) && !keywords.test(" " + arr[i] + " ")) {
      uniques[arr[i]] = true;
    }
  }
  return uniques;
}

// ==============================

// Make a regex that finds any word in the array between splitter characters

function make_regex(arr, flags) {
  var str = "(" + arr.join("|").replace(/\$/g, "\\$") + ")";
  str = rx_splitters_string + str + "(?=" + rx_splitters_string + ")";
  var regex = new RegExp(str, flags);
  return regex;
}

// ==============================

function replace_rx_comments(match, p1, p2, p3, offset, string) {
  return "<i class='cmnt'>" + match + "</i>";
}

function replace_rx_strings(match, p1, p2, p3, offset, string) {
  var cls;
  if (match.charAt(0) == "/") cls = "reg";
  else cls = "str";

  return "<i class='" + cls + "'>" + match + "</i>";
}

function replace_rx_colors(match, p1, p2, p3, offset, string) {
  var clr = "<i class='clr' style='background: ";
  clr += match + "; box-shadow: 0 0 0 2px " + match + "; ' >";
  clr += match + "</i>";
  return clr;
}

function replace_rx_regexes(match, p1, p2, p3, offset, string) {
  return "<i class='reg'>" + match + "</i>";
}

function replace_rx_numbers(match, p1, p2, p3, offset, string) {
  return p1 + "<i class='num'>" + p2 + "</i>" + p3;
}

function replace_tokens(match, p1, p2, p3, offset, string) {
  var colorclass = token_colors[p2];
  return p1 + "<i class='" + colorclass + "'>" + p2 + "</i>";
}

// ==============================

function init_theme() {
  var node = document.querySelector(".colortheme");
  var colors = node.innerHTML.trim().split("\n");

  var css = "";
  for (var i = 0; i < colors.length; i++) {
    css += ".var" + i + "{color:" + colors[i] + ";} ";
  }
  add_style_sheet(css);
}

// ==============================

function init_keywords() {
  var node = document.querySelector(".keywords");
  var kw_list = node.innerHTML.trim().split("\n");
  keywords = make_regex(kw_list, "");
}

function add_style_sheet(css) {
  var head, styleElement;
  head = document.getElementsByTagName("head")[0];
  styleElement = document.createElement("style");
  styleElement.setAttribute("type", "text/css");
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    styleElement.appendChild(document.createTextNode(css));
  }
  head.appendChild(styleElement);
  return styleElement;
}

function contains(str, substr) {
  return str.indexOf(substr) !== -1;
}

function htmlify(str) {
  return String(str).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function unquote(str) {
  return String(str).replace(/"/g, "&quot;");
}
