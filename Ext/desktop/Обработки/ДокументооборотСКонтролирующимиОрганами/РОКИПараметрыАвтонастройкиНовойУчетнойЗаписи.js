Ext.define('Обработки.ДокументооборотСКонтролирующимиОрганами.РОКИПараметрыАвтонастройкиНовойУчетнойЗаписи',
	{
	extend: 'Ext.window.Window',
	height: 336,width: 456,
	iconCls: 'bogus',
	title: 'Параметры организации',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:311px;width:456px;height:25px;',
			items:
			[
				{
					text:'Разделитель',
				},
				{
					text:'ОК',
				},
				{
					text:'Отмена',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:23px;top:200px;width:425px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:25px;top:251px;width:171px;height:44px;',
			height: 44,width: 171,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ИНН',
			style: 'position:absolute;left:74px;top:0px;width:97px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КПП',
			style: 'position:absolute;left:74px;top:25px;width:97px;height:19px;',
		},
					]
				},
			]
		},
	]
});