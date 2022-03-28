export const songList = () => {
    return [
        { name: 'mukabullla_1', time: '12:23' },
        { name: 'mukabullla_2', time: '15:23' },
        { name: 'mukabullla_3', time: '17:23' },
        { name: 'mukabullla_4', time: '13:23' },
        { name: 'mukabullla_5', time: '12:23' },
    ];
}

export const selectedSong = (selectedSong=null,action) => {
    if(action.type==='SELECTSONG'){
        return selectedSong = action.payload;
    }
    return selectedSong
}