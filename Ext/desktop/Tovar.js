/*!
 * Ext JS Library 4.0
 * Copyright(c) 2006-2011 Sencha Inc.
 * licensing@sencha.com
 * http://www.sencha.com/license
 */

Ext.define('MyDesktop.Tovar', {
    extend: 'Ext.ux.desktop.Module',

    requires: [
        'Ext.data.ArrayStore',
        'Ext.util.Format',
        'Ext.grid.Panel',
        'Ext.grid.RowNumberer'
    ],

    id:'tovar-win',

    init : function(){
        this.launcher = {
            text: 'Grid Window',
            iconCls:'icon-grid'
        };
    },

    createWindow: function () {
        alert('Hi Tovar');
        var desktop = this.app.getDesktop();
        var win = desktop.getWindow('grid-win');
        if(!win){
            win = desktop.createWindow({
                id: 'grid-win',
                title:'Grid Window',
                width:740,
                height:480,
                iconCls: 'icon-grid',
                animCollapse:false,
                constrainHeader:true,
                layout: 'fit',
                items: [
                    Ext.create('Ext.Button', {
                        text: 'Click me',
                        renderTo: Ext.getBody(),
                        handler: function() {
                            alert('You clicked the button!');
                        }
                    }),

                    {
                        border: false,
                        xtype: 'grid',
                        store: new Ext.data.ArrayStore({
                            fields: [
                               { name: 'company' },
                               { name: 'price', type: 'float' },
                               { name: 'change', type: 'float' },
                               { name: 'pctChange', type: 'float' }
                            ],
                            data: MyDesktop.GridWindow.getDummyData()
                        }),
                        columns: [
                            new Ext.grid.RowNumberer(),
                            {
                                text: "Company",
                                flex: 1,
                                sortable: true,
                                dataIndex: 'company'
                            },
                            {
                                text: "Price",
                                width: 70,
                                sortable: true,
                                renderer: Ext.util.Format.usMoney,
                                dataIndex: 'price'
                            },
                            {
                                text: "Change",
                                width: 70,
                                sortable: true,
                                dataIndex: 'change'
                            },
                            {
                                text: "% Change",
                                width: 70,
                                sortable: true,
                                dataIndex: 'pctChange'
                            }
                        ]
                    }
                ],
                tbar:[{
                    text:'Add Something',
                    tooltip:'Add a new row',
                    iconCls:'add'
                }, '-', {
                    text:'Options',
                    tooltip:'Modify options',
                    iconCls:'option'
                },'-',{
                    text:'Remove Something',
                    tooltip:'Remove the selected item',
                    iconCls:'remove'
                }]
            });
        }
        return win;
    },

    statics: {
        getDummyData: function () {
            return [
                ['3m Co',71.72,0.02,0.03,'9/1 12:00am'],
                ['Alcoa Inc',29.01,0.42,1.47,'9/1 12:00am'],
                ['American Express Company',52.55,0.01,0.02,'9/1 12:00am']
            ];
        }
    }
});

