Ext.define('Обработки.МенеджерКонтактов.ФормаИзмененияПредмета',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:400px;height:60px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Укажите новый предмет',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:35px;width:400px;height:25px;',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'ОК',
				},
				'-',
				{
					text:'Отмена',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Предмет',
			style: 'position:absolute;left:8px;top:8px;width:384px;height:19px;',
		},
	]
});