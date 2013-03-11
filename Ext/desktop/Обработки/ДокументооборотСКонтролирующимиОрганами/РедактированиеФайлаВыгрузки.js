Ext.define('Обработки.ДокументооборотСКонтролирующимиОрганами.РедактированиеФайлаВыгрузки',
	{
	extend: 'Ext.window.Window',
	height: 453,width: 701,
	iconCls: 'bogus',
	title: 'Редактирование файла выгрузки',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:428px;width:701px;height:25px;',
			items:
			[
				{
					text:'Разделитель',
				},
				{
					text:'Закрыть',
				},
				{
					text:'ОК',
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
			name: 'Текст',
			style: 'position:absolute;left:8px;top:38px;width:685px;height:382px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ИмяФайла',
			style: 'position:absolute;left:77px;top:10px;width:616px;height:19px;',
		},
	]
});