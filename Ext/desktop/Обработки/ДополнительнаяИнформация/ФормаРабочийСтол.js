Ext.define('Обработки.ДополнительнаяИнформация.ФормаРабочийСтол',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:400px;height:292px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Дополнительная информация',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:400px;height:25px;',
			items:
			[
				{
					text:'Действие1',
				},
				{
					text:'Действие',
				},
				'-',
			]
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Показывать при начале работы программы',
			style: 'position:absolute;left:133px;top:4px;width:241px;height:15px;',
		},
	]
});