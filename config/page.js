module.exports = {
    

    nav: [
        {
            name:'实时态势展示',
            page:'map'
        },
        {
            name:'装备状态监控',
            page:'egroup',
            childpage: [
                {
                    name: '单装状态监控',
                    page: 'right2',
                    threepage: [
                        {
                            name:'动力分系统',
                            page:'power',
                        },
                        {
                            name:'传动分系统',
                            page:'drive',
                        },
                        {
                            name:'液压分系统',
                            page:'hyd',
                        },
                        {
                            name:'火控分系统',
                            page:'firecontrol',
                        },
                        {
                            name:'炮控分系统',
                            page:'guncontrol',
                        },
                        {
                            name:'观瞄分系统',
                            page:'sight',
                        },
                        {
                            name:'武器分系统',
                            page:'arms',
                        },
                        {
                            name:'通信分系统',
                            page:'comm',
                        },
                                    
                        {
                            name:'电气分系统',
                            page:'electric',
                        }
                                    
                    ]
                }
            ]
        }
    ],
    tab:[
        {
            name:'平时监控',
            page:'right2'
        },{
            name:'战时监控',
            page:'right3'
        }
    ]
    
    

};
