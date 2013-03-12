Ext.define('Отчеты.ИсторияИзмененийОбъектов.ФормаОтчета',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:485px;height:389px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'История изменений объектов',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:56px;width:469px;height:105px;',
			height: 105,width: 469,
			columns:
			[
				{
					text:'№',
					width:'45',
				},
				{
					text:'Дата',
					width:'119',
				},
				{
					text:'Автор изменений',
					width:'189',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьОбъект',
			text: 'Объект:',
			style: 'position:absolute;left:8px;top:32px;width:43px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СсылкаНаОбъект',
			style: 'position:absolute;left:52px;top:32px;width:425px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:485px;height:25px;',
			items:
			[
				{
					text:'Обновить список версий',
				},
				'-',
				{
					text:'Сравнить версии',
				},
				{
					text:'Показать версию',
				},
				{
					text:'Справка',
				},
				'-',
				'-',
			]
		},
	]
});