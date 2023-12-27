import{_ as l,r as t,o as p,c,a as s,d as e,w as o,b as n,e as i}from"./app-UtSJ3GIW.js";const r={},d=s("h1",{id:"comments",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#comments","aria-hidden":"true"},"#"),n(" Comments")],-1),u=s("p",null,[n("This section outlines all the builtin comments in the Blizzard Programming Language. Comments are ignored by Blizzard allowing you to write notes for other people about what your code does. Any code that is commented "),s("strong",null,"will not"),n(" be executed.")],-1),m={class:"table-of-contents"},h=i(`<h3 id="inline" tabindex="-1"><a class="header-anchor" href="#inline" aria-hidden="true">#</a> Inline <code>//</code></h3><p>Inline comments are preceded by 2 forward slashes <code>//</code> and continue until the end of the line.</p><div class="language-bzz" data-ext="bzz"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#569CD6;">str</span><span style="color:#D4D4D4;"> name = </span><span style="color:#CE9178;">&quot;John Smith&quot;</span><span style="color:#D4D4D4;">; </span><span style="color:#6A9955;">// Keep track of the person&#39;s name</span></span>
<span class="line"><span style="color:#6A9955;">// Do math</span></span>
<span class="line"><span style="color:#569CD6;">int</span><span style="color:#D4D4D4;"> num = </span><span style="color:#B5CEA8;">35</span><span style="color:#D4D4D4;"> + </span><span style="color:#B5CEA8;">16</span><span style="color:#D4D4D4;"> - </span><span style="color:#B5CEA8;">4</span><span style="color:#D4D4D4;"> * </span><span style="color:#B5CEA8;">2</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">// WRITELN(&quot;This won&#39;t be run since it is commented out.&quot;);</span></span>
<span class="line"><span style="color:#6A9955;">// WRITELN(&quot;It is a useful way to edit code without deleting your work.&quot;);</span></span>
<span class="line"></span></code></pre></div><h3 id="multiline" tabindex="-1"><a class="header-anchor" href="#multiline" aria-hidden="true">#</a> Multiline <code>/* */</code></h3><p>Multiline comments are preceded by a forward slash and an asterisk <code>/*</code> and are terminated with an asterisk and a forward slash <code>*/</code>. All contents inside of the <code>/* */</code> pairs are comments.</p><div class="language-bzz" data-ext="bzz"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#6A9955;">/* This is a comment</span></span>
<span class="line"><span style="color:#6A9955;">that takes</span></span>
<span class="line"><span style="color:#6A9955;">multiple lines */</span></span>
<span class="line"><span style="color:#DCDCAA;">WRITELN</span><span style="color:#D4D4D4;">(</span><span style="color:#CE9178;">&quot;There is a comment above me!&quot;</span><span style="color:#D4D4D4;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">/*</span></span>
<span class="line"><span style="color:#6A9955;"> * This is the general format for writing a multiline</span></span>
<span class="line"><span style="color:#6A9955;"> * comment. The extra asterisks are not required, but</span></span>
<span class="line"><span style="color:#6A9955;"> * it is a widely used format because it looks nicer.</span></span>
<span class="line"><span style="color:#6A9955;"> */</span></span>
<span class="line"><span style="color:#DCDCAA;">WRITELN</span><span style="color:#D4D4D4;">(</span><span style="color:#CE9178;">&quot;There is a nice looking comment above me!&quot;</span><span style="color:#D4D4D4;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">/*</span></span>
<span class="line"><span style="color:#6A9955;">WRITE(&quot;If there is a lot of code you want to change, &quot;);</span></span>
<span class="line"><span style="color:#6A9955;">WRITE(&quot;but you don&#39;t wan&#39;t to put an inline comment &quot;);</span></span>
<span class="line"><span style="color:#6A9955;">WRITE(&quot;before every line, you can wrap it all with &quot;);</span></span>
<span class="line"><span style="color:#6A9955;">WRITE(&quot;a multiline comment to save time.&quot;);</span></span>
<span class="line"><span style="color:#6A9955;">*/</span></span>
<span class="line"></span></code></pre></div>`,6);function y(D,A){const a=t("router-link");return p(),c("div",null,[d,u,s("nav",m,[s("ul",null,[s("li",null,[e(a,{to:"#inline"},{default:o(()=>[n("Inline //")]),_:1})]),s("li",null,[e(a,{to:"#multiline"},{default:o(()=>[n("Multiline /* */")]),_:1})])])]),h])}const b=l(r,[["render",y],["__file","comments.html.vue"]]);export{b as default};
