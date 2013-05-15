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
			xtype: 'itemselector',
			style: 'position:absolute;left:8px;top:61px;width:475px;height:271px;',
		},
		{
			xtype: 'fieldset',
			title: '',
			style: 'position:absolute;left:8px;top:35px;width:475px;height:3px;',
		},
	],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:37px;width:475px;height:24px;',
			dock: 'top',
			items:
			[
				{
					text:'Установить флажки',
				},
				{
					text:'Снять флажки',
				},
				'-',
				{
					text:'Открыть',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:491px;height:25px;',
			dock: 'top',
			items:
			[
				{
					text:'Выбрать',
				},
				'-',
				{
					text:'Открыть справку',
				},
			]
		},
	]
});