Ext.define('Обработки.МенеджерКонтактов.ФормаНастройкиПринудительнойФильтрацииПисем',
	{
	extend: 'Ext.window.Window',
	height: 226,width: 256,
	iconCls: 'bogus',
	title: 'Настройка фильтрации писем папки',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:201px;width:256px;height:25px;',
			items:
			[
				{
					text:'ОК',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Действие1',
				},
			]
		},
	]
});