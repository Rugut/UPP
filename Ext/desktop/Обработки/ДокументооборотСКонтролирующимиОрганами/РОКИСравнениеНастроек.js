Ext.define('Обработки.ДокументооборотСКонтролирующимиОрганами.РОКИСравнениеНастроек',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:646px;height:77px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Сравнение настроек',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:52px;width:646px;height:25px;',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'ОК',
				},
			]
		},
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Текущее значение:',
			style: 'position:absolute;left:8px;top:8px;width:104px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'СтароеЗначение',
			text: '',
			style: 'position:absolute;left:126px;top:8px;width:512px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'Надпись3',
			text: 'Новое значение:',
			style: 'position:absolute;left:8px;top:29px;width:104px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НовоеЗначение',
			text: '',
			style: 'position:absolute;left:126px;top:29px;width:512px;height:15px;',
		},
	]
});