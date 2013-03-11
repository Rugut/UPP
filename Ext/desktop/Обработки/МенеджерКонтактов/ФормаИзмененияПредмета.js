Ext.define('Обработки.МенеджерКонтактов.ФормаИзмененияПредмета',
	{
	extend: 'Ext.window.Window',
	height: 60,width: 400,
	iconCls: 'bogus',
	title: 'Укажите новый предмет',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:35px;width:400px;height:25px;',
			items:
			[
				{
					text:'Отмена',
				},
				{
					text:'ОК',
				},
				{
					text:'Разделитель',
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