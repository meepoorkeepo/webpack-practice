
export function menu() {
    
const menutitle = document.createElement('h1');
menutitle.textContent = 'The Menu';
content.append(menutitle);
menutitle.style.textAlign = 'center';
menutitle.style.color = 'blue';
const menu = document.createElement('div');
menu.className = 'menu';
menu.style.border ='solid';
menu.style.height = '80vh';
content.append(menu);
// breakfast
const breakfast = document.createElement('div');
breakfast.innerHTML = '<h3>breakfast</h3><br><ul><li>HOT BREAD	      ₦700.00</li><li>BOILED YAM	    ₦800.00</li><li>OMELETTE	      ₦1,050.00</li><li>SCRAMBLED EGGS  ₦1,050.00</li></ul>'
breakfast.style.border ='solid';
breakfast.style.height = '30vh';
breakfast.style.width = '30vh';
menu.append(breakfast);
// swalows
const swalows = document.createElement('div');
swalows.innerHTML = '<h3>Swallows</h3><br><ul><li>EBA ₦400.00</li><li>SEMOVITA	₦400.00</li><li>AMALA	₦400.00</li><li>POUNDED YAM	₦700.00</li></ul>'
swalows.style.border ='solid';
swalows.style.height = '30vh';
swalows.style.width = '30vh';
menu.append(swalows);
// pastries
const pasteries = document.createElement('div');
pasteries.innerHTML = '<h3>Pastries</h3><br><ul><li>JAM DOUGHNUT	₦500.00</li><li>SCOTCH EGG	₦600.00</li><li>SAUSAGE-ROLL WITH SATIS	₦650.00</li><li>HOT BREAD	₦700.00</li></ul>'
pasteries.style.border ='solid';
pasteries.style.height = '30vh';
pasteries.style.width = '30vh';
menu.append(pasteries);
// soups
const soup = document.createElement('div');
soup.innerHTML = '<h3>Soups</h3><br><ul><li>OKRO SOUP	₦600.00</li><li>EDIKAIKONG	₦1,000.00</li><li>EFO RIRO	₦1,000.00</li><li>EGUSI	₦1,000.00</li></ul>'
soup.style.border ='solid';
soup.style.height = '30vh';
soup.style.width = '30vh';
menu.append(soup);
    
}