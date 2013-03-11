Ext.define('Обработки.ДокументооборотСКонтролирующимиОрганами.ПодтверждениеДатыОтправки',
	{
	extend: 'Ext.window.Window',
	height: 109,width: 583,
	iconCls: 'bogus',
	title: 'Подтверждение даты отправки',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:84px;width:583px;height:25px;',
			items:
			[
				{
					text:'Закрыть',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОрганизацияСтр',
			style: 'position:absolute;left:173px;top:57px;width:402px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ИмяПоступившегоФайла',
			style: 'position:absolute;left:173px;top:32px;width:402px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаОтправки',
			style: 'position:absolute;left:173px;top:8px;width:402px;height:19px;',
		},
	]
});