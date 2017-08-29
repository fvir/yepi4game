function displayFlash(src, width, height) {
	
document.write('<object id=FlashGame classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=7,0,19,0" width="' + width + '" height="' + height + '">');
	
document.write('<param name="movie" value="' + src + '">');
	
document.write('<param name="quality" value="high">');

document.write('<param name="wmode" value="transparent"> ');
	
document.write('<param name="AllowScriptAccess" value="never">');
	
document.write('<param name="allownetworking" value="internal">');
	
document.write('<embed src="' + src + '" quality="high" pluginspage="http://www.macromedia.com/shockwave/download/index.cgi?P1_Prod_Version=ShockwaveFlash" AllowScriptAccess="never" allownetworking="internal" type="application/x-shockwave-flash" width="' + width + '" height="' + height + '" menu="0" class="FlashGame" wmode="transparent"></embed>');
	
document.write('</object>');
}



function displayDirector(src, width, height) {
	

document.write('<object id=FlashGame classid="clsid:166B1BCA-3F9C-11CF-8075-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/director/sw.cab#version=7,0,2,0" width="' + width + '" height="' + height + '">');
	

document.write('<param name="swRemote" value="swSaveEnabled=\'true\' swVolume=\'true\' swRestart=\'true\' swPausePlay=\'true\' swFastForward=\'true\' swContextMenu=\'true\'">');

document.write('<param name="wmode" value="transparent"> ');	

document.write('<param name="swStretchStyle" value="meet">');
	
document.write('<param name="bgColor" value="#000000">');
	
document.write('<param name="src" value="' + src + '">');
	
document.write('<embed src="' + src + '" width="' + width + '" height="' + height + '" bgColor="#000000" swRemote="swSaveEnabled=\'true\' swVolume=\'true\' swRestart=\'true\' swPausePlay=\'true\' swFastForward=\'true\' swContextMenu=\'true\'" swStretchStyle="meet" type="application/x-director" pluginspage="http://www.macromedia.com/shockwave/download/" class="FlashGame" wmode="transparent"></embed>');
	

document.write('</object>');
}



function displayIFrame(src, width, height) {
	
document.write('<iframe src="' + src + '" height="' + height + '" width="' + width + '"></iframe>');
}



function displayWindow(src, thumb, title, width, height) {
	
document.write('<table>');
	
document.write('<tr>');
	
document.write('<td align="right" width="190">');
	
document.write('<a href="' + src + '" target="_blank"><img src="' + thumb + '" id="y8logo" height="135" width="180" /></a>');
	document.write('</td>');
	
document.write('<td align="left" width="190">');
	
document.write('<a href="' + src + '" target="_blank"><font size="4">Click here to play<br /><b>' + title + '</b></font></a>');
	
document.write('</td>');
	
document.write('</tr>');
	
document.write('</table>');
}



function displayFlashVars(src, width, height, flashvars) {
	
document.write('<object id=FlashGame classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=7,0,19,0" width="' + width + '" height="' + height + '">');
	
document.write('<param name="movie" value="' + src + '">');
	
document.write('<param name="quality" value="high">');

document.write('<param name="wmode" value="transparent"> ');
	
document.write('<param name="flashVars" value="' + flashvars + '">');
	
document.write('<embed src="' + src + '" quality="high" pluginspage="http://www.macromedia.com/shockwave/download/index.cgi?P1_Prod_Version=ShockwaveFlash" type="application/x-shockwave-flash" width="' + width + '" height="' + height + '" menu="0" flashVars="' + flashvars + '" class="FlashGame" wmode="transparent"></embed>');
	
document.write('</object>');
}
