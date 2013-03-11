Ext.define('Обработки.ДокументооборотСКонтролирующимиОрганами.НастройкиГрупповойПечати',
	{
	extend: 'Ext.window.Window',
	height: 253,width: 230,
	iconCls: 'bogus',
	title: 'Настройки',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:228px;width:230px;height:25px;',
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