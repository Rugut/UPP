Ext.define('Отчеты.ИсторияИзмененийОбъектов.ФормаОтчета',
	{
	extend: 'Ext.window.Window',
	height: 389,width: 485,
	iconCls: 'bogus',
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
					text:'НомерВерсии',
				},
				{
					text:'ДатаВерсии',
				},
				{
					text:'АвторВерсии',
				},
			]
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
					text:'ДействиеОбновитьСписокВерсий',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'ДействиеОтчетПоИзменениям',
				},
				{
					text:'ДействиеПоказатьОбъект',
				},
				{
					text:'Действие1',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Разделитель1',
				},
			]
		},
	]
});