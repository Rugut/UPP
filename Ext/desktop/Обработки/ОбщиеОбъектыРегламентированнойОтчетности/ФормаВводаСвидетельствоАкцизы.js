Ext.define('Обработки.ОбщиеОбъектыРегламентированнойОтчетности.ФормаВводаСвидетельствоАкцизы',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:181px;height:83px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Свидетельство',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:58px;width:181px;height:25px;',
			items:
			[
				{
					text:'Действие1',
				},
				{
					text:'ОК',
				},
				'-',
				'-',
				{
					text:'Закрыть',
				},
			]
		},
		{
			xtype: 'label',
			name: 'Надпись5',
			text: 'Серия:',
			style: 'position:absolute;left:8px;top:7px;width:42px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СвидСерия',
			style: 'position:absolute;left:60px;top:7px;width:32px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись6',
			text: 'Номер:',
			style: 'position:absolute;left:8px;top:31px;width:46px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СвидНомер',
			style: 'position:absolute;left:60px;top:31px;width:113px;height:19px;',
		},
	]
});