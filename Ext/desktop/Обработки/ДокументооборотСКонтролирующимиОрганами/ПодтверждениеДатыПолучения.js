Ext.define('Обработки.ДокументооборотСКонтролирующимиОрганами.ПодтверждениеДатыПолучения',
	{
	extend: 'Ext.window.Window',
	height: 111,width: 583,
	iconCls: 'bogus',
	title: 'Подтверждение даты получения',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:86px;width:583px;height:25px;',
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
			style: 'position:absolute;left:173px;top:34px;width:402px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ИмяПоступившегоФайла',
			style: 'position:absolute;left:173px;top:59px;width:402px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаОтправки',
			style: 'position:absolute;left:173px;top:8px;width:402px;height:19px;',
		},
	]
});