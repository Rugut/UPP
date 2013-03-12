Ext.define('Обработки.МенеджерКонтактов.ФормаОткрытияВложений',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:194px;height:76px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Открыть/сохранить вложение',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:51px;width:194px;height:25px;',
			items:
			[
				'-',
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