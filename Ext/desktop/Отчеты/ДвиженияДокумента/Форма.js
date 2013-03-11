Ext.define('Отчеты.ДвиженияДокумента.Форма',
	{
	extend: 'Ext.window.Window',
	height: 514,width: 712,
	iconCls: 'bogus',
	title: 'Отчет по движениям документа',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:712px;height:25px;',
			items:
			[
				{
					text:'Разделитель',
				},
				{
					text:'СохранитьЗначения___',
				},
				{
					text:'Сформировать',
				},
				{
					text:'ВосстановитьЗначения___',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Документ',
			style: 'position:absolute;left:102px;top:33px;width:340px;height:19px;',
		},
	]
});