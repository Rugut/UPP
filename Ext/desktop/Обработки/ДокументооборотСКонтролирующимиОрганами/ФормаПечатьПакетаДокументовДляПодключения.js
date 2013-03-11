Ext.define('Обработки.ДокументооборотСКонтролирующимиОрганами.ФормаПечатьПакетаДокументовДляПодключения',
	{
	extend: 'Ext.window.Window',
	height: 201,width: 216,
	iconCls: 'bogus',
	title: 'Печать пакета документов',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:176px;width:216px;height:25px;',
			items:
			[
				{
					text:'Разделитель',
				},
				{
					text:'Отмена',
				},
				{
					text:'ОК',
				},
			]
		},
	]
});