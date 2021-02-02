const dtimeNums = (d, likeEu) => {
    const now = new Date();
    now.setDate(now.getDate() + d + 1);
    let dayNum = (now.getDate() < 10) ? '' : '0';
    dayNum += now.getDate();
    let monthNum = (now.getMonth() + 1 < 10) ? '' : '0';
    monthNum += now.getMonth() + 1;
    document.textContent = likeEu ? 
    (dayNum + "." + monthNum + "." + now.getFullYear()) :
    (monthNum + "." + dayNum + "." + now.getFullYear());
};