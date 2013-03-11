Ext.define('Обработки.ДокументооборотСКонтролирующимиОрганами.НастройкиГрупповойПечати534',
	{
	extend: 'Ext.window.Window',
	height: 202,width: 275,
	iconCls: 'bogus',
	title: 'Настройки печати',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:177px;width:275px;height:25px;',
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
	]
});