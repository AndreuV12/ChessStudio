
let data = {
    config: "config",
    cont: {
        D4: {
            move: { from: "D2", to: "D4" },
            config: "config",
            cont: {
                D5: {
                    move: { from: "D7", to: "D5" },
                    config: "config",
                },
                D6: {
                    move: { from: "D7", to: "D6" },
                    config: "config",
                    cont:{
                        D5 : {
                            move: { from: "D4", to: "D4" },
                            config: "config",
                        }
                    }
                }
            }
        },

        E4: {
            move: { from: "E2", to: "E4" },
            config: "config",
        }
    }
}

let option2 = {
    config: "config",
    D4: {
        move: { from: "D2", to: "D4" },
        config: "config",
        D5: {

        },

        D6: {

        }


    }
}