Ext.define('Обработки.ДокументооборотСКонтролирующимиОрганами.ФормаУниверсальнаяАвтонастройкаУчетнойЗаписи',
	{
	extend: 'Ext.window.Window',
	height: 350,width: 597,
	iconCls: 'bogus',
	title: 'Автоматическая настройка параметров учетной записи',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:325px;width:597px;height:25px;',
			items:
			[
				{
					text:'Закрыть',
				},
				{
					text:'ОК',
				},
				{
					text:'Разделитель',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СпецоператорИУЦ',
			style: 'position:absolute;left:252px;top:77px;width:337px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ИдентификаторАбонента',
			style: 'position:absolute;left:252px;top:143px;width:337px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:252px;top:197px;width:337px;height:19px;',
		},
	]
});