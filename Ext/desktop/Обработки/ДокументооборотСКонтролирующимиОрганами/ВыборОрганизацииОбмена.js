Ext.define('Обработки.ДокументооборотСКонтролирующимиОрганами.ВыборОрганизацииОбмена',
	{
	extend: 'Ext.window.Window',
	height: 343,width: 491,
	iconCls: 'bogus',
	title: 'Выберите организации',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:37px;width:475px;height:24px;',
			items:
			[
				{
					text:'СнятьФлажки',
				},
				{
					text:'Разделитель',
				},
				{
					text:'УстановитьФлажки',
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
					text:'Спарвка',
				},
				{
					text:'Разделитель1',
				},
			]
		},
	]
});