jQuery(document).ready(function(){var $box=jQuery(&#39;.post&#39;),$bar=jQuery(&#39;a.bar_view&#39;);$dat=jQuery(&#39;a.dat_view&#39;);$dat.click(function(){$box.removeClass(&quot;bar&quot;);jQuery(this).addClass(&#39;active&#39;);$bar.removeClass(&#39;active&#39;);jQuery.cookie(&#39;dat_style&#39;,0);return false});$bar.click(function(){$box.addClass(&quot;bar&quot;);jQuery(this).addClass(&#39;active&#39;);$dat.removeClass(&#39;active&#39;);jQuery.cookie(&#39;dat_style&#39;,1);return false});if(jQuery.cookie(&#39;dat_style&#39;)==0){$box.removeClass(&quot;bar&quot;);$dat.addClass(&#39;active&#39;)}else{$box.addClass(&quot;bar&quot;);$bar.addClass(&#39;active&#39;)}});
