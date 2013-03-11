Ext.define('Отчеты.СведенияОРасходахНаПроизводствоИПродажуПродукции.ФормаВыгрузкаСведенийОЗатратах',
	{
	extend: 'Ext.window.Window',
	height: 132,width: 298,
	iconCls: 'bogus',
	title: 'Выгрузка сведений о затратах предприятия',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:106px;width:298px;height:25px;',
			items:
			[
				{
					text:'Разделитель',
				},
				{
					text:'Действие1',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Действие',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПутьКФайлуВыгрузки',
			style: 'position:absolute;left:8px;top:34px;width:282px;height:19px;',
		},
	]
});