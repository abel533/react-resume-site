(this["webpackJsonpreact-resume-site"]=this["webpackJsonpreact-resume-site"]||[]).push([[36],{707:function(n,e,t){!function(n){"use strict";n.defineMode("cmake",(function(){var n=/({)?[a-zA-Z0-9_]+(})?/;function e(n,e){for(var t,i,r=!1;!n.eol()&&(t=n.next())!=e.pending;){if("$"===t&&"\\"!=i&&'"'==e.pending){r=!0;break}i=t}return r&&n.backUp(1),t==e.pending?e.continueString=!1:e.continueString=!0,"string"}function t(t,i){var r=t.next();return"$"===r?t.match(n)?"variable-2":"variable":i.continueString?(t.backUp(1),e(t,i)):t.match(/(\s+)?\w+\(/)||t.match(/(\s+)?\w+\ \(/)?(t.backUp(1),"def"):"#"==r?(t.skipToEnd(),"comment"):"'"==r||'"'==r?(i.pending=r,e(t,i)):"("==r||")"==r?"bracket":r.match(/[0-9]/)?"number":(t.eatWhile(/[\w-]/),null)}return{startState:function(){var n={inDefinition:!1,inInclude:!1,continueString:!1,pending:!1};return n},token:function(n,e){return n.eatSpace()?null:t(n,e)}}})),n.defineMIME("text/x-cmake","cmake")}(t(142))}}]);
//# sourceMappingURL=36.6e3a3846.chunk.js.map