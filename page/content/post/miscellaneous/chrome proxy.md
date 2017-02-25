---
draft: true
---
start putty and tunnel ssh over port 8080

"C:\Program Files (x86)\Google\Chrome\Application\chrome.exe" --proxy-server="socks5://localhost:8080" --proxy-pac-url="file:///home/foobar/tmp/myscript.js"



"C:\Program Files (x86)\Google\Chrome\Application\chrome.exe" --proxy-pac-url="file:///C:/Users/2107/Documents/chrome-pac.js"

see if pac scripts has been loaded
chrome://net-internals/

if you have made changes use the re-apply button
chrome://net-internals/#proxy



proxy script

function FindProxyForURL(url, host) {
  if( dnsDomainIs(host, ".tiberiumalliances.com") ||
      dnsDomainIs(host, ".commandandconquer.com") ||
      dnsDomainIs(host, "cncopt.com") ||
      dnsDomainIs(host, "youtube.com") ||
      dnsDomainIs(host, "live.com") ||
      dnsDomainIs(host, "outlook.com") ||
      dnsDomainIs(host, "icloud.com") ||
      dnsDomainIs(host, "archlinux.org") ||
      dnsDomainIs(host, "facebook.com") ||
      dnsDomainIs(host, "kde.org") ||
      dnsDomainIs(host, "guidescroll.com")) {
    return "SOCKS5 localhost:6666";
  }

  return "DIRECT";
}
