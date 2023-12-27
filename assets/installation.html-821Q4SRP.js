import{_ as o,r as s,o as i,c as r,a as e,b as t,d as l,e as n}from"./app-UtSJ3GIW.js";const d={},c=e("h1",{id:"installation",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#installation","aria-hidden":"true"},"#"),t(" Installation")],-1),h=e("h2",{id:"download",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#download","aria-hidden":"true"},"#"),t(" Download")],-1),u={href:"https://github.com/BlizzardLang/Blizzard_Installer/releases/latest",target:"_blank",rel:"noopener noreferrer"},p=e("code",null,"Assets",-1),y=n('<details class="custom-container details"><summary>Downloading the appropriate zip file for your OS</summary><p>You will first need to know your Operating System and its Architecture to determine which file to download. On Windows this can be found in <code>Settings &gt; System &gt; About</code>. On Linux and Mac this can be found by typing <code>uname -m</code> into a terminal.</p><table><thead><tr><th style="text-align:left;">OS</th><th style="text-align:left;">Architecture</th><th style="text-align:left;">File</th></tr></thead><tbody><tr><td style="text-align:left;">Linux</td><td style="text-align:left;">arm</td><td style="text-align:left;">BlizzardInstaller_linux-arm.zip</td></tr><tr><td style="text-align:left;">Linux</td><td style="text-align:left;">x64</td><td style="text-align:left;">BlizzardInstaller_linux-x64.zip</td></tr><tr><td style="text-align:left;">Mac</td><td style="text-align:left;">x64</td><td style="text-align:left;">BlizzardInstaller_osx-x64.zip</td></tr><tr><td style="text-align:left;">Windows</td><td style="text-align:left;">arm x64</td><td style="text-align:left;">BlizzardInstaller_win-arm-x64.zip</td></tr><tr><td style="text-align:left;">Windows</td><td style="text-align:left;">arm</td><td style="text-align:left;">BlizzardInstaller_win-arm.zip</td></tr><tr><td style="text-align:left;">Windows</td><td style="text-align:left;">x64</td><td style="text-align:left;">BlizzardInstaller_win-x64.zip</td></tr><tr><td style="text-align:left;">Windows</td><td style="text-align:left;">x32</td><td style="text-align:left;">BlizzardInstaller_win-x86.zip</td></tr></tbody></table></details><h2 id="post-download" tabindex="-1"><a class="header-anchor" href="#post-download" aria-hidden="true">#</a> Post-Download</h2><p>The installer files come in a zip file, therefore you must extract them before you can use them. If you don&#39;t know how to extract zip files, we suggest you search for <code>extract zip file &lt;your OS&gt;</code> and follow a tutorial.</p><p>Once you have unzipped the files, you can technically run the Blizzard Installer. To make things easier for you later on however, we suggest you move the files to another location and add that folder to PATH. The recommended location for the files is in the home directory in a folder called <code>Blizzard</code>. On Windows the path would be <code>C:\\Users\\&lt;you&gt;\\Blizzard</code>. On Linux and Mac the path would be <code>~/Blizzard</code>.</p><p>Once you have downloaded the installer files and placed them in the directory where you wish to install Blizzard, run the <code>BlizzardInstaller.exe</code> file (Windows) or the <code>BlizzardInstaller</code> file (Linux and Mac). This will fetch the latest release of the Blizzard Programming Language Runtime and install the files to the current directory. After the download finishes, your runtime should be ready to use!</p>',5),f={class:"custom-container details"},g=n(`<summary>Troubleshooting Installer Issues</summary><p>If you are getting errors while trying to run the installer, you can run the installer from a terminal and provide some special arguments. Open a terminal to the location of the installer and run the following command.</p><div class="language-bat" data-ext="bat"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#D4D4D4;">BlizzardInstaller --target latest -v</span></span>
<span class="line"></span></code></pre></div>`,3),z={href:"https://github.com/BlizzardLang/Blizzard_Installer/issues/new?labels=help%20wanted&title=Issue%20Installing%20Blizzard%20Runtime",target:"_blank",rel:"noopener noreferrer"},m=n(`<p>To let you run Blizzard code more easily, we suggest adding the folder to PATH. This will allow you to run Blizzard code from anywhere, and avoid typing <code>C:\\Users\\&lt;you&gt;\\Blizzard\\Blizzard.exe</code> in favor of simply typing <code>Blizzard</code>. Search <code>add folder to path &lt;your OS&gt;</code> and follow a tutorial to add the folder where your Blizzard installation resides.</p><h2 id="check-correct-installation" tabindex="-1"><a class="header-anchor" href="#check-correct-installation" aria-hidden="true">#</a> Check Correct Installation</h2><p>To double check that Blizzard is installed correctly, open a terminal and navigate to the Grammar folder inside where your Blizzard installation is located. You can do this using the <code>cd</code> command.</p><div class="language-bat" data-ext="bat"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#D4D4D4;">Windows: </span><span style="color:#569CD6;">cd</span><span style="color:#D4D4D4;"> C:\\Users\\&lt;you&gt;\\Blizzard\\Grammar</span></span>
<span class="line"><span style="color:#D4D4D4;">Linux/Mac: </span><span style="color:#569CD6;">cd</span><span style="color:#D4D4D4;"> ~/Blizzard/Grammar</span></span>
<span class="line"></span></code></pre></div><p>We can now make sure Blizzard is working by typing</p><div class="language-bat" data-ext="bat"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#D4D4D4;">Blizzard run example.bzz</span></span>
<span class="line"></span></code></pre></div>`,6),x={class:"custom-container tip"},w=e("p",{class:"custom-container-title"},"Follow Up",-1),b={href:"https://github.com/BlizzardLang/Blizzard/issues/new?labels=help%20wanted&title=Problem%20Installing%20Blizzard",target:"_blank",rel:"noopener noreferrer"};function _(B,v){const a=s("ExternalLinkIcon");return i(),r("div",null,[c,h,e("p",null,[t("To simplify the Blizzard installation process, we have made an installer that will download all the required assets for you. The latest release of the installer can be found "),e("a",u,[t("here"),l(a)]),t(". The files can be found by scrolling down the release page to the "),p,t(" section. Make sure you download the correct file for your OS.")]),y,e("details",f,[g,e("p",null,[t("This specifies to download the latest target version of the Blizzard Runtime and give verbose output including full error messages. If the error message is not enough to help you diagnose the issue, please submit a new issue "),e("a",z,[t("here"),l(a)]),t(" and give us as many relevant details as you can (eg. OS type, architecture, file path, error message).")])]),m,e("div",x,[w,e("p",null,[t("If you get an output about John and money, Blizzard is successfully installed and you can skip to the next page! If you get an error, there is a problem with your installation and you might have missed one or more steps. If you cannot figure out why Blizzard is not working from the given error, please submit a new issue "),e("a",b,[t("here"),l(a)]),t(" and give us as many relevant details as you can (eg. OS type, architecture, file path, error message).")])])])}const I=o(d,[["render",_],["__file","installation.html.vue"]]);export{I as default};