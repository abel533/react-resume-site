(this["webpackJsonpreact-resume-site"]=this["webpackJsonpreact-resume-site"]||[]).push([[114],{795:function(e,t,n){!function(e){"use strict";e.defineMode("vbscript",(function(e,t){var n="error";function r(e){return new RegExp("^(("+e.join(")|(")+"))\\b","i")}var a=new RegExp("^[\\+\\-\\*/&\\\\\\^<>=]"),i=new RegExp("^((<>)|(<=)|(>=))"),o=new RegExp("^[\\.,]"),c=new RegExp("^[\\(\\)]"),s=new RegExp("^[A-Za-z][_A-Za-z0-9]*"),b=["class","sub","select","while","if","function","property","with","for"],u=["else","elseif","case"],l=["next","loop","wend"],v=r(["and","or","not","xor","is","mod","eqv","imp"]),d=["dim","redim","then","until","randomize","byval","byref","new","property","exit","in","const","private","public","get","set","let","stop","on error resume next","on error goto 0","option explicit","call","me"],m=["true","false","nothing","empty","null"],p=["abs","array","asc","atn","cbool","cbyte","ccur","cdate","cdbl","chr","cint","clng","cos","csng","cstr","date","dateadd","datediff","datepart","dateserial","datevalue","day","escape","eval","execute","exp","filter","formatcurrency","formatdatetime","formatnumber","formatpercent","getlocale","getobject","getref","hex","hour","inputbox","instr","instrrev","int","fix","isarray","isdate","isempty","isnull","isnumeric","isobject","join","lbound","lcase","left","len","loadpicture","log","ltrim","rtrim","trim","maths","mid","minute","month","monthname","msgbox","now","oct","replace","rgb","right","rnd","round","scriptengine","scriptenginebuildversion","scriptenginemajorversion","scriptengineminorversion","second","setlocale","sgn","sin","space","split","sqr","strcomp","string","strreverse","tan","time","timer","timeserial","timevalue","typename","ubound","ucase","unescape","vartype","weekday","weekdayname","year"],h=["vbBlack","vbRed","vbGreen","vbYellow","vbBlue","vbMagenta","vbCyan","vbWhite","vbBinaryCompare","vbTextCompare","vbSunday","vbMonday","vbTuesday","vbWednesday","vbThursday","vbFriday","vbSaturday","vbUseSystemDayOfWeek","vbFirstJan1","vbFirstFourDays","vbFirstFullWeek","vbGeneralDate","vbLongDate","vbShortDate","vbLongTime","vbShortTime","vbObjectError","vbOKOnly","vbOKCancel","vbAbortRetryIgnore","vbYesNoCancel","vbYesNo","vbRetryCancel","vbCritical","vbQuestion","vbExclamation","vbInformation","vbDefaultButton1","vbDefaultButton2","vbDefaultButton3","vbDefaultButton4","vbApplicationModal","vbSystemModal","vbOK","vbCancel","vbAbort","vbRetry","vbIgnore","vbYes","vbNo","vbCr","VbCrLf","vbFormFeed","vbLf","vbNewLine","vbNullChar","vbNullString","vbTab","vbVerticalTab","vbUseDefault","vbTrue","vbFalse","vbEmpty","vbNull","vbInteger","vbLong","vbSingle","vbDouble","vbCurrency","vbDate","vbString","vbObject","vbError","vbBoolean","vbVariant","vbDataObject","vbDecimal","vbByte","vbArray"],f=["WScript","err","debug","RegExp"],y=["server","response","request","session","application"],g=["buffer","cachecontrol","charset","contenttype","expires","expiresabsolute","isclientconnected","pics","status","clientcertificate","cookies","form","querystring","servervariables","totalbytes","contents","staticobjects","codepage","lcid","sessionid","timeout","scripttimeout"],x=["addheader","appendtolog","binarywrite","end","flush","redirect","binaryread","remove","removeall","lock","unlock","abandon","getlasterror","htmlencode","mappath","transfer","urlencode"],k=["clear","execute","raise","replace","test","write","writeline","close","open","state","eof","update","addnew","end","createobject","quit"].concat(["description","firstindex","global","helpcontext","helpfile","ignorecase","length","number","pattern","source","value","count"]);f=f.concat(h),e.isASP&&(f=f.concat(y),k=k.concat(x,g));var w=r(d),I=r(m),C=r(p),L=r(f),E=r(k),D='"',S=r(b),T=r(u),O=r(l),z=r(["end"]),F=r(["do"]),R=r(["on error resume next","exit"]),j=r(["rem"]);function B(e,t){t.currentIndent++}function A(e,t){t.currentIndent--}function M(e,t){if(e.eatSpace())return"space";if("'"===e.peek())return e.skipToEnd(),"comment";if(e.match(j))return e.skipToEnd(),"comment";if(e.match(/^((&H)|(&O))?[0-9\.]/i,!1)&&!e.match(/^((&H)|(&O))?[0-9\.]+[a-z_]/i,!1)){var r=!1;if((e.match(/^\d*\.\d+/i)||e.match(/^\d+\.\d*/)||e.match(/^\.\d+/))&&(r=!0),r)return e.eat(/J/i),"number";var b=!1;if(e.match(/^&H[0-9a-f]+/i)||e.match(/^&O[0-7]+/i)?b=!0:e.match(/^[1-9]\d*F?/)?(e.eat(/J/i),b=!0):e.match(/^0(?![\dx])/i)&&(b=!0),b)return e.eat(/L/i),"number"}return e.match(D)?(t.tokenize=N(e.current()),t.tokenize(e,t)):e.match(i)||e.match(a)||e.match(v)?"operator":e.match(o)?null:e.match(c)?"bracket":e.match(R)?(t.doInCurrentLine=!0,"keyword"):e.match(F)?(B(e,t),t.doInCurrentLine=!0,"keyword"):e.match(S)?(t.doInCurrentLine?t.doInCurrentLine=!1:B(e,t),"keyword"):e.match(T)?"keyword":e.match(z)?(A(e,t),A(e,t),"keyword"):e.match(O)?(t.doInCurrentLine?t.doInCurrentLine=!1:A(e,t),"keyword"):e.match(w)?"keyword":e.match(I)?"atom":e.match(E)?"variable-2":e.match(C)?"builtin":e.match(L)?"variable-2":e.match(s)?"variable":(e.next(),n)}function N(e){var r=1==e.length,a="string";return function(i,o){for(;!i.eol();){if(i.eatWhile(/[^'"]/),i.match(e))return o.tokenize=M,a;i.eat(/['"]/)}if(r){if(t.singleLineStringErrors)return n;o.tokenize=M}return a}}function W(e,t){var r=t.tokenize(e,t),a=e.current();return"."===a?(r=t.tokenize(e,t),a=e.current(),!r||"variable"!==r.substr(0,8)&&"builtin"!==r&&"keyword"!==r?n:("builtin"!==r&&"keyword"!==r||(r="variable"),k.indexOf(a.substr(1))>-1&&(r="variable-2"),r)):r}return{electricChars:"dDpPtTfFeE ",startState:function(){return{tokenize:M,lastToken:null,currentIndent:0,nextLineIndent:0,doInCurrentLine:!1,ignoreKeyword:!1}},token:function(e,t){e.sol()&&(t.currentIndent+=t.nextLineIndent,t.nextLineIndent=0,t.doInCurrentLine=0);var n=W(e,t);return t.lastToken={style:n,content:e.current()},"space"===n&&(n=null),n},indent:function(t,n){var r=n.replace(/^\s+|\s+$/g,"");return r.match(O)||r.match(z)||r.match(T)?e.indentUnit*(t.currentIndent-1):t.currentIndent<0?0:t.currentIndent*e.indentUnit}}})),e.defineMIME("text/vbscript","vbscript")}(n(142))}}]);
//# sourceMappingURL=114.c5b63506.chunk.js.map