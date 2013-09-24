Ext.require(['Данные.Обработки.ОбщиеОбъектыРегламентированнойОтчетности'], function () 
{
	Ext.define('Обработки.ОбщиеОбъектыРегламентированнойОтчетности.ФормаВводаСвидетельствоАкцизы',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:181px;height:83px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Свидетельство',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'label',
			name: 'Надпись5',
			text: 'Серия:',
			style: 'position:absolute;left:8px;top:7px;width:42px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'СвидСерия',
			width: 32,
			height: 19,
			style: 'position:absolute;left:60px;top:7px;width:32px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись6',
			text: 'Номер:',
			style: 'position:absolute;left:8px;top:31px;width:46px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'СвидНомер',
			width: 113,
			height: 19,
			style: 'position:absolute;left:60px;top:31px;width:113px;height:19px;',
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:58px;width:181px;height:25px;',
			width: 181,
			height: 25,
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'ОК',
					tooltip:'',
				},
				'-',
				{
					text:'Закрыть',
					tooltip:'Закрыть',
					iconCls:'x-Close',
					handler: function () {this.up('window').close();},
				},
				'-',
				{
					text:'Действие1',
					tooltip:'Открыть справку',
				},
			]
		},
	]
	});
});