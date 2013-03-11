Ext.define('Обработки.ДокументооборотСКонтролирующимиОрганами.НастройкиГрупповойОбработки',
	{
	extend: 'Ext.window.Window',
	height: 395,width: 534,
	iconCls: 'bogus',
	title: 'Параметры групповой обработки',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:370px;width:534px;height:25px;',
			items:
			[
				{
					text:'Разделитель',
				},
				{
					text:'ПриступитьКОбработке',
				},
				{
					text:'Отмена',
				},
			]
		},
	]
});