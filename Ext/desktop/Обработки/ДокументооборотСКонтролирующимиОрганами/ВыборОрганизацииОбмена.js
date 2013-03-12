Ext.define('Обработки.ДокументооборотСКонтролирующимиОрганами.ВыборОрганизацииОбмена',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:491px;height:343px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Выберите организации',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:37px;width:475px;height:24px;',
			items:
			[
				{
					text:'Снять флажки',
				},
				'-',
				{
					text:'Установить флажки',
				},
				{
					text:'Открыть',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:491px;height:25px;',
			items:
			[
				{
					text:'Выбрать',
				},
				{
					text:'Открыть справку',
				},
				'-',
			]
		},
	]
});