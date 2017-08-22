console.clear();
{
    const positions = ['WR', 'RB', 'TE', 'QB', 'DST', 'K'];
    const collection = {
        RB:  [],
        WR:  [],
        TE:  [],
        QB:  [],
        DST: [],
        K:   [],
    };
    const tr = [...document.querySelectorAll('.player-table tr')];
    tr.forEach((r, i) => {
        if (i === 0) return;

        const td = [...r.querySelectorAll('td')];
        const draftPosition = td[0].innerText;
        const playerName = td[1].querySelectorAll('a')[0].innerText;
        const pos = td[2].innerText;
        collection[pos][draftPosition] = `(${draftPosition}) ${playerName}`;
    })

    let out = [];

    // Define our chunks; rows in sheet
    const max = tr.length -1;
    for(let i = 0; i < max; i += 10) {        
        // Add headers
        if (i === 0) {
            out.push(positions.join("\t"));
        }
        const rank = i+1;
        if (rank > 21) {
            const cells = getValues(i)
            out.push(cells.join("\t"));
        } else {
            const cells1 = getValues(rank, 5)
            out.push(cells1.join("\t"));
            const cells2 = getValues(rank+5, 5);
            out.push(cells2.join("\t"));
        }
    }
    copy(out.join("\n"));

    function getValues(from, count = 10) {
        return positions.map(pos => {
            const cell = collection[pos].slice(from, from + count).filter(v => v.trim().length).join("\n").trim();
            return cell.trim().length ? `"${cell}"` : ''  
        })
    }
}
