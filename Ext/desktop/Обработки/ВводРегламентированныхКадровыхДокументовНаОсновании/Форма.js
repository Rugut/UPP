Ext.define('Обработки.ВводРегламентированныхКадровыхДокументовНаОсновании.Форма',
	{
	extend: 'Ext.window.Window',
	height: 262,width: 400,
	iconCls: 'bogus',
	title: 'Ввод на основании',
	
	items:
	[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДокументОснование',
			style: 'position:absolute;left:73px;top:4px;width:319px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:28px;width:384px;height:24px;',
			items:
			[
				{
					text:'СнятьФлажки',
				},
				{
					text:'Обновить',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'УстановитьФлажки',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:52px;width:384px;height:177px;',
			height: 177,width: 384,
			columns:
			[
				{
					text:'Отметка',
				},
				{
					text:'Организация',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:237px;width:400px;height:25px;',
			items:
			[
				{
					text:'Разделитель1',
				},
				{
					text:'Выполнить',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Закрыть',
				},
				{
					text:'Действие',
				},
			]
		},
	]
});