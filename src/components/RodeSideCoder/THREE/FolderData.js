const explorer = {
    name: "root",
    isFolder: true,
    items: [
        {
            name: "public",
            isFolder: true,
            items: [
                {
                    name: "public nested one",
                    isFolder: true,
                    items: [
                        {
                            name: "index_1",
                            isFolder: false,
                        },
                        {
                            name: "index_2",
                            isFolder: false,
                        }
                    ]
                },

              
            ]
        },
        {
            name: "public two",
            isFolder: false,
        }
    ]
}
export default explorer;