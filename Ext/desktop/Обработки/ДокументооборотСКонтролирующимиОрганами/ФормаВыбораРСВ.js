Ext.define('Обработки.ДокументооборотСКонтролирующимиОрганами.ФормаВыбораРСВ',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:588px;height:410px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Выбор расчета по страховым взносам',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:385px;width:588px;height:25px;',
			items:
			[
				{
					text:'Удалить привязку',
				},
				'-',
				{
					text:'Выбрать',
				},
				'-',
				{
					text:'Отмена',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:8px;width:572px;height:369px;',
			height: 369,width: 572,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница РСВ',
					items:
					[
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'В соответствии с требованиями Пенсионного фонда Российской Федерации представление файлов отчетности в электронной форме по страховым взносам и персонифицированному учету с 1 апреля 2011 года, включая отчетность за первый квартал 2011 года, в обязательном порядке осуществляется одновременно и одним отправлением.

Выберите соответствующий расчет по страховым взносам, который будет отправлен вместе с отчетностью по персонифицированному отчету.',
			style: 'position:absolute;left:0px;top:0px;width:572px;height:94px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:105px;width:572px;height:25px;',
			items:
			[
				{
					text:'Открыть',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:130px;width:572px;height:239px;',
			height: 239,width: 572,
			columns:
			[
				{
					text:'',
					width:'21',
				},
				{
					text:'Наименование отчета',
					width:'186',
				},
				{
					text:'Период',
					width:'120',
				},
				{
					text:'Комментарий',
					width:'220',
				},
			]
		},
					]
				},
			]
		},
	]
});