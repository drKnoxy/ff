{
    console.clear();

    const COLOR_TABLE = {
        'RB': { background: '#E6E2AF' },
        'WR': { background: '#A7A37E' },
        'TE': { background: '#046380', color: 'white' },
        'QB': { background: '#67654E', color: 'white' },
        'D':  { background: '#002F2F', color: 'white' },
        'K' : { background: '#EFECCA' },
    };
    const n = document.querySelectorAll('.table td:nth-child(3)');
    [...n].forEach((el) => {

        const t = el.innerText
        let colors = {};

        Object.keys(COLOR_TABLE).forEach(k => {
            if (t.startsWith(k)) {
                colors = COLOR_TABLE[k];      
            }
        });

        el.style.background = colors.background;
        if (colors.color) el.style.color = colors.color;

    });
}
