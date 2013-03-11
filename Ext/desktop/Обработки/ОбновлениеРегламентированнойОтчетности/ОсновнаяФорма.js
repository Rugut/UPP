Ext.define('Обработки.ОбновлениеРегламентированнойОтчетности.ОсновнаяФорма',
	{
	extend: 'Ext.window.Window',
	height: 83,width: 400,
	iconCls: 'bogus',
	title: 'Обновление регламентированной отчетности',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:58px;width:400px;height:25px;',
			items:
			[
				{
					text:'Разделитель',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие1',
				},
			]
		},
	]
});