Ext.define('Обработки.ДокументооборотСКонтролирующимиОрганами.ИзменениеИнтервалаАвтообменаПоУчетнойЗаписи',
	{
	extend: 'Ext.window.Window',
	height: 172,width: 404,
	iconCls: 'bogus',
	title: 'Настройка автоматического обмена',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:147px;width:404px;height:25px;',
			items:
			[
				{
					text:'ОК',
				},
				{
					text:'Отмена',
				},
				{
					text:'Разделитель',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ИнтервалАвтообмена',
			style: 'position:absolute;left:244px;top:120px;width:55px;height:19px;',
		},
	]
});