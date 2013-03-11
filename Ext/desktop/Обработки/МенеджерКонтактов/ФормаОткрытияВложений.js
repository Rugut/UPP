Ext.define('Обработки.МенеджерКонтактов.ФормаОткрытияВложений',
	{
	extend: 'Ext.window.Window',
	height: 76,width: 194,
	iconCls: 'bogus',
	title: 'Открыть/сохранить вложение',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:51px;width:194px;height:25px;',
			items:
			[
				{
					text:'Действие',
				},
				{
					text:'ОК',
				},
				{
					text:'Отмена',
				},
			]
		},
	]
});