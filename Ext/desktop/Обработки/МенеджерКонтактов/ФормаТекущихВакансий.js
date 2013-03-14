Ext.define('Обработки.МенеджерКонтактов.ФормаТекущихВакансий',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:600px;height:475px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
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
				'-',
				{
					text:'Закрыть',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаОтчета',
			style: 'position:absolute;left:106px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Вакансии на дату:',
			style: 'position:absolute;left:8px;top:33px;width:96px;height:19px;',
		},
	]
});