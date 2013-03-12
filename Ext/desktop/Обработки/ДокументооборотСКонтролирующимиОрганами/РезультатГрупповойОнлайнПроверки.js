Ext.define('Обработки.ДокументооборотСКонтролирующимиОрганами.РезультатГрупповойОнлайнПроверки',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:759px;height:341px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Результаты проверки',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:316px;width:759px;height:25px;',
			items:
			[
				{
					text:'Закрыть',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:8px;width:743px;height:300px;',
			height: 300,width: 743,
			columns:
			[
				{
					text:'Документ',
					width:'271',
				},
				{
					text:'Тип документа',
					width:'91',
				},
				{
					text:'Результат',
					width:'182',
				},
				{
					text:'Дополнительно',
					width:'139',
				},
				{
					text:'Имя файла отчета',
					width:'100',
				},
				{
					text:'Результат проверки стр',
					width:'100',
				},
				{
					text:'Тип протокола',
					width:'100',
				},
				{
					text:'Протокол',
					width:'100',
				},
				{
					text:'Исходное имя файла протокола',
					width:'100',
				},
				{
					text:'Полное имя файла выгрузки',
					width:'100',
				},
			]
		},
	]
});