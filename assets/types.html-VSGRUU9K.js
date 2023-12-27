import{_ as t,r as o,o as p,c as r,a as s,d as n,w as l,b as a,e as c}from"./app-UtSJ3GIW.js";const i={},d=s("h1",{id:"types",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#types","aria-hidden":"true"},"#"),a(" Types")],-1),D=s("p",null,"This section outlines all the builtin types in the Blizzard Programming Language.",-1),u={class:"table-of-contents"},h=c(`<h2 id="numeric-types" tabindex="-1"><a class="header-anchor" href="#numeric-types" aria-hidden="true">#</a> Numeric Types</h2><h3 id="int" tabindex="-1"><a class="header-anchor" href="#int" aria-hidden="true">#</a> <code>int</code></h3><p>A signed 32 bit integer value from -2,147,483,648 to 2,147,483,647.</p><div class="language-bzz" data-ext="bzz"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#569CD6;">int</span><span style="color:#D4D4D4;"> age = </span><span style="color:#B5CEA8;">17</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"><span style="color:#569CD6;">int</span><span style="color:#D4D4D4;"> id = </span><span style="color:#B5CEA8;">31232142</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"><span style="color:#569CD6;">int</span><span style="color:#D4D4D4;"> num = </span><span style="color:#B5CEA8;">-32</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"></span></code></pre></div><h3 id="dec" tabindex="-1"><a class="header-anchor" href="#dec" aria-hidden="true">#</a> <code>dec</code></h3><p>A signed 64 bit floating point value with ~15-17 digits of precision from -1.79769313486232<em>e</em>308 to 1.79769313486232<em>e</em>308.</p><div class="language-bzz" data-ext="bzz"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#569CD6;">dec</span><span style="color:#D4D4D4;"> price = </span><span style="color:#B5CEA8;">312.99</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"><span style="color:#569CD6;">dec</span><span style="color:#D4D4D4;"> pi = </span><span style="color:#B5CEA8;">3.1415926535</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"><span style="color:#569CD6;">dec</span><span style="color:#D4D4D4;"> temperature = </span><span style="color:#B5CEA8;">-12.5</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"></span></code></pre></div><h2 id="character-types" tabindex="-1"><a class="header-anchor" href="#character-types" aria-hidden="true">#</a> Character Types</h2><h3 id="str" tabindex="-1"><a class="header-anchor" href="#str" aria-hidden="true">#</a> <code>str</code></h3><p>A dynamically sized string that can contain any characters. Contents must be wrapped in double quotation marks <code>&quot;</code>. It is not ended by a null-terminator.</p><div class="language-bzz" data-ext="bzz"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#569CD6;">str</span><span style="color:#D4D4D4;"> name = </span><span style="color:#CE9178;">&quot;John Smith&quot;</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"><span style="color:#569CD6;">str</span><span style="color:#D4D4D4;"> title = </span><span style="color:#CE9178;">&quot;101 Dalmations&quot;</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"><span style="color:#569CD6;">str</span><span style="color:#D4D4D4;"> spam = </span><span style="color:#CE9178;">&quot;ldaf^klj90&amp;3jj JL*8)@#)❄️!!!&quot;</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"></span></code></pre></div>`,11);function y(m,_){const e=o("router-link");return p(),r("div",null,[d,D,s("nav",u,[s("ul",null,[s("li",null,[n(e,{to:"#numeric-types"},{default:l(()=>[a("Numeric Types")]),_:1}),s("ul",null,[s("li",null,[n(e,{to:"#int"},{default:l(()=>[a("int")]),_:1})]),s("li",null,[n(e,{to:"#dec"},{default:l(()=>[a("dec")]),_:1})])])]),s("li",null,[n(e,{to:"#character-types"},{default:l(()=>[a("Character Types")]),_:1}),s("ul",null,[s("li",null,[n(e,{to:"#str"},{default:l(()=>[a("str")]),_:1})])])])])]),h])}const f=t(i,[["render",y],["__file","types.html.vue"]]);export{f as default};
