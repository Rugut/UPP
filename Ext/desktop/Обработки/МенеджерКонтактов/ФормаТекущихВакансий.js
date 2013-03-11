Ext.define('Обработки.МенеджерКонтактов.ФормаТекущихВакансий',
	{
	extend: 'Ext.window.Window',
	height: 475,width: 600,
	iconCls: 'bogus',
	title: 'Текущие вакансии',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:600px;height:25px;',
			items:
			[
				{
					text:'Сформировать',
				},
				{
					text:'Сформировать',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Действия',
				},
				{
					text:'Действие',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаОтчета',
			style: 'position:absolute;left:106px;top:33px;width:80px;height:19px;',
		},
	]
});