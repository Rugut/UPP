Ext.define('Справочники.Бюджеты.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:322px;height:210px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Бюджеты',
	
	items:
	[
		{
			xtype: 'label',
			name: 'НадписьНаименование',
			text: 'Наименование:',
			style: 'position:absolute;left:8px;top:33px;width:84px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:94px;top:33px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьЗаголовок',
			text: 'Заголовок:',
			style: 'position:absolute;left:8px;top:57px;width:84px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Заголовок',
			style: 'position:absolute;left:94px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьТипБюджета',
			text: 'Тип бюджета:',
			style: 'position:absolute;left:8px;top:81px;width:84px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ТипБюджета',
			style: 'position:absolute;left:94px;top:81px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКомментарий',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:105px;width:84px;height:19px;',
		},
		{
			xtype: 'textarea',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:94px;top:105px;width:220px;height:72px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:322px;height:25px;',
			items:
			[
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:185px;width:322px;height:25px;',
			items:
			[
				{
					text:'Записать',
				},
				{
					text:'Закрыть',
				},
				'-',
				{
					text:'OK',
				},
				'-',
			]
		},
	]
});